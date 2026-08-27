Label: wayfinder:map

## Status

**Built and shipping (2026-08-27).** All 18 pages have Spanish twins under `/es/`
(Press & Credibility was removed the same day); every EN page has a working
language toggle — a compact **ES**/**EN** pill sitting to the right of the Donate
button. The desktop nav stays on one line (`flex-wrap: nowrap`); its breakpoint
is **1200px**, sized so the longer Spanish label set still fits beside the
wordmark + Donate + toggle without bleeding into the wordmark (centre grid track
is `minmax(0,1fr)`, nav-link letter-spacing trimmed to 0.09em, Spanish nav labels
kept short — e.g. "Colabora" not "Colabora con nosotros", which stays on the CTA
button). Below 1200px the hamburger menu carries everything.
Spanish copy is machine-drafted per the founder's decision; a bilingual review
pass of the four clinical pages remains on the post-launch list. Remaining TODOs
are the CI drift guard, the Zeffy embed language, and `/es/*` 404 routing.

## Destination

The whole Jentosy Project site is viewable in Spanish. A visitor can switch
languages from anywhere, and **every word of UI and content is translated except
the organization's name, "The Jentosy Project"** (and the JEN + AnTOSY etymology,
which only works in English — see Decisions). The Spanish site is a first-class
version, not a machine-translated afterthought: the medical pages get the same
accuracy bar the English ones were held to.

Founder decision (2026-08-27): this **amends [ticket 01](../tjp-website-spec/issues/01-mvp-scope.md)**,
which listed "Multi-language support" under Out of scope for v1. Spanish is now
in scope. (This also resolves the flag in the website map about a data-backed
Spanish recommendation conflicting with the locked v1 boundary — the founder
chose to do it.)

Why: the Bronx is 55.4% Hispanic/Latino (site's own data); APOL1-mediated kidney
disease and FSGS both disproportionately affect this community; a kidney-health
equity org that only speaks English to a majority-Hispanic service area has a
credibility gap with exactly the people it exists to serve.

## Notes

### Scale of the copy

~14,000 words of real content across 19 pages. Roughly 70% of that is the four
medical/data pages:

| Page | ~words | Register |
|---|---|---|
| the-need/fsgs | 2,900 | clinical |
| the-need/data (Bronx Data) | 2,700 | clinical / epidemiology |
| the-need/apol1 | 2,700 | clinical / genetics |
| the-need/ (hub) | 2,300 | clinical + mission |
| index (home) | 2,000 | mission |
| about/team | 2,100 | narrative + bios |
| storytelling | 1,200 | essay |
| about, what-we-do, donate, partner, contact, privacy-terms, where-we-live, press, 404, thank-you ×3 | ~250–700 each | mission / transactional / legal |

### Open decisions (need founder input before building)

1. **Translation sourcing.** Machine/AI translation shipped straight to
   production under a health nonprofit's name is a real risk on the clinical
   pages — the English FSGS/APOL1/Bronx-data copy went through a clinical-accuracy
   review; the Spanish must too. Options:
   - AI-drafted, then reviewed by a bilingual clinician / the board before the
     Spanish medical pages go live (mission + transactional pages can ship on AI
     draft + a bilingual proofread).
   - Professional medical translator for the four clinical pages, AI + proofread
     for the rest.
   - Community/volunteer bilingual reviewer.
   This is a process decision, not a code one, and it gates launch of the `/es/`
   medical pages specifically.

2. **Architecture** (recommendation below — confirm or redirect):
   - **A. Duplicate pages under `src/pages/es/`.** Each English `.astro` page gets
     a Spanish twin. Simple, no refactor of the 19 hand-built pages, each Spanish
     page independently reviewable. Cost: content can drift between `en` and `es`
     when only one side is edited — needs a discipline / checklist, and ideally a
     CI check that flags an English page changed without its Spanish twin.
   - **B. Externalize every string into `src/i18n/*.ts` dictionaries, one set of
     `[lang]` templates.** No drift by construction. Cost: a large, risky rewrite
     of 19 prose-heavy pages into key-value lookups — turns readable page source
     into `t("fsgs.section3.para2")`, which fights the way this site has been
     built and maintained.
   - **C. Astro content collections** (move page bodies to Markdown/MDX with
     per-locale files). Big restructure; better long-term for a content site but
     a lot of upfront motion.
   - **Recommendation: A**, plus a small shared `src/i18n/ui.ts` dictionary for
     the truly repeated chrome (nav labels, footer, button text, form labels,
     "Skip to content"). Best fit for a solo AI-tooled maintainer; drift is
     managed with a checklist + optional CI guard rather than a rewrite.

3. **URL / routing.** Recommendation: `en` stays at the root (`/the-need/fsgs/`),
   `es` is prefixed (`/es/the-need/fsgs/`), via Astro's built-in i18n config
   (`i18n: { locales: ["en", "es"], defaultLocale: "en", routing: { prefixDefaultLocale: false } }`).
   No automatic locale redirect (Cloudflare Pages is static) — a visible language
   toggle in the nav + `hreflang` tags in `<head>` for SEO.

4. **What does NOT translate:**
   - "The Jentosy Project" / "The Jentosy Project, Inc." — the legal name.
   - The **JEN + AnTOSY** name etymology on About / Meet The Team — the wordplay
     only exists in English; the Spanish version explains it as "the name joins
     Jen Keller and Elizabeth Antosy" without implying the pun works in Spanish.
   - Proper nouns: people's names, org names (CBS News, NKF, KDIGO, Mount Sinai…),
     study acronyms (HCHS/SOL, NHANES).
   - Board bios: translate the prose, keep institution names and credentials.
   - `PUBLIC_*` env-driven embeds (Zeffy, Web3Forms) — Zeffy's form language is
     set on Zeffy's side; note as a follow-up with the founder's Zeffy account.

5. **SEO (ticket 11 / 12).** Add `hreflang` alternates; submit `es` URLs to
   Search Console; a Spanish-keyword Ad Grants ad group becomes possible later
   (not now). GA4 already captures path, so `/es/` traffic is measurable with no
   extra work.

## Decisions so far

- Spanish is in scope for v1 — amends ticket 01. (2026-08-27)
- Org name is the only thing that stays English everywhere. (2026-08-27)
- **Architecture: A** — Spanish page twins under `src/pages/es/`, plus a shared
  `src/i18n/ui.ts` dictionary for repeated chrome. English stays at root, Spanish
  at `/es/...`. Astro built-in i18n config, `prefixDefaultLocale: false`, no auto
  locale redirect, visible toggle + `hreflang`. (Founder, 2026-08-27)
- **Translation sourcing: AI-drafted, shipped, reviewed later.** The founder
  chose this over holding the clinical pages for bilingual review. Recorded
  plainly because it's a real risk decision: the Spanish FSGS/APOL1/Bronx-data
  copy will go live without the clinical-accuracy review the English versions
  got. Mitigation shipped alongside: a small "traducción automática, en revisión"
  note + error-report link in the footer of Spanish pages (removable once a
  review pass is done). A bilingual review pass stays on the post-launch list.
  (Founder, 2026-08-27)

### Open naming question — branded initiative names

The org name "The Jentosy Project" stays English (decided). Unclear whether these
also count as untranslatable names or as descriptive phrases that should translate:

- **"Where We Live"** — the initiative. Currently kept in English in the `/es/`
  pages, with surrounding copy translated. It's a plain English phrase, so a case
  exists for "Donde Vivimos."
- **"The Rare Renal Equity Project (REP)"** — kept in English; "REP" is used as an
  acronym elsewhere. Case for a Spanish name + keeping REP as the acronym.
- Board members' outside employers, study acronyms (HCHS/SOL), org names (NKF,
  KDIGO, CBS) — kept in English, not in question.

Founder call needed. Until then the `/es/` pages keep "Where We Live" / "REP" as
names. This is a locked-spec-adjacent item (see the drift lesson) — don't flip it
silently.

## Build checklist (architecture A)

**Infrastructure — done 2026-08-27**
- [x] `astro.config.mjs` i18n block (`en`/`es`, default `en`, `prefixDefaultLocale: false`)
- [x] `src/i18n/ui.ts` — shared chrome strings
- [x] `src/i18n/utils.ts` — `getLangFromUrl`, `useTranslations`, `localizePath`, `localeHref` (graceful EN fallback for unbuilt twins), `alternateUrls`
- [x] `src/i18n/pages.ts` — registry of which routes have an `/es/` twin; toggle + hreflang gate on it
- [x] `BaseLayout.astro` — `lang` attr, gated `hreflang` alternates, `/es/`-only "machine translation, under review" footer note
- [x] `LanguageToggle.astro` — EN/ES switch; only renders when the counterpart exists
- [x] `Nav.astro` + `Footer.astro` + `ThankYou.astro` — labels from `ui.ts`, toggle included; footer "The Need"→"Kidney Disease" label fixed in passing

**Pages** (`src/pages/es/<same path>.astro`) — ALL DONE 2026-08-27, every EN page has a twin
- [x] 404
- [x] contact/thank-you, donate/thank-you, partner-with-us/thank-you
- [x] where-we-live
- [x] about, about/team (4 board bios via `board.ts` `roleEs`/`bioEs`), about/what-we-do
- [x] index (home)
- [x] storytelling
- [x] donate, partner-with-us, contact (forms POST to Web3Forms, redirect to `/es/.../thank-you/`, `form_type` suffixed "(ES)")
- [x] privacy-terms
- [x] the-need (hub)
- [x] the-need/fsgs, the-need/apol1, the-need/data  ← clinical; shipped AI-drafted per founder decision, bilingual review still on the post-launch list

Shared components made locale-aware: `Nav`, `Footer`, `BaseLayout`, `ThankYou`,
`SupportResources`, `NewsletterSignup`, `StageStepper`, `QuickNav`, `Breadcrumb`.
Board data: `getBoard("es")`.

**Cross-cutting**
- [x] `es` URLs in sitemap (all 19; `/es/404/` filtered out). Submit to Search Console at launch.
- [x] `LanguageToggle` shows on every page now that all twins exist (bar hidden < 420px, always in the menu)
- [ ] drift guard: CI check when an EN page changes without its ES twin — still TODO
- [ ] Zeffy embed language (set on Zeffy's side — needs founder's account)
- [ ] bilingual review pass of the clinical pages (FSGS / APOL1 / hub / Bronx Data) — post-launch
- [x] `PUBLIC_CONTACT_EMAIL` powers the translation-error report link; falls back to `/es/contact/`
- [ ] `/es/*` 404s currently serve the English `/404.html` (Cloudflare static). A Cloudflare rule could route `/es/*` misses to `/es/404/`.

## Not yet specified

- Translation sourcing / review process for the clinical pages (decision 1).
- Architecture pick (decision 2 — recommendation is A).
- Whether any language beyond Spanish is anticipated (affects whether B/C's
  upfront cost is ever worth it).
- Per-page translation + review — the actual work, staged after architecture
  is picked. Suggested order: chrome → home → about cluster → mission/transactional
  pages → the four clinical pages last (they need review sign-off).

## Out of scope

- Languages other than English and Spanish, for now.
- Translating third-party embedded content (Zeffy widget, YouTube captions) —
  handled in those tools, not here.
- RTL layout work — not needed for Spanish.
