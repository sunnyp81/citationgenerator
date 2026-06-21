// localStorage-backed bibliography list. Powers the BibliographyPanel island.
const KEY = 'cg_bibliography_v1';

export function getBibliography() {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]'); }
  catch { return []; }
}

function save(list) {
  localStorage.setItem(KEY, JSON.stringify(list));
  window.dispatchEvent(new CustomEvent('cg:bib-changed', { detail: { count: list.length } }));
}

export function addToBibliography(entry) {
  const list = getBibliography();
  list.push({ ...entry, addedAt: Date.now() });
  save(list);
  return list;
}

export function removeFromBibliography(index) {
  const list = getBibliography();
  list.splice(index, 1);
  save(list);
  return list;
}

export function clearBibliography() { save([]); }

// BibTeX export (minimal, from CSL-JSON)
export function toBibTeX(list) {
  const typeMap = { 'article-journal': 'article', book: 'book', webpage: 'misc', report: 'techreport', 'motion_picture': 'misc', graphic: 'misc' };
  return list.map((item, i) => {
    const r = item.ref;
    const key = (r.author?.[0]?.family || r.author?.[0]?.literal || 'ref').replace(/\W/g, '') + (r.issued?.['date-parts']?.[0]?.[0] || i);
    const fields = [];
    if (r.author) fields.push(['author', r.author.map((a) => a.family ? `${a.family}, ${a.given || ''}`.trim() : a.literal).join(' and ')]);
    if (r.title) fields.push(['title', r.title]);
    if (r['container-title']) fields.push(['journal', r['container-title']]);
    if (r.publisher) fields.push(['publisher', r.publisher]);
    if (r.volume) fields.push(['volume', r.volume]);
    if (r.issue) fields.push(['number', r.issue]);
    if (r.page) fields.push(['pages', r.page]);
    if (r.issued?.['date-parts']) fields.push(['year', r.issued['date-parts'][0][0]]);
    if (r.DOI) fields.push(['doi', r.DOI]);
    if (r.URL) fields.push(['url', r.URL]);
    const body = fields.map(([k, v]) => `  ${k} = {${v}}`).join(',\n');
    return `@${typeMap[r.type] || 'misc'}{${key},\n${body}\n}`;
  }).join('\n\n');
}
