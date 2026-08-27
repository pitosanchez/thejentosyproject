Type: grilling
Blocked by: 03, 05, 07
Status: resolved

## Question

What analytics and conversion-tracking setup (GA4, Search Console, donation conversion events, partnership/inquiry form events, email/newsletter capture) should the spec require, and which visitor actions count as a tracked conversion for measuring what content and campaigns actually produce donations, inquiries, and partnerships?

## Answer

**Platform:** GA4 (Google tag in the Astro base layout, site-wide) + Search Console, verified and linked; sitemap generated via `@astrojs/sitemap` and submitted — also gives the indexing/search-performance visibility the SEO strategy (ticket 11) needs to monitor.

**Conversion mechanism:** dedicated "thank you" redirect URLs (Zeffy and Web3Forms both support post-submit redirects), not cross-iframe event listening — reliable on a static site, doesn't depend on unconfirmed cross-origin messaging from Zeffy's embed. _(Build phase: forms moved from Formspree to Web3Forms; redirect mechanism is unchanged.)_

**Four tracked conversions** (matching ticket 11's definitions exactly): donation completed → `/donate/thank-you`; partnership/collaboration inquiry → `/partner/thank-you`; contact form submitted → `/contact/thank-you`; newsletter/email capture (if in v1) → confirmation event on submit.

**Explicitly not conversions:** plain pageviews/homepage visits — excluded per Ad Grants policy, categorized as "Other."

**Google Ads linkage:** Ad Grants account linked to GA4, importing these four events as Google Ads conversions — this is what makes the required Smart Bidding strategy (ticket 11) function, since it optimizes against real conversions rather than clicks.

**Privacy:** GA4 collection is disclosed via the Privacy Policy page (content map, ticket 04) — not re-decided here, just cross-referenced.
