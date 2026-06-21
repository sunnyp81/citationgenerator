# Citation Style Universe — Generator Tool Pages

Slice owner map for **citationgenerator.store**. Scope: every citation-STYLE generator tool page (`/[style]-citation-generator`). Volumes/KD/CPC are aggregated from `data/citation-generator-keywords.tsv` (426 rows, US). No fabricated numbers.

**Aggregation rules used**
- `US vol` = sum of US volume across all keyword variants matched to the style.
- `best KD` = KD of the canonical `<style> citation generator` head term (the page we'd actually rank), not the absolute min long-tail.
- `CPC` = highest CPC observed among the style's rows (commercial signal).
- The moat is page coverage: citeproc-js + open CSL renders any style accurately at near-zero cost, so Tier 4 footprint pages are effectively free to ship.

---

## Tier summary

| Tier | Meaning | # style pages | Combined US vol |
|------|---------|--------------:|----------------:|
| **T1 WEDGE** | Launch now — real volume + low KD (≤6), incumbents underserve | 9 | ~78,000 |
| **T2 EXPAND** | Build wave 2 — moderate volume or KD 7–17 | 6 | ~11,500 |
| **T3 DEFER** | Head-term incumbent fight (APA/MLA/Chicago-head, KD high or brand-locked) | 3 | ~45,000 |
| **T4 FOOTPRINT** | No/low volume but trivially shippable from CSL — AI-search + long-tail capture | 16 | ~2,800 |

> Chicago is split: the **head** `chicago style citation generator` (KD 10, 13k) is T3, but the niche Chicago *variant* pages (author-date, footnote, Turabian, 17th ed.) are T1/T2 because KD drops to 4–7.

---

## Tier 1 — WEDGE (launch now)

Low KD, real volume, niche academic styles the big incumbents underserve. This is the launch batch.

| Style | Slug | US vol | best KD | CPC | Notes |
|-------|------|-------:|--------:|----:|-------|
| AMA | `/ama-citation-generator` | 23,050 | 6 | 3.00 | Biggest wedge. Medical/nursing. Variants: `ama format` (250, KD8), `ama 11th edition` (150, KD2), `ama style` (150). |
| IEEE | `/ieee-citation-generator` | 12,750 | 4 | 6.00 | Engineering/CS, high CPC. Head term partly branded — own the generic. Bracketed numeric style. |
| ACS | `/acs-citation-generator` | 11,650 | 2 | 4.50 | Chemistry. KD2 is a gift. "american chemical society citation generator" (100, KD2) = alias page/redirect. |
| Turabian | `/turabian-citation-generator` | 6,830 | 2 | 3.50 | Student-facing Chicago derivative. Cross-link to Chicago notes/author-date variants. |
| CSE | `/cse-citation-generator` | 6,400 | 1 | 3.50 | Biology. KD1. CBE is the old name → `/cbe-citation-generator` alias (120, KD2). |
| ASA | `/asa-citation-generator` | 4,910 | 4 | 3.00 | Sociology (American Sociological Assoc). |
| Bluebook | `/bluebook-citation-generator` | 4,320 | 3 | 2.50 | Legal. Pull in `legal citation generator` (350, KD23) + `case`/`court case` long-tail. |
| Vancouver | `/vancouver-citation-generator` | 1,080 | 3 | 3.00 | Medical/numeric (NLM-derived). Pair with NLM page. |
| APSA | `/apsa-citation-generator` | 1,390 | 0/1 | 3.50 | Political science. KD0. `american political science association` alias (150). |

**Tier 1 combined head-page volume ≈ 72k; with variant pages ≈ 78k.**

---

## Tier 2 — EXPAND (wave 2)

Moderate volume or KD 7–17. Build after Tier 1 indexes and the domain has some trust.

| Style | Slug | US vol | best KD | CPC | Notes |
|-------|------|-------:|--------:|----:|-------|
| Harvard | `/harvard-citation-generator` | 1,400 | 17 | 2.00 | Higher KD; large global (UK/AU) intent, US vol modest. Author-date. |
| NLM | `/nlm-citation-generator` | 940 | 0 | 2.00 | KD0, low vol — but real CPC. PubMed feeds it: `pubmed citation generator` (200, KD4), `jama` (150, KD1). |
| OSCOLA | `/oscola-citation-generator` | 90 | 8 | 3.00 | UK legal. Low US vol, strong UK. Build for footprint + AI. |
| Chicago (variants) | see variant section | ~5,000 | 4–7 | 2.50 | author-date, footnote, Turabian, 17th-ed pages — KD 4–7, escape the KD10 head. |
| ASME | `/asme-citation-generator` | 520 | 0 | 1.50 | Mechanical engineering. KD0. |
| AIAA | `/aiaa-citation-generator` | 400 | 0 | 2.50 | Aerospace. KD0, CPC2.5 — cheap win, borderline T1. |

---

## Tier 3 — DEFER (incumbent head-term fight)

High KD or brand-locked SERPs dominated by Scribbr/EasyBib/CitationMachine. Ship the tool (it costs nothing) but do not expect to rank the head term early; harvest via variants and AI-search instead.

| Style | Slug | US vol | best KD | CPC | Notes |
|-------|------|-------:|--------:|----:|-------|
| Chicago (head) | `/chicago-citation-generator` | 39,370 | 10 | 2.50 | Massive vol but KD10 + brand SERP. Win the niche variants first, earn the head later. |
| APA | `/apa-citation-generator` | 1,630* | 3 | 4.00 | *In-dataset vol is low because APA head terms were intentionally excluded from this pull. True head is enormous + KD high. Deferred per brief. |
| MLA | `/mla-citation-generator` | 4,410* | 1* | 4.00 | *Same — MLA head excluded; the rows here are mostly `mla 8` variant traffic (KD ~28). Deferred per brief. |

---

## Tier 4 — FOOTPRINT (no/low volume, ship from CSL)

Zero or trivial volume, but each is a real CSL file → page costs ~nothing and captures AI-search citations + ultra-long-tail. Batch-generate from a single template.

| Style | Slug | US vol | KD | Notes |
|-------|------|-------:|---:|-------|
| ACM | `/acm-citation-generator` | 340 | 0 | Computing. |
| ASM | `/asm-citation-generator` | 370 | 0 | Microbiology. |
| ASCE | `/asce-citation-generator` | 300 | 0 | Civil engineering. |
| GSA | `/gsa-citation-generator` | 210 | 0 | Geology. |
| SAA | `/saa-citation-generator` | 200 | 0 | Archaeology. |
| AAA | `/aaa-citation-generator` | 190 | 0 | Anthropology. |
| JAMA | `/jama-citation-generator` | 150 | 1 | Medical journal (AMA-derived). |
| SBL | `/sbl-citation-generator` | 150 | 40 | Biblical studies. KD high but no competitors target it. |
| JAS | `/jas-citation-generator` | 150 | 0 | Journal of Animal Science. CPC 7.00. |
| AMS | `/ams-citation-generator` | 100 | 0 | Meteorology/Math. |
| AIP | `/aip-citation-generator` | 100 | 0 | Physics. CPC 7.00. |
| ALWD | `/alwd-citation-generator` | 100 | 7 | Legal (Bluebook alt). |
| APS | `/aps-citation-generator` | 100 | 1 | Physics. |
| CBE | `/cbe-citation-generator` | 90 | 2 | Old name for CSE — canonical to CSE or alias. |
| MSSE | `/msse-citation-generator` | 60 | 0 | Sports medicine journal. |
| AP | `/ap-citation-generator` | 250 | 0 | Associated Press (journalism) — distinct from APA, build to disambiguate. |

Plus no-volume CSL-only styles to ship for completeness (no data rows; AI-footprint only): Vancouver-superscript, NLM-book, IEEE-conference, APA-6, Chicago-16th, MHRA, MHRA-footnote, RSC, ACS-numeric.

---

## Style-VARIANT pages (distinct demand in the data)

Build these as separate pages where the variant has its own real volume — they escape the high-KD head and match exact-edition intent.

### Chicago variants (head is KD10 — variants are KD 4–7)
| Variant page | Slug | US vol | KD |
|---|---|---:|---:|
| Chicago Manual of Style | `/chicago-manual-of-style-citation-generator` | 2,500 | 7 |
| Chicago Turabian | `/chicago-turabian-citation-generator` | 600 | 4 |
| Chicago footnote | `/chicago-footnote-citation-generator` | 300 | 7 |
| Chicago author-date | `/chicago-author-date-citation-generator` | 300 | 6 |
| Chicago 17th edition | `/chicago-17th-edition-citation-generator` | ~110 | 6–7 |
| Chicago notes & bibliography | (section on footnote page) | ~50 | 17 |

> Build one **author-date vs notes-bibliography** explainer + two tool tabs; map `chicago manual of style` as its own page (2.5k vol justifies it).

### MLA variants (mostly edition intent — KD high)
| Variant page | Slug | US vol | KD |
|---|---|---:|---:|
| MLA 8 | `/mla-8-citation-generator` | ~1,860 (mla 8 + mla8 + 8th ed.) | 27–29 |
| MLA 9 | `/mla-9-citation-generator` | (no rows yet — ship for footprint) | — |

### AMA variants
| Variant page | Slug | US vol | KD |
|---|---|---:|---:|
| AMA format | `/ama-format-citation-generator` (or H2 on main) | 250 | 8 |
| AMA 11th edition | `/ama-11th-edition-citation-generator` (or H2) | 250 | 2 |

> AMA edition variants are low enough to live as anchored H2 sections on the main AMA page rather than separate URLs.

### APA variants
Head deferred (T3). `apa 7` / `apa 6` edition pages: build as on-page sections, not separate URLs, until APA head is contested.

---

## Keyword modifiers (capture in titles/H1/H2 + on-page copy)

Sum of US volume where the modifier appears across all rows:

| Modifier | Vol signal | Where to use |
|---|---:|---|
| `book` (source type) | 4,940 | Source-type tabs on every style page (book/website/journal). |
| `free` | 2,270 | Title + H1: "Free [Style] Citation Generator". |
| `in-text` / `in text` | 1,340 | Dedicated in-text tab/section per style; standalone `/in-text-citation-generator` (1,100, KD0). |
| `format` | 1,260 | "[Style] Format Citation Generator" — title synonym. |
| `journal` | 150 | Source-type tab. |
| `website` | 140 | Source-type tab. |
| `tool` | 110 | Body copy. |
| `online` | 40 | Body copy synonym. |

**Other modifier families to template into titles even at zero in-dataset volume (known generic demand):** `maker` vs `generator`, `machine`, `with page numbers`, `reference generator`, `bibliography generator`. Use "generator" as primary; alias "maker"/"machine" in H2 + meta synonyms.

**Branded-comparison long-tail to absorb** (do NOT build pages — answer on-page / in FAQ): `quillbot` (1,500), `purdue owl` (900), `mybib` (350+70), `scribbr`/`scribber` (80), `noodletools` (100), `bibtex` (1,000), `chatgpt citation generator` (50). These are "tool X" seekers — capture with a comparison/alternative FAQ block.

---

## Prioritised build order — Tier 1

Sequenced by `vol ÷ KD` (return per unit of difficulty), with CSL availability assumed for all:

1. **ACS** — `/acs-citation-generator` — 11,650 vol / KD2 → highest ROI. Chemistry, near-uncontested.
2. **AMA** — `/ama-citation-generator` — 23,050 vol / KD6 → biggest absolute prize; ship with 11th-ed + format H2s.
3. **IEEE** — `/ieee-citation-generator` — 12,750 vol / KD4 → engineering/CS, high CPC 6.00.
4. **CSE** — `/cse-citation-generator` — 6,400 vol / KD1 → biology; fold CBE alias in.
5. **Turabian** — `/turabian-citation-generator` — 6,830 vol / KD2 → cross-links the Chicago variant cluster.
6. ASA — `/asa-citation-generator` — 4,910 / KD4.
7. Bluebook — `/bluebook-citation-generator` — 4,320 / KD3 (+ legal long-tail).
8. APSA — `/apsa-citation-generator` — 1,390 / KD0.
9. Vancouver — `/vancouver-citation-generator` — 1,080 / KD3 (+ NLM/PubMed cluster).

Then immediately batch-ship all Tier 4 footprint pages from the same template (one PR), since marginal cost is ~zero and they seed AI-search coverage while Tier 1 indexes.
