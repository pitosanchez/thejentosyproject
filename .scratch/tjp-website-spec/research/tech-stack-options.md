Type: research
Ticket: 06-tech-stack-options

# Web stack options for The Jentosy Project website

## Framing

This is an **options survey**, not a decision. It exists to give ticket `07-tech-stack-decision` a grounded shortlist to choose from. Each option below is scored against the same requirements; no single option is recommended here.

**Requirements used to evaluate every option** (from the wayfinder map and issue `06-tech-stack-options.md`):

1. Not a closed website builder (Squarespace/Wix) absent a strong reason.
2. Strong SEO support: server-rendered or static output, fast, good Core Web Vitals.
3. Can integrate a third-party donation platform (decided separately in ticket `05`) and contact/partnership forms.
4. Supports future growth (more pages, programs, possibly a CMS) without overengineering v1.
5. Buildable solo, by a non-professional developer, using AI coding tools/agents (e.g., Claude Code).
6. Ideally lets a non-developer edit copy later without touching code.

## Why "closed builders absent a strong reason" is the starting bias

Squarespace's own help center confirms exporting a site does not preserve the design or reusable output: "Not everything will export, as many features rely on our platform's JavaScript and CSS," and "It's not possible to export content from one Squarespace site and import it into another" ([Squarespace Help Center — Exporting your site](https://support.squarespace.com/hc/en-us/articles/206566687-Exporting-your-site)). Wix has likewise never offered a code-export path off its platform (the platform *is* the product). That's the concrete "strong reason" bar the map's standing preference is protecting against: whatever TJP builds should not be trapped behind a single vendor's editor if the org later needs custom donor workflows, a different host, or a developer who isn't the founder.

Two platforms sit in a gray zone rather than the fully-closed Squarespace/Wix category and are included below for completeness: **Webflow** (visual builder, but with a real CMS and partial code/content portability) and **WordPress** (open source, self-hostable, but not "modern stack built by an AI coding agent" in the way Next.js/Astro are).

---

## Option 1: Next.js on Vercel

**What it is:** A React meta-framework. By default routes are React Server Components rendered on the server and streamed as HTML, with optional Client Components hydrated in the browser for interactivity — "Server Components... fetch data... render parts of your UI on the server... Use Server Components when you need to... improve First Contentful Paint (FCP), and stream content progressively to the client" ([Next.js Docs — Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)). Pages can be statically generated at build time, server-rendered per request, or a mix, per route.

**Hosting model:** Vercel (built by the Next.js team) is the reference host, but Next.js can also run on any Node host or be exported statically for simple sites.

**Deployment pipeline:** Connect a GitHub/GitLab/Bitbucket/Azure DevOps repo; every push and PR gets an automatic **Preview** deployment with its own URL, and pushes to the production branch (or manual "Promote to Production") go live — "each commit or pull request... automatically triggers a new deployment... Preview: deploying for further testing, QA, or collaboration without impacting your live site... Production: deploying the final changes to your user-facing site" ([Vercel Docs — Deploying to Vercel](https://vercel.com/docs/deployments/overview)). A CLI (`vercel --prod`) and drag-and-drop deploy (Vercel Drop) are also available, useful for an AI-agent-driven workflow that wants to script deploys.

**Content-authoring story:** No built-in CMS. Content can live as Markdown/MDX in the repo (developer-only editing) or be wired to a headless CMS (Sanity, Contentful, etc.) for non-developer editing — that's a separate integration decision, not something Next.js provides out of the box.

**Rough cost at small scale:** Vercel's **Hobby** tier is free but is explicitly restricted to "personal, non-commercial projects" with hard usage caps and no way to buy more capacity. The **Pro** tier is "$20/user/month" plus usage-based overages beyond an included credit (1TB data transfer, 10M edge requests included, then metered) ([Vercel — Pricing](https://vercel.com/pricing)). A 501(c)(3) org site is commercial-adjacent enough that Pro is the realistic floor — roughly $20/month for a single-founder team, though Vercel's Open Source Program is aimed at genuinely open-source *projects*, not nonprofits generally, so it likely doesn't apply here ([Vercel Open Source Program](https://vercel.com/open-source-program)).

**Fit:**
- SEO/CWV: strong — server rendering + streaming is designed to optimize FCP/LCP; Next.js is what Vercel itself benchmarks against Core Web Vitals.
- Donation/forms integration: trivial — any embeddable widget, iframe, or hosted-page redirect works; API routes can proxy form submissions if a serverless function is wanted.
- Growth path: excellent — this is a full application framework, so "add a CMS," "add a donor portal," "add auth" all have clear paths later.
- Non-dev editing: not out of the box; requires pairing with a headless CMS (adds a second vendor + integration surface).
- Solo/AI-buildability: React + file-based routing is extremely well-represented in AI model training data and Claude Code's own ecosystem familiarity, but the App Router's Server/Client Component split is a real conceptual layer a non-professional dev (or their AI agent) can trip on.
- Overengineering risk: **highest of the shortlist** for a mostly-static content site — you're paying (in complexity and in the $20/mo Pro floor) for SSR/edge capabilities a content-heavy nonprofit brochure site may not need in v1.

---

## Option 2: Astro (+ a headless or git-based CMS), deployed to Vercel/Netlify/Cloudflare Pages

**What it is:** A content-focused framework built "static-first": "Astro leverages server rendering over client-side rendering in the browser as much as possible... Zero JS, by default... an Astro website can load 40% faster with 90% less JavaScript" than comparable component-framework sites, using an islands architecture where only interactive components ship JS ([Astro Docs — Why Astro](https://docs.astro.build/en/concepts/why-astro/)). It also supports opt-in on-demand (server) rendering per-route via official adapters for Node, Netlify, Vercel, and Cloudflare when a page needs to be dynamic ([Astro Docs — On-demand Rendering](https://docs.astro.build/en/guides/on-demand-rendering/)).

**Hosting model:** Framework-agnostic on the host side — Astro documents deployment guides for 30+ providers, with first-class adapters/guides for Vercel, Netlify, and Cloudflare Pages covering both static and on-demand modes, plus plain static hosts (GitHub Pages, S3, etc.) for the fully-static case ([Astro Docs — Deploy your Astro Site](https://docs.astro.build/en/guides/deploy/)).

**Content-authoring story:** Astro has built-in support for Markdown/MDX content collections (developer-only editing without a CMS), and its official CMS guide documents 50+ integration options split into two families:
- **Headless CMS** (Sanity, Contentful, Storyblok, Strapi, etc.) — "a headless CMS... helps you write your content, but doesn't generate a site that displays it," giving editors a hosted dashboard while Astro fetches content via API at build/request time ([Astro Docs — CMS Guides](https://docs.astro.build/en/guides/cms/)).
- **Git-based CMS** (Decap, TinaCMS, Keystatic) — an admin UI that commits Markdown/MDX changes directly to the site's Git repo, so there's no separate content database.

**Rough cost at small scale, by pairing:**
- *Astro + Markdown only, no CMS* — $0 beyond hosting; editing requires touching files (developer/AI-agent only, not friendly to a non-technical editor).
- *Astro + Sanity*: Sanity's free tier includes 20 seats, 2 datasets, 10,000 documents, 1M CDN requests/month, 100GB assets/bandwidth — "For individuals experimenting or shipping smaller projects." The next tier (Growth) is $15/seat/month for more documents, longer draft history, and AI Assist ([Sanity — Pricing](https://www.sanity.io/pricing)). A single-editor nonprofit site likely stays on the free tier for years.
- *Astro + Decap CMS*: fully free, MIT-licensed, "a friendly UI and intuitive workflows" that authenticate against GitHub/GitLab/Bitbucket and commit content changes as Git commits ([Decap CMS Docs — Intro](https://decapcms.org/docs/intro/)). No recurring cost, but the editor is technically "committing to Git" under the hood (invisible to them, but backups/rollback are Git history).
- *Astro + TinaCMS*: free tier covers 2 users/2 roles with community support; paid tiers start at $24/month (Team, 3 users) up to $249/month (Business, 20 users) for editorial workflows, more seats, and support SLAs ([Tina — Pricing](https://tina.io/pricing)). Overkill for a single-editor nonprofit unless the visual (as-you-type, on-page) editing UX is worth paying for.
- Hosting: Netlify/Vercel/Cloudflare Pages free tiers (see Option 3) generally cover a small brochure site.

**Fit:**
- SEO/CWV: strong — arguably the best of the shortlist by default, since "zero JS by default" directly targets the JS-driven causes of poor LCP/INP that Google's own Core Web Vitals guidance flags (see cross-cutting SEO section below).
- Donation/forms integration: trivial, same as Next.js — embeds/redirects don't care about the underlying framework.
- Growth path: good — content collections scale to many pages/programs cleanly; on-demand rendering is available later (e.g., a donor portal or dynamic search) without a framework migration, just by adding an adapter.
- Non-dev editing: **the strongest fit of the code-based options** if paired with Sanity (polished editor UX, generous free tier) or Decap (zero cost, "edit a form, hit publish" UX that hides Git from the editor).
- Solo/AI-buildability: Astro's `.astro` component syntax is simpler than React's Server/Client split for a mostly-static site, and it's popular enough to be well-represented for AI coding tools; the CMS integration is the one extra piece of surface area to configure once.
- Overengineering risk: low — this is close to the "right-sized" default for a content-heavy nonprofit site that wants room to grow.

---

## Option 3: Eleventy (11ty) + Markdown, deployed to Netlify/Cloudflare Pages, optionally + Decap/TinaCMS

**What it is:** A minimal static site generator — "Eleventy is a static site generator that transforms template files into pre-built HTML pages... compiles content at build time rather than generating pages on-demand," with support for HTML, Markdown, Nunjucks, Liquid, and others, and a dependency footprint of just Node.js ([11ty Docs](https://www.11ty.dev/docs/)). No client-side framework, no JS runtime in the browser unless you add one yourself.

**Hosting/deployment/CMS pairing:** Same Netlify/Vercel/Cloudflare Pages hosts as Astro; same Decap/TinaCMS pairing options for non-dev editing, since both are "platform agnostic" and explicitly list 11ty (via general static-site support) among compatible generators ([Decap CMS Docs — Intro](https://decapcms.org/docs/intro/)).

**Rough cost at small scale:** Essentially the same cost profile as Astro's static mode — $0 for the generator, hosting free tier likely sufficient, CMS cost (if any) matches the Sanity/Decap/Tina numbers above.

**Fit:**
- SEO/CWV: excellent — output is plain static HTML/CSS by default, minimal JS to fight Core Web Vitals with.
- Donation/forms integration: trivial (embeds/redirects again).
- Growth path: weakest of the code-based options if the site later needs interactivity (donor dashboards, dynamic search, personalization) — 11ty has no built-in islands/hydration model, so adding interactivity means bolting on your own JS or migrating.
- Non-dev editing: same as Astro's Markdown/CMS pairing story.
- Solo/AI-buildability: simplest mental model of the three code-based frameworks — good for a first-time solo builder — but smaller ecosystem/less AI-training-data coverage than Next.js or (increasingly) Astro, which can mean more manual debugging.
- Overengineering risk: lowest — but at the cost of headroom if TJP's roadmap (map.md notes future multi-initiative structure, transplantation-equity content, possible donor tooling) needs more than templated pages later.

---

## Option 4: WordPress (self-hosted or managed)

**What it is:** Open-source, free-to-use CMS/software — "free software" under the GPL, no licensing fees — with a block-based editor pitched at non-developers: "If you've ever created a document, you're already a whizz at creating content with WordPress," including drag-and-drop media, drafts/scheduling/revisions, and access controls ([WordPress.org — Features](https://wordpress.org/about/features/)). WordPress itself doesn't specify hosting requirements beyond noting "plenty of web hosts offer one-click WordPress installers."

**Hosting model:** Traditional server-rendered PHP + MySQL app. Requires either a managed WordPress host (WP Engine, Kinsta, WordPress.com Business, etc., typically $20–35+/month) or self-managed hosting (cheaper, but the founder becomes responsible for PHP/plugin/core security updates — a real ongoing burden for a solo non-professional operator).

**Content-authoring story:** The best-known non-developer editing experience on this list by a wide margin — millions of nonprofits already run on it, and every donor-platform/form vendor has a first-party WordPress plugin (evidenced by Donorbox's own WordPress-specific embed guide, [Donorbox — Embed a Donation Form on WordPress](https://donorbox.org/nonprofit-blog/wordpress-donation-form)).

**Rough cost at small scale:** $0 software; managed hosting commonly $10–30+/month; plugin costs vary (many donation/form plugins are free at the tier TJP needs).

**Fit:**
- SEO/CWV: workable but not automatic — WordPress is server-rendered PHP (good baseline for SEO indexability), but stock themes/plugin-heavy setups are notorious for weak Core Web Vitals unless actively tuned (caching, image optimization, minimal plugins) — this is an ongoing maintenance cost, not a one-time build decision.
- Donation/forms integration: excellent — largest plugin ecosystem of any option here.
- Growth path: fine for content growth; less fine for "modern, maintainable, AI-agent-built" — most WordPress work is done inside its admin UI and PHP/theme conventions, which is a different (and for this founder, unfamiliar) surface than what Claude Code and similar tools are typically strongest at.
- Non-dev editing: **best in class** on this list.
- Solo/AI-buildability: moderate — AI tools can write PHP/WordPress code and there's enormous documentation coverage, but ongoing plugin/core updates and security patching are a recurring solo-operator burden that the code-based static/SSR options above don't have (no server to patch).
- Overengineering risk: low for content, but carries **operational** risk (security patching, plugin bloat) that trades off against the "avoid overengineering" goal differently than the JAMstack options — it's simple to start, but accrues maintenance debt.
- Note: WordPress is open-source and self-hostable, so it doesn't violate the "avoid closed builders" requirement the way Squarespace/Wix do — but it's a meaningfully different build/maintain profile than the AI-agent-friendly static/SSR frameworks, which is why the map's standing preference toward "modern, maintainable, expandable stack" leans away from it as a default.

---

## Option 5: Webflow (included as the "gray zone" case)

**What it is:** A visual, closed-source site builder with a built-in CMS, sitting between Squarespace/Wix and a fully custom stack. Pricing (per aggregator research pointing at [Webflow — Pricing](https://webflow.com/pricing)) runs roughly Starter (free, no custom domain), Basic ~$15–25/month, and a CMS-capable Premium/CMS plan around $25–39/month depending on billing term, and Webflow does offer nonprofit/education discounts on application.

**Fit:** Faster visual build than hand-coding, and *does* allow CMS content and (with paid add-ons) some data export — meaningfully more portable than Squarespace/Wix. But it's still a proprietary editor/hosting bundle: the founder can't run it locally, version it in Git the normal way, or hand it to an AI coding agent the way a Next.js/Astro/11ty repo can be handed to Claude Code. Given the map's explicit bias against closed builders and the fact that the founder specifically wants an AI-agent-buildable, Git-based, exportable stack, Webflow doesn't clear the "strong reason" bar the other requirements imply — but it's a reasonable fallback if the code-based options prove too heavy for the founder's timeline.

---

## Cross-cutting: SEO / Core Web Vitals baseline (applies to every option)

Google's own guidance is the shared baseline every option above is scored against:

- **Core Web Vitals** are three field metrics — Largest Contentful Paint (LCP, target ≤2.5s), Interaction to Next Paint (INP, target ≤200ms), and Cumulative Layout Shift (CLS, target ≤0.1) — measured at the 75th percentile of real visits ([web.dev — Core Web Vitals](https://web.dev/articles/vitals)).
- On indexability: Google explicitly still values pre-rendering — "server-side or pre-rendering is still a great idea because it makes your website faster for users and crawlers, and not all bots can run JavaScript" — and recommends real `<a href>` links/History API routing (not hash-based routing), proper HTTP status codes, and verifying that content actually appears in the *rendered* HTML Google sees ([Google Search Central — JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)).

Every shortlisted option here (Next.js, Astro, 11ty, WordPress) produces server-rendered or static HTML by default, which satisfies this baseline; the meaningful differentiator between them is how much client-side JavaScript ships afterward, which is where Astro's "zero JS by default" and 11ty's "no framework at all" posture have a structural edge over Next.js's React hydration model for a mostly-static content site.

## Cross-cutting: donation platform + forms integration

This doesn't meaningfully constrain the framework choice. Donation platforms in TJP's likely shortlist (Donorbox, Give Lively, Zeffy — see ticket `05`) integrate via either a hosted-page redirect/link or an embeddable iframe/JS widget — e.g., Donorbox's own docs describe copying an "Embed Code" iframe snippet onto any page, plus a small JS API (`window.donorbox.resizeDonationWidget(iframe)`) for resizing, and note built-in integrations for WordPress, Wix, Weebly, and Squarespace specifically *because* the underlying embed is platform-agnostic HTML ([Donorbox — donation widget](https://donorbox.org/donation-widget); [Donorbox — WordPress guide](https://donorbox.org/nonprofit-blog/wordpress-donation-form)). Any of the frameworks above can host that same iframe/snippet with zero framework-specific work.

For contact/partnership forms, two lightweight, framework-agnostic options were checked directly:
- **Netlify Forms** — add a `data-netlify="true"` attribute to a plain HTML `<form>`; Netlify's build step parses the HTML at deploy time to auto-detect the form, and submissions land in a dashboard with email or webhook notifications configured separately; it explicitly supports JS-rendered forms (React, Vue, Next.js, etc.) via AJAX submission too ([Netlify Docs — Forms setup](https://docs.netlify.com/manage/forms/setup/)). Only relevant if hosting on Netlify.
- **Formspree** — host-agnostic: point any `<form action>` at a Formspree endpoint. Free plan allows 50 submissions/month, up to two notification email addresses, and 30-day submission history, with unlimited forms/projects on every plan ([Formspree — Account limits](https://help.formspree.io/articles/account-management/account-limits)). Works identically regardless of which framework/host is chosen above, which matters if the site doesn't end up on Netlify.

## Hosting free-tier / cost snapshot (Aug 2026)

| Host | Free tier headline | Paid floor | Nonprofit-specific discount found? |
|---|---|---|---|
| Vercel | 100GB transfer, 1M edge requests/mo — **personal/non-commercial only** | Pro: $20/user/mo + overages ([Vercel Pricing](https://vercel.com/pricing)) | Open Source Program exists but is scoped to open-source *projects*, not 501(c)(3) status generally ([Vercel OSS Program](https://vercel.com/open-source-program)) — not confirmed applicable |
| Netlify | "300 credits" covering deploys/bandwidth/compute at metered rates | Personal $9/mo, Pro $20/mo ([Netlify Pricing](https://www.netlify.com/pricing/)) | Discounted/donated plans available for verified nonprofits via their Open Source/nonprofit program, per support-channel reporting — not fully documented in primary pricing docs, worth confirming directly with Netlify before deciding |
| Cloudflare Pages | 500 deploys/month, generally most generous free bandwidth in the category | Usage-based beyond free limits ([Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)) | Not confirmed in this research pass |
| Webflow | Starter (free, no custom domain) | Basic ~$15–25/mo, CMS/Premium ~$25–39/mo | Nonprofit/education discount available via application |
| WordPress hosting | N/A (software is free; hosting is not) | Managed hosting commonly $10–30+/mo | Varies by host; not researched here |

*(Figures are approximate and time-sensitive — confirm current numbers at decision time in ticket 07.)*

## Comparison summary

| | Next.js + Vercel | Astro + headless/git CMS | 11ty + Markdown/CMS | WordPress | Webflow |
|---|---|---|---|---|---|
| SEO/CWV out of the box | Strong (SSR/streaming) | Strongest (zero JS default) | Strongest (pure static) | Good if actively tuned | Good, less control |
| Non-dev copy editing | Requires added CMS | Strong w/ Sanity or Decap | Strong w/ Decap/Tina | Best-in-class | Built-in, visual |
| Cost at small scale | ~$0–20/mo | $0–15/mo typical | $0 typical | $10–30+/mo hosting | $0–39+/mo |
| Growth headroom (donor portal, dynamic features) | Highest | High (adapters available) | Lowest of code options | High but PHP-world | Limited, vendor-bound |
| Solo/AI-agent buildability | Good, more conceptual surface | Good, simpler mental model | Simplest, smaller ecosystem | Moderate, different skillset | N/A — not code-built |
| Ongoing maintenance burden | Low (no server to patch) | Low | Low | Higher (plugin/core patching) | Low (vendor-managed) |
| Avoids closed-builder lock-in | Yes | Yes | Yes | Yes (open source) | Partial — proprietary editor |
| Best-fit framing | Content site with real growth/app ambitions | Right-sized default for content-heavy nonprofit site | Simplest possible content site | Org already has WP-fluent staff/volunteers | Founder wants visual builder, accepts partial lock-in |

Ticket `07-tech-stack-decision` should weigh this table against how much the founder already knows (or wants Claude Code to teach them), how much non-developer editing really needs to happen post-launch (map.md flags this as a "later" nice-to-have, not a v1 blocker), and how the donation-platform choice from ticket `05` and the page count from ticket `03` land once those are closed.
