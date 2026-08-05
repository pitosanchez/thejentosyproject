# Accessibility Requirements — Standard and Practices

Research for: `.scratch/tjp-website-spec/issues/09-accessibility-requirements.md`
Date: 2026-08-04

## Question

What accessibility standard (e.g. WCAG 2.1/2.2 AA) and specific requirements should The Jentosy Project's website spec commit to, given nonprofit/ADA legal exposure and a healthcare-adjacent, health-equity-focused audience that may include visitors with disabilities or limited digital access?

## Method

Primary sources only: the W3C's own WCAG 2.1 and 2.2 Recommendations and Understanding documents, and the U.S. Department of Justice's own ADA.gov guidance and 2024 Title II rule. Secondary/legal-commentary sources are used only for the state of ADA Title III litigation (an area where DOJ has not issued a binding rule), and are labeled as such.

---

## 1. WCAG conformance levels, per the W3C

**Source:** W3C, *Web Content Accessibility Guidelines (WCAG) 2.1*, W3C Recommendation (updated 6 May 2025), https://www.w3.org/TR/WCAG21/ — and *Understanding Conformance*, https://www.w3.org/WAI/WCAG21/Understanding/conformance

WCAG success criteria are organized under four principles — **Perceivable, Operable, Understandable, Robust** ("POUR") — and each criterion is assigned to one of three conformance levels:

- **Level A (minimum):** a page conforms if it satisfies "all the Level A success criteria, or a conforming alternate version is provided." These address the most fundamental barriers.
- **Level AA:** a page conforms if it satisfies "all the Level A and Level AA success criteria, or a Level AA conforming alternate version is provided." The W3C's own text notes AA is "commonly referenced in policies and regulations as the standard organizations typically target."
- **Level AAA (enhanced):** requires all A, AA, and AAA criteria. The spec explicitly advises against adopting AAA site-wide: *"It is not recommended that Level AAA conformance be required as a general policy for entire sites because it is not possible to satisfy all Level AAA success criteria for some content."* The spec also notes that "even content that conforms at the highest level (AAA) will not be accessible to individuals with all types... of disability," meaning AAA is not a ceiling that guarantees universal access — it's simply a stricter, partial checklist.

W3C's five formal conformance requirements (beyond picking a level) are also worth internalizing for any conformance claim:

1. **Conformance Level** — one of A/AA/AAA, met in full (not "mostly AA").
2. **Full Pages** — conformance applies to whole pages, not fragments; "cannot be achieved if part of a web page is excluded," and this includes responsive/adaptive variations of a page.
3. **Complete Processes** — if a page is one step in a process (e.g., a multi-step donation flow), *every* page in that process must conform at the stated level or better. A donation form can't be AA if the confirmation or payment step isn't.
4. **Accessibility-Supported Ways of Using Technology** — only techniques verified to work with real assistive technology count toward conformance; anything else needs an accessible alternative.
5. **Non-interference** — even non-supported technology on the page must not block access to the rest of it. Four criteria apply universally regardless of level: no unmanageable audio interference, no keyboard traps, no seizure-triggering flashing, and no unstoppable auto-playing content.

### WCAG 2.2 vs. 2.1

**Source:** W3C, *WCAG 2.2*, W3C Recommendation, published 12 December 2024, https://www.w3.org/TR/WCAG22/

WCAG 2.2 is the current W3C Recommendation and is **backward compatible**: "Content that conforms to WCAG 2.2 also conforms to WCAG 2.0 and WCAG 2.1." The W3C "encourages use of the most current version of WCAG when developing or updating web accessibility policies." WCAG 2.2 adds 9 success criteria on top of 2.1:

- **Level A additions:** 3.2.6 Consistent Help, 3.3.7 Redundant Entry
- **Level AA additions:** 2.4.11 Focus Not Obscured (Minimum), 2.5.7 Dragging Movements, 2.5.8 Target Size (Minimum)
- **Level AAA additions:** 2.4.12 Focus Not Obscured (Enhanced), 2.4.13 Focus Appearance, 3.3.8 & 3.3.9 Accessible Authentication

Practically: targeting **WCAG 2.2 Level AA** costs nothing over targeting 2.1 AA (it's a strict superset relationship), is what the W3C itself now recommends as current best practice, and picks up two directly relevant new AA criteria for a form-heavy, mobile-visited nonprofit site: **2.5.8 Target Size (Minimum)** (touch targets ≥24×24 CSS px) and **3.3.7 Redundant Entry** (don't make donors/visitors re-enter information the site already has, e.g. across a multi-step donation flow).

---

## 2. ADA applicability and legal exposure for a nonprofit website

**Source:** DOJ, "Guidance on Web Accessibility and the ADA," https://www.ada.gov/resources/web-guidance/

- **Title II** covers "all services, programs, and activities of state and local governments" — not applicable to a private 501(c)(3).
- **Title III** covers "businesses open to the public," which DOJ's own examples include (per https://www.ada.gov/topics/intro-to-ada/) explicitly as **"Businesses and nonprofits serving the public"** — doctors' offices, hospitals, day care centers, and (per DOJ's regulatory categories, see below) social service establishments.
- DOJ does **not** mandate one specific technical standard by regulation for Title III, but states plainly: *"The Department's longstanding interpretation of the general nondiscrimination and effective communication provisions applies to web accessibility,"* and directs readers toward **"the Web Content Accessibility Guidelines (WCAG) and the Section 508 Standards, which the federal government uses for its own websites"** as the reference technical guidelines.
- On enforcement: *"the Department is committed to using its enforcement authority to ensure website accessibility for people with disabilities."* DOJ also states organizations "have flexibility in how they comply... But they must comply with the ADA's requirements" — i.e., no specific standard is legally mandated for Title III entities, but *some* effective, equivalent method of accessible communication is required, and DOJ can and does enforce against noncompliant sites.

### Does Title III actually reach a nonprofit like this one?

Title III applies to any private entity operating one of 12 statutory categories of "public accommodation" (42 U.S.C. § 12181(7)). Relevant here: DOJ's regulatory guidance and technical assistance materials define **"social service center establishments"** to include things like day care centers, senior centers, homeless shelters, food banks, and — significantly — entities providing **medical care, meals, transportation, or counseling** as a "significant enough level of social services." (Source, secondary but citing DOJ's own regulatory text/technical assistance manual: web search summarizing https://www.ada.gov/resources/title-iii-manual/ and the 12-category regulatory list; primary confirmation via https://www.ada.gov/topics/intro-to-ada/, which lists "doctors' offices and hospitals" as covered examples alongside "Businesses and nonprofits serving the public.") A rare-disease/health-equity nonprofit that publishes disease education and connects patients to resources sits squarely in the fact pattern DOJ treats as covered — this is not a stretch reading.

### The one open legal question: online-only presence

Courts are split on whether a website with **no associated physical location** counts as a "place of public accommodation" on its own (secondary sources — legal commentary, not DOJ):

- Some circuits/courts (e.g., a Minnesota federal court, per legal commentary) have held websites themselves are covered.
- At least one federal court in New York has held a purely virtual business with no physical location is *not* covered under Title III.
- Legal commentary (American Bar Association, *Business Law Today*, Aug. 2025, https://www.americanbar.org/groups/business_law/resources/business-law-today/2025-august/digital-accessibility-under-title-iii-ada/) notes website-accessibility suits made up roughly 36% of all ADA Title III federal filings in 2025, and that **WCAG 2.1 Level AA functions as the de facto standard courts and settlement agreements reference**, even absent a Title III regulation naming it.

**Net legal read:** Whether or not TJP's exact fact pattern would be litigated successfully, (a) DOJ Title III almost certainly extends to a health-focused nonprofit serving the public even online-only under prevailing DOJ interpretation and typical settlement practice, (b) plaintiffs' firms are litigating this exact fact pattern at high volume, and (c) WCAG 2.1/2.2 AA is the uncontested reference standard used in DOJ guidance, DOJ's own regulatory choice for Title II (below), and essentially every Title III consent decree and settlement on record. There is no credible argument for targeting anything below AA.

### DOJ's own regulatory choice of standard (Title II, by analogy)

**Source:** DOJ, 2024 Title II final rule fact sheet, https://www.ada.gov/resources/2024-03-08-web-rule/

Even though Title II doesn't apply to a private nonprofit, it is DOJ's own most concrete, binding statement of what "ADA-compliant" means technically, and it is instructive: the rule **adopts WCAG 2.1 Level AA as the mandatory technical standard** for state/local government web content, stating it "says what is needed for web accessibility, such as requirements for captions for videos." Compliance deadlines are population-based (April 2027 / April 2028, per an Interim Final Rule extension), which has no bearing on a nonprofit but confirms DOJ, when forced to write a specific bar into a regulation, chose **WCAG 2.1 AA**, not a lower or higher bar. The rule permits "equivalent facilitation" — alternative methods are fine if they provide equal or greater accessibility than WCAG 2.1 AA.

---

## 3. Practical implications for a health-information + donation nonprofit site

Mapping W3C's actual success criteria (Sections 1–2 above) onto TJP's site shape — disease-education content, forms (contact/donation/newsletter), possible video, and a mobile-heavy visitor base:

### Forms (donation, contact, newsletter signup)
Per DOJ's own guidance (ada.gov/resources/web-guidance/): *"Labels allow people who are blind and using screen readers to understand what to do with each form field... It is also important to make sure that people who are using screen readers are automatically informed when they enter a form field incorrectly."* This maps directly to WCAG:
- **1.3.1 Info and Relationships (A)** — form structure/labels programmatically associated, not just visually adjacent.
- **3.3.2 Labels or Instructions (A)** — every input has a visible, associated label.
- **3.3.1 Error Identification (A)** — errors identified in text, not color/icon alone, and announced to assistive tech.
- **3.3.7 Redundant Entry (A, new in 2.2)** — a multi-step donation flow shouldn't force re-entry of the same info (name, email) across steps.
- Because W3C's "Complete Processes" conformance requirement (Section 1 above) applies, **the entire donation flow — including the payment processor step if it's embedded/iframed — must conform**, not just the marketing page in front of it. If a third-party donation/payment platform is used, its accessibility needs to be vetted, since TJP can't claim AA conformance around a broken link in the chain.

### Color contrast
- **1.4.3 Contrast (Minimum), AA:** body text and images of text ≥4.5:1 contrast ratio (3:1 for large text ≥18pt/14pt bold).
- **1.4.11 Non-text Contrast, AA:** UI components (buttons, form field borders, icons conveying meaning) and graphical objects need ≥3:1 against adjacent colors. This affects brand palette choice up front, not as a late audit fix — pick a primary/accent palette that clears 4.5:1 on white/near-white backgrounds before finalizing brand colors.

### Screen-reader support for disease-education content
- **1.1.1 Non-text Content (A):** all meaningful images (diagrams of kidney anatomy, infographics) need real text alternatives, not decorative alt="".
- **1.3.1 Info and Relationships (A):** headings, lists, and data must use semantic HTML (real `<h1>`–`<h3>`, `<ul>`, `<table>` markup) so screen-reader users can navigate long educational content by heading/landmark rather than linearly.
- **2.1.1 Keyboard / 2.1.2 No Keyboard Trap (A):** any interactive elements (accordions/FAQs common on disease-education pages, expandable glossary terms) must be fully keyboard operable.
- **2.4.7 Focus Visible (AA)** and **2.4.11 Focus Not Obscured (AA, new in 2.2):** visible focus indicators, not suppressed by custom CSS (`outline: none` without replacement is a common violation).

### Captioning, if video is used
DOJ's own guidance is explicit: *"Videos can be made accessible by including synchronized captions that are accurate and identify any speakers in the video."* WCAG requirements:
- **1.2.2 Captions (Prerecorded), A:** mandatory for any prerecorded video with audio (patient stories, awareness videos).
- **1.2.4 Captions (Live), AA:** if any livestreamed content (e.g., a fundraising event stream) is used.
- **1.2.5 Audio Description (Prerecorded), AA:** for video where visual information isn't conveyed in the audio track.
This is a production-workflow requirement, not just a dev task — captioning needs to be budgeted into any video content plan from the start.

### Mobile accessibility
DOJ's guidance does not address mobile specifically, but WCAG does, and it matters given a health-equity audience where mobile-only internet access is common:
- **1.4.10 Reflow, AA:** content must be usable without horizontal scrolling/loss of function down to 320 CSS px width (standard mobile viewport) — rules out fixed-width layouts and horizontally-scrolling tables of, e.g., disease-comparison data.
- **2.5.8 Target Size (Minimum), AA (new in 2.2):** tap targets (buttons, links, form controls) ≥24×24 CSS px, directly relevant to a touch-first donate/contact flow.
- **1.4.4 Resize Text, AA** (not separately detailed above but part of the AA set): text must be resizable to 200% without loss of content/functionality — relevant to low-vision mobile users using OS-level zoom.

---

## 4. Recommendation

**Target standard: WCAG 2.2, Level AA**, applied per W3C's full conformance model (Section 1) — not just spot success-criteria compliance.

Rationale:
1. **It's the de facto legal floor.** DOJ's own regulatory choice for Title II is WCAG 2.1 AA (ada.gov/resources/2024-03-08-web-rule/), DOJ's Title III guidance points to WCAG generally, and legal commentary confirms WCAG 2.1 AA is the standard courts and settlements reference for Title III web claims. Given the real ambiguity over whether Title III reaches an online-only nonprofit (Section 2), and the high volume of Title III web-accessibility litigation in 2025, there is no legal or reputational upside to targeting anything below AA.
2. **AAA is explicitly not recommended by the W3C itself** as a site-wide policy target — it's not achievable for all content types and isn't what any regulator or court references.
3. **2.2 over 2.1** costs nothing (strict superset, per W3C) and is W3C's own current recommendation; it also picks up two criteria — Target Size (2.5.8) and Redundant Entry (3.3.7) — that are directly relevant to TJP's mobile-heavy, form/donation-driven site.

Concrete practices that follow, to write into the spec:
- Adopt **WCAG 2.2 AA** as the written conformance target in the spec, with an explicit note that it applies to **full pages and complete processes** (Section 1, Requirements 2–3) — meaning the entire donation flow, including any embedded third-party payment step, must be evaluated, not just the marketing pages.
- **Forms:** programmatically associated labels, text-based error identification announced to assistive tech, no forced re-entry across multi-step flows; vet any third-party donation/payment widget for AA conformance before selecting it.
- **Color/contrast:** lock in a brand palette that clears 4.5:1 for body text and 3:1 for UI components/graphics against its background before finalizing visual design — retrofitting a brand palette for contrast later is expensive.
- **Disease-education content:** semantic HTML (real headings/lists/tables), meaningful alt text on all educational diagrams/infographics, fully keyboard-operable interactive elements (accordions, glossaries), visible focus indicators.
- **Video:** budget synchronized captions (and audio description where needed) into any video production plan from the outset, not as a post-hoc fix.
- **Mobile:** responsive layouts that reflow at 320px width without horizontal scroll or lost functionality, touch targets ≥24×24px, and text that supports 200% zoom without breaking layout — this is a health-equity-relevant requirement given that mobile-only internet access correlates with the same populations the site's health-equity mission serves.

---

## Sources

- W3C, *Web Content Accessibility Guidelines (WCAG) 2.1*, W3C Recommendation (updated 6 May 2025) — https://www.w3.org/TR/WCAG21/
- W3C, *Understanding Conformance* (WCAG 2.1) — https://www.w3.org/WAI/WCAG21/Understanding/conformance
- W3C, *Web Content Accessibility Guidelines (WCAG) 2.2*, W3C Recommendation (12 December 2024) — https://www.w3.org/TR/WCAG22/
- W3C, *WCAG 2.2 Quick Reference* — https://www.w3.org/WAI/WCAG22/quickref/
- U.S. Department of Justice, "Guidance on Web Accessibility and the ADA" — https://www.ada.gov/resources/web-guidance/
- U.S. Department of Justice, "Introduction to the ADA" — https://www.ada.gov/topics/intro-to-ada/
- U.S. Department of Justice, 2024 Title II web/mobile app accessibility final rule fact sheet — https://www.ada.gov/resources/2024-03-08-web-rule/
- U.S. Department of Justice, *ADA Title III Technical Assistance Manual* (regulatory categories of "public accommodation," incl. social service center establishments) — https://www.ada.gov/resources/title-iii-manual/
- American Bar Association, *Business Law Today*, "Digital Accessibility Under Title III of the ADA: Recent Developments and Risk Mitigation Best Practices" (Aug. 2025) — https://www.americanbar.org/groups/business_law/resources/business-law-today/2025-august/digital-accessibility-under-title-iii-ada/ (secondary source, used only for litigation-trend and circuit-split characterization not stated in DOJ's own materials)
