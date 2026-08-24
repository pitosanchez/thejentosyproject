Label: wayfinder:map

## Destination

A build-ready spec for The Jentosy Project website: site architecture, page list, per-page purpose, key messaging, calls to action, donation flow, audience priorities, content requirements, brand direction, and technical requirements — someone (the founder, using AI coding tools) can build from it without reinterpreting the organization's purpose. MVP-first: the spec defines a realistic v1 launch point, not a fully-complete future site.

**Status:** this destination was reached — the spec closed 2026-08-04 (12/12 tickets resolved) and the site has been built from it since. This map is kept alive past that point to track what build-phase work has *amended* the locked spec (two items below do), and to surface what's still open before a real launch. Treat "Decisions so far" as spec decisions unless marked "Build phase."

## Notes

- Domain glossary: see [CONTEXT.md](../../CONTEXT.md) — Jentosy Project Inc. as parent org, "Where We Live" as one initiative (not the site's centerpiece), current focus = kidney disease education & health equity (FSGS, APOL1-mediated kidney disease, IgA Nephropathy), transplantation equity as future/secondary, Bronx-first with planned expansion.
- Skills every session should consult: `/grilling` and `/domain-modeling` are the default for grilling tickets; `/research` for research tickets; `/prototype` for the brand visual system ticket.
- Standing preferences:
  - Audience priority order (v1): institutional funders/foundations > researchers/research institutions > healthcare orgs/strategic partners > individual/community donors > policymakers/government > patients/families/community.
  - Self-built by the founder using AI coding tools — technical requirements should be specific, not hand-wavy.
  - Do not lock into closed website builders (Squarespace/Wix) absent a strong reason. Modern, maintainable, expandable stack.
  - 501(c)(3) and public-charity status are already complete — treat as given, not a ticket.
  - Long-term revenue goal: $10k/month in funding for the org. Distinct from the Google Ad Grants $10k/month free-ad-spend cap — the two numbers coincide but are not the same thing; don't conflate them in the spec.
  - Google Ad Grants + organic SEO are both in scope for the acquisition strategy from the start, framed as a funnel: Search → Education → Trust → Engagement → Donation/Partnership.
  - No hard external launch deadline; pace is set by execution speed, but the spec must define a real MVP cutline rather than staying open-ended.
  - **Voice & Approach — storytelling as the mechanism:** storytelling and emotional connection, not statistics alone, is the org's theory of change for moving people to act. Every page should pair evidence (research, disparities data, credibility signals) with a human throughline — the Founder's Story is the model, not a one-off About-page feature. Applies to content decisions across the whole map (Content Map, disease sub-pages, SEO strategy), not just the Founder's Story page.

## Decisions so far

<!-- one line per closed ticket -->

- [MVP scope](issues/01-mvp-scope.md) — v1 is mission/credibility + light disease education + partnerships + donation, on ~10 pages; full education library, blog, events, volunteer portal, multi-language, and live Ad Grants campaigns are all deferred.

- [Accessibility requirements](issues/09-accessibility-requirements.md) — target WCAG 2.2 Level AA (full conformance model), aligned with DOJ's Title II standard and TJP's status as a covered "social service center" under Title III.
- [Donation platform selection](issues/05-donation-platform-selection.md) — recommend Zeffy ($0 fees, recurring giving, built-in CRM/receipts), Give Lively as backup; PayPal secondary-only; a few vendor terms still need direct confirmation.
- [Tech stack options](issues/06-tech-stack-options.md) — surveyed Next.js/Vercel, Astro+headless-CMS, 11ty, WordPress, Webflow; no verdict yet, feeds ticket 07's decision.
- [Google Ad Grants requirements](issues/10-google-ad-grants-requirements.md) — TJP is eligible; $10k/mo is a $329/day cap with a $2 max-CPC (Smart Bidding can exceed it); 5% CTR, ad-group/sitelink, geo-targeting, and conversion-tracking rules must be maintained or the grant is suspended.
- [Site architecture & page list](issues/03-site-architecture-page-list.md) — ~10 pages incl. a 3-disease "The Need" hub; Partner/Donate as header CTAs; Founder's Story anchored on the Jen Keller / Elizabeth Antosy donor-chain story (the org's namesake) — see CONTEXT.md for the authoritative account.
- [Key messaging & narrative](issues/02-key-messaging-narrative.md) — mission/vision locked; Founder's Story ties the founder's 15 years incarcerated into a social-determinants-of-health thesis (poverty, education, incarceration, stress → disease); site-wide voice principle is storytelling-as-mechanism.
- [Content map](issues/04-content-map.md) — per-page exists/needs/placeholder breakdown; disease sub-pages need real copy + a clinical-accuracy review before launch; real photos must come from Robert/TJP, not fabricated; impact metrics/partner logos/testimonials deferred (org is pre-launch).
- [Tech stack decision](issues/07-tech-stack-decision.md) — Astro (Markdown/MDX, no CMS at v1) on Cloudflare Pages; Zeffy embed for donations, Formspree for forms; security baseline locked in (static output, CSP, Dependabot, no PII on TJP's own infra).
- [SEO & acquisition strategy](issues/11-seo-acquisition-strategy.md) — 3 Ad Grants campaigns mapped to disease sub-pages, The Need hub, and Partner/Donate; national geo-targeting; conversions = donation, partnership inquiry, contact form.
- [Analytics & conversion tracking](issues/12-analytics-conversion-tracking.md) — GA4 + Search Console; conversions fire on thank-you-page redirects (not cross-iframe events); 4 tracked conversions feed Google Ads Smart Bidding directly.
- [Brand visual system](issues/08-brand-visual-system.md) — merged B+C: dark charcoal-navy opens every page, non-cream light paper informs; rust=Donate/steel=Partner; pushed to a new, separate claude.ai/design project (REP untouched). WCAG AA contrast verified and corrected at build time (rust/steel darkened, outline-button border fixed) — see ticket for before/after ratios. **Superseded** by the Editorial palette below — kept here as history, not current state.

### Build phase (since spec closed, no formal tickets — one line per shipped decision)

- Real Bronx/national kidney-disease data visualizations (population donut, diabetes bar chart, national CKD dot plot, stat tiles) added to The Need hub and disease pages, sourced from NY State DOH/NIDDK/KDIGO-CDC-NHANES.
- GA4/Formspree/Zeffy moved from hardcoded placeholder strings to env vars; each degrades gracefully when unset (no script tag, "not connected yet" note, or placeholder embed instead of breaking).
- Three visual-redesign directions were prototyped (Chain, Clinical Warmth, Bronx Civic); Bronx Civic shipped first, then was itself replaced by a fourth direction, **Editorial** (cream/forest/gold palette, serif type), which the founder confirmed 2026-08-06 as "the design from here out."
- Home hero background swapped to a real archival photo (Third Avenue Elevated over the Cross Bronx Expwy, 1973–74, Jack E. Boucher/HAER, public domain via Wikimedia Commons).
- Nav rebuilt twice: first as a REP-modeled dropdown, then as the current full-screen menu overlay.
- Homepage "Who This Is For" gained a fifth audience card, **Patients & Families**, shown first — see the flag under Not yet specified; this sits against the standing v1 audience-priority note above, which ranks patients/community last.
- "Who This Is For" cards redesigned as fixed-height floating cards (shadow, rounded corners, numeral index) rather than the flat left-border editorial card used elsewhere on the site.
- Home hero: slow continuous Ken Burns zoom on the bg photo + a slightly lightened scrim, no palette/copy change.
- About's "Where the name comes from" section gained a video, embedded via YouTube (`youtube-nocookie.com`) rather than a locally-hosted file, since the CBS-produced segment isn't ours to redistribute; `VideoSlot` still supports a local-file fallback for a future self-hosted cut.
- Nav menu-item hover color: added `--rust-on-dark` (rust mixed 30% toward white, 4.69:1 on the dark menu bg) so hover reads as the Donate button's rust family without failing WCAG AA — literal `--rust` on that background is 2.45:1, below even the 3:1 large-text floor.
- **Amends [ticket 03](issues/03-site-architecture-page-list.md) and [ticket 11](issues/11-seo-acquisition-strategy.md):** IgA Nephropathy's sub-page was removed from nav and The Need hub — the hub now covers FSGS and APOL1 only, not the 3 diseases the page architecture locked in. Ticket 11's "Disease Education" Ad Grants campaign was structured around exactly 3 ad groups, one per disease sub-page; that campaign plan is now stale and needs revisiting before any live Ad Grants launch.
- **Amends [ticket 03](issues/03-site-architecture-page-list.md) and [ticket 11](issues/11-seo-acquisition-strategy.md):** Founder's Story is no longer a standalone page — its content was merged into About's opening section. Ticket 11 names "Founder's Story" as one of 4 fixed Ad Grants sitelinks; that target needs to become `/about/` (or an anchor within it) before Ad Grants launch, not its own URL.
- Repo housekeeping: the `design` branch's work was fast-forward-merged into `main` (no divergence, no merge commit needed); `design` was then deleted; `backend` was branched off the updated `main` for the next phase of work.
- A first-person "overwhelmed patient" walkthrough surfaced 5 real UX gaps, all fixed: Contact's form has no working fallback while Formspree is unconfigured (added an env-gated `PUBLIC_CONTACT_EMAIL` line); FSGS's hero opened with "50% reach kidney failure" before any orientation (rewritten to lead with what FSGS is, stat kept in context lower down; APOL1's lede softened the same way); The Need hub made readers page through 4 sections of national/disparity statistics before reaching "What Is Kidney Disease?" (reordered so patient orientation comes first, equity case follows "The Bottom Line"); nothing on the site linked to real external support despite citing NKF 11 times as a data source (added a `SupportResources` component — NKF Cares helpline, kidney.org/support — to The Need hub, both disease pages, and Contact); The Need hub and both disease pages ran 11,000–12,000px on mobile with no way to skip around (added a `QuickNav` jump-link strip to each).
- **Further amends [ticket 03](issues/03-site-architecture-page-list.md):** About was split into a hub + sub-pages (the pattern ticket 03 already used for The Need) after the founder confirmed it had become "messy and pointing in different directions." `/about/` now states only org identity/mission; the founder narrative, "Where the name comes from," and the storytelling-essay teaser moved to a new `/about/team/` ("Meet The Team," replaces `/leadership/`, built to take board/staff entries as they're added); `/what-we-do/` moved to `/about/what-we-do/`; `/about/storytelling/` (added earlier this session) promoted to a top-level `/storytelling/` page. Nav gained a Contact item and an About dropdown (About / Meet The Team / What We Do), alongside the existing The Need dropdown. Page count and nav structure both changed from ticket 03's original list — still ~10 destinations, just organized differently.
- `/about/` was rewritten twice more in one session, in opposite directions. First into a long-form magazine-essay treatment (well-crafted prose, ~1000+ words, meant to read start to finish). Then the founder clarified the actual audience — funders and partners want fast, memorable answers, not a narrative arc — so it was rebuilt again as a scannable Why/What/Where/How grid (~half the length), with the full founder story and storytelling philosophy left on Meet The Team / the Storytelling essay rather than re-told on About. Worth remembering for other pages: default to scannable-and-short for anything a funder lands on cold; save long-form narrative for pages people click into on purpose. Left `healingheart.webp` and `movement.webp` unplaced anywhere on the site after the essay version was cut — no natural home yet.

## Not yet specified

- Post-MVP roadmap detail (v2+ features, expanded patient/community education, transplantation-equity content) — deliberately fuzzy until v1 scope and early traction exist.
- Governance/board content specifics beyond "gather board and advisory info" — depends on what the org formalizes as it grows.
- Any future multi-initiative site structure (e.g., if "Where We Live" or other initiatives eventually need their own site sections) — out of scope for v1 architecture, may resurface later.
- Whether cutting IgA Nephropathy and merging Founder's Story into About are accepted as permanent — if so, ticket 03's page list, ticket 11's Ad Grants campaign/sitelink structure, and ticket 04's content map all need a matching update before Ad Grants goes live with stale assumptions baked in.
- Whether "Patients & Families" as a headline v1 homepage audience is an intentional change to the standing audience-priority order (institutional funders were meant to lead), or just this session's framing — worth a conscious yes/no rather than standing as silent drift.
- Zeffy donation embed, Formspree form IDs, GA4 measurement ID, and now `PUBLIC_CONTACT_EMAIL` — still placeholders, blocked on real account credentials, not on code. Contact page no longer dead-ends without them (falls back to a real external resource), but Jentosy's own direct line is still not live for a visitor who wants to reach the org itself, not NKF.
- Board bios beyond the founder; legal review of Privacy/Terms; clinical-accuracy review of the FSGS/APOL1 disease pages.
- Three photos from an early batch (a clinical provider/patient photo, an APOL1 infographic with its own visual identity, a Bronx food-assistance resource-listing screenshot) — still unplaced, purpose/placement unconfirmed.
- The trauma/poverty/biology storytelling direction (making the social-determinants thesis more visceral and embodied) — research notes exist at `research/trauma-poverty-kidney-disease-evidence.md`, but haven't been turned into shipped copy; physiological claims need that sourcing checked before writing.
- **The `backend` branch's entire scope** — no destination, no decisions, no tickets exist yet for whatever "backend" means here (a real donation/CRM backend, auth, a CMS, server-side rendering, something else). This is exactly the kind of foggy-route effort this skill is for; it deserves its own map before implementation starts, rather than accreting ad hoc like several items above did.

## Out of scope

Deferred from [ticket 01](issues/01-mvp-scope.md), not reopened since:

- Full patient/community disease-education library (v1 is credibility-level education, not a full library).
- Blog / news / press section.
- Events calendar.
- Volunteer signup / community-programs portal.
- Newsletter automation beyond basic capture.
- Multi-language support.
- Dedicated transplantation-equity section (future-work mention only in v1).
- Video/testimonial library (beyond the single "Where the name comes from" video).
- Dedicated subsites for Where We Live or other initiatives.
- Impact dashboard / detailed metrics.
- Active Google Ad Grants campaign management (tracking hooks ship in v1; campaigns run post-launch — and per the amendments above, the campaign plan itself needs revisiting first).
