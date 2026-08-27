Type: grilling
Blocked by: 03, 04, 10
Status: resolved

## Question

Given the page architecture, the content map, and Google Ad Grants' requirements, what is the keyword strategy, which pages serve as search-focused/Ad-Grants landing pages (FSGS, APOL1-mediated kidney disease, IgA Nephropathy, rare kidney disease, kidney health equity), and what does the Search → Education → Trust → Engagement → Donation/Partnership funnel look like page-by-page?

## Answer

**Keyword clusters → landing pages** (all multi-word — Ad Grants bans single-word/generic keywords): FSGS terms ("FSGS kidney disease," "focal segmental glomerulosclerosis," "FSGS in the Black community") → FSGS sub-page; APOL1 terms ("APOL1-mediated kidney disease," "APOL1 kidney risk") → APOL1 sub-page; IgA Nephropathy terms (incl. "Berger's disease") → IgA Nephropathy sub-page; "kidney health equity," "Bronx kidney health" → The Need hub; "rare kidney disease nonprofit/awareness" → Home/The Need hub; partnership terms → Partner With Us; donation-intent terms → Donate.

**Campaign/ad-group structure** (satisfies Ad Grants' ≥2 ad groups/≥2 ads/≥2 sitelinks): Campaign "Disease Education" (3 ad groups: FSGS, APOL1, IgA Nephropathy, each → its sub-page); Campaign "Health Equity & Mission" (The Need hub, Home); Campaign "Partnership & Support" (Partner With Us, Donate). Sitelinks: Donate, Partner With Us, Founder's Story, The Need hub.

**Geo-targeting:** national (U.S.), not Bronx-only — disease searchers, funders, researchers, and donors are nationwide; Bronx-first stays a content fact, not a targeting restriction.

**Bidding:** conversion-based Smart Bidding (Maximize Conversions to start).

**Conversions to track (feeds ticket 12):** donation completed (Zeffy), partnership/collaboration inquiry submitted, contact form submitted, light newsletter/email capture if included in v1.

**Funnel:** Search (paid + organic via disease pages) → Education (The Need hub + 3 disease pages) → Trust (Founder's Story, About/Mission, Leadership) → Engagement (What We Do) → Donation/Partnership (Donate, Partner With Us).

---

## Build-phase amendment — 2026-08-27: Ad Grants campaign plan rebuilt to match the site as built

The original plan above assumed 3 disease sub-pages, a standalone Founder's Story
URL, and a hub labeled "The Need." The site has since changed (see ticket 03's
2026-08-27 amendment): **IgA Nephropathy is cut for v1** (revisitable later), the
hub is labeled **"Kidney Disease"**, Founder's Story is now a section of `/about/`,
and a Bronx population-health page (`/the-need/data/`) and a `/where-we-live/`
landing page now exist. Below is the campaign plan rebuilt around those pages.
Everything not restated here (national geo-targeting, Maximize Conversions Smart
Bidding, multi-word-keywords-only rule, ≥2 ads per ad group, 5% CTR obligation)
carries over unchanged.

**Landing pages that actually exist for paid search:**
`/the-need/fsgs/`, `/the-need/apol1/`, `/the-need/` (hub), `/the-need/data/`
(Bronx data), `/where-we-live/`, `/partner-with-us/`, `/donate/`.

### Campaign A — "Kidney Disease Education" (2 ad groups, was 3)

- **Ad group: FSGS** → `/the-need/fsgs/` — "FSGS kidney disease", "focal segmental
  glomerulosclerosis", "what is FSGS", "FSGS Black community", "FSGS after transplant".
- **Ad group: APOL1** → `/the-need/apol1/` — "APOL1-mediated kidney disease",
  "APOL1 kidney risk", "APOL1 gene kidney disease", "APOL1 genetic testing".

Note: dropping the IgA ad group leaves this campaign at the 2-ad-group minimum.
If maintaining 5% CTR across only two disease ad groups proves hard, fold these
into Campaign B rather than run a bare-minimum campaign — or bring back the IgA
page (and its ad group) as the cleaner fix.

### Campaign B — "Health Equity & Mission" (2 ad groups)

- **Ad group: Kidney health equity** → `/the-need/` — "kidney health equity",
  "kidney disease disparities", "rare kidney disease nonprofit", "kidney disease awareness".
- **Ad group: Bronx kidney health** → `/the-need/data/` — "Bronx kidney disease",
  "Bronx kidney health statistics", "kidney disease Bronx", "Bronx health equity".
  (`/where-we-live/` is the alternate destination if the data page underperforms
  as a landing page.)

### Campaign C — "Partnership & Support" (2 ad groups)

- **Ad group: Partnership** → `/partner-with-us/` — "kidney health nonprofit
  partnership", "health equity research collaboration", "kidney disease community partner".
- **Ad group: Give** → `/donate/` — "donate kidney disease", "kidney health
  charity donation", "support kidney disease nonprofit".

### Sitelink extensions (account-level, ≥2 required)

| Display text | URL | Note |
|---|---|---|
| Donate | `/donate/` | unchanged |
| Partner With Us | `/partner-with-us/` | unchanged |
| Our Story | `/about/` | replaces "Founder's Story" — no longer its own URL |
| Kidney Disease | `/the-need/` | display text matches the nav, not the ticket's original "The Need hub" wording |
| Bronx Data | `/the-need/data/` | optional 5th |

### Conversions (feeds ticket 12)

Unchanged set — donation completed, partnership inquiry, contact form submitted —
plus **newsletter/email capture**, which is now a real action on the site (the
`NewsletterSignup` component on Contact/Donate/Partner), no longer an "if
included in v1."

### Still deferred

Per ticket 01, live Ad Grants campaign management is post-launch. This plan is
build-ready but not running; revisit keyword lists against Search Console data
once organic traffic exists, and re-add IgA if that page comes back.
