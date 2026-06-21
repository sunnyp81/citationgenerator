// Client island controller for <CitationTool>. Vanilla JS, no framework.
// Builds the form from the source-type manifest, resolves auto-fill, renders via citeproc.
import { styles, styleById } from '../data/styles.js';
import { sourceTypes, sourceById } from '../data/sourceTypes.js';
import { resolveIdentifier } from '../lib/autofill.js';
import { addToBibliography } from '../lib/bibliography.js';

let engineMod = null;
let cslMod = null;
async function ensureEngine() {
  if (!engineMod) engineMod = await import('../lib/engine.js');
  if (!cslMod) cslMod = await import('../lib/csl.js');
  return { ...engineMod, ...cslMod };
}

// "Smith, John A; Doe, Jane B" or "Smith, John A and Doe, Jane B" -> CSL name array
function parseAuthors(raw) {
  if (!raw) return undefined;
  return raw
    .split(/;| and /i)
    .map((s) => s.trim())
    .filter(Boolean)
    .map((person) => {
      if (person.includes(',')) {
        const [family, given] = person.split(',').map((x) => x.trim());
        return given ? { family, given } : { family };
      }
      // "World Health Organization" style -> literal (corporate author)
      return { literal: person };
    });
}

function parseDate(raw) {
  if (!raw) return undefined;
  const parts = String(raw).trim().split(/[-/.]/).map((n) => parseInt(n, 10)).filter((n) => !isNaN(n));
  if (!parts.length) return { raw: String(raw) };
  return { 'date-parts': [parts] };
}

// build CSL-JSON reference from {cslField: value} map for a given source type
function toReference(source, values) {
  const ref = { type: source.cslType };
  for (const f of source.exampleFields) {
    const v = (values[f.cslField] || '').trim();
    if (!v) continue;
    if (f.cslField === 'author') ref.author = parseAuthors(v);
    else if (f.cslField === 'issued') ref.issued = parseDate(v);
    else if (f.cslField === 'accessed') ref.accessed = parseDate(v);
    else ref[f.cslField] = v;
  }
  return ref;
}

function el(tag, attrs = {}, ...kids) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v;
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  }
  for (const kid of kids) node.append(kid?.nodeType ? kid : document.createTextNode(kid ?? ''));
  return node;
}

export function initCitationTool(root) {
  const styleId = root.dataset.defaultStyle;
  const lockStyle = root.dataset.lockStyle === 'true';
  let sourceId = root.dataset.defaultSource || 'journal-article';
  const lockSource = root.dataset.lockSource === 'true';

  const form = root.querySelector('[data-form]');
  const output = root.querySelector('[data-output]');
  const styleSelect = root.querySelector('[data-style-select]');
  const sourceSelect = root.querySelector('[data-source-select]');
  const autofillInput = root.querySelector('[data-autofill-input]');
  const autofillBtn = root.querySelector('[data-autofill-btn]');
  const autofillNote = root.querySelector('[data-autofill-note]');

  let activeStyleId = styleId;

  function buildForm() {
    const source = sourceById[sourceId];
    form.innerHTML = '';
    for (const f of source.exampleFields) {
      const id = `f_${f.cslField}`;
      const wrap = el('div', { class: 'flex flex-col gap-1' });
      wrap.append(el('label', { for: id, class: 'text-xs font-medium text-[var(--color-muted)]' },
        f.label + (f.required ? ' *' : '')));
      const input = el('input', {
        id, name: f.cslField, type: 'text', placeholder: f.placeholder,
        class: 'border border-[var(--color-line)] rounded px-2 py-1.5 text-sm focus:border-[var(--color-brand)] outline-none',
      });
      wrap.append(input);
      form.append(wrap);
    }
  }

  function collectValues() {
    const values = {};
    form.querySelectorAll('input').forEach((i) => { values[i.name] = i.value; });
    return values;
  }

  async function render() {
    const source = sourceById[sourceId];
    const values = collectValues();
    const hasRequired = source.exampleFields.filter((f) => f.required).every((f) => (values[f.cslField] || '').trim());
    if (!hasRequired) {
      output.innerHTML = '<p class="text-sm text-[var(--color-muted)]">Fill the required fields to generate your citation.</p>';
      return;
    }
    const ref = toReference(source, values);
    try {
      const { renderCitation, loadStyleXml, localeXml } = await ensureEngine();
      const style = styleById[activeStyleId];
      const styleXml = await loadStyleXml(style.cslFile);
      const res = renderCitation(ref, styleXml, localeXml);
      output.innerHTML = '';
      output.append(
        el('div', { class: 'mb-3' },
          el('div', { class: 'text-xs uppercase tracking-wide text-[var(--color-muted)] mb-1' }, 'Reference list entry'),
          (() => { const d = el('div', { class: 'citation-output bg-white border border-[var(--color-line)] rounded p-3' }); d.innerHTML = res.referenceHtml; return d; })()
        ),
        el('div', { class: 'mb-3' },
          el('div', { class: 'text-xs uppercase tracking-wide text-[var(--color-muted)] mb-1' }, 'In-text citation'),
          (() => { const d = el('div', { class: 'citation-output bg-white border border-[var(--color-line)] rounded p-3' }); d.innerHTML = res.inTextHtml; return d; })()
        ),
        el('div', { class: 'flex gap-2' },
          el('button', { type: 'button', class: 'text-sm bg-[var(--color-brand)] text-white px-3 py-1.5 rounded hover:bg-[var(--color-brand-dark)]',
            onclick: () => { navigator.clipboard?.writeText(res.referenceText); } }, 'Copy reference'),
          el('button', { type: 'button', class: 'text-sm border border-[var(--color-brand)] text-[var(--color-brand)] px-3 py-1.5 rounded hover:bg-[var(--color-brand-soft)]',
            onclick: () => { addToBibliography({ ref, styleId: activeStyleId }); flash('Added to your bibliography below.'); } }, 'Add to bibliography')
        )
      );
    } catch (err) {
      output.innerHTML = `<p class="text-sm text-red-600">Could not render this citation. Please check your fields.</p>`;
      console.error(err);
    }
  }

  function flash(msg) {
    if (!autofillNote) return;
    autofillNote.textContent = msg;
    setTimeout(() => { if (autofillNote.textContent === msg) autofillNote.textContent = ''; }, 4000);
  }

  // style selector
  if (styleSelect && !lockStyle) {
    styles.forEach((s) => styleSelect.append(el('option', { value: s.id, ...(s.id === activeStyleId ? { selected: 'selected' } : {}) }, s.labelLong)));
    styleSelect.addEventListener('change', () => { activeStyleId = styleSelect.value; render(); });
  }
  // source selector
  if (sourceSelect && !lockSource) {
    sourceTypes.forEach((s) => sourceSelect.append(el('option', { value: s.id, ...(s.id === sourceId ? { selected: 'selected' } : {}) }, s.label)));
    sourceSelect.addEventListener('change', () => { sourceId = sourceSelect.value; buildForm(); setupAutofill(); render(); });
  }

  function setupAutofill() {
    const source = sourceById[sourceId];
    const modes = source.autoFill;
    const container = autofillInput?.closest('[data-autofill]');
    if (!container) return;
    if (!modes.length) { container.style.display = 'none'; return; }
    container.style.display = '';
    autofillInput.placeholder = `Paste a ${modes.map((m) => m.toUpperCase()).join(', ')} to auto-fill`;
  }

  if (autofillBtn) {
    autofillBtn.addEventListener('click', async () => {
      const id = autofillInput.value.trim();
      if (!id) return;
      flash('Looking up...');
      try {
        const ref = await resolveIdentifier(id, sourceById[sourceId]);
        if (!ref) { flash('Could not find that. Fill the form manually.'); return; }
        // populate form
        form.querySelectorAll('input').forEach((i) => {
          const v = ref[i.name];
          if (v != null) i.value = Array.isArray(v) ? v.map((p) => p.family ? `${p.family}, ${p.given || ''}`.trim() : (p.literal || '')).join('; ')
            : (typeof v === 'object' && v['date-parts']) ? v['date-parts'][0].join('-') : String(v);
        });
        flash('Found it. Check the fields and generate.');
        render();
      } catch (e) { flash('Lookup failed. Fill the form manually.'); }
    });
  }

  form.addEventListener('input', render);
  buildForm();
  setupAutofill();
  render();
}

// auto-init every tool on the page
document.querySelectorAll('[data-citation-tool]').forEach((root) => initCitationTool(root));
