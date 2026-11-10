# Developer Journal

## 2026-11-10

- Reviewed the Rock Health first-pass investor deck against Rock Health Capital's intake requirements (10-15 page PDF, team accomplishments, market overview, what buyers use today, how we make money, fundraising goals) and revised it in `developer/create-investor-deck.js`, which is the deck's source of truth; regenerate with `node developer/create-investor-deck.js`.
- Slide 2: aligned the missed-call benchmarks to 23% unanswered or abandoned and 62% hang up without voicemail, replacing the vendor-blog 30-42% and 75-85% figures.
- Slide 9: added unit economics from vendor list prices (Vapi, Deepgram, OpenAI, ElevenLabs, Telnyx) and the Menu product's observed spend; set standard pricing at $999/mo solo plus $699/mo per added provider and a 1.5% platform fee on agent-collected payments, with $599/mo as a time-boxed pilot rate. The $599 floor could not clear 70% gross margin at list costs.
- Slide 10: replaced the market-strategy wedge with a bottom-up market-size slide from `docs/dialtonemed_buyer_universe.md`: ~85,000 independent 1-10 physician practices, ~$1.0B at the solo rate, $2B+ with per-provider and tier expansion. The source doc's internal contradictions (four TAM figures, two leakage figures) were not carried into the deck.
- Slide 11: replaced four generic category dots with eleven named vendors scored on system replacement vs augmentation and workflow depth; attributed study figures and self-reported vendor claims are footnoted as such.
- Slide 13: converted the allocation to dollars, tied engineering spend to the slide 6 production gates, dated the milestones by quarter through Q4 2027, added a Series A gate panel, and stated a 24-month runway with staged hiring at ~$62k/mo average burn.
- Slide 14: replaced the generic execution model with the founder's healthcare-operations background (demand modeling, 8-to-37-hub network scaling, field-operations platform) and the reuse of the DialTone.Menu voice stack.
- Fixed the doubled page number on every content slide: the slide master and `addChrome` were both printing one; the master's now stands alone.
- Site: updated the pricing-page callout to the new pricing; aligned the ROI calculator constants and defaults, the homepage exposure console (both modes), and the problem-card benchmarks to 23% and 62%. The two attributed studies (7,000-call at 42%, Peerlogic at 38%) keep their published numbers and are now framed beside the conservative benchmark.
- Recorded the 1.5% platform-fee gap in `dialtone_med_app/developer/developer-journal.md`: the Med payment path is platform-account Checkout with no Connect charge model, so the fee is promised in copy but not yet collectible.

## 2026-11-08

- Repositioned the homepage around a healthcare phone agent that answers every call and manages appointments, refill requests, billing, and insurance verification.
- Replaced the previous organization-size pricing plans with four capability tiers: Essential Answering, Patient Connect, Practice Operations, and Enterprise Network.
- Distinguished default functionality from optional upgrades across SMS, exam-room management, EMR/EHR integration, analytics, and multi-site support while preserving the existing DialTone.Med clinical-console branding.
- Updated pricing SEO metadata and structured data for the four-tier healthcare phone-agent model, including an offer catalog and matching visible FAQ content.
- Improved cross-page internal link text and confirmed the existing sitemap already uses canonical extensionless routes.
- Updated the pricing hero to position DialTone.Med as a customized patient-engagement platform and restored the "Every patient call answered" headline.
- Updated the homepage hero label to "DialTone.Med / Customized Patient-Engagement Platform" for consistent positioning across the site.
- Created a branded 15-slide first-pass investor deck for Rock Health Capital while preserving the original draft.
- Reframed the investor narrative around measurable workflow pain, staged product evidence, a PBM and general-practice pilot pipeline, tiered expansion, durable implementation advantage, and the existing $1.5M seed ask without presenting planned pilots as live traction.

## 2026-10-25

- Replaced the homepage's side-by-side leak cards with an accessible Medical/Dental exposure console that updates miss rate, annual revenue risk, and voicemail retention telemetry.
- Added a responsive three-stage integration pipeline covering telephony handoff, workflow provisioning, and automation activation.
- Verified click and arrow-key mode switching, ARIA state updates, unique element IDs, and overflow-free desktop/mobile layouts through the local Wrangler preview.
- Created `feat/engineering-console-refresh` from the successful `30bdb4f` homepage refresh so the new visual work can be reviewed or rolled back without moving `main`.
- Updated the live homepage to the specified obsidian, sterile-panel, surgical-mint, and alert-crimson color system.
- Replaced the hero's static workflow diagram with a looping inbound-call terminal and four practice workflow paths.
- Converted the capability modules to an asymmetric 12-column control-plane grid and expanded the dual leakage consoles with the 42% business-hour miss rate and 75%-85% voicemail drop-off meters.
- Restyled the trust and contact layers as one continuous technical console and fixed the retained legacy navbar handler so it no longer throws during page scroll.
- Verified the Worker-served page at desktop and 390px mobile widths with no layout overflow, failed local resources, editor diagnostics, or browser console errors.
- Replaced the accidental hero headline text with "High-availability inbound answering for high-volume practices" and deployed the corrected homepage.

## 2026-10-24
- Added the Google Search Console verification file and routed its exact `.html` URL through the Worker so Cloudflare Static Assets does not redirect it to an extensionless route during verification.

## 2026-10-24
- Completed the baseline SEO pass: added Organization/WebSite structured data on the homepage, Service structured data plus Open Graph/Twitter metadata on Pricing, and canonical URLs on the Pricing and legal pages.
- Updated sitemap entries to their canonical extensionless routes; the existing 404 page remains excluded from indexing.
- Updated the active homepage billing capability from questions to management, covering balances, statements, and payments.

## 2026-10-24
- Added `public/pricing.html`, a standalone pricing page with an accessible interactive revenue-risk calculator, plan comparison, request-a-quote CTAs, and the approved $599/month implementation floor.
- Added `/pricing.html` to the dynamic sitemap in `worker.js`.
- Kept terminology aligned with the refreshed homepage by describing patient-call handling and management rather than routing.
- Added the Pricing destination to the refreshed homepage navigation.
- Simplified the pricing-page implementation floor statement to "Professional implementation packages start at $599/month."
- Added an Implementation header-nav link to the pricing-page cost guardrail.
- Added an explicit Contact destination to every site header, linking supporting pages back to the homepage contact form.
- Fixed responsive legal and utility-page headers so Contact remains visible without compressing the document label and navigation on mobile.
- Refined the pricing-page implementation cost callout with smaller sans-serif type and centered alignment for a cleaner reading rhythm.

## 2026-10-24
- Rebuilt the visible homepage in `public/index.html` around the approved clinical-console direction: a responsive inbound-routing hero, evidence-labeled missed-call telemetry panels, four simulated capability modules, and an infrastructure diagram.
- Kept MedBlue/SignalTeal-derived accents within the darker console treatment and added JetBrains Mono for telemetry, system labels, and values.
- Marked hero and capability system states as illustrative/simulated, retained only documented security claims (TLS 1.2+, role-based access, MFA, audit logging, EHR/practice-management integrations), and excluded unverified latency, PII-sanitization, and real-time copay claims.
- Preserved the existing `/api/contact` contract and repointed the existing client-side form behavior to the refreshed visible contact form.
- Updated homepage SEO and social metadata to reflect the infrastructure positioning.
- Corrected the refreshed homepage positioning to describe DialTone.Med as answering and managing patient requests rather than routing calls.
- Updated the simulated hero status from signal detection to "Patient call answered" to better reflect the product experience.
- Reframed the hero animation copy from numbered workflow states to patient support, managed routine work, and accurate HIPAA-aligned practice operations.
- Reordered the hero operation sequence so Trusted Operations sits between Patient Support and Routine Work, with directional indicators on both sides.
- Removed the "Illustrative operations view" qualifier from the hero animation note.
- Replaced the Dental Console's generic research-reference copy with a direct explanation of the voicemail drop-off graph.
- Removed visible numeric section prefixes and module identifiers from the refreshed homepage.

## 2026-04-28
- Added a new on-brand THE PROBLEM section to the marketing page.
- Implemented the exact required headline copy: "Missing calls is bigger problem than you think." and "Frustrated patients and lost revenue".
- Added two data tables (Medical Practices and Dental Practices) with all metrics and source links from docs/the_problem.md.
- Styled the section to match existing DialTone.Med branding by reusing current tokens, spacing, shadows, and typography patterns from the page.
- Added responsive behavior for the section and tables so content remains readable on mobile (single-column cards + horizontal table scroll when needed).
- Performed a follow-up brand consistency pass across the page to preserve independent in-progress edits while improving cohesion.
- Replaced inline hero/list styles with reusable branded CSS classes (`hero-copy`, `hero-copy-highlight`, `hero-note`, `service-list`).
- Added a top nav anchor for the new Problem section (`#problem`) to match the existing section navigation pattern.
- Applied minor copy polish for consistency and readability (for example: "Reschedule an appointment", sentence-case patient-facing copy).
- Reconfigured the Problem frame from two side-by-side tables to a two-panel layout:
	left card with key points and right card with tabbed data views.
- Implemented an accessible tab interface for the right panel (Medical Practice / Dental Practice), including click and arrow-key navigation.
- Converted detailed table rows into concise, scannable data-point cards per tab while preserving the core statistics.
- Updated the left-side Key Points verbiage to the latest requested messaging and structure.
- Added explicit citation lines for `prettygoodai.com` and `vigma.ai` under the corresponding key points.
- Switched source link styling to grey for both left-side citations and right-panel source links to reduce visual weight.
- Removed the hero promotional note ("No credit card. No commitment — First 50 providers get 30 days free.") per latest page-copy direction.
- Added a new Services card for "Prescription Refills" with the subtitle "Provider approved workflows" using the existing service-card pattern.
- Added a med-specific Supabase schema file at `developer/supabase/01_waitlist_schema.sql` and aligned the worker insert shape with the sibling DialTone schema (`email`, `name`, `restaurant_name`, `campaign`, `comment`, `created_at`) while keeping the campaign value specific to DialTone.Med.
- Added `company_name` to the med waitlist schema and updated the worker to write both `company_name` (canonical for DialTone.Med) and `restaurant_name` (legacy compatibility), with backfill logic so existing rows stay consistent.
- Added a required Company field under Name in the contact form and wired it through the frontend submit handler, Worker validation, Supabase persistence, and Resend email subject/body.
- Rewrote the three "How It Works" cards to be provider-facing DialTone.Med actions: connect the practice line, define front-desk workflows, and let DialTone handle routine calls.
- Removed the mid-page blue CTA banner ("Take Control of Your Healthcare") so the page now flows directly from the How It Works section into Contact.
- Rebranded `public/privacy.html` and `public/terms.html` from the old DialTone.Menu restaurant legal pages to the DialTone.Med visual system and healthcare-oriented placeholder legal copy, including updated metadata, typography, colors, product naming, and contact address.
- Updated footer legal links in `public/index.html` so Privacy and Terms now point to `/privacy.html` and `/terms.html` instead of dummy `#` targets.
- Rebranded the newly added `public/404.html` to the DialTone.Med visual language and verified 404 routing remains correctly configured through `wrangler.toml` (`not_found_handling = "404-page"`).
- Created `public/hippa.html` from the HIPAA policy PDF content with DialTone.Med legal-page styling, linked the main footer "HIPAA Notice" entry to `/hippa.html`, and added `/hippa.html` to sitemap generation in `worker.js`.
- Updated `worker.js` robots/sitemap handlers so `robots.txt` now always emits a sitemap URL based on the current request origin and `sitemap.xml` lists only existing public pages (`/`, `/privacy.html`, `/terms.html`, `/hippa.html`) instead of the stale `/pricing.html` route.
- Added a `preflight` job to `.github/workflows/deploy.yml` and gated deploy on it, including a `node --check worker.js` syntax check plus basic static-file smoke checks before Cloudflare deployment.
- Removed click behavior from the services cards by converting them from anchor tags to non-interactive article containers and removing pointer-cursor styling.
- Standardized `waitlist_submissions.campaign` to `Med Launch` in the schema migration (create default, backfill normalization, and altered default) to align with the worker insert value and avoid mixed casing/tags from earlier defaults.
- Standardized favicon cache-busting across pages by updating `public/index.html` to use `/images/favicon.svg?v=20260427`, matching the legal and utility pages.
- Added core homepage SEO/social metadata in `public/index.html`: meta description, robots directive, canonical URL, Open Graph tags, and Twitter card tags.
- Updated the hero primary CTA label from "Join Our Waitlist" to "Contact Us" to match current page intent.
- Updated the trust-bar compliance copy by replacing "SOC 2 Type II" with "HIPAA-aligned architecture, SOC 2 Type 2 roadmap in place".
- Added a new trust-bar badge for "Support Team" beside the existing "24/7 Availability" item.
- Updated the problem-section headline copy to "Missing calls is a bigger problem..." per latest messaging direction.
- Updated `worker.js` Supabase insert logic to retry without `company_name` when that column is unavailable, so contact submissions still succeed on older table versions while schema rollout catches up.
- Added `developer/deployment.md` as a DialTone.Med-specific deployment runbook modeled after the sibling project and updated for this repo's actual workflow, preflight checks, secrets, schema script, and post-deploy verification.
- Removed the footer's Services/Support/Legal link columns from `public/index.html`, leaving the simplified brand + bottom legal footer only.
- Added a bottom footer legal link to `/hippa.html` and placed it before Privacy and Terms.
