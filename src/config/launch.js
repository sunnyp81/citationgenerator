// Wave-publish control. Phase 1 launches the hand-crafted core (style hubs, guides, pillars,
// tools) and holds the 91 programmatic source-type spokes as noindex,follow so they pass link
// equity and stay crawlable but are not submitted until the core is indexed.
// To release spokes in batches later, replace `noindexSpokes` with a per-style/allowlist gate.
export const WAVE = {
  phase: 1,
  noindexSpokes: true,
};

// true if a spoke (style x source) should be noindexed in the current wave
export function spokeNoindex() {
  return WAVE.noindexSpokes;
}

// path predicate used by the sitemap filter to drop noindexed spokes from the sitemap
export function isSpokePath(pathname) {
  return /\/how-to-cite-.+-in-[^/]+\/?$/.test(pathname);
}
