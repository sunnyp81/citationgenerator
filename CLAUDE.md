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
- Repo: local at `C:\Users\sunny\repos\citationgenerator` (git init done, not yet pushed).

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
