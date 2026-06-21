# citationgenerator.store

Free citation generator hub. Renders accurate citations in every major style from open
Citation Style Language (CSL) files via citeproc-js, fully client-side. Built to win the
low-KD niche-style wedge (AMA, ACS, IEEE, CSE, Turabian, Chicago, ASA, Bluebook, APSA,
Harvard) before the APA/MLA head terms.

## Stack
- Astro 5 (static) + Tailwind 4
- citeproc-js + official CSL styles (`src/csl/`)
- Cloudflare Pages (deploy via GitHub)

## Develop
```
npm install
npm run dev      # local dev
npm run build    # static build to dist/
npm run preview  # serve the build
```

## Architecture
- `src/data/styles.js`, `src/data/sourceTypes.js` — manifests that drive every route and link.
- `src/lib/engine.js` — citeproc wrapper (isomorphic: build-time examples + client tool).
- `src/lib/csl.js` — lazy per-style CSL loaders.
- `src/lib/autofill.js` — DOI (CrossRef), ISBN (Google Books), URL (Microlink) resolvers.
- `src/lib/bibliography.js` — localStorage bibliography + BibTeX export.
- `src/components/CitationTool.astro` + `src/scripts/citation-tool.js` — the live tool island.
- Pages: `[style]-citation-generator.astro` (hubs), `how-to-cite-[source]-in-[style].astro`
  (spokes), `guides/[slug].astro` (informational), plus tools and pillars.
- Content: `src/content/style/*.js`, `src/content/spoke/*.js`, `src/content/guides/*.js`
  hold editorial; defaults in `styleContent.js` / `spokeContent.js` keep any gap non-thin.

Adding a style or source to a manifest auto-generates its hub, spokes, and cross-links.

## Deploy (Cloudflare Pages)
- Connect the GitHub repo in the CF Pages dashboard.
- Build command: `npm run build`. Output dir: `dist`. NODE_VERSION=22.
- Set the custom domain `citationgenerator.store`.

## Topical map / strategy
See `docs/topical-map/00-master-build-manifest.md` and the design spec in
`docs/superpowers/specs/`.

## Open items before / after launch
- Affiliate program signups (Grammarly, Quetext) then swap `cg_aff=pending` hrefs in
  `src/components/AffiliateCTA.astro`.
- Ezoic account; wire real placeholder ids in `src/components/AdSlot.astro`.
- EmailIt worker endpoint for `OptinForm` + the per-style cheat-sheet PDFs.
- Expand styles: add Vancouver, NLM, MHRA CSL files to `src/csl/` + manifest entries.
