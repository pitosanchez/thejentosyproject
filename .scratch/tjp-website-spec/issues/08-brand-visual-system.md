Type: prototype
Status: resolved

## Question

What logo direction, color palette, and typography should the website use, building on the existing "professional, credible, human-centered, community-focused" brand direction and audiences spanning healthcare, research, philanthropy, and policy? Raise fidelity with a rough visual direction (mood board / mock) to react to rather than deciding from description alone.

## Answer

Three structurally different directions were prototyped (A — editorial/institutional serif; B — warm Bronx-rooted bold sans; C — dark structural/systemic), then merged per the founder's choice of B+C, informed by concrete pattern research across five reference nonprofit sites (farmafrica.org, obama.org, wavesforwater.org, shineplano.org, risenow.us) plus a nonprofit-design-patterns roundup.

**Layout signature: dark opens, light informs.** Nav/hero/credibility-strip/stat-cluster lead every page in charcoal-navy (`#10161C`) — the bold first impression. The page then settles into a deliberately non-cream light neutral (`#EFEDE6`) for informative reading sections (disease-education cards, About copy). This is a related-but-inverted structural echo of Where We Live/REP's own light-opens/dark-accents pattern (discovered mid-ticket — REP is a separate, already-live platform under the same parent org, not something this ticket touches or derives from).

**Two-accent CTA system:** rust (`#B15A34`) = Donate (warmth, urgency); steel-blue (`#4C7A93`) = Partner With Us (institutional, structural) — distinct colors per distinct action, per the IOCDF pattern surfaced in the reference research.

**Typography:** bold system sans throughout (no custom webfonts, no literary serif) — headlines weight 800 with tight tracking, body 1.65–1.7 line-height for the informative pages, uppercase-tracked eyebrows.

**New component, informed by Rise Now / Waves for Water:** a stat cluster on the dark hero band using real facts already on record (8 lives changed by the donor chain, 3 focus diseases, 2 transplants) — never fabricated impact metrics, consistent with the content map's placeholder rules.

**Logo:** no new mark designed in this ticket — existing wordmark treatment (bold system sans, "The Jentosy Project") stands in for v1; a dedicated logo-mark exploration is deferred, not blocking launch.

**Full design system pushed to a new, separate claude.ai/design project** — "The Jentosy Project — Website Design System" (projectId `4c0d8aac-1dbc-43b3-b5ad-e089d99169c9`) — containing README.md (full rationale + REP relationship note), colors_and_type.css (CSS custom properties), and four preview cards (colors, type specimen, hero/nav component, disease-card component). REP's own design-system project was read but not modified.

**Open flag for build time:** rust and steel accents need a WCAG 2.2 AA contrast check against both paper and ink before implementation — asserted as a requirement here, not verified pixel-for-pixel in this mood-board pass.
