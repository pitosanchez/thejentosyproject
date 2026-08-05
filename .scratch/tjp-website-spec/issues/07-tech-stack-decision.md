Type: grilling
Blocked by: 01, 05, 06
Status: resolved

## Question

Given the researched stack options, the chosen donation platform's integration requirements, and the MVP scope, which specific stack, hosting provider, and deployment process should the spec recommend?

## Answer

**Framework: Astro.** Strongest out-of-the-box SEO/Core Web Vitals profile of the researched shortlist ("zero JS by default"), simpler mental model than Next.js's Server/Client-Component split for a solo AI-agent-driven build, and enough growth headroom (on-demand rendering adapters) to add dynamic features later without a framework migration. Next.js's extra headroom (donor portals, auth) is overengineering for what v1 actually needs; 11ty is simpler but has the weakest growth path and least AI-tooling coverage; WordPress's best-in-class non-dev editing isn't a v1 need and trades for an ongoing security-patching burden; Webflow doesn't clear the "avoid closed builders" bar.

**Content authoring (v1): plain Markdown/MDX in the repo, no CMS.** Founder is the sole editor and builds via Claude Code — a CMS is a second vendor/integration surface for no v1 benefit. Add Decap CMS (free, git-based) later only if a non-technical editor other than the founder needs access.

**Hosting: Cloudflare Pages.** Most generous free tier of the researched options, framework-agnostic with first-class Astro support, strong CDN baseline that helps Core Web Vitals directly. (Vercel's free tier is "personal/non-commercial only," which doesn't comfortably fit a donation-collecting nonprofit site.)

**Donation integration:** Zeffy's embeddable widget (static HTML/JS, no framework-specific work).

**Forms (Contact, Partner inquiry):** Formspree — host-agnostic, free tier (50 submissions/mo) covers pre-launch volume.

**Deployment pipeline:** GitHub repo → Cloudflare Pages auto-deploys on push to `main`; every PR gets a preview URL for review before promoting to production.

**Security requirements (locked in as part of this decision):**
- Static/pre-rendered output — no application server, database, or admin panel exposed; this is the largest attack-surface reduction available, and it's a direct consequence of the framework/hosting choice above.
- HTTPS enforced by default via Cloudflare Pages.
- Cloudflare's network-level DDoS protection and bot-fight mode enabled; rate-limiting on donation/contact forms.
- Content Security Policy (`_headers` file in the repo) restricting which domains can execute scripts — relevant specifically because Zeffy and Formspree are embedded third-party widgets.
- No sensitive data on TJP's own infrastructure: donor payment data stays with Zeffy (PCI-compliant), form submissions stay with Formspree.
- Formspree honeypot/reCAPTCHA enabled against spam/abuse.
- GitHub Dependabot enabled for automated dependency-vulnerability alerts.
- Repo hygiene: 2FA on the GitHub account, branch protection on `main`, any future secrets go in Cloudflare's encrypted environment variables, never committed to the repo.
- Forms collect only name/email/message — no incidental health information — keeping the org's own data-handling scope minimal.
