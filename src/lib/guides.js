// Loads informational guide articles from src/content/guides/<slug>.js.
// Each module: export default { slug, title, description, h1, lead, bodyHtml, faq, downLinks }.
const mods = import.meta.glob('../content/guides/*.js', { eager: true });
export const guides = Object.values(mods).map((m) => m.default).filter((g) => g && g.slug);
export const guideBySlug = Object.fromEntries(guides.map((g) => [g.slug, g]));
