// Generates a one-page citation cheat-sheet PDF per style into public/cheat-sheets/.
// Content is rendered from the real citeproc engine, so every example is accurate.
// Run: node scripts/gen-cheatsheets.mjs
import PDFDocument from 'pdfkit';
import { createWriteStream, mkdirSync, readFileSync } from 'node:fs';
import { renderCitation } from '../src/lib/engine.js';
import { styles } from '../src/data/styles.js';
import { sourceTypes } from '../src/data/sourceTypes.js';

// inlined from examples.js (that module pulls Vite-only csl.js, unusable in plain node)
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
function referenceFromPlaceholders(source) {
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

const locale = readFileSync('src/csl/locales-en-US.xml', 'utf8');
const OUT = 'public/cheat-sheets';
mkdirSync(OUT, { recursive: true });

const INK = '#0f172a', MUTED = '#475569', BRAND = '#1d4ed8', LINE = '#e2e8f0';

for (const style of styles) {
  const styleXml = readFileSync(`src/csl/${style.cslFile}.csl`, 'utf8');
  const doc = new PDFDocument({ size: 'A4', margin: 48 });
  doc.pipe(createWriteStream(`${OUT}/${style.id}-cheat-sheet.pdf`));

  // header
  doc.fillColor(BRAND).rect(48, 44, 6, 22).fill();
  doc.fillColor(INK).font('Helvetica-Bold').fontSize(20).text(`${style.labelLong}`, 64, 44);
  doc.fillColor(MUTED).font('Helvetica').fontSize(11).text('Citation cheat sheet', 64, 70);
  doc.moveTo(48, 92).lineTo(547, 92).strokeColor(LINE).stroke();

  doc.moveDown(1.5);
  doc.fillColor(INK).font('Helvetica-Bold').fontSize(12).text('Reference list entry and in-text citation', 48);
  doc.fillColor(MUTED).font('Helvetica').fontSize(10)
    .text(`Every source needs a full reference list entry plus a short in-text citation that points to it. Below is the ${style.label} format for each common source type, with a worked example.`, { width: 499 });
  doc.moveDown(0.6);

  for (const source of sourceTypes) {
    const ref = referenceFromPlaceholders(source);
    let res;
    try { res = renderCitation(ref, styleXml, locale); } catch { continue; }
    if (doc.y > 720) doc.addPage();
    doc.fillColor(BRAND).font('Helvetica-Bold').fontSize(10.5).text(source.label.toUpperCase(), 48);
    doc.fillColor(INK).font('Helvetica').fontSize(9.5).text(res.referenceText, { width: 499 });
    doc.fillColor(MUTED).font('Helvetica-Oblique').fontSize(9).text(`In-text: ${res.inTextText}`, { width: 499 });
    doc.moveDown(0.5);
  }

  // footer
  doc.fillColor(MUTED).font('Helvetica').fontSize(8)
    .text('Generated free at citationgenerator.store. Always check author names and titles against your source.', 48, 800, { width: 499, align: 'center' });

  doc.end();
}

// generic cross-style cheat sheet (used by guide pages: magnet "citation-cheat-sheet")
{
  const popular = ['apa', 'mla', 'chicago', 'harvard', 'ieee', 'ama'].map((id) => styles.find((s) => s.id === id)).filter(Boolean);
  const journal = sourceTypes.find((s) => s.id === 'journal-article');
  const website = sourceTypes.find((s) => s.id === 'website');
  const doc = new PDFDocument({ size: 'A4', margin: 48 });
  doc.pipe(createWriteStream(`${OUT}/citation-cheat-sheet.pdf`));
  doc.fillColor(BRAND).rect(48, 44, 6, 22).fill();
  doc.fillColor(INK).font('Helvetica-Bold').fontSize(20).text('Citation Cheat Sheet', 64, 44);
  doc.fillColor(MUTED).font('Helvetica').fontSize(11).text('The most used styles at a glance', 64, 70);
  doc.moveTo(48, 92).lineTo(547, 92).strokeColor(LINE).stroke();
  doc.moveDown(1.5);
  for (const style of popular) {
    const xml = readFileSync(`src/csl/${style.cslFile}.csl`, 'utf8');
    if (doc.y > 700) doc.addPage();
    doc.fillColor(BRAND).font('Helvetica-Bold').fontSize(11).text(style.labelLong, 48);
    for (const source of [journal, website]) {
      let res; try { res = renderCitation(referenceFromPlaceholders(source), xml, locale); } catch { continue; }
      doc.fillColor(INK).font('Helvetica-Bold').fontSize(8.5).text(source.label + ':', { continued: false });
      doc.fillColor(INK).font('Helvetica').fontSize(9).text(res.referenceText, { width: 499 });
      doc.fillColor(MUTED).font('Helvetica-Oblique').fontSize(8.5).text(`In-text: ${res.inTextText}`, { width: 499 });
    }
    doc.moveDown(0.5);
  }
  doc.fillColor(MUTED).font('Helvetica').fontSize(8).text('Generated free at citationgenerator.store. Full styles and source types available on the site.', 48, 800, { width: 499, align: 'center' });
  doc.end();
}

console.log(`generated ${styles.length} style cheat sheets plus 1 generic into ${OUT}/`);
