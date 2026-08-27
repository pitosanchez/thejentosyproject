Type: grilling
Blocked by: 01
Status: resolved

## Question

Given the MVP scope and the audience priority order (funders > researchers > healthcare orgs/partners > individual donors > policymakers > patients/community), what is the full page list, navigation structure, and per-page purpose for v1 of the site?

## Answer

**Pages:** Home; About/Mission; Founder's Story; Leadership/Board; The Need (hub) with three short sub-pages — FSGS, APOL1-Mediated Kidney Disease, IgA Nephropathy; What We Do; Partner With Us (single page, sectioned by audience: funders/foundations, researchers, healthcare orgs, policymakers); Donate; Contact; Privacy/Terms/Donor Disclosures (footer-only).

**Nav:** Home · About (Mission, Founder's Story, Leadership) · The Need · What We Do · **Partner With Us** · **Donate** — Partner and Donate styled as the two header CTA buttons, reflecting that institutional audiences outrank individual donors in priority. Contact and legal pages are footer-only.

**Judgment call accepted:** "The Need" is a hub + 3 short disease sub-pages (not one page) — serves the SEO/Ad Grants landing-page strategy (ticket 11) while staying within the MVP's "light education" boundary.

---

## Build-phase amendment — 2026-08-27

The v1 site as built has moved off this ticket's original page list in several
ways. This section is the current authoritative architecture; the list above is
kept as the original decision record.

**Disease sub-pages: FSGS and APOL1 only — IgA Nephropathy is cut for v1.**
Founder decision (2026-08-27): drop the IgA Nephropathy sub-page for now. It is
explicitly **revisitable** — a future phase can add it back as a third disease
page. Until then, "The Need"/"Kidney Disease" is a 2-disease hub. A third
Kidney Disease page now exists, but it is **"Bronx Data You Should Know"**
(`/the-need/data/`), a population-health page, not a disease page.

**Founder's Story is not a standalone page.** Its content lives in the opening
of `/about/` and in full on `/about/team/`. Any external reference (e.g. Ad
Grants sitelinks, ticket 11) should target `/about/` or `/about/team/`.

**"Leadership/Board" is now `/about/team/` ("Meet The Team").** Full board bios
render there from `src/lib/board.ts` (single source; adding a member there
propagates to every board surface).

**Nav label:** the hub formerly called "The Need" is labeled **"Kidney Disease"**
site-wide. Its URL (`/the-need/`) is unchanged.

**Pages added since the original list:** `/storytelling/` (the storytelling-as-mechanism
essay), `/where-we-live/` (the Where We Live initiative landing page),
`/about/what-we-do/`, `/the-need/data/`.

**Press & Credibility page: added in build phase, then removed 2026-08-27** at the
founder's call (it also sat against ticket 01's "no press section" out-of-scope
line). The CBS News coverage it centered is still linked from `/about/`; board
governance detail is on `/about/team/`. No `/press/` URL exists.

**Current nav:** Home · About (Meet The Team, What We Do) · Kidney Disease
(FSGS, APOL1, Bronx Data You Should Know) · Storytelling · **Partner With Us** ·
Contact — with **Donate** as the header CTA button and an **ES/EN** language
toggle to the right of it.

**Downstream:** ticket 11's Ad Grants campaign plan is rebuilt to match this
architecture — see its own build-phase amendment. Ticket 04's content map still
lists an IgA page and should be read with this cut in mind.

---

**Founder's Story anchor (corrected — see CONTEXT.md for the authoritative account):** first transplant from a friend (2009) → FSGS recurs, dialysis three times weekly (2014) → matched with donor Elizabeth Antosy via matchmaker Chaya Lipschutz (2019) → transplant scheduled Dec 19, 2019, cancelled the night before when Robert was found to have kidney cancer → Elizabeth joins a kidney exchange chain rather than walk away → matched through the chain to Jen Keller → after clearing cancer, Robert and Jen Keller transplanted Oct 20, 2021 → Elizabeth's decision to join the chain enabled 8 people to receive transplants. The organization's name honors both women: **JEN**(Keller) + An**TOSY**. Independently covered by CBS News New York (https://www.cbsnews.com/newyork/news/kidney-transplant-kidney-chain-robert-sanchez-elizabeth-antosy/), though a machine-summarized read of that article produced two inaccuracies (Oct 2020, "4" lives) that don't match the founder's direct account — treat the account above as authoritative. Home page gets a short pull-quote/callout ("As featured in CBS News New York") linking to the full page. Full narrative copywriting is ticket 02's job; this ticket only records the anchor facts and placement.
