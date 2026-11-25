# Editorial audit — The Jentosy Project site (2026-11-25)

Scope: every public English page (Spanish mirrors English, so every fix applies to both).
Method: full read of all ~8,000 words + a script that flags any 8-word phrase or
near-identical sentence appearing on more than one page.

## The core problem

The site has **one story told five times** instead of five pages that each tell
their part of one story. Home, About, What We Do, Donate, and Partner each
re-explain *what we do*, *how we work*, and *who it's for* in slightly different
words. A visitor who reads three pages hears the same three paragraphs three ways —
which reads as padding and quietly undercuts credibility.

The fix is a **division of labor**: each page owns one question, says it once,
and links to the others instead of re-summarizing them.

| Page | Owns the question | Should NOT re-explain |
|---|---|---|
| Home | "Why should I care, and where do I go?" | the method, the founder's full story |
| About | "Who are you and why do you exist?" (mission, vision, name, founder's why) | the activities list |
| What We Do | "What do you actually do?" (the activities) | the six-inputs method (About owns it) |
| Meet The Team | "Who's behind it?" (Robert's full story, board) | — |
| Storytelling | "Why stories?" (the argument) | Where We Live's details (link instead) |
| Where We Live | "What is REP?" | — |
| Kidney Disease hub | "What is kidney disease?" (patient basics) | the org's social-determinants thesis |
| FSGS / APOL1 | the disease, in depth | — |
| Bronx Data | "What do the numbers say about the Bronx?" | APOL1 biology, FSGS biology (link instead) |
| Partner / Donate | "How do I help?" | re-pitching the whole mission |

## Repetition found (and the fix)

### Across pages
1. **The same list of activities, three times.** Home "How it works" (Educate / Partner /
   Fund), What We Do "The work" (education / partnerships / stories / Where We Live), and
   Donate "What your gift supports" (education / outreach / partnerships) describe the same
   work in three wordings. → What We Do owns it; Home links to it in one line; Donate keeps
   its list but phrased as *what money buys*, not a mission re-pitch.
2. **"How we work" six inputs, twice.** About and What We Do both list the identical six
   (education, data, geography, research, partnerships, storytelling). → Keep on About only.
3. **The audiences, twice.** Home's five audience blurbs and Partner's four partner-type
   blurbs are near-duplicates (same wording for funders, researchers, healthcare orgs,
   policymakers). → Partner owns the detail; Home keeps a short "find your way in" list.
4. **The social-determinants paragraph, verbatim on Home and the Kidney Disease hub**
   ("Kidney disease disparities are downstream of poverty… incarceration, broken homes…").
   On the hub it also breaks the page's job (patient education) and its next sentence
   ("These conditions take a measurable toll…") doesn't follow. → Keep on Home only.
5. **"Rare kidney disease, plainly explained"** is the title of both the Home section and the
   hub — and the hub mostly teaches *common* CKD. → Hub becomes "Kidney disease, plainly
   explained." Home keeps "rare" for its FSGS/APOL1 pointer.
6. **"Before they reach the transplant list"** — Home (twice) + What We Do + Donate hero. A
   strong line spent four times. → Keep once (Donate hero).
7. **"Starting in the Bronx"** — 7+ times (Home ×3, About, What We Do ×2, Donate, footer).
   → Footer tagline + Home hero only.
8. **"Close the (kidney-care) gap"** — 9+ times. The mission statement (locked) keeps it;
   everywhere else, say what closes it.
9. **"Lived experience as a form of evidence"** — About, What We Do, Storytelling. → About
   (one-line label) + Storytelling (the argument). Cut from What We Do.
10. **"Where you live should never decide what you know"** — Home quote + About statement.
    → It's the brand line; keep it on About, rework the Home quote around "social capital".
11. **NKF support box** — identical on four pages, and opens with an apology ("The Jentosy
    Project's own contact line is still coming online"). It *should* appear on each
    clinical page (patients land anywhere), but shorter and without the apology; "a real,
    free patient helpline" → "a free patient helpline".
12. **StoryCorps page** — hero lede and section title are the same sentence. → New lede.

### Within the Kidney Disease hub
- End-stage kidney disease is defined **three times** (stages note, ESKD paragraph,
  treatment section). → Once.
- "Early kidney disease has no symptoms" is said **three times** (Important box, Symptoms,
  Bottom Line). → Once, prominently.

### Within Bronx Data
- The APOL1 section re-tells the APOL1 page (sleeping-sickness origin, "most carriers never
  develop disease"). → Keep only what's unique here (ancestry ≠ identity; HCHS/SOL Bronx
  research) and link to the APOL1 page for the biology.
- The FSGS section re-tells the FSGS page. → Keep the Bronx research-gap point; link out.

## Voice problems (internal language leaking into public copy)
- Home CTA: *"A funder, researcher, or healthcare partner should be able to understand why
  this work matters in minutes — and a supporter should be able to act in seconds."* This is
  a sentence from the website spec, describing the reader in the third person. → Rewrite.
- Disclaimers: *"credibility-level education"* is spec jargon. → "general education".
- Partner: *"a clear, credibility-first approach"*. → Cut.
- Home stats: *"a gap this organization exists to close"* → "we exist to close".
- Where We Live: *"geography a reader can actually see"* → "a map you can actually see".

## Consistency / accuracy flags — need the founder
A. **Stale disclaimer (factually wrong).** FSGS, APOL1, the hub (and Bronx Data) say the page
   "has not yet completed a formal clinical-accuracy review." Per the project map, that
   review was completed 2026-08-27. Proposed: "This page is general education, not medical
   advice. Talk to your doctor about your own risk, testing, and treatment."
B. **Where We Live — does the map exist?** Storytelling shows a screenshot of a "Where We
   Live" platform with "Explore the Map / Read Stories", and calls REP "our flagship
   initiative." The Where We Live page says "An interactive Bronx map — not built yet."
   These can't both be true.
C. **APOL1 wording.** The APOL1 page says "APOL1 is a protein your body makes"; Bronx Data
   says "APOL1 is a gene." Precisely: APOL1 is a gene that makes a protein (apolipoprotein
   L1). Also "West Africa" (APOL1 page) vs "sub-Saharan Africa" (Data). Suggest aligning
   both pages to one phrasing.
D. **"Two-time kidney transplant recipient"** appears twice on About (hero + signature).
   Keep once per page.

## Applied as each page is rebuilt
Every fix above is applied page by page together with the layout redesign, in English and
Spanish. Clinical facts, statistics, sources, and provenance notes are never changed —
only de-duplicated and re-sequenced. Items A–C wait for the founder.

## Founder decisions (2026-11-25)
- A → Drop the review line. Disclaimer: "This page is general education, not medical advice.
  Talk to your doctor about your own risk, testing, and treatment."
- B → Where We Live map is **in development**. Describe it that way everywhere; the
  screenshot is captioned as a preview.
- Helpline box → remove the "own contact line is still coming online" apology.

## Status (2026-11-25, end of first pass)
Applied (EN + ES): items 1–12 (What We Do keeps the activities, About keeps the six-inputs method,
Home points instead of re-pitching, social-determinants thesis on Home only, hub retitled
"Kidney disease, plainly explained", transplant-list line once on Donate, "starting in the Bronx"
down to Home + About, StoryCorps lede, helpline box without the apology); hub ESKD defined once and
"no early symptoms" said once; all voice fixes; A (disclaimer, incl. Privacy & Terms and JSON-LD);
B (Where We Live "in development" everywhere, screenshot captioned as a preview); C (APOL1 "is a gene
that makes a protein"); D (About). Also corrected Where We Live's stale description of Bronx Data.
Kept on purpose: Bronx Data's APOL1 section (its ancestry-vs-identity argument is unique to that page,
and its "most carriers never get sick" line is a safety caveat next to the stats); the helpline box on
each clinical page (patients land anywhere). Result: ~8,000 → ~7,700 words.
Clinical pages: layout pass done 2026-11-25 (sticky two-column sections, real section titles,
alternating bands, closing CTA); hub's APOL1 card now uses the ancestry framing. "West Africa" (APOL1) vs "sub-Saharan Africa" (Data) left as is — both accurate.
