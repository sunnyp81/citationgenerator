// Isomorphic citation engine. Runs at build time (Astro frontmatter, for static worked
// examples) and in the browser (the live tool). Wraps citeproc-js + official CSL styles.
import CSL from 'citeproc';

function stripTags(html) {
  return html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

// Remove the outer csl-entry wrapper div so we can place the inner HTML in our own node.
function innerEntry(html) {
  const m = html.match(/<div[^>]*class="csl-entry"[^>]*>([\s\S]*)<\/div>/);
  return (m ? m[1] : html).trim();
}

/**
 * Render one reference in one style.
 * @param {object} reference CSL-JSON item (without id; id is added internally)
 * @param {string} styleXml  CSL style file contents
 * @param {string} localeXml en-US locale file contents
 * @returns {{referenceHtml,referenceText,inTextHtml,inTextText}}
 */
export function renderCitation(reference, styleXml, localeXml) {
  const items = { ITEM1: { ...reference, id: 'ITEM1' } };
  const sys = {
    retrieveLocale: () => localeXml,
    retrieveItem: (id) => items[id],
  };
  const engine = new CSL.Engine(sys, styleXml);
  engine.updateItems(['ITEM1']);

  const bib = engine.makeBibliography();
  const referenceHtml = innerEntry(bib[1].join('').trim());

  const cluster = engine.processCitationCluster(
    { citationItems: [{ id: 'ITEM1' }], properties: { noteIndex: 0 } },
    [],
    []
  );
  const inTextHtml = cluster[1][0][1];

  return {
    referenceHtml,
    referenceText: stripTags(referenceHtml),
    inTextHtml,
    inTextText: stripTags(inTextHtml),
  };
}

/**
 * Render a whole bibliography list (multiple references) in one style, sorted by the style rules.
 * @param {object[]} references array of CSL-JSON items
 */
export function renderBibliography(references, styleXml, localeXml) {
  const items = {};
  const ids = references.map((ref, i) => {
    const id = ref.id || `ITEM${i + 1}`;
    items[id] = { ...ref, id };
    return id;
  });
  const sys = { retrieveLocale: () => localeXml, retrieveItem: (id) => items[id] };
  const engine = new CSL.Engine(sys, styleXml);
  engine.updateItems(ids);
  const bib = engine.makeBibliography();
  return bib[1].map((entry) => ({
    html: innerEntry(entry.trim()),
    text: stripTags(entry),
  }));
}
