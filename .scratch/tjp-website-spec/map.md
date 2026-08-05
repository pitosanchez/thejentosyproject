Label: wayfinder:map

## Destination

A build-ready spec for The Jentosy Project website: site architecture, page list, per-page purpose, key messaging, calls to action, donation flow, audience priorities, content requirements, brand direction, and technical requirements — someone (the founder, using AI coding tools) can build from it without reinterpreting the organization's purpose. MVP-first: the spec defines a realistic v1 launch point, not a fully-complete future site.

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
- [Brand visual system](issues/08-brand-visual-system.md) — merged B+C: dark charcoal-navy opens every page, non-cream light paper informs; rust=Donate/steel=Partner; pushed to a new, separate claude.ai/design project (REP untouched). WCAG AA contrast verified and corrected at build time (rust/steel darkened, outline-button border fixed) — see ticket for before/after ratios.

## Not yet specified

- Post-MVP roadmap detail (v2+ features, expanded patient/community education, transplantation-equity content) — deliberately fuzzy until v1 scope and early traction exist.
- Governance/board content specifics beyond "gather board and advisory info" — depends on what the org formalizes as it grows.
- Any future multi-initiative site structure (e.g., if "Where We Live" or other initiatives eventually need their own site sections) — out of scope for v1 architecture, may resurface later.

## Out of scope

