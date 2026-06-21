# Topical Map — Slice 03: Informational / Question-Answering Content

**Site:** citationgenerator.store (Astro static)
**Methodology:** Koray Tugberk Gubur — ROOT → NODE → SEED, source context = "the authoritative free citation generator + reference knowledge base"
**Role of this slice:** the supporting (informational) layer that earns topical authority + AI citations and funnels users into the generator/spoke (money) pages.

## Data note (read first)

- **Ground truth A** — `data/citation-generator-keywords.tsv` (426 rows, generator-intent only).
- **Ground truth B** — `Downloads/google_us_all-keywords_2026-06-21_02-06-20.csv` (UTF-16, tab-delim, 23,803 rows) — verified **100% contain "generator"**. It holds *zero* bare informational queries (no "what is a citation", "et al rules", "no author", etc.).
- **Consequence:** the pure Q&A SEED articles below have **no volume in either dataset** and are marked **`no-vol authority`** by design. They are not fabricated-volume pages — they exist to complete the topical graph and feed LLM answers. Generator-modified informational queries (in-text, format, footnote, image, source-type) DO carry volume and are noted with real figures.
- Generator/spoke pages this layer links into (from data, volumes verified): AMA 21k, Chicago 19k, IEEE 12k, ACS 11k, Turabian 6.1k, CSE 5.9k, ASA 4.4k, Bluebook 3.9k, image 2.2k, MLA 1.4k, APSA 1.3k, Harvard 1k, NLM 0.9k, Vancouver 0.7k, APA (hub), Oscola, AAA, MHRA. Plus `in-text citation generator` (1,100), `*-format citation generator` (250 head), `*-footnote` (300), `youtube/video` (150), source-type spokes (website/book/journal/pdf).

---

## ROOT (central entity)

**`/what-is-a-citation/` — "What Is a Citation? How Citations & Referencing Work"**
The Entity Home for the informational graph. Defines citation, reference, in-text citation, bibliography, citation style, and why citations exist. Every NODE hub links up to ROOT; ROOT links down to all 11 NODE hubs and across to the homepage generator. `no-vol authority` (the bare entity query is not in data).

---

## NODE clusters (11)

| # | NODE hub page | Slug | Covers |
|---|---------------|------|--------|
| N1 | Citation Basics | `/citation-basics/` | what/why/anatomy of a citation |
| N2 | Citation Styles Explained | `/citation-styles/` | APA/MLA/Chicago/Harvard/IEEE/AMA… overviews |
| N3 | In-Text vs Reference List | `/in-text-citations/` | parenthetical, narrative, signal phrases |
| N4 | Bibliography & Works Cited | `/bibliography/` | reference list, works cited, formatting |
| N5 | Plagiarism & Academic Integrity | `/plagiarism/` | what counts, how to avoid, consequences |
| N6 | Author / Date / Page Rules | `/author-date-page-rules/` | missing-element handling, et al, page numbers |
| N7 | DOIs & Identifiers | `/doi-and-identifiers/` | DOI, ISBN, ISSN, URLs, accessed dates |
| N8 | Citing AI & ChatGPT | `/citing-ai/` | how to cite ChatGPT/Gemini per style |
| N9 | Annotated Bibliographies | `/annotated-bibliography/` | what, format, examples |
| N10 | Reference Management & Tools | `/reference-tools/` | citation generators, Zotero/Mendeley, comparisons |
| N11 | Decision & Trust (E-E-A-T) | `/about/` + `/methodology/` | which style, best generator, how we generate |

---

## SEED articles (per node)

Format: **working title** | target query/intent | vol/KD | links-to (generator/spoke)

### N1 — Citation Basics  →  hub `/citation-basics/`
| Title | Intent | Vol/KD | Links to |
|---|---|---|---|
| What Is a Citation? (ROOT) | define citation | no-vol authority | homepage generator, all NODE hubs |
| Why Cite Your Sources? 5 Reasons | why cite / purpose | no-vol authority | plagiarism N5, homepage |
| Citation vs Reference: What's the Difference? | citation vs reference | no-vol authority | N3 in-text, N4 bibliography |
| Anatomy of a Citation (Author, Date, Title, Source) | parts of a citation | no-vol authority | N6 author-date-page |
| What Is a Citation Style & Why So Many Exist | citation style meaning | no-vol authority | N2 styles hub, all style generators |
| Primary vs Secondary Sources (How to Cite Each) | primary vs secondary source | no-vol authority | N6, style generators |
| What Is a Source? Types of Sources to Cite | types of sources | no-vol authority | source-type generators (website/book/journal) |
| Direct Quote vs Paraphrase vs Summary | quote vs paraphrase | no-vol authority | N5 plagiarism, N3 in-text |

### N2 — Citation Styles Explained  →  hub `/citation-styles/`
| Title | Intent | Vol/KD | Links to |
|---|---|---|---|
| Citation Styles Compared (master guide) | citation styles list/overview | no-vol authority | every style generator |
| APA Style Explained (7th ed.) | apa style guide | no-vol authority | APA generator |
| MLA Style Explained (9th ed.) | mla style guide | no-vol authority | MLA generator (1.4k) |
| Chicago Style Explained (Author-Date vs Notes-Bib) | chicago style guide | no-vol authority | Chicago generator (19k) |
| Harvard Referencing Explained | harvard referencing guide | no-vol authority | Harvard generator (1k) |
| IEEE Citation Style Explained | ieee style guide | no-vol authority | IEEE generator (12k) |
| AMA Citation Style Explained | ama style guide | no-vol authority | AMA generator (21k) |
| Vancouver Style Explained | vancouver style guide | no-vol authority | Vancouver generator (0.7k) |
| Turabian Style Explained | turabian style guide | no-vol authority | Turabian generator (6.1k) |
| ASA / ACS / CSE Style Explained (sci/soc set) | asa acs cse style | no-vol authority | ASA 4.4k / ACS 11k / CSE 5.9k generators |
| Bluebook & OSCOLA Legal Citation Explained | legal citation style | no-vol authority | Bluebook 3.9k / Oscola generators |

### N3 — In-Text vs Reference List  →  hub `/in-text-citations/`
| Title | Intent | Vol/KD | Links to |
|---|---|---|---|
| In-Text Citations Explained (with examples) | in-text citation examples | `in-text citation generator` 1,100 / KD0 | in-text generator, style generators |
| Parenthetical vs Narrative Citations | parenthetical vs narrative | no-vol authority | in-text generator |
| Signal Phrases & How to Introduce a Quote | signal phrases | no-vol authority | N1 quote vs paraphrase |
| In-Text Citations by Style (APA/MLA/Chicago/AMA) | in-text by style | `*-in-text gen` 50–80 (set) | each style generator |
| How to Cite the Same Source Twice (in-text) | cite same source twice | no-vol authority | N6 ibid |
| Block Quotes: When & How to Format | block quote rules | no-vol authority | style generators |

### N4 — Bibliography & Works Cited  →  hub `/bibliography/`
| Title | Intent | Vol/KD | Links to |
|---|---|---|---|
| Reference List vs Bibliography vs Works Cited | bibliography vs works cited | no-vol authority | N2, all generators |
| How to Format a Reference List | reference list format | `*-bibliography gen` 20–30 | bibliography generator |
| Hanging Indent: What It Is & How to Make One | hanging indent | no-vol authority | generators (output uses it) |
| Alphabetizing & Ordering Your Reference List | alphabetize references | no-vol authority | generators |
| Works Cited Page (MLA) Format & Example | mla works cited | no-vol authority | MLA generator |
| References Page (APA) Format & Example | apa references page | no-vol authority | APA generator |
| Footnotes & Endnotes Explained (Chicago/Turabian) | footnote citation | `*-footnote gen` 300 / KD7 | Chicago/Turabian footnote generators |

### N5 — Plagiarism & Academic Integrity  →  hub `/plagiarism/`
| Title | Intent | Vol/KD | Links to |
|---|---|---|---|
| What Is Plagiarism? Types & Examples | what is plagiarism | no-vol authority | homepage generator |
| How to Avoid Plagiarism (the citing checklist) | how to avoid plagiarism | no-vol authority | in-text N3, generators |
| Do You Need to Cite Common Knowledge? | common knowledge citation | no-vol authority | N1 why cite |
| Self-Plagiarism & Reusing Your Own Work | self plagiarism | no-vol authority | N6 cite same source |
| Patchwriting & Why Paraphrasing Still Needs a Citation | patchwriting | no-vol authority | N1 quote vs paraphrase |
| Academic Integrity & Consequences of Plagiarism | academic integrity | no-vol authority | N5 hub |

### N6 — Author / Date / Page Rules  →  hub `/author-date-page-rules/`
| Title | Intent | Vol/KD | Links to |
|---|---|---|---|
| The "et al." Rule: How Many Authors Before et al (per style) | et al rule | no-vol authority | each style generator |
| How to Cite a Source With No Author | no author citation | no-vol authority | website/source generators |
| How to Cite a Source With No Date (n.d.) | no date citation | no-vol authority | website generator |
| How to Cite With No Page Number | no page number citation | no-vol authority | in-text generator |
| Page-Number Rules (p., pp., para., locations) | page number citation rules | no-vol authority | in-text generator |
| Citing Multiple Authors / Group & Corporate Authors | multiple authors citation | no-vol authority | style generators |
| "ibid." & "op. cit." Explained (and when not to use them) | ibid meaning | no-vol authority | N4 footnotes |
| Citing the Same Source Multiple Times | repeat citation | no-vol authority | N3, N4 footnotes |

### N7 — DOIs & Identifiers  →  hub `/doi-and-identifiers/`
| Title | Intent | Vol/KD | Links to |
|---|---|---|---|
| What Is a DOI? (and how to find/format one) | doi explained | no-vol authority | journal generator |
| DOI vs URL: Which to Use in a Citation | doi vs url | no-vol authority | journal/website generators |
| ISBN, ISSN & Other Identifiers Explained | isbn issn citation | no-vol authority | book/journal generators |
| Do You Need an "Accessed" Date? (per style) | accessed date citation | no-vol authority | website generator |
| How to Cite a Source Without a DOI or URL | no doi citation | no-vol authority | journal generator |

### N8 — Citing AI & ChatGPT  →  hub `/citing-ai/`
| Title | Intent | Vol/KD | Links to |
|---|---|---|---|
| How to Cite ChatGPT (APA/MLA/Chicago) | cite chatgpt | `chatgpt citation generator` 50 / KD12 | ChatGPT/AI generator, style generators |
| How to Cite Gemini, Claude & Other AI Tools | cite ai tools | no-vol authority | AI generator |
| Is It Plagiarism to Use ChatGPT? | chatgpt plagiarism | no-vol authority | N5 plagiarism |
| Citing AI-Generated Images & Content | cite ai image | no-vol authority | image generator (2.2k) |
| Should You Cite AI? University Policies Overview | ai citation policy | no-vol authority | N8 hub |

### N9 — Annotated Bibliographies  →  hub `/annotated-bibliography/`
| Title | Intent | Vol/KD | Links to |
|---|---|---|---|
| What Is an Annotated Bibliography? | annotated bibliography meaning | no-vol authority | bibliography generator |
| How to Write an Annotated Bibliography (APA/MLA) | how to write annotated bib | no-vol authority | APA/MLA generators |
| Annotated Bibliography Examples & Template | annotated bibliography example | no-vol authority | generators |
| Descriptive vs Evaluative vs Summary Annotations | annotation types | no-vol authority | N9 hub |

### N10 — Reference Management & Tools  →  hub `/reference-tools/`
| Title | Intent | Vol/KD | Links to |
|---|---|---|---|
| How to Use a Citation Generator (step-by-step) | how to use citation generator | no-vol authority | homepage generator |
| What Is CSL / Citeproc? How Citation Software Works | csl citeproc explained | no-vol authority | N11 methodology |
| Zotero vs Mendeley vs EndNote | reference manager comparison | no-vol authority | homepage generator |
| How to Cite a Website / Book / Journal / PDF / YouTube (source-type set) | cite a {source} | source-type gens: youtube/video 150, website/book/journal/pdf spokes | matching source-type generators |
| How to Export Citations to Word / Google Docs | export citations | no-vol authority | homepage generator |

### N11 — Decision, Comparison & Trust (E-E-A-T)  →  hubs `/citation-styles/`, `/about/`, `/methodology/`
Decision/comparison:
| Title | Intent | Vol/KD | Links to |
|---|---|---|---|
| APA vs MLA: Differences & Which to Use | apa vs mla | no-vol authority | APA + MLA generators |
| Chicago vs APA vs MLA: Full Comparison | citation style comparison | no-vol authority | all three generators |
| Which Citation Style Should I Use? (by subject) | which citation style | no-vol authority | N2 hub, all generators |
| Best Free Citation Generators Compared (2026) | best citation generator | no-vol authority | homepage generator |
| Citation Generator vs Doing It Manually | citation generator vs manual | no-vol authority | homepage generator |
| Is [Competitor] Citation Generator Accurate? | is X accurate | no-vol authority | homepage generator, /methodology/ |

Trust / citation-worthiness (the LLM-citation layer):
| Title | Intent | Vol/KD | Links to |
|---|---|---|---|
| How Our Citations Are Generated (CSL + citeproc-js) | methodology / how it works | no-vol authority | homepage generator |
| Our Accuracy Methodology & How We Test Citations | accuracy methodology | no-vol authority | /methodology/ |
| Sources & Standards We Follow (APA/MLA/Chicago official manuals) | sources standards | no-vol authority | N2 style guides |
| Editorial & Expert Review Process | editorial review / E-E-A-T | no-vol authority | /about/ |
| About / Who We Are | brand entity home | no-vol authority | all hubs |

---

## Counts

- **NODE clusters:** 11 (+1 ROOT entity page)
- **SEED articles:** 66 (across N1–N11, incl. ROOT, decision/comparison, and E-E-A-T trust pages)
- **Generator/spoke pages linked into:** ~20 (every style hub + in-text, footnote, image, source-type spokes)

## Highest-priority authority clusters (build order)

1. **N6 Author/Date/Page Rules** — the "et al / no author / no date / no page / ibid" questions are the single biggest gap LLMs answer constantly and the data has *no* informational coverage. Pure citation-worthiness + every page links into a money generator. Build first.
2. **N3 In-Text Citations** — anchored by a real-volume query (`in-text citation generator` 1,100, KD0) and underpins all style spokes; strongest authority-to-traffic ratio.
3. **N2 Citation Styles Explained** — the bridge between the informational layer and the highest-volume generators (AMA 21k, Chicago 19k, IEEE 12k, ACS 11k); each guide passes equity straight to a money page.
4. **N8 Citing AI & ChatGPT** — low competition, rising intent, maximal AI-Overview/LLM citation upside; ties to image generator (2.2k).
5. **N11 Trust/Methodology (CSL/citeproc + accuracy)** — the pages that make the *whole domain* quotable by ChatGPT/Perplexity; small but disproportionate authority weight.
