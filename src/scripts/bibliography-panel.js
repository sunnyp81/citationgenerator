import { getBibliography, removeFromBibliography, clearBibliography, toBibTeX } from '../lib/bibliography.js';
import { styleById } from '../data/styles.js';

let engineMod = null, cslMod = null;
async function ensureEngine() {
  if (!engineMod) engineMod = await import('../lib/engine.js');
  if (!cslMod) cslMod = await import('../lib/csl.js');
  return { ...engineMod, ...cslMod };
}

export function initBibliographyPanel(panel) {
  const list = panel.querySelector('[data-bib-list]');
  const empty = panel.querySelector('[data-bib-empty]');
  const count = panel.querySelector('[data-bib-count]');

  async function paint() {
    const items = getBibliography();
    count.textContent = String(items.length);
    empty.style.display = items.length ? 'none' : '';
    list.innerHTML = '';
    if (!items.length) return;
    const { renderBibliography, loadStyleXml, localeXml } = await ensureEngine();
    // group by style so each renders in its own style
    const byStyle = {};
    items.forEach((it, i) => { (byStyle[it.styleId] ||= []).push({ ...it, _i: i }); });
    for (const [styleId, entries] of Object.entries(byStyle)) {
      const style = styleById[styleId];
      try {
        const xml = await loadStyleXml(style.cslFile);
        const rendered = renderBibliography(entries.map((e) => e.ref), xml, localeXml);
        rendered.forEach((r, k) => {
          const li = document.createElement('li');
          const span = document.createElement('span');
          span.innerHTML = r.html;
          const del = document.createElement('button');
          del.type = 'button'; del.textContent = ' remove';
          del.className = 'text-xs text-red-500 ml-2';
          del.addEventListener('click', () => { removeFromBibliography(entries[k]._i); paint(); });
          li.append(span, del);
          list.append(li);
        });
      } catch (e) { console.error(e); }
    }
  }

  function confirmLabel(btn, msg) {
    const prev = btn.textContent;
    btn.textContent = msg;
    setTimeout(() => { btn.textContent = prev; }, 1500);
  }

  panel.querySelector('[data-bib-copy]').addEventListener('click', (e) => {
    const text = [...list.querySelectorAll('li span')].map((s) => s.textContent).join('\n');
    navigator.clipboard?.writeText(text);
    confirmLabel(e.currentTarget, 'Copied');
  });
  panel.querySelector('[data-bib-bibtex]').addEventListener('click', (e) => {
    const blob = new Blob([toBibTeX(getBibliography())], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = 'references.bib'; a.click();
    confirmLabel(e.currentTarget, 'Downloaded');
  });
  panel.querySelector('[data-bib-clear]').addEventListener('click', () => { clearBibliography(); paint(); });

  window.addEventListener('cg:bib-changed', paint);
  paint();
}
