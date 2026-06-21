# 05 - Page Templates To Ship

Ready-made page blueprints for citationgenerator.store. Each template is a repeatable Astro
component fed by data manifests (`styles`, `sourceTypes`), so the topical map becomes real pages
at scale. An implementer can build the component and content blocks directly from these specs.

**Global rules (apply to every template):**
- JSON-LD is inline per page (in `<head>` via a layout slot), never injected globally.
- No em dashes or en dashes in any rendered content. Commas, colons, hyphens only.
- Slugs omit any word already present in the domain (`citation`, `generator`) where it reads
  naturally on a tool URL, and never include a year. Style slugs keep the discriminating word
  (e.g. `ama-citation-generator`) because the keyword demands it; source slugs use the
  `how-to-cite-a-[source]-in-[style]` shape from the spec.
- Variable slots in headings/meta use `{Style}`, `{StyleLong}`, `{Source}`, `{SourcePlural}`,
  `{Edition}`. These resolve from the manifests below.
- Engine, auto-fill adapters, and bibliography builder are shared client islands reused by
  every interactive template. Only their **default props** differ per page (pre-selected style,
  pre-scoped source type). Static SEO content is server-rendered HTML; only the tool is hydrated.
- Monetisation slots are fixed positions reused across templates so ad/affiliate/optin code is
  centralised in the layout: `AdSlot`, `AffiliateCTA`, `OptinForm` components, each rendered only
  where a template's slot map says.

---

## Shared layout primitives (built once, reused everywhere)

| Component | Type | Notes |
|-----------|------|-------|
| `<CitationTool>` | client island (`client:visible`) | Props: `defaultStyleId`, `defaultSourceId?`, `lockStyle?`, `lockSource?`. Wraps engine + auto-fill + output + copy + add-to-bibliography. |
| `<BibliographyPanel>` | client island (`client:idle`) | localStorage list + export (BibTeX/text/Word). Rendered collapsed by default below the tool. |
| `<AdSlot slot="..."/>` | static placeholder, script hydrates | Ezoic placeholder ids; never above the tool fold. |
| `<AffiliateCTA variant="..."/>` | static | Grammarly / Quetext contextual block. |
| `<OptinForm magnet="..."/>` | static form, posts to EmailIt worker | Per-style cheat-sheet PDF lead magnet. |
| `<Breadcrumbs>` | static + emits BreadcrumbList JSON-LD | Up-links to hub/pillar. |
| `<RelatedStyles>` / `<RelatedSources>` | static | Sibling cross-links from manifest. |
| `<FAQ items={...}>` | static + emits FAQPage JSON-LD | One FAQ component, content varies. |

---

## TEMPLATE 1 - Style tool-hub (`/[style]-citation-generator`)

Primary ranking + utility page. One per style in the manifest. Targets head style terms
(`ama citation generator` 21k, `turabian citation generator` 6.1k, etc.).

### Block order
1. Breadcrumbs (Home > Citation Generators > {Style})
2. H1 + one-line value sub-head
3. **`<CitationTool defaultStyleId="{id}">`** (full generator, all source types selectable) - above the fold, the hero
4. Copy / Add-to-bibliography controls (inside tool)
5. `<BibliographyPanel>` (collapsed)
6. `AffiliateCTA variant="post-citation"` (Grammarly/Quetext, directly under tool output)
7. Intro prose: what {Style} is, who uses it (definition-first, ~120 words)
8. H2 How to use this {Style} generator (3-5 numbered steps)
9. `AdSlot slot="mid-content"` (first ad, below the fold)
10. H2 {Style} format overview (in-text + reference list rules, brief)
11. H2 {Style} examples by source type (table or cards: one worked example per source type, each linking down to its spoke)
12. `OptinForm magnet="{style}-cheat-sheet"` (email capture for the per-style PDF)
13. H2 {Style} variants / editions (if `variants` present, e.g. AMA 11th)
14. `<RelatedSources>` (links down to all spokes for this style)
15. `<RelatedStyles>` (links across to sibling styles)
16. H2 FAQ (`<FAQ>`)
17. `AdSlot slot="footer"`

### Heading pattern
- H1: `{StyleLong} Citation Generator` (e.g. "AMA Citation Generator")
- H2s: `How to use the {Style} citation generator` / `{Style} format overview` /
  `{Style} examples by source type` / `{Style} editions and variants` /
  `{Style} citation FAQ`
- H3s (examples block): `{Style} {Source} citation example`

### SEO title + meta
- Title: `{StyleLong} Citation Generator - Free, Accurate, No Sign-up`
- Meta: `Generate accurate {StyleLong} citations and references free. Paste a DOI, ISBN or URL or fill the form, copy the citation, and build your bibliography. No login.`

### JSON-LD (inline)
- `SoftwareApplication` (applicationCategory: "BrowserApplication", offers price 0, featureList: source types) - the tool
- `FAQPage` (from FAQ block)
- `BreadcrumbList`

### Internal linking
- **Up:** pillar `/citation-generators` (styles index) + `/how-to-cite` hub.
- **Across:** sibling styles via `<RelatedStyles>` (same tier first).
- **Down:** every source-type spoke `/how-to-cite-a-[source]-in-[style]` (from examples block + RelatedSources).
- Format-guide sibling `/[style]-format` (bidirectional).

### Monetisation slots
- `AffiliateCTA post-citation` (block 6, prime - right after a successful citation).
- `AdSlot mid-content` (block 9) + `AdSlot footer` (block 17), both below tool fold.
- `OptinForm` cheat-sheet (block 12).

### Target word count
700-900 words of supporting prose (excludes tool + examples table).

### Astro note
Page route: `src/pages/[style]-citation-generator.astro` via `getStaticPaths()` over the styles
manifest. Everything static except `<CitationTool>` (`client:visible`) and `<BibliographyPanel>`
(`client:idle`). Only this style's CSL file is imported into the island bundle for the page.

---

## TEMPLATE 2 - Source-type spoke (`/how-to-cite-a-[source]-in-[style]`)

Long-tail capture. One per (style x source) pair in the launch matrix. Pre-scoped generator +
step-by-step guide. Targets `how to cite a [source] in [style]` and `[style] [source] citation
generator` variants (e.g. `ama website citation generator`, `youtube video mla citation generator`).

### Block order
1. Breadcrumbs (Home > {Style} Generator > Cite a {Source})
2. H1
3. Definition-first answer: one-paragraph direct answer to "how do I cite a {Source} in {Style}" (the snippet bait, ~60 words, includes the bare format pattern)
4. **`<CitationTool defaultStyleId="{id}" defaultSourceId="{sid}" lockSource>`** (pre-scoped mini-generator - source locked, only the relevant fields shown)
5. `AffiliateCTA variant="post-citation"`
6. H2 How to cite a {Source} in {Style} step by step (numbered, maps each CSL field to where to find it)
7. H2 {Style} {Source} citation format (the template skeleton: reference-list form + in-text form, shown as code/quote)
8. `AdSlot slot="mid-content"`
9. H2 {Style} {Source} examples (2-3 worked examples, full reference + in-text)
10. H2 Common variations (sub-cases as H3: no author, no date, multiple authors, online vs print, etc. - answers the question-variants)
11. `OptinForm magnet="{style}-cheat-sheet"`
12. `<RelatedSources>` (other source types in same style - sibling spokes)
13. Up-link callout to the full `{Style}` hub
14. H2 FAQ (`<FAQ>` - the question-variants not covered inline)
15. `AdSlot slot="footer"`

### Heading pattern
- H1: `How to Cite a {Source} in {StyleLong}`
- H2s: `How to cite a {Source} in {Style} step by step` / `{Style} {Source} citation format` /
  `{Style} {Source} examples` / `Common {Source} citation variations` /
  `{Source} citation FAQ`
- H3s (variations): `Citing a {Source} with no author` / `...with multiple authors` /
  `...accessed online` etc.

### SEO title + meta
- Title: `How to Cite a {Source} in {StyleLong} (+ Free Generator)`
- Meta: `Cite a {Source} in {StyleLong} correctly. Step-by-step format, worked examples, and a free generator that builds the citation for you. Copy and paste ready.`

### JSON-LD (inline)
- `HowTo` (steps from block 6, each `HowToStep`) - the lead schema for this template
- `SoftwareApplication` (the embedded scoped tool)
- `FAQPage`
- `BreadcrumbList`

### Internal linking
- **Up:** parent `{Style}` hub (strong, in-body + breadcrumb).
- **Across:** sibling source spokes for the same style; same source spoke in sibling styles
  (e.g. "Cite a website in IEEE" links to "Cite a website in AMA").
- **Down:** none (spoke is a leaf); links out to the relevant informational article if the
  source has a concept page (e.g. `/how-to-cite-chatgpt`).

### Monetisation slots
- `AffiliateCTA post-citation` (block 5).
- `AdSlot mid-content` (block 8) + `AdSlot footer` (block 15).
- `OptinForm` (block 11).

### Target word count
500-700 words (tighter than hub; the matrix scale means quality gate via unique worked examples,
not padding). Each page must have genuinely unique examples and variations - no boilerplate
swap-the-noun, or it trips thin-page demotion (per portfolio pSEO survival rules).

### Astro note
Route: `src/pages/how-to-cite-a-[source]-in-[style].astro` via `getStaticPaths()` over the
**filtered** style x source matrix (skip non-applicable pairs, e.g. ISBN-only sources for styles
that have no book example). Tool island gets `lockSource` so it renders the scoped field set.
Static otherwise.

---

## TEMPLATE 3 - Informational article (concept / question pages)

Semantic-SEO articles for concept and "how to cite X" question terms that are not a style x source
tool page (e.g. `how to cite chatgpt`, `what is a doi`, `in-text vs reference citation`,
`how to cite an image`). Captures the broad informational parent terms and feeds links down to tools.

### Block order
1. Breadcrumbs (Home > Guides > {Topic})
2. H1 (the question, matched to query)
3. Definition-first answer: direct answer in the first 40-60 words (featured-snippet + AI-citation bait), bolded lead sentence
4. `AdSlot slot="mid-content"` (after the answer, below fold)
5. H2 body sections (the entity attributes / sub-questions, 2-5 H2s with H3 sub-points)
6. H2 Examples (concrete worked examples where relevant)
7. Inline contextual link block to the matching generator(s) ("Use the free {Style} generator")
8. `AffiliateCTA variant="inline"` (Grammarly/Quetext, mid-article)
9. `OptinForm magnet="citation-cheat-sheet"` (generic cheat sheet)
10. H2 FAQ (`<FAQ>`)
11. `<RelatedStyles>` / related guides
12. `AdSlot slot="footer"`

### Heading pattern
- H1: matches the target query verbatim where natural (e.g. "How to Cite ChatGPT",
  "What Is a DOI?")
- H2s: the recognised sub-questions / attributes from SERP (varies per topic; generated from
  the brief, not fixed slots)

### SEO title + meta
- Title: `{Query} - {Short Benefit}` (e.g. "How to Cite ChatGPT in Any Style")
- Meta: definition-style one-liner answering the query + soft tool nudge.

### JSON-LD (inline)
- `Article` (headline, author = site entity, datePublished/Modified)
- `FAQPage`
- `BreadcrumbList`
- Add `HowTo` only if the article is genuinely procedural.

### Internal linking
- **Up:** `/how-to-cite` hub or `/guides`.
- **Across:** sibling guides.
- **Down:** the specific tool pages it should funnel to (style hubs and/or relevant spokes).
  This template is the main top-of-funnel link source feeding equity into the tools.

### Monetisation slots
- `AffiliateCTA inline` (block 8) + `AdSlot mid-content` / `footer`.
- `OptinForm` generic cheat sheet (block 9).

### Target word count
900-1,400 words (informational pages carry the topical-depth load).

### Astro note
Route: `src/pages/[...slug].astro` or a `guides/` collection using Astro **content collections**
(Markdown/MDX with frontmatter: title, query, schema flags, downLinks). No tool island unless the
article embeds a generator via the inline link block (then `<CitationTool client:visible>` with
defaults). Mostly fully static.

---

## TEMPLATE 4 - Adjacent tool (bibliography builder, title page generator, etc.)

Standalone utility pages that are not style-scoped: bibliography builder, alphabetical-order /
reference sorter, title-page generator, in-text citation generator, BibTeX generator. Each captures
its own keyword (`in-text citation generator` 1.1k, `bibtex citation generator` 1k,
`alphabetical order citation generator`, etc.) and cross-sells the style tools.

### Block order
1. Breadcrumbs (Home > Tools > {Tool})
2. H1 + sub-head
3. **The tool island** (tool-specific: `<BibliographyPanel>` standalone for the builder, a sorter island, a title-page form island, etc.) - above the fold
4. Primary action controls (export / copy / download)
5. `AffiliateCTA variant="post-action"`
6. Intro: what the tool does, who needs it (~100 words)
7. H2 How to use (numbered steps)
8. `AdSlot slot="mid-content"`
9. H2 About {feature} (the format concept behind it - e.g. what a bibliography is, what in-text citations are)
10. H2 Supported styles (links across to every style hub - this tool's main link-out)
11. `OptinForm`
12. H2 FAQ (`<FAQ>`)
13. `AdSlot slot="footer"`

### Heading pattern
- H1: `{Tool Name}` (e.g. "Bibliography Builder", "In-text Citation Generator",
  "BibTeX Generator", "Reference Alphabetiser")
- H2s: `How to use the {Tool}` / `About {concept}` / `Supported citation styles` /
  `{Tool} FAQ`

### SEO title + meta
- Title: `{Tool Name} - Free Online, No Sign-up`
- Meta: tool-specific benefit + "works with AMA, IEEE, Harvard and 12+ styles".

### JSON-LD (inline)
- `SoftwareApplication` (per tool, price 0)
- `FAQPage`
- `BreadcrumbList`

### Internal linking
- **Up:** pillar / tools hub.
- **Across:** other adjacent tools.
- **Down:** all style hubs (block 10 "supported styles") - this is a key hub-equity distributor.

### Monetisation slots
- `AffiliateCTA post-action` + `AdSlot mid-content` / `footer` + `OptinForm`.

### Target word count
400-700 words supporting prose (tool-led pages).

### Astro note
Individual hand-authored routes (`src/pages/bibliography-builder.astro`,
`in-text-citation-generator.astro`, etc.) since each tool island differs. Reuse engine +
manifest. Tool islands hydrate `client:visible`; rest static.

---

## TEMPLATE 5 - Pillar / hub

Two hubs: the styles index (`/citation-generators`) and the "how to cite" guide hub
(`/how-to-cite`). Distribute link equity, target the broad parent terms, orient users. Top of the
internal-link graph.

### Block order
1. Breadcrumbs (Home > {Hub})
2. H1 + intro paragraph (definition-first: what this collection is)
3. `AffiliateCTA variant="inline"` (soft, below intro)
4. H2 Browse by style — grid/`ItemList` of every style hub (logo/initial, label, one-line blurb, KD-tier ordering hidden from user), each card links down to the `[style]-citation-generator` page
5. `AdSlot slot="mid-content"`
6. H2 Browse by source type — grid linking to the most common `how-to-cite-a-[source]` paths / spokes
7. H2 Adjacent tools — cards to Template-4 tools
8. H2 Citation guides — cards to key Template-3 articles
9. `OptinForm magnet="citation-cheat-sheet"`
10. H2 How to choose a citation style (short orienting prose, snippet bait)
11. H2 FAQ (`<FAQ>`)
12. `AdSlot slot="footer"`

### Heading pattern
- Styles index H1: `Citation Generators by Style` ; hub H1: `How to Cite Any Source`
- H2s: `Browse by style` / `Browse by source type` / `Citation tools` /
  `Citation guides` / `How to choose a citation style` / `FAQ`

### SEO title + meta
- Styles index title: `Free Citation Generators for Every Style - AMA, IEEE, Harvard and More`
- Hub title: `How to Cite Any Source - Free Guides and Generators`
- Meta: collection summary + count of styles/sources covered, "free, no sign-up".

### JSON-LD (inline)
- `CollectionPage` + `ItemList` (the style/tool cards, with `url` per item)
- `FAQPage`
- `BreadcrumbList`
- `WebSite` + `SearchAction` only on the homepage variant if used as root.

### Internal linking
- **Up:** home.
- **Across:** the two hubs link to each other.
- **Down:** every style hub, key spokes, every adjacent tool, key guides. This is the primary
  equity fan-out; ensure no style hub is orphaned (every manifest entry appears here).

### Monetisation slots
- Lighter: `AffiliateCTA inline` (block 3), `AdSlot mid-content` + `footer`, `OptinForm`.
  No post-citation CTA (no inline tool).

### Target word count
500-800 words prose around the navigational grids.

### Astro note
`src/pages/citation-generators.astro` + `src/pages/how-to-cite.astro`. Fully static; maps over the
manifests to render `ItemList` cards. No tool island. Regenerates automatically as manifest grows.

---

## Data-manifest shapes

Both manifests are the single source of truth driving every `getStaticPaths()` and every
cross-link. Stored as typed data, e.g. `src/data/styles.ts` and `src/data/sourceTypes.ts`.

### `Style`

```ts
interface StyleVariant {
  id: string;          // "ama-11"
  label: string;       // "AMA 11th edition"
  cslFile: string;     // "american-medical-association-11.csl" (overrides parent CSL)
  edition: string;     // "11th"
}

interface Style {
  id: string;          // "ama"  (stable key, used in slugs + island props)
  label: string;       // "AMA"  (short, for {Style})
  labelLong: string;   // "American Medical Association (AMA)"  (for {StyleLong}, H1s)
  slug: string;        // "ama-citation-generator"  (the route, no year, keeps discriminator)
  cslFile: string;     // "american-medical-association.csl"  (file in src/csl/)
  localeFile: string;  // "locales-en-US.xml" (shared default; field allows overrides)
  tier: 1 | 2 | 3;     // launch priority by KD/volume (1 = low-KD wedge, ship first)
  kd: number;          // ground-truth KD from keywords.tsv (6 for AMA)
  volume: number;      // head-term volume (21000)
  variants: StyleVariant[];  // editions; [] if none
  blurb: string;       // one-line card/meta blurb, no dashes
  sourceTypeIds: string[];   // which sourceTypes get spokes for this style (the matrix filter)
  aliases: string[];   // alt spellings to fold in copy/FAQ ("citation generator ama", "ama format")
}
```

Example seed entries (from spec wedge + keywords.tsv):

```ts
{ id: "ama", label: "AMA", labelLong: "American Medical Association (AMA)",
  slug: "ama-citation-generator", cslFile: "american-medical-association.csl",
  localeFile: "locales-en-US.xml", tier: 1, kd: 6, volume: 21000,
  variants: [{ id:"ama-11", label:"AMA 11th edition", cslFile:"american-medical-association-11.csl", edition:"11th" }],
  blurb: "Cite medical and scientific sources in AMA style, free.",
  sourceTypeIds: ["journal-article","book","website","newspaper","conference-paper","youtube"],
  aliases: ["citation generator ama","ama format citation generator","ama style"] }
// turabian (kd2, 6.1k), bluebook (kd7, 3.9k), ieee (kd4, 12k), acs (kd2, 11k),
// cse (kd1, 5.9k), asa (kd4, 4.4k), vancouver (kd3), nlm (kd0), apsa (kd0),
// asce (kd0), acm (kd0), aip (kd0), harvard (kd17) ... all tier 1-2.
```

### `SourceType`

```ts
interface ExampleField {
  cslField: string;    // CSL-JSON key: "title", "container-title", "DOI", "issued", "author"
  label: string;       // human label shown in the manual form: "Article title"
  required: boolean;
  placeholder: string; // example value for form + worked example generation
}

interface SourceType {
  id: string;          // "journal-article"  (stable key)
  label: string;       // "Journal Article"  (for {Source})
  labelPlural: string; // "Journal Articles" (for {SourcePlural})
  slugFragment: string;// "a-journal-article"  -> /how-to-cite-a-journal-article-in-ama
  cslType: string;     // CSL-JSON item type: "article-journal"
  autoFill: ("doi"|"isbn"|"url")[];  // which adapters apply (drives the input modes shown)
  exampleFields: ExampleField[];     // the form schema + worked-example source data
  blurb: string;       // one-line, no dashes
}
```

Example seed entries (the spec's six source types):

```ts
{ id:"journal-article", label:"Journal Article", labelPlural:"Journal Articles",
  slugFragment:"a-journal-article", cslType:"article-journal", autoFill:["doi","url"],
  exampleFields:[
    {cslField:"author",label:"Author(s)",required:true,placeholder:"Smith J, Doe A"},
    {cslField:"title",label:"Article title",required:true,placeholder:"Effects of X on Y"},
    {cslField:"container-title",label:"Journal name",required:true,placeholder:"J Clin Med"},
    {cslField:"issued",label:"Year",required:true,placeholder:"2024"},
    {cslField:"volume",label:"Volume",required:false,placeholder:"12"},
    {cslField:"page",label:"Pages",required:false,placeholder:"45-52"},
    {cslField:"DOI",label:"DOI",required:false,placeholder:"10.1000/xyz"}],
  blurb:"Cite a journal article with author, journal, volume and DOI." }
// book (cslType "book", autoFill ["isbn","url"]),
// website (cslType "webpage", autoFill ["url"]),
// youtube (cslType "motion_picture"/"webpage", autoFill ["url"]),
// newspaper (cslType "article-newspaper", autoFill ["url"]),
// conference-paper (cslType "paper-conference", autoFill ["doi","url"]).
```

**Page generation:** the style x source matrix = `styles.flatMap(s => s.sourceTypeIds.map(...))`,
filtered so each spoke is applicable. Hubs and the index iterate the full `styles` list. Adding a
style or source to a manifest auto-creates every dependent page and cross-link with zero template
edits.

---

## Reuse summary

- **One engine + auto-fill + bibliography island** powers Templates 1, 2 and 4; templates differ
  only by island props (`defaultStyleId`, `defaultSourceId`, `lockSource`) and which static SEO
  blocks wrap it.
- **One FAQ / Breadcrumbs / AdSlot / AffiliateCTA / OptinForm set** is positioned by each
  template's fixed slot map, so monetisation and schema code live once in the layout.
- **Two manifests** (`Style`, `SourceType`) drive every route via `getStaticPaths()` and every
  internal link, making the whole topical map programmatically generated and extensible.
