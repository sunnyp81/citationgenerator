// Auto-merges per-style editorial from src/content/style/<id>.js so parallel authors never
// touch the same file. Each module: export default { id, subhead?, intro?, formatOverview?, faq? }.
const mods = import.meta.glob('./style/*.js', { eager: true });
export const overrides = {};
for (const m of Object.values(mods)) {
  const o = m.default;
  if (o && o.id) overrides[o.id] = o;
}
