# citationgenerator.store — repo brain

Project-specific memory (auto-loaded when working here). Canonical source for this site's
state, history, deploy, and warnings.

## What this is
Free citation generator hub on the exact-match domain **citationgenerator.store** (owned).
Monetisation: affiliate (Grammarly/Quetext) + ads (Ezoic to Mediavine) + email lead-magnet
to a student-writing product. Strategy: win the low-KD niche-style wedge before APA/MLA heads.

## Stack / deploy
- Astro 5 + Tailwind 4, static. citeproc-js + CSL files (`src/csl/`), all client-side.
- Deploy: GitHub to Cloudflare Pages. Build `npm run build`, output `dist`, NODE_VERSION=22.
  CF Pages project `citationgenerator` LIVE (sunnypat81 acct) — bootstrapped via wrangler
  direct-upload 2026-06-26 (`npx wrangler pages deploy dist --project-name citationgenerator
  --branch main`). LIVE at https://citationgenerator.pages.dev (200, verified). NOT yet
  git-connected and NO custom domain — Sunny: connect repo in dashboard + point
  citationgenerator.store CNAME → citationgenerator.pages.dev (proxied).
- Repo: `github.com/sunnyp81/citationgenerator` (public), branch `main`, pushed + in sync.

## Optimisation pass (2026-06-26 — 4-axis audit, applied + deployed `1720799`)
4 parallel audit agents (SEO/AEO, monetisation, performance, conversion). Applied + LIVE:
- SEO: hub titles now lead with short style label (APA 92->51 chars), shorter metas; fixed
  spoke a/an grammar; surfaced the 10 orphaned guides on `/how-to-cite` (were only linked
  from /all-pages); dropped dead WebSite SearchAction.
- Monetisation: AffiliateCTA gained Quetext `plagiarism` variant + per-block FTC/ASA
  disclosure + footer disclosure; post-citation CTA now Quetext (plagiarism intent) and
  relocated BELOW delivered value on hub/spoke; added OptinForm capture to homepage, tools,
  citation-generators, bibliography-builder, in-text-citation-generator (were zero-capture).
- Perf: memoized citeproc Engine per style in `lib/engine.js` (was `new CSL.Engine` every
  keystroke — big INP win; also cut build 43s->6s); debounced tool input 250ms; warm engine
  on first focus/idle; CLS-safe ad heights (mid 280px/footer 100px); Astro viewport prefetch.
- UX: copy/add-to-bib confirmation labels, autofill button disables during lookup, trust
  microcopy under tool, aria-labels on style/source selects, sharper opt-in value prop.
Build clean 123 pages, pushed `main`, deployed CF Pages (verified 200 + disclosure live).
NOT yet done (need Sunny/external): real affiliate IDs (still `cg_aff=pending`), Ezoic ids,
worker CORS must allow the live origin or opt-ins silently drop, git-connect + custom domain.

## State (2026-06-26 — pushed, advanced past v1)
- On GitHub, branch `main`, synced (0 ahead/behind). Commits past v1 build:
  - Launch-SEO prep: OG image, Organization schema, A-Z hub, 404 noindex (`91409e2`).
  - Wave-publish gating: spokes noindexed phase 1, sitemap trimmed to 31 core URLs (`7ed1a80`).
  - Opt-in wired to emailit-worker: AJAX POST + honeypot (`a1ae0de`).
  - Per-style cheat-sheet PDFs + instant download + autoreply delivery (`6979733`).

## State (2026-06-21 — built in one session)
- 121 pages building clean: 14 style hubs, 91 source-type spokes (13 styles x 7 sources),
  10 informational guides, 2 adjacent tools, pillars (citation-generators, how-to-cite,
  tools, about), home, 404.
- Engine proven: citeproc renders accurate citations build-time (static SEO examples) and
  client-side (live tool). 14 CSL styles bundled.
- Auto-fill: DOI (CrossRef), ISBN (Google Books), URL (Microlink). Bibliography builder +
  BibTeX export (localStorage).
- Content: 13 style editorials, 70 spoke editorials, 10 guides written by subagents. Unique
  per-page (no thin-page boilerplate). Zero em-dashes; en-dashes only in CSL page ranges.
- Inline per-page JSON-LD: SoftwareApplication / HowTo / FAQPage / Article / ItemList /
  BreadcrumbList.

## Wedge / ground truth (data/citation-generator-keywords.tsv, 426 kws)
Tier-1 winnable: ACS (11k/KD2), AMA (21k/KD6), IEEE (12k/KD4), CSE (5.9k/KD1),
Turabian (6.1k/KD2), Bluebook (3.9k/KD7), APSA (1.3k/KD0). Chicago author-date variants
escape the KD10 head. APA (KD68) / MLA (KD44) are tier-3 defer, included but not the push.

## Open items (Sunny / next session)
- Push repo to GitHub `sunnyp81/citationgenerator`, connect CF Pages, set custom domain.
- Affiliate signups (Grammarly, Quetext); swap `cg_aff=pending` in AffiliateCTA.astro.
- Ezoic account; real placeholder ids in AdSlot.astro.
- EmailIt worker endpoint + per-style cheat-sheet PDFs for OptinForm.
- Footprint expansion: add Vancouver / NLM / MHRA CSL + manifest entries (dependent-style
  resolution needed; they 404 at the styles-repo root, live under dependent/).
- Run launch-seo + index-push after deploy.

## Warnings
- Chicago CSL files are large (chicago-notes 245kb) so those pages build slower (~5s). Fine.
- CSL page-range en-dashes are CORRECT citation output, not a content-rule violation.
- Spoke pages are programmatic: keep every (style,source) editorial UNIQUE or risk thin-page
  demotion. New source types must ship genuinely distinct copy, not swap-the-noun.
