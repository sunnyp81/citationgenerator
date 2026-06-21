// Baseline content for source-type spokes, built from manifest facts so no page is thin
// before editorial lands. spokeOverrides keyed by `${styleId}:${sourceId}` replace fields.
import { spokeOverrides } from './spokeOverrides.js';

function stepFromField(f) {
  const map = {
    author: 'Enter the author or authors. Use the order shown and keep the spelling exactly as published.',
    title: 'Enter the title exactly as it appears on the source.',
    'container-title': 'Add the name of the larger work, the journal, website or platform the source sits in.',
    issued: 'Add the year, and the full date where the style needs it.',
    URL: 'Paste the full URL so readers can find the exact source.',
    DOI: 'Add the DOI if the source has one. It is the most stable link to the work.',
    publisher: 'Name the publisher responsible for the source.',
    page: 'Give the page range you used.',
  };
  return map[f.cslField] || `Add the ${f.label.toLowerCase()}.`;
}

function defaultSpoke(style, source, example) {
  return {
    answer: `To cite ${source.label === 'ChatGPT' ? 'ChatGPT' : 'a ' + source.label.toLowerCase()} in ${style.labelLong}, include ${source.exampleFields.filter((f) => f.required).map((f) => f.label.toLowerCase()).join(', ')} in the order ${style.label} sets out. The generator below builds the exact reference and in-text citation for you.`,
    steps: source.exampleFields.map((f) => ({ name: `Add the ${f.label.toLowerCase()}`, text: stepFromField(f) })),
    formatNote: `Below is the ${style.label} pattern for a ${source.label.toLowerCase()}, shown as a worked reference and its matching in-text citation. Swap in your own details, or use the generator to do it automatically.`,
    variations: [
      { q: `How do I cite a ${source.label.toLowerCase()} with no author in ${style.label}?`, a: `When there is no author, start the ${style.label} reference with the title, then the date. The in-text citation uses a short form of the title in place of the author name.` },
      { q: `How do I cite a ${source.label.toLowerCase()} with no date in ${style.label}?`, a: `If no date is given, ${style.label} uses an indication that the date is unknown in place of the year. Add the date you accessed the source where the style asks for it.` },
      { q: `How do I cite a ${source.label.toLowerCase()} with multiple authors in ${style.label}?`, a: `List the authors in the order they appear on the source. ${style.label} sets a point at which extra authors are shortened, so the generator applies that rule for you once you enter every name.` },
    ],
    faq: [
      { q: `What is the ${style.label} format for a ${source.label.toLowerCase()}?`, a: `A ${style.label} ${source.label.toLowerCase()} reference lists ${source.exampleFields.map((f) => f.label.toLowerCase()).join(', ')} in the ${style.label} order. See the worked example above for the exact punctuation and spacing.` },
      { q: `Is the ${style.label} ${source.label.toLowerCase()} citation generator free?`, a: `Yes. Generate as many ${style.label} citations as you need, with no account and no limit.` },
    ],
  };
}

export function getSpokeContent(style, source, example) {
  const base = defaultSpoke(style, source, example);
  const over = spokeOverrides[`${style.id}:${source.id}`] || {};
  return { ...base, ...over };
}
