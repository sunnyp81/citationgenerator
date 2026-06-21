// Build-time worked-example generator. Turns a source type's placeholder fields into a
// real CSL-JSON reference and renders it in a style, so every page ships static, accurate,
// crawlable example citations (no JS needed to see them).
import { renderCitation } from './engine.js';
import { loadStyleXml, localeXml } from './csl.js';

function parseAuthors(raw) {
  if (!raw) return undefined;
  return raw.split(/;| and /i).map((s) => s.trim()).filter(Boolean).map((p) =>
    p.includes(',') ? (() => { const [family, given] = p.split(',').map((x) => x.trim()); return given ? { family, given } : { family }; })() : { literal: p });
}
function parseDate(raw) {
  if (!raw) return undefined;
  const parts = String(raw).split(/[-/.]/).map((n) => parseInt(n, 10)).filter((n) => !isNaN(n));
  return parts.length ? { 'date-parts': [parts] } : { raw: String(raw) };
}

export function referenceFromPlaceholders(source) {
  const ref = { type: source.cslType };
  for (const f of source.exampleFields) {
    if (!f.placeholder) continue;
    if (f.cslField === 'author') ref.author = parseAuthors(f.placeholder);
    else if (f.cslField === 'issued') ref.issued = parseDate(f.placeholder);
    else if (f.cslField === 'accessed') ref.accessed = parseDate(f.placeholder);
    else ref[f.cslField] = f.placeholder;
  }
  return ref;
}

/** Render a static worked example for one style + source. Returns null on failure (never breaks build). */
export async function workedExample(style, source) {
  try {
    const xml = await loadStyleXml(style.cslFile);
    const ref = referenceFromPlaceholders(source);
    const res = renderCitation(ref, xml, localeXml);
    return { source, ...res };
  } catch (e) {
    return null;
  }
}

export async function workedExamplesForStyle(style, sources) {
  const out = [];
  for (const s of sources) {
    const ex = await workedExample(style, s);
    if (ex) out.push(ex);
  }
  return out;
}
