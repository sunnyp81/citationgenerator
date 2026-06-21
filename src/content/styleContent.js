// Editorial content layer for style hub pages. Default generator gives every style safe,
// non-thin baseline copy built from manifest facts; the `overrides` map holds real
// hand/agent-written editorial that replaces the default per style. getStyleContent merges.
import { styleById } from '../data/styles.js';
import { overrides } from './styleOverrides.js';

function defaultContent(style) {
  return {
    subhead: `Build accurate ${style.labelLong} references and in-text citations in seconds. Free, no account needed.`,
    intro: `<p>${style.labelLong} is the citation style used across its field to credit sources and let readers trace your evidence. This generator formats every part of a ${style.label} reference for you, the authors, title, year and source details, so the punctuation, order and capitalisation match the ${style.label} rules exactly. It runs on the open Citation Style Language standard, the same definition reference managers use, so the output is consistent with how ${style.label} is meant to look.</p>`,
    formatOverview: `<h2>${style.label} format overview</h2><p>A ${style.label} citation has two parts that work together. The reference list entry holds the full source details and sits at the end of your paper. The in-text citation is the short pointer in the body of your writing that sends readers to the matching reference. Use the generator above to produce both at once, then check them against the worked examples below for your source type.</p>`,
    faq: [
      { q: `Is this ${style.label} citation generator free?`, a: `Yes. Every citation, the reference list entry and the in-text form, is free with no sign up and no limit on how many you create.` },
      { q: `Is the ${style.label} output accurate?`, a: `The generator formats citations from the open Citation Style Language definition of ${style.label}, the same standard used by academic reference managers, so the formatting follows the published ${style.label} rules. Always proofread author names and titles, which depend on the details you enter.` },
      { q: `Can I cite a website, book and journal article in ${style.label}?`, a: `Yes. Choose the source type in the tool and the form adjusts to the fields that source needs. See the examples by source type above for the exact ${style.label} format of each.` },
      { q: `How do I add an in-text citation in ${style.label}?`, a: `The generator shows the in-text citation next to the reference. Copy it into the sentence where you use the source, and keep the full entry in your reference list.` },
    ],
  };
}

export function getStyleContent(styleId) {
  const style = styleById[styleId];
  const base = defaultContent(style);
  const over = overrides[styleId] || {};
  return { ...base, ...over, faq: over.faq || base.faq };
}
