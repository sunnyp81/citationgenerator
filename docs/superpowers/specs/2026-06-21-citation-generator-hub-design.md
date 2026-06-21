# Citation Generator Hub — Design Spec

**Domain:** citationgenerator.store (exact-match, owned)
**Date:** 2026-06-21
**Stack:** Astro 5 + Tailwind 4, client-side engine, Cloudflare Pages via GitHub
**Status:** Approved direction, pre-implementation

## 1. Premise

23.8k US "generator" keywords, 4.55M monthly volume. Head terms (qr code KD91, logo KD89,
invoice KD61) are unwinnable for a fresh domain. The winnable, monetisable cluster is
**citation generators**: 226 keywords at KD 0-7 across dozens of styles incumbents
(Scribbr, EasyBib, CitationMachine) serve badly or not at all.

**Core insight:** accurate citation formatting is a solved, open problem — Citation Style
Language (CSL) files + `citeproc-js` render any of 2000+ styles correctly for free. We do
NOT hand-code formats (that is exactly what makes incumbents' niche styles wrong). Correctness
is a given; the moat is **which pages we build, how we structure them for SEO, and the
auto-fill UX**.

## 2. Goal & success criteria

- Rank page-1 on the underserved-style long tail within 90 days (low-KD wedge).
- Layered monetisation live from launch (affiliate + ads + email capture).
- £ path: display ads (Ezoic → Mediavine) + recurring affiliate (Grammarly/Quetext) +
  email list → student-writing product.
- Non-goal: beating Scribbr/EasyBib on "apa citation generator" head terms in v1.

## 3. Architecture

Fully static Astro site. No backend. Citation rendering happens in the browser.

```
citationgenerator.store/
├─ Citation engine (client JS)
│   ├─ citeproc-js  (renders citations from CSL)
│   ├─ bundled CSL style files (one per supported style)
│   └─ CSL-JSON input model (the normalised reference object)
├─ Auto-fill adapters (client fetch, free APIs)
│   ├─ DOI   → CrossRef REST API
│   ├─ ISBN  → Google Books API
│   └─ URL   → metadata scrape (Microlink/serverless or meta-tag fetch)
├─ Bibliography builder (localStorage)
│   └─ export: BibTeX, plain text, Word-paste
└─ Pages (Astro, programmatic)
```

### 3.1 Citation engine (unit)
- **Does:** takes a CSL-JSON reference + a style id, returns a formatted citation string
  (and in-text form).
- **Use:** `format(reference, styleId) -> { bibliography, inText }`.
- **Depends on:** `citeproc-js`, the CSL style file for `styleId`, a locale file (en-US).
- Style files bundled at build time; only the active style's CSL is loaded per page.

### 3.2 Auto-fill adapters (unit)
- **Does:** resolves an identifier (DOI/ISBN/URL) into a CSL-JSON reference.
- **Use:** `resolve(identifier) -> Promise<CSL-JSON>`; falls back to manual form on failure.
- **Depends on:** CrossRef (DOI), Google Books (ISBN), a metadata fetch for URLs.
- All free, client-side or thin serverless proxy if CORS requires. No keys for CrossRef.

### 3.3 Bibliography builder (unit)
- **Does:** holds a list of references in localStorage, renders the whole list in the chosen
  style, exports.
- **Use:** add/remove/clear; `exportAs('bibtex'|'text'|'word')`.
- **Depends on:** the citation engine, localStorage.
- **MVP note:** ships in v1 — it is the stickiness/return-visit hook and low-cost.

### 3.4 Page system (unit)
Programmatic, hub-and-spoke per style. Data-driven from a `styles` manifest
(id, label, csl filename, KD, blurb) and a `sourceTypes` list (book, journal article,
website, YouTube video, newspaper, conference paper).

- **Tool hub:** `/[style]-citation-generator` — the generator + style overview. Primary
  ranking + utility page. (e.g. `/ama-citation-generator`)
- **Format guide:** `/[style]-format` — rules, examples, FAQ, schema.
- **Source-type spokes:** `/how-to-cite-a-[sourcetype]-in-[style]` — long-tail capture,
  each with a pre-scoped generator and worked examples.
- Internal links: spokes ↔ hub ↔ format guide; cross-links between sibling styles.

### 3.5 Launch wedge (data)
~12-15 underserved low-KD styles × ~6 source types ≈ 80-100 pages:
AMA (21k/KD6), Turabian (6.1k/KD2), Bluebook (3.9k/KD7), Vancouver (KD3), NLM (KD0),
IEEE (KD4), ACS (KD2), APSA (KD0), ASCE (KD0), ACM (KD0), AIP (KD0), AAA, Harvard (KD17),
in-text (KD0). APA/MLA/Chicago added later as authority builds (not in v1 ranking push).

## 4. Data flow

1. User lands on `/ama-citation-generator`.
2. Enters DOI/ISBN/URL **or** fills manual form.
3. Auto-fill adapter resolves identifier → CSL-JSON (or manual maps to CSL-JSON).
4. Engine renders with AMA CSL → formatted citation + in-text.
5. Copy button; "Add to bibliography" → localStorage list.
6. Export list as BibTeX/text/Word.

## 5. Monetisation (layered, all from launch)

1. **Affiliate (day 1):** Grammarly + plagiarism checker (Quetext) + paper-editing,
   contextual in-tool (post-citation CTA) and in format guides. Recurring/CPA programs.
2. **Display ads:** Ezoic at launch (no traffic floor); migrate to Mediavine at 50k
   sessions/mo. Ad slots designed into layout but kept below the tool fold.
3. **Lead-magnet → product:** per-style citation cheat-sheet PDF as email optin →
   nurture → paid student-writing product (selflandlord optin-converts model).
   GA4 `generate_lead` + tool-use events tracked as key events from launch.

## 6. Error handling

- Auto-fill failure (bad/unknown identifier, API down) → silent fallback to manual form
  with a non-blocking notice. Never dead-ends the user.
- Engine failure for a style → log + render a graceful "manual format" example from the
  guide content; page still useful.
- All API calls client-side with timeouts; no API outage takes the page down.

## 7. Testing

- Unit: engine renders known reference → expected string per style (golden-file tests
  against published style examples for the wedge styles).
- Unit: auto-fill adapters map sample DOI/ISBN/URL → expected CSL-JSON (mocked responses).
- Build: every style in the manifest has a present, parseable CSL file; every page route
  resolves.
- Pre-deploy: `semantic-audit` ≥85 on guide content; Chrome DevTools console-clean check
  on a deployed sample page (per pre-completion-validation).

## 8. Open items (Sunny owns)

- Affiliate signups: Grammarly, Quetext (or alt plagiarism), paper-editing CPA.
- Ezoic account + site integration.
- Decide email/ESP for optin (reuse EmailIt worker).

## 9. Out of scope (v1, YAGNI)

- User accounts / cloud-saved bibliographies (localStorage only).
- APA/MLA/Chicago ranking push (head-on incumbent fight — defer).
- Browser extension, Word add-in, mobile app.
- Paid tool tier (monetise via ads/affiliate/product first).
