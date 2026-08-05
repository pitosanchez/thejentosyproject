Type: research
Status: resolved

## Question

What are the viable modern, maintainable web stack options (framework, hosting, CMS-or-not, deployment pipeline) for a content-heavy nonprofit site that will be built solo by a non-professional developer using AI coding tools/agents, must avoid closed website builders (Squarespace/Wix) absent a strong reason, and needs to support future growth without overengineering v1?

## Answer

Five options surveyed against hosting model, deployment pipeline, content-authoring story, rough cost, and fit: **Next.js on Vercel**, **Astro** (paired with Sanity, Decap CMS, or TinaCMS) on Vercel/Netlify/Cloudflare Pages, **Eleventy (11ty) + Markdown**, self-hosted **WordPress**, and **Webflow** as the closed-builder "gray zone" case. Each is documented with cost at small scale (Vercel Pro ~$20/mo, Sanity/Decap free tiers, Webflow ~$15–39/mo, WordPress hosting ~$10–30+/mo) plus cross-cutting notes on Core Web Vitals/SEO, donation-widget embedding, and form handling. No single verdict — that's ticket 07's decision, blocked on this and on 01/05. Full comparison tables: [research/tech-stack-options.md](../research/tech-stack-options.md).
