// Auto-merges per-spoke editorial from src/content/spoke/<name>.js so parallel authors never
// touch the same file. Each module: export default [ { styleId, sourceId, answer?, steps?,
// formatNote?, variations?, faq? }, ... ].
const mods = import.meta.glob('./spoke/*.js', { eager: true });
export const spokeOverrides = {};
for (const m of Object.values(mods)) {
  for (const e of m.default || []) {
    if (e && e.styleId && e.sourceId) spokeOverrides[`${e.styleId}:${e.sourceId}`] = e;
  }
}
