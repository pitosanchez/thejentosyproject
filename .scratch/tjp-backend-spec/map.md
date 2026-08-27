Label: wayfinder:map

## Destination

**Not yet defined — that's what this scoping is for.**

"Backend" was named as the next phase of work (the `backend` git branch was cut
off `main` for it on 2026-08-23) but no one has said what it means. This document
exists to turn "build the backend" into a real destination the founder can build
from, the way `.scratch/tjp-website-spec/map.md` did for the site. Nothing below
"Decisions so far" is decided yet.

The website spec's standing constraints still apply and shape the answer:

- **Self-built by the founder using AI coding tools.** Whatever the backend is, it
  has to be operable and debuggable by one non-specialist person.
- **No PII on TJP's own infrastructure** (ticket 07 security baseline). Donor
  payment data lives with Zeffy; form submissions live with Web3Forms. Any
  backend that starts storing personal data reopens a decision that was
  deliberately closed.
- **Static output on Cloudflare Pages.** Adding a server, a database, or auth is a
  material change to the hosting/security model, not a small addition. Astro was
  chosen partly because on-demand rendering adapters make this *possible* later —
  but "possible" was the point, not "planned."
- **Don't lock into closed builders; modern, maintainable, expandable stack.**

## Notes

### What might "backend" mean here? (candidate scopes — pick or reject each)

1. **Newsletter / email list management.** Today `NewsletterSignup` POSTs to
   Web3Forms, which just drops each signup in an inbox — there is no list, no
   double opt-in, no send capability, no unsubscribe. If the org wants to
   actually email supporters, the real need is an ESP (Mailchimp / Buttondown /
   Resend Broadcasts / EmailOctopus), not custom code. Likely the lowest-effort,
   highest-value item.

2. **Donation / donor CRM beyond Zeffy.** Zeffy already is a CRM (receipts,
   recurring, donor records). A separate donation backend only makes sense if
   Zeffy is being replaced or outgrown. Is it?

3. **Content management for non-founder editors.** Ticket 07 deferred this
   explicitly: "Add Decap CMS (free, git-based) later only if a non-technical
   editor other than the founder needs access." Is there now such a person
   (board member, comms hire, volunteer)?

4. **Partner / researcher intake workflow.** Right now Partner With Us is a
   Web3Forms email. A backend could mean a real pipeline (statuses, follow-up,
   a shared view for the board). Probably premature pre-launch.

5. **An interactive tool.** e.g. an APOL1 / kidney-risk self-check, a Bronx
   resource directory with search, a dialysis-center locator. This is a
   *product* decision, not an infrastructure one — it would need its own
   wayfinder map and, for anything giving health guidance, clinical review.

6. **Server-side rendering / API layer for the existing site.** No current page
   needs it. Would only be justified by one of the above.

7. **Analytics / ops dashboard.** Pulling GA4 + Zeffy + Web3Forms into one view
   for the founder/board. Nice-to-have, not foundational.

### Cross-cutting questions to answer before any build

- Who operates this after it ships? Just the founder, or someone else too?
- Does it need to store personal data on infrastructure TJP controls? (If yes,
  that's a security-model decision that should be made consciously, with the
  ticket-07 baseline in front of you.)
- Does it change the hosting model (static → SSR/edge functions/a database)?
- Is it blocking launch, or post-launch like most of the deferred list?
- Could a SaaS tool (ESP, form backend, CRM) do it instead of code?

## Decisions so far

<!-- none yet — fill in as the founder scopes this -->

- Board member titles / governance roles: **the founder still needs to have this
  conversation** before `src/lib/board.ts`'s `officerTitle` field is populated.
  Noted here because it came up alongside backend scoping; it is a content task,
  not a backend one.

## Not yet specified

- Everything. This map has no closed tickets. The immediate next step is a
  grilling/wayfinder session with the founder to pick which of the candidate
  scopes above are real, then give each survivor its own ticket.

## Out of scope

<!-- to be filled once the destination is defined -->
