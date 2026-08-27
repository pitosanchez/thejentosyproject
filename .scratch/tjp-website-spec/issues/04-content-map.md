Type: grilling
Blocked by: 01, 03
Status: resolved

## Question

For each page in the site architecture, what content already exists (founder story, mission language, disease/disparity descriptions), what needs to be written or gathered (disease-education copy, program descriptions, board/advisor info, partner logos, photos, impact metrics, policies/privacy/disclaimers), and what can remain a placeholder for v1?

## Answer

| Page | Exists | Needs (before launch) | Placeholder-OK for v1 |
|---|---|---|---|
| Home | Mission/vision, narrative arc, voice principle | Hero copy, CBS pull-quote treatment, Partner/Donate/Learn CTA copy | Impact metrics, partner-logo strip, testimonials — org is pre-launch, don't exist yet |
| About/Mission | Mission, vision, mission-shift framing, social-determinants thesis | Full prose weaving these together, brief org history (founding, 501(c)(3)), light Where We Live mention | — |
| Founder's Story | Full narrative shape + corrected facts (ticket 02) | Polished final prose; photo(s) of Robert | Photo can be placeholder until supplied |
| Leadership/Board | Nothing yet | Bios, titles, photos for founder + any confirmed board/advisors | Launch founder-only if board isn't finalized; add others as confirmed |
| The Need (hub) | Social-determinants thesis, general disparities framing | Hub copy tying thesis to the three linked disease pages | — |
| FSGS / APOL1 / IgA Nephropathy sub-pages | Awareness these are the three focus diseases | Light, credibility-level explainer copy per disease | None — load-bearing for the SEO/Ad Grants strategy (ticket 11), need real short copy at launch. **Flag: recommend a clinical/medical-accuracy review pass before publishing**, given this is health information |
| What We Do | MVP framing (programs summary, Where We Live nod, future-work note) | Actual program descriptions (not yet written) | Lighter v1 version fine: "current focus is education/outreach in the Bronx, expanding over time" rather than a full program slate |
| Partner With Us | Audience segmentation (funders/researchers/healthcare/policymakers) | Per-audience partnership messaging, inquiry form | Partner logos/named partnerships — none exist yet, omit rather than placeholder |
| Donate | Platform decision (Zeffy) | Donation-page copy, CTA copy (not yet written) | — (core to MVP, not deferrable) |
| Contact | — | Minimal copy, form fields | Low-risk |
| Privacy/Terms/Donor Disclosures | Nothing yet | Template-based policy (Zeffy/nonprofit-standard), donor disclosures | Fine to launch with a template; recommend legal review before go-live given real donor PII is collected |

**Cross-cutting — photos:** real photos (founder, board, Bronx community, partners) must come from Robert/TJP directly or a photographer — an AI agent won't fabricate synthetic images of real people. Stock photography can fill generic placeholder slots at launch; icons/illustrations are an option if a designed look is preferred over photography in spots. Impact metrics, partner logos, and testimonials aren't just unwritten — they can't exist yet given the org is pre-launch, so they're deferred rather than gathered.

**Placeholder-photo sourcing requirement (spec-level, not sourced during planning — see note below):** recommended sources for community/health-equity-themed launch placeholders:
- **Nappy.co** — free stock photography specifically featuring Black and Brown people; directly relevant given the org's focus on communities disproportionately affected by FSGS/APOL1/IgA Nephropathy.
- **CDC Public Health Image Library (PHIL)** — public-domain medical/health imagery; appropriate for the FSGS/APOL1/IgA Nephropathy sub-pages specifically, since it's authoritative and licensing-clean.
- **TONL** — paid stock agency built around authentic, diverse representation, if budget allows for higher-quality launch imagery.
- **Unsplash / Pexels** — general free stock as a fallback for non-people imagery (Bronx skyline, abstract health/community visuals); curate carefully since representation isn't guaranteed by default search.

Note: this is a sourcing *recommendation* for the spec, not a claim that specific images have been selected or licensed — actually choosing, downloading, and clearing individual images is build-phase execution, out of scope for this planning map (see [map.md](../map.md) Notes on plan-vs-do).

---

## Build-phase amendment — 2026-08-27

The site as built has moved off the table above in several ways. This section is
the current authoritative content state; the table stays as the original
decision record. Aligns with the 2026-08-27 amendments on
[ticket 03](03-site-architecture-page-list.md) and
[ticket 11](11-seo-acquisition-strategy.md).

### Page list changed

- **IgA Nephropathy sub-page: cut for v1** (founder decision, revisitable). "The
  Need" / "Kidney Disease" is a 2-disease hub — FSGS and APOL1 only. The row
  "FSGS / APOL1 / IgA Nephropathy sub-pages" now reads as FSGS / APOL1.
- **A third "Kidney Disease" page now exists — but it is not a disease page.**
  `/the-need/data/` ("Bronx Data You Should Know") is a population-health page
  (Bronx CKD surveillance, diabetes/hypertension by neighborhood, poverty/
  demographics, APOL1 in Hispanic/Latino and Puerto Rican communities via
  HCHS/SOL, FSGS/HIV research gaps, a data-gaps section). It is the 3rd item in
  the Kidney Disease nav dropdown.
- **Founder's Story is not a standalone page.** Its content lives in the opening
  of `/about/` and in full on `/about/team/`.
- **"Leadership/Board" is `/about/team/` ("Meet The Team").** Built out for real:
  four board members (Daryl Spivey, Junelle Speller, Dr. Josh Fessel, Glenda V.
  Roberts), each with a photo and full bio, rendered from `src/lib/board.ts` (the
  single source of truth — add a member there and every board surface updates).
  **Still open:** each member's *board* role (chair / treasurer / clinical
  advisor) — the `officerTitle` field is in `board.ts` and unset; the founder is
  handling titles separately.
- **New pages since the table:** `/storytelling/` (the storytelling-as-mechanism
  essay), `/where-we-live/` (the Where We Live / REP initiative landing page),
  `/about/what-we-do/` (moved under `/about/`).
- **Press & Credibility page** was added in build phase, then removed 2026-08-27
  (it sat against ticket 01's no-press-section boundary). CBS coverage stays
  linked from `/about/`.

### Content status vs. the "Needs (before launch)" column

- **Disease-page clinical-accuracy review: DONE** (founder, 2026-08-27). The
  table flagged this as recommended-before-publish for the FSGS/APOL1(/IgA)
  pages; it has been completed for FSGS, APOL1, the hub, and Bronx Data.
  **Follow-up:** those pages (and `/privacy-terms/`) still carry on-page
  disclaimer text saying the content "has not yet completed a formal
  clinical-accuracy review" — that language is now stale and needs a founder
  decision on whether/how to soften it (EN + ES, ~8 pages).
- **Legal review of Privacy/Terms: DONE** (founder, 2026-08-27). The table
  flagged this as recommended-before-go-live.
- **Forms:** Contact and Partner inquiry forms, and the newsletter capture, use
  **Web3Forms** (not Formspree — see ticket 07 amendment). Still placeholder
  until `PUBLIC_WEB3FORMS_ACCESS_KEY` is set.
- **Contact:** an env-gated `PUBLIC_CONTACT_EMAIL` fallback line was added, plus
  a `SupportResources` component (NKF Cares helpline) so the page never
  dead-ends while the form is unconfigured.
- **Donate:** page copy written; Zeffy embed is placeholder until
  `PUBLIC_ZEFFY_EMBED_URL` is set.
- **Impact metrics / partner logos / testimonials:** still deferred — still don't
  exist (org is pre-launch). Unchanged.
- **Photos:** the founder-supplied-only rule stands. Several supplied photos are
  placed; a handful from an early batch remain unplaced (see the main map's "Not
  yet specified").

### Spanish

Every page in this map now has a Spanish twin under `/es/` (machine-drafted; a
bilingual review of the four clinical pages is still the founder's call — see
`.scratch/tjp-i18n-spec/map.md`). Not a content-map ticket item originally;
recorded here so the map stays honest.
