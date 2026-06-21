// Style manifest — single source of truth for every style route + cross-link.
// kd/volume are ground truth from data/citation-generator-keywords.tsv.
// cslFile is the filename (no extension) in src/csl/. Adding an entry auto-generates
// its hub page and all its source-type spokes via getStaticPaths.

import { mandatorySourceIds } from './sourceTypes.js';

const ALL = mandatorySourceIds; // 7 mandatory source types for every academic style

export const styles = [
  {
    id: 'ama', label: 'AMA', labelLong: 'American Medical Association (AMA)',
    slug: 'ama-citation-generator', cslFile: 'ama', tier: 1, kd: 6, volume: 21000,
    blurb: 'Cite medical and scientific sources in AMA style, free.',
    sourceTypeIds: ALL, aliases: ['citation generator ama', 'ama format citation generator', 'ama style'],
    variants: [],
  },
  {
    id: 'acs', label: 'ACS', labelLong: 'American Chemical Society (ACS)',
    slug: 'acs-citation-generator', cslFile: 'acs', tier: 1, kd: 2, volume: 11000,
    blurb: 'Cite chemistry sources in ACS style, free and accurate.',
    sourceTypeIds: ALL, aliases: ['acs style citation generator'], variants: [],
  },
  {
    id: 'ieee', label: 'IEEE', labelLong: 'Institute of Electrical and Electronics Engineers (IEEE)',
    slug: 'ieee-citation-generator', cslFile: 'ieee', tier: 1, kd: 4, volume: 12000,
    blurb: 'Cite engineering and technical sources in IEEE style, free.',
    sourceTypeIds: ALL, aliases: ['ieee reference generator', 'ieee format citation generator'], variants: [],
  },
  {
    id: 'cse', label: 'CSE', labelLong: 'Council of Science Editors (CSE)',
    slug: 'cse-citation-generator', cslFile: 'cse', tier: 1, kd: 1, volume: 5900,
    blurb: 'Cite biology and science sources in CSE name-year style, free.',
    sourceTypeIds: ALL, aliases: ['cse name year citation generator'], variants: [],
  },
  {
    id: 'turabian', label: 'Turabian', labelLong: 'Turabian',
    slug: 'turabian-citation-generator', cslFile: 'turabian-author-date', tier: 1, kd: 2, volume: 6100,
    blurb: 'Cite sources in Turabian author-date style for student papers, free.',
    sourceTypeIds: ALL, aliases: ['turabian format citation generator', 'chicago turabian citation generator'],
    variants: [],
  },
  {
    id: 'chicago', label: 'Chicago', labelLong: 'Chicago Manual of Style',
    slug: 'chicago-citation-generator', cslFile: 'chicago-author-date', tier: 2, kd: 10, volume: 19000,
    blurb: 'Cite sources in Chicago style, author-date or notes-bibliography, free.',
    sourceTypeIds: ALL,
    aliases: ['chicago style citation generator', 'chicago manual of style citation generator', 'cms citation generator'],
    variants: [
      { id: 'chicago-notes', label: 'Chicago notes-bibliography', cslFile: 'chicago-notes', edition: 'notes' },
    ],
  },
  {
    id: 'asa', label: 'ASA', labelLong: 'American Sociological Association (ASA)',
    slug: 'asa-citation-generator', cslFile: 'asa', tier: 2, kd: 4, volume: 4400,
    blurb: 'Cite sociology sources in ASA style, free.',
    sourceTypeIds: ALL, aliases: ['asa format citation generator'], variants: [],
  },
  {
    id: 'bluebook', label: 'Bluebook', labelLong: 'Bluebook (legal)',
    slug: 'bluebook-citation-generator', cslFile: 'bluebook', tier: 1, kd: 7, volume: 3900,
    blurb: 'Cite legal sources in Bluebook style, free.',
    sourceTypeIds: ALL, aliases: ['bluebook legal citation generator'], variants: [],
  },
  {
    id: 'apsa', label: 'APSA', labelLong: 'American Political Science Association (APSA)',
    slug: 'apsa-citation-generator', cslFile: 'apsa', tier: 1, kd: 0, volume: 1300,
    blurb: 'Cite political science sources in APSA style, free.',
    sourceTypeIds: ALL, aliases: ['apsa format citation generator'], variants: [],
  },
  {
    id: 'harvard', label: 'Harvard', labelLong: 'Harvard',
    slug: 'harvard-citation-generator', cslFile: 'harvard', tier: 2, kd: 17, volume: 1000,
    blurb: 'Cite sources in Harvard referencing style, free.',
    sourceTypeIds: ALL, aliases: ['harvard referencing generator', 'harvard style citation generator'], variants: [],
  },
  {
    id: 'asme', label: 'ASME', labelLong: 'American Society of Mechanical Engineers (ASME)',
    slug: 'asme-citation-generator', cslFile: 'asme', tier: 3, kd: 0, volume: 500,
    blurb: 'Cite mechanical engineering sources in ASME style, free.',
    sourceTypeIds: ALL, aliases: [], variants: [],
  },
  {
    id: 'apa', label: 'APA', labelLong: 'American Psychological Association (APA 7th)',
    slug: 'apa-citation-generator', cslFile: 'apa', tier: 3, kd: 68, volume: 40000,
    blurb: 'Cite sources in APA 7th edition style, free.',
    sourceTypeIds: ALL, aliases: ['apa format generator', 'apa 7 generator'], variants: [],
  },
  {
    id: 'mla', label: 'MLA', labelLong: 'Modern Language Association (MLA 9th)',
    slug: 'mla-citation-generator', cslFile: 'mla', tier: 3, kd: 44, volume: 12000,
    blurb: 'Cite sources in MLA 9th edition style, free.',
    sourceTypeIds: ALL, aliases: ['mla 9 citation generator', 'mla format generator'], variants: [],
  },
];

export const styleById = Object.fromEntries(styles.map((s) => [s.id, s]));
export const tier1Styles = styles.filter((s) => s.tier === 1);

// the launch style x source matrix used by spoke getStaticPaths
export function styleSourcePairs() {
  const pairs = [];
  for (const style of styles) {
    for (const sid of style.sourceTypeIds) pairs.push({ style, sourceId: sid });
  }
  return pairs;
}
