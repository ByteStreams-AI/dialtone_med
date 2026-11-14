# Developer Journal

## 2026-11-14

- Owner decision: an answered call is now an inbound call in which the caller replies to the agent at least once. A call that ends without a caller reply is not a call and is not billed. This replaces the "lasts more than 10 seconds" rule from the 2026-11-13 entry below. Changed in three places in [pricing.html](../public/pricing.html): the call-band notes, the "What counts as an answered call?" FAQ, and its JSON-LD copy.
- The page deliberately does not state how quickly a silent call is ended. The owner wants a 5-second no-reply cutoff in the app, but neither DialTone.Menu (12-second reprompt, 20-second hang-up) nor DialTone.Med (7 and 15 seconds) does that today, and the owner decided the same day to keep DialTone.Med's current timing for now. See the 2026-11-14 entry in the app journal.
- Legal review returned the same day; applied as written:
  - [privacy.html](../public/privacy.html) section 05: recordings and transcripts are retained for 30 days for quality assurance and troubleshooting, then permanently deleted, and practices may request custom retention in writing. "Patient and operational data" now says ByteStreams is not an EHR or pharmacy management system of record and does not store comprehensive clinical charts; it retains only minimum-necessary operational and workflow data (contact details, appointment metadata, billing and transaction records, prior authorization statuses, refill requests that may include caller-stated medication names) as PHI under the BAA, while the practice has an active account, then purges or returns it. This is the third version pasted that day and the reviewed one; it replaced the owner's own draft ("No patient records are retained") and an earlier reviewed draft.
  - [terms.html](../public/terms.html): the "Draft, pre-launch placeholder" box is removed and the opening terms paragraph now sits in that box style, labelled "Your agreement" (label is my choice). Section 07 adds that SMS message data is sourced from practices and discrepancies should be reported to the practice.
  - [hipaa.html](../public/hipaa.html): no changes requested.
  - [pricing.html](../public/pricing.html): answered call reworded to "an inbound call with at least one caller reply"; the $599 pilot is removed; the fee FAQ, band note and calculator note now say the practice pays card transaction fees. The 1.5% fee on gross is confirmed.
- No pilot is offered or advertised. A production-ready "Phase 1, proof of value" is offered company by company and stays off the site.
- The reviewed privacy text agrees with the `/hipaa` retention table (kept while the practice uses the service, then removed or returned). To confirm with the reviewer: the "not a system of record" sentence is limited to EHR and pharmacy management systems. The separate claim "your EMR or EHR stays the authority" is still unapproved and still off the site.
- Committed as `228402c`, merged to `main` through PR #2 (squash, `b350bc3`) and deployed. Verified live on dialtone.med: all pages return 200, `/hippa` redirects to `/hipaa`, the pricing page carries the new call definition and no pilot.
- Investor deck (`developer/create-investor-deck.js`, regenerated `docs/DialToneMed_Rock_Health_First_Pass.pptx`) aligned with the site, on branch `feat/investor-deck-update`, uncommitted:
  - Five workflows throughout (prior authorization status added); product flow is now answer, verify, text a secure link, record.
  - Slide 6 product status rewritten from the app roadmap: staging has caller verification, texted links, test-mode payment, consent-based recording, staff console and caregiver access; production gates are live eligibility, live payments and fee collection, EMR/EHR and ePA connections, PHI workflows, Phase 1 evidence.
  - "Pilot" replaced by "Phase 1 proof of value" everywhere; the $599 pilot price is gone.
  - Slide 9 replaced the four tiers and per-provider pricing with the four call bands, about $0.30 variable cost per answered call at a 90-second call, 75%+ gross margin at each band ceiling before the fixed $2k/mo platform cost, the 1.5% fee on gross link payments, and card fees paid by the practice.
  - Slide 10: $1.0B at the entry band, $1.9B if the average practice sits in the second band (85,000 x $1,899 x 12), plus about 1,900 accredited specialty pharmacy locations (Drug Channels Institute, end of 2025) named as a second segment outside those figures. Removed the "$50k-$200k of front-desk labor, ~85% automatable" line.
  - Slide 13: Series A gate restated as 20-30 paying locations, about $240k-$680k ARR depending on band.
- Owner: the PBM is out. Deck now says a general practice partner is lined up and a specialty pharmacy partner is being sought (the second half is my assumption, to be confirmed); the closing slide counts two target segments instead of two partners.
- Call-volume research, full report at `reports/Medical practice inbound call volume.md` with notes under `research_notes/`:
  - "53 inbound calls per physician per day (MGMA)" has no MGMA source. It traces to a 2017 vendor blog's own sum of 31 inbound and 22 outbound calls per provider; the MGMA label first appears unlinked on a 2026 vendor blog. Removed from the deck. `docs/dialtonemed_buyer_universe.md` still carries it and is not corrected yet.
  - Best measured figure: 439 to 1,002 main-line inbound calls per 1,000 patients per month (Dexter et al., JABFM 2016, four Oregon clinics, 2009 to 2014). Derived: 30 to 50 calls per physician per working day, 650 to 1,050 a month, low-to-medium confidence. Planning rate adopted in the deck: about 750 answered calls per physician per month.
  - At that rate one 750-call band is roughly one physician: the published bands cover one to four physicians, and five or more exceed 3,000.
  - Specialty pharmacy: about 0.9 to 1.3 inbound calls per specialty prescription, derived from URAC audited totals; roughly two-thirds of URAC-accredited organisations fit the bands. The site's URAC figures are correct for the 2024 report (2023 measurement year); the newer report shows 2.98% and 83.15%.
  - The 23% unanswered and 62% voicemail hang-up figures have no traceable source. Both are live on the pricing calculator and on deck slide 2.
- Owner approved the three site recommendations. Applied locally, not committed or deployed:
  - [pricing.html](../public/pricing.html): bands published through 7,500 answered calls ($4,599, $5,499, $6,399, $7,299, $8,199, $9,099 on the same $900 step), quote above 7,500; structured data and the multi-location FAQ updated to match.
  - Calculator: general practice defaults to 750 calls and 12% unanswered, specialty pharmacy to 500 calls and 3%; slider runs to 7,500. The 62% and 30% constants are replaced by one stated assumption (1 in 5 unanswered callers never reaches the practice). Default outputs are now 90 unanswered, 44 hours, 2 patients, $7,000, $1,478.
  - [index.html](../public/index.html) exposure console, general practice: 36% of 302 practice leaders say at least 11% of calls go unanswered or to voicemail at peak (MGMA and Insight Health 2026 survey, vendor-sponsored); 32% missed-call rate for healthcare businesses (CallRail, January 2025); 45% name eligibility and prior authorization the most time-consuming phone task (MGMA Stat poll, 294 responses, March 2026). The $200K-$500K revenue figure and the vendor-blog sources are removed. Specialty pharmacy now shows the URAC 2025 report: 2.98% abandoned, 83% answered within 30 seconds.
  - All four sources were opened and the figures read directly before use.
  - Deck slide 2 uses the same 36% and 32%.
- Owner: a specialty pharmacy has given a verbal commitment. Deck now shows two design partners, general practice lined up and specialty pharmacy verbally committed. The owner walks the pharmacy through the product on Wednesday 2026-11-18; the partnership (integrations, pricing for "Phase 1 Production", legal) is to be defined after that.
- `docs/dialtonemed_buyer_universe.md` carries a correction note above the unsourced call-volume figures.
- Reviewed the deck against Rock Health Capital's application questions and its H1 2026 report. Main gaps: founder-market fit and team, no live evidence, no named partnerships, no direct answer to "what do people use today", and dependence on a voice vendor. Strongest points: sourced numbers, unit economics, hands-on delivery, and specialty pharmacy as a less crowded wedge.
- Deck slide 14 now carries an advisor, unnamed: 25+ years in healthcare, currently manages call centers at a national specialty pharmacy, working knowledge of prior authorization operations. The owner is getting his formal sign-off before he or his employer is named; until then the slide says "Advisor named on request".
- Owner: the advisor's role will be formal, and he introduced the specialty pharmacy design partner. The slide now says so. The pharmacy is not his employer (owner, same day). The slide describes his experience without "currently", so it stays accurate if his role changes.

## 2026-11-13

- **Open at deploy, by owner decision:** the data-handling claim "when connected, your EMR or EHR stays the authority and DialTone.Med mirrors it" is not approved yet. The owner chose to deploy without it. It is deliberately absent from every page; do not add it, or any wording that DialTone.Med is not a system of record, until the owner confirms approval. The two approved claims are on the site: DialTone.Med never decides (refills, prior authorization, medical advice), and sensitive detail is never spoken on the call.
- Repositioned the site to the current product: calls plus texted secure links, five workflows (appointments, billing review and payment, refill requests, prior authorization status, insurance verification), for general practices and specialty pharmacies. Dental is removed.
- Homepage: replaced the "Live edge stream" log panel with rotating example calls, one per workflow, each showing what is said on the call, what goes by secure link and what is left for staff; replaced the Medical/Dental exposure console with General practice/Specialty pharmacy (specialty figures from URAC's 2024 aggregate report); rewrote the five capability cards and the onboarding copy; replaced console-style labels with plain ones; pointed the nav link at the right section.
- Homepage: replaced "HIPAA-aligned infrastructure" with "What happens to patient data" (on the call, by secure link, decisions, retention). It states recordings and transcripts are kept for 30 days, which is what the app implements; the owner has not yet chosen between 30 days and a longer contractual period.
- Pricing: replaced the four capability tiers and per-provider pricing with one plan per location in 750-call bands ($999 for the first 750 answered calls, $900 for each further 750, quote above 3,000), every workflow included. The page defines an answered call as lasting more than 10 seconds, sets the band on a three-month average, and caps the $599 pilot at 500 calls. The 1.5% platform fee is stated on the gross amount of payments made through the texted link.
- Pricing: rebuilt the ROI calculator for general practice and specialty pharmacy, with staff phone hours and a line for patient payments collected by text after the 1.5% fee. No "requests completed" figure is shown until pilot data exists.
- Recorded the related app-side dependencies in `dialtone_med_app/developer/developer-journal.md` (fee collection W2.6, call end and duration W0.5, daily Vapi purge).
- Legal pages: replaced the published internal policy at `/hippa.html` (confidential label, signature block, personal email, link to a deleted PDF) with a customer-facing "Security and HIPAA" page at `/hipaa`; `public/_redirects` sends `/hippa` and `/hippa.html` there, and the sitemap and footers follow. Privacy: corrected the service-provider list (Telnyx replaces Twilio; Deepgram and Stripe added), stated retention (recordings and transcripts 30 days with consent, audit logs six years), and described secure links, caregivers and payments. Terms: updated the service description; the "Draft, pre-launch placeholder" banner stays because no lawyer has reviewed the pages.
- Homepage cleanup: removed the legacy page kept inside a `<template>`, the scripts that only served it and about half of the stylesheet; moved the contact section inside `<main>`. `index.html` went from 1,805 to 796 lines before the new section. Full-page screenshots at 1280px and 420px were pixel-identical before and after.
- Homepage: added "Your staff see every call" with an illustrative call inbox (calls tagged by type, unresolved messages, transcript and first-text badges) and caregiver permissions, both modelled on the Admin app's Recordings inbox and caregiver grant.
- Still open: lawyer review of the legal pages, the 30-day versus contractual retention decision, who bears card processing fees, and source checks on the general-practice benchmarks.

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
