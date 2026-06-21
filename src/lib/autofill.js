// Auto-fill adapters: resolve a DOI / ISBN / URL into a CSL-JSON reference.
// All client-side, all free, no API keys. Falls back to null on any failure.

function looksLikeDOI(s) { return /^10\.\d{4,9}\//.test(s) || /doi\.org\/10\./.test(s); }
function looksLikeISBN(s) { return /^(97(8|9))?\d{9}(\d|X)$/.test(s.replace(/[-\s]/g, '')); }
function looksLikeURL(s) { return /^https?:\/\//i.test(s); }

async function fromDOI(input) {
  const doi = input.replace(/^.*doi\.org\//, '').trim();
  // CrossRef content negotiation returns clean CSL-JSON directly
  const r = await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}/transform/application/vnd.citationstyles.csl+json`);
  if (!r.ok) return null;
  const csl = await r.json();
  delete csl.id;
  return csl;
}

async function fromISBN(input) {
  const isbn = input.replace(/[-\s]/g, '');
  const r = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
  if (!r.ok) return null;
  const j = await r.json();
  const v = j.items?.[0]?.volumeInfo;
  if (!v) return null;
  return {
    type: 'book',
    title: v.title + (v.subtitle ? `: ${v.subtitle}` : ''),
    author: (v.authors || []).map((name) => {
      const parts = name.trim().split(/\s+/);
      const family = parts.pop();
      return { family, given: parts.join(' ') };
    }),
    publisher: v.publisher,
    issued: v.publishedDate ? { 'date-parts': [v.publishedDate.split('-').map(Number)] } : undefined,
    ISBN: isbn,
  };
}

async function fromURL(input) {
  // Microlink is CORS-enabled and free for low volume; returns title/author/date.
  const r = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(input)}`);
  if (!r.ok) return null;
  const j = await r.json();
  if (j.status !== 'success') return null;
  const d = j.data;
  return {
    type: 'webpage',
    title: d.title,
    author: d.author ? [{ literal: d.author }] : (d.publisher ? [{ literal: d.publisher }] : undefined),
    'container-title': d.publisher,
    URL: input,
    issued: d.date ? { 'date-parts': [new Date(d.date).toISOString().slice(0, 10).split('-').map(Number)] } : undefined,
    accessed: { 'date-parts': [new Date().toISOString().slice(0, 10).split('-').map(Number)] },
  };
}

/**
 * @param {string} input raw identifier
 * @param {object} source the SourceType (its autoFill array hints which adapters apply)
 */
export async function resolveIdentifier(input, source) {
  const s = input.trim();
  try {
    if (looksLikeDOI(s)) return await fromDOI(s);
    if (looksLikeISBN(s)) return await fromISBN(s);
    if (looksLikeURL(s)) return await fromURL(s);
  } catch (e) {
    return null;
  }
  return null;
}
