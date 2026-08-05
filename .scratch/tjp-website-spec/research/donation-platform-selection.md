# Donation/Fundraising Platform Selection — Primary Source Research

**Resolves:** `.scratch/tjp-website-spec/issues/05-donation-platform-selection.md`
**Prepared for:** The Jentosy Project, Inc. (501(c)(3), rare kidney disease education & health equity)
**Date:** 2026-08-04
**Method:** Fetched each vendor's own pricing pages, help-center/support docs, developer docs, and legal agreements directly. Every claim below is cited to the specific source URL it came from. Secondary "best of" roundup articles were used only to locate the right primary-source URL, never as the cited source for a factual claim.

---

## Context: why a "wrapper" matters

TJP's planned site is a custom JS/React build, not Squarespace/Wix. Raw **Stripe** is a payments *toolbox*, not a donation product — building your own recurring-donation UI, receipting, and donor CRM directly against Stripe's API is real engineering work. Stripe's own content acknowledges this split explicitly: "Building with Checkout or Elements is the only path that requires a developer," while Payment Links is no-code but Stripe-hosted with limited design control, and many nonprofits instead connect Stripe to a purpose-built donation layer ([stripe.com/resources/more/online-giving-explained](https://stripe.com/resources/more/online-giving-explained)). Because of this, the comparison below treats "Stripe" as a processor underneath other tools rather than a standalone option, and includes **Givebutter** as the nonprofit-friendly wrapper the ticket asked for (it is built directly on Stripe).

---

## Per-platform summary

### 1. Stripe (raw, direct integration)

- **Fees:** Standard US card rate is 2.9% + $0.30 per transaction; ACH Direct Debit is 0.8%, capped at $5. Extra surcharges: +0.5% for manually-keyed cards, +1.5% for international cards, +1% if currency conversion is required. Instant payouts cost 1.5% of volume; disputes are $15 each. ([stripe.com/pricing](https://stripe.com/pricing))
- **Nonprofit discount:** A dedicated program exists. Eligible 501(c)(3)s get **2.2% + $0.30** on qualifying volume, but only if ≥80% of Stripe payment volume is tax-deductible donations (membership fees, tuition, ticket/registration/auction sales don't count), operations are in an eligible country, and the org emails proof of status to apply. American Express is excluded from the discount. Not retroactive. ([support.stripe.com/questions/fee-discount-for-nonprofit-organizations](https://support.stripe.com/questions/fee-discount-for-nonprofit-organizations))
- **Recurring giving:** Supported via Stripe Billing (Prices/Subscriptions) or a recurring Payment Link, but this is infrastructure you assemble, not a donor-facing "monthly giving" feature out of the box. ([stripe.com/resources/more/how-to-handle-recurring-donations-in-nonprofit-payments](https://stripe.com/resources/more/how-to-handle-recurring-donations-in-nonprofit-payments))
- **Receipts/tax acknowledgments, donor CRM, major-gift workflows:** None natively — Stripe has no concept of a tax-deductible receipt, donor profile, or pledge. All of this must be built or bolted on.
- **Integration effort for a custom React site:** Highest of all options. Stripe Elements/Checkout requires real developer time (a form layer, webhook handling for recurring status, receipt generation, PCI scope management). This is the tradeoff for full control over UX and data.
- **Data ownership:** Full — TJP would own all donor/payment data directly since there's no intermediary donation platform.

### 2. PayPal — two distinct products, easy to conflate

**PayPal Giving Fund** (a donor-advised-fund intermediary, not a checkout tool):
- **Fees:** Zero. PayPal's own nonprofit user agreement states: "We do not charge you a fee for becoming a Participating Nonprofit or for using the Nonprofit Area or any of our PayPal Giving Fund services." ([paypal.com/us/webapps/mpp/givingfund/policies/nonprofit-user-agreement](https://www.paypal.com/us/webapps/mpp/givingfund/policies/nonprofit-user-agreement))
- **Donor data:** Materially limited. The same agreement says PayPal Giving Fund "may share information about Donors and Fundraisers, including name and contact information" but only so the nonprofit can acknowledge the gift or answer questions — nonprofits are explicitly barred from using it "for any other purpose without the Donor's further consent, including but not limited to for marketing purposes." This is a poor fit for building a donor CRM or doing major-gift cultivation.
- **Disbursement:** Timing isn't specified in the agreement beyond "subject to our Donation Delivery Policy" — third-party summaries describe it as slow relative to a direct processor.

**PayPal Donate/Subscribe Button** (direct processing, embeddable HTML button):
- **Fees:** Confirmed 501(c)(3) charities get a discounted rate of **1.99% + $0.49** per domestic transaction (vs. 2.89% + $0.49 standard business rate); +1.5% for international. Qualification requires submitting EIN, bank statements, and the IRS determination letter for review (~3 business days). (Cross-verified across [Zeffy's PayPal fee explainer](https://www.zeffy.com/blog/paypal-donation-fees-for-nonprofits) and [Donorbox's PayPal fee explainer](https://donorbox.org/nonprofit-blog/paypal-nonprofit-donation-fees); PayPal's own current nonprofit-fees landing page returned HTTP 404 at time of research, so this rate is corroborated by two independent vendor sources rather than PayPal's page directly — treat as high-confidence but not first-party-confirmed.)
- **Recurring giving:** Supported via a "Subscribe" button variant or a recurring toggle on the Donate button, embeddable as copy/paste HTML. ([paypal.com/us/cshelp/article/how-do-i-set-up-the-ability-to-receive-a-recurring-donation-help218](https://www.paypal.com/us/cshelp/article/how-do-i-set-up-the-ability-to-receive-a-recurring-donation-help218))
- **Integration effort:** Low (embed a button/iframe) but visually and functionally basic — not a natural fit alongside a polished custom React donation flow, and it offers no receipting or CRM layer of its own.

**Verdict on PayPal:** Best used as a secondary payment *method* inside another platform's checkout (Donorbox, Give Lively, Zeffy, and Givebutter all support PayPal as an option), not as TJP's primary/sole donation platform.

### 3. Donorbox

- **Plans:** Standard (free) — 2.95% platform fee (3.95% for events/memberships); Pro ($150/mo) — 1.75–2%; Premium (custom pricing) — 1.6–2%. All on top of separate payment-processor fees. ([donorbox.org/pricing](https://donorbox.org/pricing))
- **Processing fees on top:** Stripe 2.2% + $0.30 (cards/wallets), 0.8% capped at $5 (ACH); PayPal 1.99% + $0.49; crypto/stock 3.95% combined. Donors can opt to cover all fees. No setup or cancellation fees. ([donorbox.org/pricing](https://donorbox.org/pricing))
- **Recurring giving:** Included on every tier, including free. ([donorbox.org/pricing](https://donorbox.org/pricing))
- **Receipts:** Automated; receipt rebranding is automatic on Pro/Premium, available by request on the free Standard plan. ([donorbox.org/pricing](https://donorbox.org/pricing))
- **Data ownership / CRM:** Donor profiles and basic reporting included on all tiers; Donorbox's own content acknowledges it's "fantastic at facilitating donations... but medium-to-large nonprofits probably want to layer it with another tool" for deeper donor-relationship management. ([donorbox.org/nonprofit-blog/major-gifts](https://donorbox.org/nonprofit-blog/major-gifts) via search)
- **Integration with a custom site:** Copy/paste embed code (popup or inline form), "no coding experience required," SSL/PCI compliant out of the box. ([donorbox.org/donation-widget](https://donorbox.org/donation-widget)) A full REST API is available as an add-on for **$17/month**, with docs on GitHub, for teams that want programmatic control beyond the embed. ([github.com/donorbox/donorbox-api](https://github.com/donorbox/donorbox-api))
- **Major/institutional gifts:** No dedicated major-gift or DAF workflow beyond donor segmentation by giving level; treat as a donation-collection layer, not a moves-management CRM.

### 4. Give Lively

- **Platform fee:** $0, permanently — no setup, subscription, membership, or cancellation fees. Funded philanthropically by its founders rather than by charging nonprofits. ([givelively.org/free](https://www.givelively.org/free) and [givelively.org/faqs/are-there-any-costs-associated-with-the-platform](https://www.givelively.org/faqs/are-there-any-costs-associated-with-the-platform), via search verification)
- **Processing fees (pass-through, not a Give Lively charge):** Stripe (default) 2.2% + $0.30 nonprofit-discounted cards, 3.5% Amex, 0.8%/$5-cap ACH; optional Shift4 at 1.99% + $0.25; optional PayPal at 1.99% + $0.49 (nonprofit) / 2.99% + $0.49 (standard); optional DAF routing via Chariot/DAFpay at 2.9%. Donors can opt to cover fees. ([givelively.org/fees-and-disbursement](https://www.givelively.org/fees-and-disbursement))
- **Disbursement timing:** Cards via Stripe ~2 business days, ACH ~7 days, PayPal/Venmo 0–3 days. ([givelively.org/fees-and-disbursement](https://www.givelively.org/fees-and-disbursement))
- **Recurring giving & receipts:** Supported (standard feature of the "Giving Basket" checkout); the fees page and FAQ don't spell out receipt customization depth — worth confirming directly during vendor evaluation, since this content wasn't found in a primary source during this research pass.
- **Donor data ownership:** Not explicitly addressed on the fees/disbursement page — this is a gap in the primary-source record and should be confirmed directly with Give Lively before committing, especially given how restrictive PayPal Giving Fund's equivalent terms are.
- **Integration with a custom site:** Embeddable "Simple" or unlimited "Branded" donation widgets, explicitly supported on "custom-built" sites in addition to Wix/Squarespace/WordPress — donors stay on TJP's own page rather than being redirected. ([givelively.org/donation-widgets](https://www.givelively.org/donation-widgets), [givelively.org/resources/use-embeddable-widgets-to-collect-donations-on-your-website](https://www.givelively.org/resources/use-embeddable-widgets-to-collect-donations-on-your-website))
- **Major/institutional gifts:** Supports DAF-recommended grants (donor selects their DAF provider at checkout) — a genuine plus for larger/institutional donors who often give through a DAF. ([givelively.org/fees-and-disbursement](https://www.givelively.org/fees-and-disbursement))

### 5. Zeffy

- **Platform fee:** 0% — Zeffy states plainly it is "the only fundraising platform for nonprofits that is 100% free," with no platform fees, monthly subscriptions, or setup costs, and nonprofits "receive 100% of every payment, regardless of whether donors add a contribution." ([support.zeffy.com/how-is-zeffy-free](https://support.zeffy.com/how-is-zeffy-free))
- **Revenue model:** Zeffy covers all processing costs itself, funded by an optional donor "tip" at checkout (roughly 60% of donors opt in per Zeffy's own figure); Zeffy reserves the right to contact orgs about alternative payment rails (e.g., ACH) only in edge cases of very high card volume with minimal donor contributions. ([support.zeffy.com/how-is-zeffy-free](https://support.zeffy.com/how-is-zeffy-free)) Underlying card processor is not disclosed on this page.
- **Recurring giving:** Supported as a core, free feature (donation forms + recurring built in). ([zeffy.com/home/free-online-fundraising-platform](https://www.zeffy.com/home/free-online-fundraising-platform), via search)
- **Receipts:** Automated, IRS/CRA-compliant tax receipts sent with every donation, no configuration required. ([zeffy.com/feature/donation-receipts](https://www.zeffy.com/feature/donation-receipts), via search)
- **Donor data / CRM:** Built-in donor management is included free — donor records auto-populate from every transaction, with segmentation/tagging and CSV export (name, amount, receipt number, receipt URL) for board reporting or targeted follow-up. ([support.zeffy.com/reports-and-data-imports-fqi3g](https://support.zeffy.com/reports-and-data-imports-fqi3g), via search) This is meaningfully more CRM-capable out of the box than Donorbox or Give Lively.
- **Integration with a custom site:** Embed via copy/paste HTML (note: the *embedded* form variant strips out description/images/logo/org name, showing only the payment fields — the full branded experience only appears on Zeffy's hosted page). A free, **read-only public REST API** covers Payments, Contacts, and Campaigns for pulling data into other tools/dashboards. ([support.zeffy.com/how-do-i-add-my-form-to-my-website-km0gv](https://support.zeffy.com/how-do-i-add-my-form-to-my-website-km0gv), [zeffy.com/integration/api](https://www.zeffy.com/integration/api))
- **Major/institutional gifts:** No dedicated major-gift/DAF workflow found in primary sources; positioned for small-to-mid nonprofit teams broadly rather than institutional fundraising specifically.

### 6. Bloomerang

- **Pricing:** This is a full donor-CRM suite, not just a donation button, and prices accordingly. "The Giving Platform" (all-in-one, unlimited users) starts at **$242/month** billed annually. Sold modularly too: Fundraising module $40/mo (must bundle with CRM), CRM $125/mo, Volunteer $119/mo. ([bloomerang.com/pricing](https://bloomerang.com/pricing/))
- **Payment processing fees:** Not disclosed on the pricing page — would need a sales conversation to confirm actual card/ACH rates.
- **Recurring giving:** Included, with upgrade prompts to encourage donors to convert one-time gifts to recurring. ([bloomerang.com/pricing](https://bloomerang.com/pricing/))
- **Receipts:** Not itemized on the pricing page beyond general "customizable letters and mailings"; needs direct confirmation.
- **Donor data ownership / CRM & reporting:** This is Bloomerang's core strength — "360º supporter understanding," major-gift and grant tracking, automated donor journeys, dynamic segmentation, and the vendor states users "own your data" with "easy exports." Materially deeper CRM/major-gift tooling than any other option here. ([bloomerang.com/pricing](https://bloomerang.com/pricing/))
- **Integration with a custom site:** Two API surfaces — a private-key **REST API** for server-to-server sync (contacts, donations, etc.; not usable for a public-facing donation form since the key can't be exposed client-side), and **Bloomerang.js**, a public-key JS library purpose-built for submitting an embedded donation form on an external site to Bloomerang's backend. Building a fully custom React donation form against Bloomerang.js is more developer effort than Donorbox/Give Lively/Zeffy's copy-paste widgets, but is a real, supported path. ([bloomerang.com/api](https://bloomerang.com/api), [bloomerang.co/product/integrations-data-management/api/bloomerang-js](https://bloomerang.co/product/integrations-data-management/api/bloomerang-js/))
- **Major/institutional gifts:** Best-in-class among the options reviewed — explicit major-gift and grant tracking, "actionable donor insights," and moves-management-style workflows built for cultivating larger donors.

### 7. Givebutter (the nonprofit-friendly Stripe wrapper)

- **Fees:** 0% platform fee *and* nonprofits don't pay processing fees, when the donor-tip prompt is left enabled at checkout ("backed by the Givebutter Guarantee"); if an org disables tipping, a flat 3% platform fee applies plus standard processor rates (2.9% + $0.30 cards, 1.9% + $0.30 ACH). ([givebutter.com/pricing](https://givebutter.com/pricing))
- **Processor:** Built directly on Stripe ("partners with Stripe Payments Company for money transmission services"), so it inherits Stripe's reliability/reach while abstracting away the raw API work. ([givebutter.com/pricing](https://givebutter.com/pricing))
- **Recurring giving, receipts:** Standard feature set for the category; not itemized in detail on the pricing page fetched, worth a direct confirmation pass.
- **Donor data / CRM:** Free tier includes unlimited contact storage, basic email campaigns, transaction history; a paid "Givebutter Plus" tier ($29–$129+/mo by contact-count tier) adds custom reporting, data visualizations, and contact-hygiene tools. ([givebutter.com/pricing](https://givebutter.com/pricing))
- **Integration with a custom site:** Embeddable widgets (WordPress/Squarespace/"and more," which per its own phrasing covers generic embed use) plus 1,000+ native/Zapier integrations. ([givebutter.com/pricing](https://givebutter.com/pricing))
- **Major/institutional gifts:** Not evaluated in depth in this pass; flagged as an open question if Givebutter stays in consideration.

---

## Comparison table

| Platform | Nonprofit platform fee | Processing fee (nonprofit rate) | Recurring giving | Automated receipts | Donor data ownership | Integration effort (custom React site) | Major/institutional gift handling |
|---|---|---|---|---|---|---|---|
| **Stripe (raw)** | None (no donation product) | 2.2% + $0.30 (nonprofit, ≥80% donation volume) or 2.9% + $0.30 standard; ACH 0.8%/$5 cap | Build-your-own (Stripe Billing) | None built-in | Full — TJP owns everything | Highest — real dev build | None built-in |
| **PayPal Giving Fund** | $0 | $0 | Yes (via DAF grant recommendation) | Handled by PayPal Giving Fund | Weak — donor info restricted from marketing use | Low, but not a checkout widget | Supports DAF grants |
| **PayPal Donate/Subscribe button** | $0 | 1.99% + $0.49 (confirmed charity) / 2.89% + $0.49 (standard) | Yes (Subscribe button) | Not native | Direct, but bare-bones | Low (embed button) | None native |
| **Donorbox** | 2.95% (free) → 1.6–2% (Premium) | +2.2%/0.8% Stripe or 1.99%+$0.49 PayPal | Yes, all tiers | Yes, auto (rebrand on paid tiers) | Basic profiles; vendor says pair with a CRM for larger orgs | Low (copy-paste embed); API add-on $17/mo | Basic segmentation only |
| **Give Lively** | $0 | Pass-through only (2.2–3.5% Stripe, 1.99–2.99%+$0.49 PayPal, etc.) | Yes | Yes (depth unconfirmed) | Not documented in primary sources — confirm directly | Low; widgets explicitly support custom-built sites | DAF grant routing supported |
| **Zeffy** | $0 | $0 (Zeffy absorbs it via optional donor tip) | Yes | Yes, automatic IRS/CRA-compliant | Good — built-in CRM, CSV export | Low (embed) or free read-only API for custom dashboards | Not a specialized feature |
| **Bloomerang** | N/A — subscription: $242/mo (all-in-one) or modular from $40–$125/mo | Not published; confirm with sales | Yes | Not detailed on pricing page — confirm | Strongest — full CRM, explicit "own your data" | Medium — Bloomerang.js for custom embedded forms | Strongest — dedicated major-gift/grant tracking |
| **Givebutter** (Stripe wrapper) | 0% (tips on) / 3% (tips off) | $0 (tips on) / 2.9%+$0.30 card, 1.9%+$0.30 ACH (tips off) | Yes | Standard (unconfirmed detail) | Good — free CRM tier, paid tier adds reporting | Low (embeds) + broad integration catalog | Not evaluated in depth |

*Note: PayPal's own current nonprofit-fee page could not be located at a working URL during this research pass (the expected `/us/nonprofits` and `/us/business/nonprofits` paths both returned 404). The 1.99% + $0.49 rate is corroborated identically by both Zeffy's and Donorbox's published fee explainers, which is treated as reasonably reliable but not first-party-verified — reconfirm directly with a PayPal rep or account application before relying on it.*

---

## Recommendation

**Primary recommendation: Zeffy, with Stripe (direct) reserved as a fallback if Zeffy's fee-covering model or brand fit proves unworkable.**

Reasoning:

1. **Cost dominates at TJP's likely donation volume.** As a small, community-based 501(c)(3), every dollar TJP raises should reach patients and families, not vendor fees. Zeffy is the only option in this set that is verifiably $0 platform fee *and* $0 processing fee to the nonprofit, confirmed on Zeffy's own help-center page ([support.zeffy.com/how-is-zeffy-free](https://support.zeffy.com/how-is-zeffy-free)), not a third-party summary. Give Lively is also $0 platform fee, but it still passes Stripe/PayPal processing costs through to TJP — Zeffy is strictly cheaper for TJP's bottom line.
2. **It covers the required features out of the box.** One-time and recurring donations, automated IRS-compliant receipts, and a workable CRM (segmentation, CSV export) are all included free — no extra tier needed, unlike Donorbox (Pro tier gates several features) or Bloomerang (full CRM starts at $242/mo).
3. **Custom-site integration is low-effort** via embed or a free read-only API, appropriate for a React build without committing significant engineering time to donation infrastructure — a reasonable tradeoff for a small nonprofit's initial launch.
4. **Known limitation to plan around:** Zeffy's embedded form strips branding/imagery (shows payment fields only), and it has no dedicated major-gift/DAF workflow. If TJP wants a fully on-brand embedded donate experience or expects to court institutional/DAF-routed major gifts soon, that's the gap to solve for.

**Shortlist and tradeoffs, ranked:**

1. **Zeffy** — best cost/feature ratio for a young, donation-volume-modest nonprofit; main risk is reliance on voluntary donor tips as Zeffy's business model (if that model changes, terms could shift) and the stripped-down embedded-form branding.
2. **Give Lively** — comparable no-fee ethos with explicit support for donor-advised-fund grants (a plus if TJP courts institutional/major donors who give via DAF), fully brandable custom-site widgets, but TJP still absorbs Stripe/PayPal processing fees, and donor-data-ownership terms weren't found in primary sources during this pass — confirm directly before committing.
3. **Direct Stripe (with the nonprofit 2.2% + $0.30 discount)** — the right fallback if TJP wants full data ownership and total UX control and is willing to invest developer time; no receipts/CRM without building or bolting on a tool (e.g., a lightweight custom receipt-and-donor-log layer, or later adding Bloomerang on top for CRM specifically).
4. **Bloomerang** — the strongest CRM and major-gift tracking of anything reviewed, but at $242/mo (or a $40–125/mo modular entry) it's a cost TJP likely can't justify pre-launch; worth revisiting once TJP has an established major-donor pipeline that outgrows Zeffy/Give Lively's basic reporting.
5. **Donorbox** — solid and well-documented but strictly worse than Zeffy/Give Lively on cost (2.95%+ platform fee on the free tier) for no clear feature advantage at TJP's scale.
6. **Givebutter** — a credible Stripe-wrapper alternative to Zeffy with a similar 0%-fee-via-tips model; not eliminated, but wasn't researched as deeply here (recurring-giving and receipt specifics unconfirmed) — worth a second look if Zeffy's branding limitation turns out to be a dealbreaker.
7. **PayPal (Donate button or Giving Fund)** — not recommended as TJP's *primary* platform (Giving Fund's donor-data restrictions actively work against building a donor relationship; the Donate button is fee-bearing and CRM-less) but should be offered as one payment *method* inside whichever primary platform TJP picks, since all the leading candidates (Zeffy, Give Lively, Donorbox, Givebutter) support PayPal as an option at checkout.

**Open items to verify directly with vendors before final sign-off:** Give Lively's data-ownership/marketing-use terms; Bloomerang's actual processing rates; Zeffy's and Givebutter's receipt-customization depth; and reconfirming PayPal's current published nonprofit rate directly on paypal.com (both expected URLs 404'd during this research pass).
