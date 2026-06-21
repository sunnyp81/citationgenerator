// Isomorphic CSL asset loaders. Works at build time and in the browser.
// Each style's CSL is a separate lazy chunk so a page only ships the style it needs.
import localeXml from '../csl/locales-en-US.xml?raw';

const styleModules = import.meta.glob('../csl/*.csl', { query: '?raw', import: 'default' });

export { localeXml };

/** Load a style's CSL XML by manifest style id (cslFile without extension). */
export async function loadStyleXml(cslId) {
  const key = `../csl/${cslId}.csl`;
  const loader = styleModules[key];
  if (!loader) throw new Error(`No CSL file bundled for "${cslId}"`);
  return await loader();
}
