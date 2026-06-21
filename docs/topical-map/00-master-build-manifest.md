# Master Build Manifest — citationgenerator.store

Leader synthesis of the 5 topical-map slices. This is the single index the build follows.

## The site in one paragraph
A free citation generator hub. Engine renders any style accurately from open CSL files
(citeproc-js, client-side) so correctness is free; the moat is page coverage + auto-fill UX +
topical authority. Win the low-KD niche-style wedge incumbents ignore, then expand.

## Page inventory (from slices 01-05)
| Layer | Source doc | Count | Pattern |
|---|---|---|---|
| Style tool-hubs | 01 | 34 (9 T1, 6 T2, 3 T3-defer, 16 T4-footprint) + ~9 variants | `/[style]-citation-generator` |
| Source-type spokes | 02 | ~85 phase-1 (7 mandatory sources × 11 build styles + 8 source hubs) | `/how-to-cite-a-[source]-in-[style]` |
| Informational | 03 | 66 SEED across 11 NODE clusters + ROOT | `/guides/...`, `/how-to-cite` hub |
| Adjacent tools | 04 | 13 build-free + 4 lite + 2 affiliate-gated | `/[tool].astro` |
| Templates | 05 | 5 reusable templates + 2 manifests | — |

## Tier-1 wedge build order (style hubs first — by vol÷KD, all winnable)
1. ACS — 11,650 vol / KD2
2. AMA — 23,050 vol / KD6
3. IEEE — 12,750 vol / KD4
4. CSE — 6,400 vol / KD1
5. Turabian — 6,830 vol / KD2
6. Chicago variants (manual-of-style 2.5k/KD7, author-date, footnote, turabian) — avoid KD10 head
7. ASA — 4,400 / KD4
8. Bluebook — 3,900 / KD7
9. Vancouver, NLM, APSA, Harvard, ASME — low-vol low-KD, ship for footprint

Mandatory source types per style (slice 02): website, book, journal-article, youtube, image,
pdf, chatgpt-ai. High-interest fresh-traffic sources: ChatGPT/AI (1,400 vol), image (2,200 vol).

## Monetisation (slice 04)
- Affiliate: Grammarly (site-wide), Quillbot + Quetext (paraphrase + plagiarism intent),
  paper-editing CPA (articles only). All need live content before approval.
- Ads: Ezoic from launch (placeholders below tool fold) → Mediavine at 50k sessions.
- Lead-magnet: per-style cheat-sheet PDF → EmailIt worker → student-writing product.
- Money find: `citation generator grammarly` (70/KD5/$5 CPC) + `grammarly citation generator apa`
  (100/KD0) — rankable brand-pair pages that route straight to Grammarly.

## Build phases (leader executes; subagents fan out where parallel)
1. Scaffold Astro 5 + Tailwind 4, base layout, tokens, CF Pages config.  [sequential]
2. Citation engine island (citeproc-js + CSL + locale), proven on AMA end to end.  [sequential, critical path]
3. Auto-fill adapters (DOI/ISBN/URL) + bibliography builder island.  [sequential]
4. 5 templates + `styles.ts` / `sourceTypes.ts` manifests + getStaticPaths wiring.  [sequential]
5. Content generation for Tier-1 (style overviews, spoke guides, informational).  [PARALLEL subagents]
6. Build clean + console-clean validation + sitemap/robots + push-ready.  [sequential]

## Quality gates (non-negotiable, per portfolio rules)
- No em/en dashes in rendered content.
- Every spoke has unique worked examples (no swap-the-noun) — pSEO thin-page survival.
- Inline per-page JSON-LD (SoftwareApplication / HowTo / FAQPage / Article / ItemList).
- semantic-audit ≥85 on informational content; console-clean on sample deployed pages.
- Slugs: no year, omit redundant domain words where natural.
