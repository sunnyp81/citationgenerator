# 02 — Source-Type Spokes & "How to Cite X in Y" Long-Tail

Slice owner: source-type spokes + the combinatorial `how-to-cite-a-[source]-in-[style]` long-tail.
Page pattern: `/how-to-cite-a-[source]-in-[style]` (e.g. `/how-to-cite-a-website-in-mla`). Each spoke pre-scopes the on-page generator to one source type and answers the source-specific edge-case questions.

Volumes are real (Ahrefs US): TSV ground truth = `data/citation-generator-keywords.tsv` (426 generator-intent rows); broad scrape = `Downloads/google_us_all-keywords_2026-06-21_02-06-20.csv` (~23k "generator" rows, filtered to 606 cite/citation rows). Rows with no observed volume in either file are marked **footprint/no-vol** — not fabricated.

---

## 1. Source-type universe (with keyword evidence)

Evidence columns: best generator-intent volume seen (TSV unless noted), and the broad-scrape source-bucket vol-sum / row-count. "Cited by parent" = the `parent` column in the TSV pointing here (proves the topic clusters as its own entity).

| # | Source type | Evidence (generator-intent volumes) | Broad-scrape bucket | Tier |
|---|-------------|--------------------------------------|---------------------|------|
| 1 | **Website / web page** | `ama website` 40, `chicago website` 30, `ieee website` 20, `bluebook website` 20, `turabian website` 10; broad scrape 44 rows incl. `cite a website mla generator` 50, `apa website citation generator free` 20 | 630 / 44 rows | **Mandatory** |
| 2 | **Book / textbook / e-book** | `mla book` 250, `book mla` 90, `mla citation generator book` 40, `textbook mla` 40, `ebook mla` 10, `ama book` 20, `chicago book` 20; parent `mla book citation` (TP 6,400-7,600) | 4,490 / 30 rows | **Mandatory** |
| 3 | **Journal article** | `jas` 150, `journal of animal science` 80, `journal of wildlife management` 40, `journal of neuroscience` 30 (journal-specific); generic article folds into style hubs | 430 / 18 rows | **Mandatory** |
| 4 | **YouTube video / video** | `youtube video` 150, `youtube video mla` 100, `youtube mla` 80, `mla video` 40, `video mla` 30, `mla citation generator youtube video` 30 — **parent TP 800k-1.34M** (huge SERP) | 160 / 9 rows | **Mandatory** |
| 5 | **Image / picture / photo / figure** | `image citation generator` **2,200**, `apa image` 350, `mla image` 350, `picture` 200, `image mla` 150, `mla photo` 150 + 15 more variants | 1,030 / 16 rows | **Mandatory** |
| 6 | **PDF** | broad scrape: `pdf apa` 150, `pdf mla` 100, `apa citation generator for pdf` 90, `mla citation generator for pdf` 70 (21 rows) — absent from TSV, pure how-to long-tail | 1,160 / 21 rows | **Mandatory** |
| 7 | **ChatGPT / AI** | `chatgpt citation generator` 50; broad scrape **`ai citation generator` 1,400**, `ai cite generator` 100; parent `chatgpt citation` | 1,520 / 3 rows | **Mandatory (fresh)** |
| 8 | **Podcast** | `podcast` 150, `podcast apa` 100, `apa podcast` 50, `podcast mla` 50, `mla podcast` 40 | 350 / 4 rows | Optional-high |
| 9 | **Movie / film** | `apa movie` 90, `movie citation apa` 10, `movie citation generator apa` 10; broad scrape 16 rows | 550 / 16 rows | Optional-high |
| 10 | **Court case / statute / law** | `case citation generator` 90, `court case` 70, `case law` 40, `legal case` 40, `apa court case` 30, `statute` 30, `state statute` 30, `supreme court case` 20, `law` 80 — clusters under Bluebook | 4,670 / 24 rows | Optional-high (legal styles) |
| 11 | **PowerPoint / slides / lecture** | `apa citation generator for powerpoint` 40, `powerpoint apa` 30, `apa citation generator powerpoint` 20 | 130 / 3 rows | Optional |
| 12 | **Newspaper / magazine article** | footprint/no-vol (informational parents only) | — | Optional |
| 13 | **Book chapter** | rolls into book parents; footprint/no-vol standalone | (in book bucket) | Optional |
| 14 | **Interview** | `apa interview citation generator` 10; parent `apa citation for interview` | low | Optional |
| 15 | **Encyclopedia / Wikipedia** | `wikipedia citation generator` 100 | low | Optional (fresh) |
| 16 | **Social media (tweet / TikTok / Instagram)** | `tiktok citation generator` 20; parent `how to cite an instagram post` | low | Optional (fresh) |
| 17 | **Conference paper** | footprint/no-vol | — | Optional |
| 18 | **Thesis / dissertation** | footprint/no-vol | — | Optional |
| 19 | **Government / technical report** | broad scrape 1 row vol 30 | 30 / 1 | Optional |
| 20 | **Dataset** | footprint/no-vol | — | Footprint |
| 21 | **Software / app / video game** | `video game citation generator` 40 | low | Footprint |

Other source types people cite (carry on the page's question list even without a standalone spoke): blog post, online forum post, email/personal communication, map, artwork, brochure, annual report, press release, song/album.

---

## 2. Mandatory vs optional source-type set

**Mandatory 7 (every style page must ship these spokes):**
1. Website / web page
2. Book (+ e-book / textbook / chapter variants on-page)
3. Journal article
4. YouTube video / video
5. Image / figure
6. PDF
7. ChatGPT / AI

Rationale: these are the seven highest-demand, evergreen-plus-fresh source types. They map to a real generator volume **and** a fat informational long-tail in every style, and the on-page generator can fully resolve each. This is the universal floor.

**Optional-high (ship for the styles where they cluster — gate by demand, don't blanket):**
- Podcast, Movie/film → APA, MLA, Chicago (volume concentrated there).
- Court case / statute / law → Bluebook, ALWD, OSCOLA, APA (legal/social-science styles only). This is a large bucket (4,670 vol) but legal-style-specific — do **not** build `how-to-cite-a-court-case-in-ieee`.
- PowerPoint/slides → APA primarily.

**Optional / footprint (build only on flagship APA + MLA, or as the cluster proves out):** newspaper/magazine, book chapter (standalone), interview, encyclopedia/Wikipedia, social media (tweet/TikTok/Instagram), conference paper, thesis/dissertation, government report, dataset, software/video game.

---

## 3. Style × source-type matrix logic

Rows = citation styles; columns = source types. Cell = build a spoke page `/how-to-cite-a-[col]-in-[row]`.

**Build rule per cell:**
- **Always build** if `row ∈ flagship styles {APA, MLA, Chicago, Harvard}` AND `col ∈ mandatory 7` → these are the universal cells.
- **Build** if a real volume exists for `[col]+[row]` in either dataset (e.g. `ama website` 40, `ieee website` 20, `turabian website` 10 → build website spoke for AMA/IEEE/Turabian).
- **Build** if `col` is in the optional set that *clusters* to that style (legal → Bluebook/ALWD; podcast/movie → APA/MLA/Chicago).
- **Skip** thin cells with no volume and no topical fit (e.g. AI/ChatGPT spoke for OSCOLA, court-case spoke for IEEE) — cover the answer inline on the style hub instead, don't mint a URL.

**Style tiers (from style coverage in TSV + known overall demand):**
- **Flagship (full mandatory matrix + optional-high):** APA, MLA, Chicago, Harvard. (APA/MLA show low *generator* volume in this slice because aggregator brands own those SERPs, but they carry the largest "how to cite" informational demand — the parent TPs and broad scrape confirm: PDF, image, website long-tails are dominated by `apa`/`mla` modifiers.)
- **Strong (mandatory 7):** AMA (23,210 style-vol), IEEE (12,750), ACS (11,650), Turabian (7,610), CSE (6,400), Vancouver, ASA.
- **Legal/niche (subset + legal source types):** Bluebook (4,270), ALWD, OSCOLA, APSA, NLM, MHRA — build mandatory 7 minus AI where odd, plus court/statute/law.

---

## 4. Top style × source combos by real volume

| Rank | Combo | Spoke URL | Volume signal |
|------|-------|-----------|---------------|
| 1 | **Image (generic)** | `/image-citation-generator` (source hub) | **2,200** (`image citation generator`) |
| 2 | **AI / ChatGPT (generic)** | `/ai-citation-generator` | **1,400** (`ai citation generator`) + `chatgpt` 50 |
| 3 | **YouTube video × MLA** | `/how-to-cite-a-youtube-video-in-mla` | 100 + 80 + 30 (`youtube video mla`/`youtube mla`/`mla citation generator youtube video`); parent TP 800k+ |
| 4 | Book × MLA | `/how-to-cite-a-book-in-mla` | 250 + 90 + 40 + 40 (`mla book` cluster) |
| 5 | Image × APA | `/how-to-cite-an-image-in-apa` | 350 + 90 + 60 + 40 (`apa image` cluster) |
| 6 | Image × MLA | `/how-to-cite-an-image-in-mla` | 350 + 150 + 60 + 50 (`mla image`/`image mla`/`mla photo`) |
| 7 | PDF × APA | `/how-to-cite-a-pdf-in-apa` | 150 + 100 + 100 + 90 (broad scrape PDF×apa) |
| 8 | Podcast × APA | `/how-to-cite-a-podcast-in-apa` | 100 + 50 + 20 |
| 9 | Court case (legal) | `/case-citation-generator` + `/how-to-cite-a-court-case-in-bluebook` | 90 + 70 + 40 + 30 (case cluster, 4,670 bucket) |
| 10 | PDF × MLA | `/how-to-cite-a-pdf-in-mla` | 100 + 90 + 70 + 60 |
| 11 | Website × AMA | `/how-to-cite-a-website-in-ama` | 40 (`ama website`) |
| 12 | Podcast × MLA | `/how-to-cite-a-podcast-in-mla` | 50 + 40 |

Note the two biggest single keywords (`image` 2,200, `ai` 1,400) are **source-type hubs** that should also exist as standalone `/[source]-citation-generator` pages feeding the style spokes — a useful cross-link layer with the per-style hub.

---

## 5. Question-variant checklist (every spoke must answer on-page)

Each `how-to-cite-a-[source]-in-[style]` page must visibly answer these as on-page Q&A / FAQ blocks (drives featured snippets + LLM citation + long-tail capture). Mark with FAQPage schema.

**Universal (all spokes):**
- How do you cite a [source] in [style]? (the canonical example, reference-list + in-text)
- [source] in [style] with **no author**
- [source] in [style] with **multiple authors** (2 authors / 3+ authors / et al. rule)
- [source] in [style] with **no date** / **n.d.**
- [source] in [style] **in-text citation** (parenthetical + narrative)
- [source] in [style] **with page numbers** / locating page numbers
- **Two sources, same author** (same year disambiguation: a, b, c)
- Citing a **secondary source** ("as cited in")
- Where does this go in the **reference list / works cited / bibliography**?

**Source-specific add-ons:**
- **Website/web page:** no author + no date together; organisation as author; retrieval/accessed date (when required); URL vs DOI; undated/updated pages.
- **Book:** edition number; editor vs author; **book chapter** in an edited book; translated book; **e-book** (no page numbers → location/chapter); republished work.
- **Journal article:** with **DOI** vs without; volume/issue/page range; article from a database; advance online / in-press.
- **YouTube/video:** channel/uploader as author; upload date vs original date; timestamp in in-text; verbatim title.
- **Image/figure:** image found via Google (cite the host, not Google); museum/stock; figure caption vs reference-list; copyright/attribution note; **AI-generated image**.
- **PDF:** it's about the *content type* — cite as the underlying source (report/article/book) the PDF contains; PDF with no author/date; government PDF.
- **ChatGPT/AI:** model + version (e.g. GPT-4); prompt as the title; "personal communication" vs reference-list (style-dependent); date of generation; whether the style even *permits* citing AI.
- **Podcast:** episode vs whole series; host vs producer; episode number; timestamp.
- **Court case / statute:** reporter/citation format; jurisdiction; pinpoint cites; short-form/id. references.
- **PowerPoint/lecture:** presenter; "unpublished"; course/institution; canvas/LMS retrieval.

---

## 6. Spoke page-count estimate

**Mandatory matrix (universal floor):**
- 7 mandatory source types × flagship+strong styles.
- Treat the build-worthy style set for the mandatory 7 as ~11 (APA, MLA, Chicago, Harvard, AMA, IEEE, ACS, Turabian, CSE, Vancouver, ASA).
- 7 × 11 = **77 mandatory style×source spokes.**

**Source-type hub pages (standalone, non-style-scoped):** image, AI/ChatGPT, podcast, video, PDF, website, book, court case ≈ **8 hubs.**

**Optional-high cells (cluster-gated):**
- Podcast + movie × {APA, MLA, Chicago} = 2 × 3 = 6
- Court/statute/law × {Bluebook, ALWD, OSCOLA, APSA} ≈ 3 source-forms × 4 = ~12
- PowerPoint × {APA, MLA} = 2
- Subtotal ≈ **20 optional-high.**

**Realistic phased total:**
- Phase 1 (ship now): 77 mandatory + 8 hubs = **~85 pages.**
- Phase 2 (cluster-gated optional-high): +~20 = **~105 pages.**
- Full long-tail ceiling (all 21 source types × ~17 styles, footprint cells included): ~350+ — **do not build blindly**; gate the footprint tail on demand/early-ranking signal to avoid a thin-page programmatic-SEO penalty (portfolio rule: never ship a thin-page majority into the sitemap).

**Recommendation:** ship the ~85-page Phase 1 floor, wire each spoke to its style hub and its source-type hub, then promote optional-high cells only where a real volume or early ranking appears.

---

## 7. Fresh-traffic / AI-relevance flags

Prioritise these source types — they pull trend traffic, are under-served by legacy aggregators, and directly drive LLM-citation relevance:
- **ChatGPT / AI** — `ai citation generator` 1,400 and climbing; brand-new citation rules per style, high "how do I even cite this" intent. Top fresh play. Cover the "does [style] allow citing AI / personal communication vs reference list" question explicitly.
- **YouTube / video** — parent TP 800k-1.34M; evergreen + steady volume; aggregators handle it weakly.
- **TikTok / Instagram / social media** — `tiktok` 20 but fast-growing; low competition; strong AI-answer surface.
- **Wikipedia / encyclopedia** — `wikipedia citation generator` 100; common student query.

These four are where to lead the content calendar for newness signals and AI-Overview / ChatGPT citation share.

---

### Cross-links
- Per-style hubs: `/[style]-citation-generator` (slice 01).
- Source-type hubs: `/[source]-citation-generator` (this slice — image, ai, video, pdf, podcast, book, website, case).
- Spokes: `/how-to-cite-a-[source]-in-[style]` link up to both their style hub and source hub.
