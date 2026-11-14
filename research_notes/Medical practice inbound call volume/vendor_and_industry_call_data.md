# Vendor and industry datasets on inbound call volume, missed-call rates and call mix for small US medical practices (as of Nov 2026)

**How to read these notes**

- Every figure is vendor or trade-association data unless stated otherwise. None is peer-reviewed.
- Grade tags:
  - **[MEASURED]**: from the vendor's own call logs, with a stated sample.
  - **[SURVEY]**: self-reported by respondents.
  - **[CASE STUDY]**: a single customer result published by the vendor.
  - **[UNSOURCED]**: a marketing claim, an illustrative assumption, or an attribution I could not trace to a primary document.
- Verification tags:
  - **(opened)**: I read the page or document.
  - **(snippet)**: the figure comes from a search-result summary and I did not open the page. Treat these as leads.
- Headline finding: I found no vendor dataset that reports inbound calls per location per month for 1-10 physician medical practices from call logs with a stated sample. The best-documented source is a 2026 MGMA survey of 302 practice leaders. It is self-reported and skews to larger groups.

## 1. What inbound call volumes per practice location do vendors report from their own call data?

### Takeaway
No listed vendor (Weave, RingCentral, Talkdesk, Phreesia, Luma Health, Artera, Relatient, Hyro, Zocdoc, Hello Patient, Assort Health, Parakeet Health, Simbo AI, Peerlogic, CallRail, Invoca, Nextiva) was found to publish a per-location call-volume benchmark from call logs with a stated sample. The usable numbers are one MGMA survey bucket (59% of groups report 301+ inbound calls per business day) and vendor planning assumptions that cluster around 300-600 calls a month for a solo practice and 75-100 calls a day for a single-location practice.

### Cited Findings
- **[SURVEY] (opened)** MGMA 2026 Phone and Fax Solutions Survey: 302 responses, 80% from independent medical group practices. 59% of respondents report 301 or more inbound calls on a typical business day. The report is vendor-sponsored (InsightHealth) and published Spring 2026. Practice size by physician count is not reported, and the only bucket published is "301+". — [MGMA/InsightHealth, "Agentic Impact for Intake and Beyond" (PDF)](https://www.mgma.com/getkaiasset/3d85ddee-e329-4280-b726-3a93d63c7771/InsightHealth-MGMA-Agentic-Impact-for-Intake-and-Beyond-Final.pdf)
- **[SURVEY] (opened)** Same survey: 54% of independent practices report 301+ calls per business day, against 77% of hospital- and system-owned groups. — [MGMA/InsightHealth PDF](https://www.mgma.com/getkaiasset/3d85ddee-e329-4280-b726-3a93d63c7771/InsightHealth-MGMA-Agentic-Impact-for-Intake-and-Beyond-Final.pdf)
- **[UNSOURCED] (opened)** Solutionreach uses "75 to 100 calls on a typical day" for a single-location practice as a worked example, with no source cited. It also assumes a front desk handles 4-6 calls per hour. The page contains no Solutionreach call data. — [Solutionreach blog](https://www.solutionreach.com/blog/how-many-calls-does-a-medical-practice-miss-each-week-and-what-it-costs-you)
- **[UNSOURCED] (opened)** An AI-receptionist vendor's cost guide gives typical monthly call volumes by practice profile, with no source or sample:
  - solo provider: 300-600
  - 2-3 provider primary care: 600-1,200
  - 4-6 provider multi-specialty: 1,200-2,400
  - 8-12 provider group: 2,400-4,000
  - multi-location, 15+ providers: 4,000-8,000+
  - worked example: a 4-provider primary care practice at 1,500 inbound calls a month
  — [letsaskclaire.com cost guide](https://www.letsaskclaire.com/healthcare/ai-medical-receptionist-cost)
- **[UNSOURCED] (opened)** MedReception's pricing calculator defaults to 200 calls per week, which it converts to about 1,011 minutes a month. That is roughly 866 calls a month at 4.33 weeks. — [medreception.ai pricing](https://www.medreception.ai/pricing)
- **[UNSOURCED] (opened)** A price-comparison site models a medical practice at 100 calls a month of 3 minutes each, with a calculator default of 300 minutes a month. — [receptionistcost.com](https://receptionistcost.com/industries/medical/)
- **[MEASURED, dental, weak] (opened)** Peerlogic's "February 2026" analysis covered 4,280 inbound calls across 26 dental practices. That is about 165 calls per practice (my arithmetic). The period length and call-selection method are not stated, so this cannot be read as monthly volume per practice. — [Peerlogic](https://www.peerlogic.com/post/patient-communication-by-the-numbers-what-every-ceo-should-know)
- **[UNSOURCED] (opened)** A Peerlogic FAQ models a dental group at 50 calls per day per location. It is an illustrative input, not a measurement. — [Peerlogic](https://www.peerlogic.com/post/patient-communication-by-the-numbers-what-every-ceo-should-know)
- **[CASE STUDY] (opened)** Larger-organisation volumes from AI-agent case studies, for scale only. These are not small practices:
  - Piedmont Urgent Care: 20,000+ billing calls a month (Hello Patient)
  - Dallas Renal Group: about 20,000 calls a week (Confido Health)
  — [Hello Patient vendor comparison](https://www.hellopatient.com/learn/best-ai-voice-agents-for-healthcare-2026)
- **(opened)** Weave's phone analytics for multi-location practices tracks missed, answered and abandoned calls and average call duration by location. No aggregate benchmark from that data turned up in search. — [Weave press release, Oct 2022](https://www.businesswire.com/news/home/20221031005147/en) (snippet for the release content)
- **[SURVEY] (opened)** Older context, MGMA Stat poll of March 2017 with 1,334 applicable responses: 52% said a staff member answers incoming calls, 42% use an automated phone tree, 6% another method. — [MGMA Stat 2017](https://www.mgma.com/mgma-stats/practice-leaders-most-phone-calls-are-personally-answered)

### Inferences
- Converted to business days (about 21 a month), the product's numbers are:
  - 500 calls a month (calculator default): about 24 a day
  - 750: about 36 a day
  - 1,500: about 71 a day
  - 2,250: about 107 a day
  - 3,000: about 143 a day
- The 500-call default sits at the solo-practice level in the vendor planning assumptions above (300-600). It is below MedReception's default (about 866 a month), the 4-provider worked example (1,500 a month) and Solutionreach's 75-100 a day (about 1,575-2,100 a month).
- The MGMA "301+ a day" bucket equals 6,300+ calls a month. If 54% of independent MGMA respondents are at that level, the 3,000-call ceiling will not cover a meaningful share of multi-physician groups where the agent answers every call. MGMA respondents are likely larger than the 1-10 physician target, but the report does not give the size split, so this cannot be confirmed.
- The four volume assumptions that were opened (Solutionreach, letsaskclaire, MedReception, receptionistcost) are inputs chosen by sellers. They agree only loosely, spanning 100 to about 2,100 calls a month for one small practice.

### Gaps
- No call-log-based per-location volume benchmark was found for any listed vendor. RingCentral, Nextiva, Phreesia, Luma Health, Artera, Relatient, Parakeet Health and Simbo AI produced nothing usable in the searches run. I did not run a dedicated search for each one.
- The MGMA survey's full distribution of daily call volume (buckets below 301) appears only in a chart that did not extract as text.
- A figure of "150-200 calls per day for a 5-physician primary care practice" (attributed to Patient10x) appeared in a search summary. I could not tie it to a page, so it is unverified.

## 2. How do volumes differ by practice size and specialty? Any per-provider figures?

### Takeaway
Per-provider figures exist only as unverified attributions. The widely repeated "53 calls per physician per day (MGMA DataDive 2025)" could not be traced to MGMA, and it conflicts by roughly 3-5x with other vendors' planning assumptions of about 200-400 calls per provider per month. Specialty differences are documented only by the MGMA survey buckets: gastroenterology and surgical groups skew high.

### Cited Findings
- **[UNSOURCED] (opened)** "Medical practices receive an average of 53 calls per physician per day", with radiology about 25 a day and OB/GYN about 75 a day. The page attributes this to "MGMA DataDive, 2025" with no link. — [AgentZap blog](https://agentzap.ai/blog/medical-practice-phone-statistics)
- **[UNSOURCED] (opened)** Patient Prism's review gives 25-75 calls per physician per day by specialty and footnotes it to the March 2026 MGMA Stat article. I opened that MGMA article and it contains no calls-per-physician figure, so the attribution fails verification. — [Patient Prism](https://www.patientprism.com/blog/missed-calls-medical-practice-revenue/); checked against [MGMA Stat, Mar 2026](https://mgma.com/mgma-stat/phones-are-still-a-backlog-costing-medical-practices-time)
- **[UNSOURCED] (opened)** The same AgentZap page says solo practices miss over 30% of calls and large groups 15-18%, attributed to a "Talkdesk Healthcare Report, 2025" that I could not locate (see section 3). — [AgentZap blog](https://agentzap.ai/blog/medical-practice-phone-statistics)
- **[UNSOURCED] (opened)** The letsaskclaire profile table implies roughly 200-400 calls per provider per month, or about 10-20 per provider per business day (my arithmetic from its ranges). — [letsaskclaire.com](https://www.letsaskclaire.com/healthcare/ai-medical-receptionist-cost)
- **[SURVEY] (opened)** MGMA 2026 survey by specialty:
  - gastroenterology: 68% report 301+ daily calls, and 47% say at least 11% go unanswered or to voicemail
  - surgery and procedural groups: 66% report 301+ daily calls
  - primary care and pediatrics: 92% put scheduling in their top three call reasons
  — [MGMA/InsightHealth PDF](https://www.mgma.com/getkaiasset/3d85ddee-e329-4280-b726-3a93d63c7771/InsightHealth-MGMA-Agentic-Impact-for-Intake-and-Beyond-Final.pdf)
- **[UNSOURCED] (opened)** MedReception positions 500 included minutes for "clinics with 2 or fewer providers", 1,000 minutes for "most clinics" and 2,000 minutes for "high-volume practices". At its own 70-second assumption that is about 430, 860 and 1,700 calls a month (my arithmetic). — [medreception.ai pricing](https://www.medreception.ai/pricing)

### Inferences
- The "53 per physician per day" figure would put a 3-physician practice at about 3,300 calls a month, above the top pricing band. The letsaskclaire table puts the same practice at 600-1,200. Neither has a traceable method, so the per-physician range is not established.
- Linear scaling by provider count is an assumption in every source found. No source shows measured data comparing solo, 2-5 and 6-10 physician groups.

### Gaps
- No verified per-provider or per-physician call volume. MGMA DataDive is subscriber-only and I could not confirm that it contains the "53" figure.
- No measured comparison of primary care against specialties per location. The MGMA survey gives only the share of respondents above 301 calls a day.

## 3. What missed, unanswered, abandoned and voicemail rates are reported, and how solid are the commonly repeated figures?

### Takeaway
Of the commonly repeated figures, only the Peerlogic 38% traces to a stated sample (4,280 calls, 26 dental practices, definition not given). The 23% "Talkdesk" figure, the "7,000-call study at 42%" and the 62% voicemail figure could not be traced to any primary document. The best-documented data points are CallRail's 32% for healthcare (a cross-industry lead dataset) and MGMA's survey finding that 36% of leaders say 11% or more of calls go unanswered or to voicemail at peak, which implies most practices believe they miss less than 11%.

### Cited Findings

**The figures the brief asked about**

- **23% unanswered or abandoned: [UNSOURCED], origin not found (opened and snippet).**
  - Blogs attribute "the average medical practice misses 23% of incoming calls" to a "Talkdesk Healthcare Report, 2025", with no link. — [AgentZap blog](https://agentzap.ai/blog/medical-practice-phone-statistics)
  - A targeted search found no Talkdesk healthcare document with this figure.
  - The only 23% found in Talkdesk's KPI benchmarking report is a 23% decrease in hold and waiting time. — [CX Network listing of the Talkdesk report](https://www.cxnetwork.com/cx-experience/whitepapers/talkdesk-kpi-benchmarking-report) (snippet)
  - A secondary blog puts Talkdesk's cross-industry average abandonment at 5.91%. — [ringly.io](https://www.ringly.io/blog/call-abandonment-rate-statistics-2026) (snippet)
  - Treat the 23% as repeated across blogs with no traceable origin, and possibly a misattribution.
- **"7,000-call study at 42%": [UNSOURCED], origin not found (snippet).**
  - The claim is that a study of 7,000 calls across 22 practices in 18 states found 42% of calls missed during business hours.
  - It is repeated across vendor and answering-service blogs. None of them names the researchers, date or publication. — e.g. [AnswerNet](https://answernet.com/costs-of-missed-calls-in-medical-offices-and-how-to-avoid-them) (returned HTTP 403 when opened), [Solutionreach guide](https://www.solutionreach.com/guide/resources-missed-calls-cost-guide) (snippet)
  - One search summary attributed it to an analysis by a medical answering-service vendor (notifyMD). I could not confirm that against a primary page.
  - Even if real, 7,000 calls across 22 practices is about 320 calls per practice, a small convenience sample from a company that sells answering services.
- **30-42% missed: [UNSOURCED] composite.** The range joins the unverified solo-practice claim ("30%+") or CallRail's 32% at the bottom to the unverified 42% study at the top. No single source measures this range.
- **62% of callers who reach voicemail hang up: [UNSOURCED], origin not found (opened and snippet).**
  - The only attribution found is "PatientBond Survey, 2025", with no link, on a vendor blog. — [AgentZap blog](https://agentzap.ai/blog/medical-practice-phone-statistics)
  - The survey itself was not located.
  - Competing unsourced versions say about 80% will not leave a voicemail. — [RingRx](https://ringrx.com/?p=17162), [MedCity Influencers op-ed](https://medcitynews.com/?p=144631) (both snippet)
  - Spruce Health states that concrete figures do not seem to exist. — [Spruce Health](https://sprucehealth.com/blog/missed-calls-lost-patients-medical-phone-system-failing/) (snippet)
  - A separate, well-known "62%" is the share of small-business calls that go unanswered, from a 30-day test of 85 businesses by 411 Locals, usually dated 2016. It is non-healthcare and counts voicemail as unanswered. A statistics review rates it "Low. Small, old and hard to trace." — [megawebvision.com](https://megawebvision.com/insights/missed-call-statistics) (opened)
- **Peerlogic 38%: [MEASURED, dental, sample stated, definition missing] (opened).**
  - Peerlogic's "February 2026" analysis of 4,280 inbound calls across 26 dental practices found 38% unanswered, with a 25% new-patient conversion rate.
  - "Unanswered" is not defined. Whether it covers business hours only, includes voicemail, or includes abandoned calls is not stated.
  - The same 26-practice set is also used as a product case study ($47,000 average recovery per practice).
  - Peerlogic's own pages also quote "up to 30%", "24-38%" and "25%+" for the same idea.
  - This is dental, not medical.
  — [Peerlogic](https://www.peerlogic.com/post/patient-communication-by-the-numbers-what-every-ceo-should-know)

**Other reported rates**

- **[MEASURED, sample stated at dataset level only] (opened)** CallRail, "From conversations to conversions" (15 Jan 2025): "Healthcare emerged as the industry with the highest missed call rate at 32%."
  - The dataset is 1.1 million leads or "de-identified conversations" across industries.
  - The healthcare subsample is not given and "missed" is not defined.
  - The same release says "up to 85%" of unanswered callers will not call back, without stating the basis.
  — [CallRail](https://www.callrail.com/blog/callrail-releases-benchmark-report)
- **[SURVEY] (opened)** MGMA 2026 survey (n=302): 36% of leaders say at least 11% of calls go unanswered or to voicemail during peak periods. In gastroenterology the share is 47%. — [MGMA/InsightHealth PDF](https://www.mgma.com/getkaiasset/3d85ddee-e329-4280-b726-3a93d63c7771/InsightHealth-MGMA-Agentic-Impact-for-Intake-and-Beyond-Final.pdf)
  - Attribution conflict: Solutionreach cites the same 36% as coming from the March 2026 MGMA Stat poll (n=294). — [Solutionreach blog](https://www.solutionreach.com/blog/how-many-calls-does-a-medical-practice-miss-each-week-and-what-it-costs-you)
  - The MGMA Stat page for that poll (10 March 2026, 294 responses) reports only the time-intensive-task question. — [MGMA Stat](https://mgma.com/mgma-stat/phones-are-still-a-backlog-costing-medical-practices-time)
  - MGMA's own report ties the 36% to the 302-response survey.
- **[UNSOURCED] (opened)** Patient Prism, a call-analytics firm, reviewed third-party sources and concluded "No single industry-wide figure exists". It gives 20-35% for primary care and dental during business hours and says it has "no independently verified missed-call rate" for specialty medical. None of the figures are Patient Prism's own measurements. Part of its range is cited to Solutionreach data on 20 million appointment messages, which is not call data. — [Patient Prism](https://www.patientprism.com/blog/missed-calls-medical-practice-revenue/)
- **[CASE STUDY] (opened)** Pulse MD, a multi-location urgent care group: missed calls went from 26% to 0 in month one. — [Hello Patient](https://www.hellopatient.com/learn/best-ai-voice-agents-for-healthcare-2026)
- **[CASE STUDY] (snippet)** Altius Dental cut missed calls from over 13% to under 6% with Weave. — [Weave case study via casestudies.com](https://www.casestudies.com/company/weave-communications/case-study/altius-dental-drives-value-and-creates-better-patient-experiences-with-weave)
- **[CASE STUDY] (snippet)** In a Peerlogic and Gen4 Dental Partners case study, some offices missed about 5% of calls and others about 50%. — [Peerlogic](https://www.peerlogic.com/post/from-missed-calls-to-measurable-growth-a-case-study-on-gen4-dental-partners-and-peerlogic)
- **[UNSOURCED] (opened)** Peerlogic says abandoned calls peak at 4x the off-peak rate ("internal Peerlogic data", no sample) and that peak-hour abandonment is "15%+" before its product. — [Peerlogic](https://www.peerlogic.com/post/patient-communication-by-the-numbers-what-every-ceo-should-know)
- **[UNSOURCED] (opened)** Average hold of 1 minute 47 seconds, attributed to an "MGMA Practice Operations Report, 2025". 34% abandon after 2 minutes on hold, attributed to an "Accenture Healthcare Consumer Survey, 2025". Neither has a link and neither was verified. — [AgentZap blog](https://agentzap.ai/blog/medical-practice-phone-statistics)

### Inferences
- The MGMA result implies about 64% of surveyed leaders believe fewer than 11% of calls go unanswered even at peak. That is hard to reconcile with a 23-42% average. The likely explanations are that leaders under-estimate without logs, and that vendor datasets (CallRail lead lines, Peerlogic prospects, answering-service samples) over-represent practices with a problem or count voicemail and after-hours calls as missed.
- CallRail's customers are businesses that track marketing calls. Its healthcare figure probably reflects advertised new-patient lines across all healthcare business types, not the main line of an independent physician practice.
- Defensible wording for a site or calculator: "vendor datasets report roughly a quarter to a third of calls to healthcare businesses going unanswered (CallRail 2025: 32%); practice leaders themselves report less (MGMA 2026: 36% say 11% or more at peak)". The 23%, 42% and 62% figures should not be quoted as fact.
- The 62% voicemail figure may be a conflation with the 411 Locals "62% of calls unanswered" statistic. This is my inference, not something a source states.

### Gaps
- The original "7,000 calls, 22 practices, 18 states" document was not found. A search using the attributed company's name was not run (see the constraint on search queries), and the AnswerNet page that cites the figure returned 403.
- A "Talkdesk Healthcare Report 2025" with a 23% figure was not found. No "PatientBond Survey 2025" on voicemail was found.
- An Invoca figure of 29% missed for healthcare appeared in one search summary. No primary Invoca healthcare document was found, so it is unverified.
- No vendor publishes a missed-call rate split by solo, 2-5 and 6-10 physician practices from logs.

## 4. What call-reason mix is reported, what share is handled without staff, and how long are calls?

### Takeaway
No vendor was found to publish a percentage call-reason mix from call logs. The only structured data is MGMA survey rankings: scheduling is the top reason, and prior authorization and eligibility take the most staff time. Published AI-agent case studies report containment of roughly 30-50% of calls resolved without staff, mostly at urgent-care, orthopedic or large-group customers, not 1-10 physician practices. No measured average call duration was found; vendors assume between 70 seconds and 3 minutes.

### Cited Findings

**Call reasons**

- **[SURVEY] (opened)** MGMA 2026 survey (n=302): scheduling and rescheduling are in the top three patient call reasons for 81% of respondents and rank first for 40%. The order after that is clinical questions and messages, referrals, prescription refills, then insurance or eligibility questions. No call-share percentages are given. — [MGMA/InsightHealth PDF](https://www.mgma.com/getkaiasset/3d85ddee-e329-4280-b726-3a93d63c7771/InsightHealth-MGMA-Agentic-Impact-for-Intake-and-Beyond-Final.pdf)
- **[SURVEY] (opened)** MGMA Stat poll, 10 March 2026 (294 responses), most time-intensive phone tasks for staff:
  - eligibility and prior authorization: 45%
  - scheduling: 31%
  - intake: 9%
  - other: 9%
  - prescription refills: 6%
  This is the share of leaders naming each task as most time-consuming, not a share of calls. — [MGMA Stat](https://mgma.com/mgma-stat/phones-are-still-a-backlog-costing-medical-practices-time)
- **[SURVEY] (opened)** MGMA Stat poll, 10 Feb 2026, on where leaders are turning to AI and automation to improve access: scheduling 31%, calls 27%, registration and eligibility 23%, prior authorization 16%. — [MGMA/InsightHealth PDF](https://www.mgma.com/getkaiasset/3d85ddee-e329-4280-b726-3a93d63c7771/InsightHealth-MGMA-Agentic-Impact-for-Intake-and-Beyond-Final.pdf)
- **[UNSOURCED] (opened)** Patient Prism cites "~30%" as the scheduling share of missed calls, from "a single MGMA poll" with no year or sample. — [Patient Prism](https://www.patientprism.com/blog/missed-calls-medical-practice-revenue/)

**Containment (calls resolved without staff)**

- **[CASE STUDY] (opened)** Hello Patient at Piedmont Urgent Care: 48% of 20,000+ monthly billing calls resolved without staff. 40% of patients sent a payment link paid during the call. — [Hello Patient](https://www.hellopatient.com/learn/best-ai-voice-agents-for-healthcare-2026)
- **[CASE STUDY] (opened)** Hello Patient at Pulse MD (urgent care): about 30% of calls resolved without staff. — [Hello Patient](https://www.hellopatient.com/learn/best-ai-voice-agents-for-healthcare-2026)
- **[CASE STUDY] (opened)** Assort Health at South Shore Orthopedics: about 45% of calls resolved without handoff, and a voicemail backlog of 600-1,000 cleared to 0. This is as reported by a competitor's comparison page. — [Hello Patient](https://www.hellopatient.com/learn/best-ai-voice-agents-for-healthcare-2026)
- **[CASE STUDY] (opened)** Confido Health at Dallas Renal Group: the agent handles 40% of about 20,000 calls a week, and calls needing staff attention fell from about 130 to about 70 a day. This is as reported by a competitor's comparison page. — [Hello Patient](https://www.hellopatient.com/learn/best-ai-voice-agents-for-healthcare-2026)
- **[UNSOURCED] (opened)** Hyro says customers "automate 65%+ of incoming calls on average". This is a health-system benchmark claim with no sample, and "automate" is not defined as full resolution. — [Hello Patient](https://www.hellopatient.com/learn/best-ai-voice-agents-for-healthcare-2026)
- **[CASE STUDY] (snippet)** MUSC Health's agent "Emily" handles 25% of patient calls across scheduling, billing and refills. Trade press reports this citing a health-system executive. — [PYMNTS](https://www.pymnts.com/healthcare/2026/ai-agent-emily-books-bills-and-refills-for-musc-health/)
- **(snippet)** Zocdoc's Zo handles scheduling. Refills, referrals, lab results, billing and medical questions transfer to staff. — [Fierce Healthcare](https://www.fiercehealthcare.com/health-tech/zocdoc-launches-voice-ai-tool-zo-streamline-phone-visit-bookings) (page returned 403 when opened)

**Call duration**

- **[UNSOURCED] (opened)** MedReception's calculator assumes an average handled call of 70 seconds. — [medreception.ai pricing](https://www.medreception.ai/pricing)
- **[UNSOURCED] (opened)** receptionistcost.com assumes 3 minutes per call for minute-billed plans. — [receptionistcost.com](https://receptionistcost.com/industries/medical/)

### Inferences
- Published containment clusters at 30-50% for mixed or billing lines. Scheduling-only agents hand off everything else. A planning figure of 30-50% of answered calls fully resolved is consistent with what vendors publish. Higher figures (65%+) are undefined marketing claims.
- All containment figures come from organisations far larger than the 1-10 physician target. No small-practice containment data was found.
- Scheduling dominates by count, while payer work (eligibility and prior authorization) dominates by staff time. That suggests the per-call value differs sharply by call type.

### Gaps
- No percentage call-reason mix (scheduling, refills, billing, insurance, results, other) from vendor call logs was found.
- No measured average call duration or handle time was found for medical practice calls. Only calculator assumptions exist, and they span 70 seconds to 3 minutes.
- Two further containment results appeared in a search summary but could not be tied to a page: an orthopedic group at 38% fully resolved and 54% AI-answered, and an OB/GYN practice resolving 50% of 18,000 monthly calls. Both are unverified.

## 5. What share of inbound volume is after hours or during lunch?

### Takeaway
No US medical-practice call-log dataset for after-hours or lunch share was found. The repeated numbers (about 27-41% outside business hours) are unsourced or dental. The one measured dataset, from veterinary clinics, shows the figure depends heavily on definition: 8.8% by clock time against 20.5% when lunch and unanswered daytime calls are routed to after-hours handling.

### Cited Findings
- **[UNSOURCED] (opened)** "41% of patient calls occur outside standard business hours" (8 AM-5 PM weekdays), attributed to a "Relatient Communications Study, 2025" with no link. Not verified. — [AgentZap blog](https://agentzap.ai/blog/medical-practice-phone-statistics)
- **[UNSOURCED] (opened)** "38% of calls occur during the first and last hour of the day", with the lunch hour (12-1 PM) lowest, attributed to "Luma Health Analytics, 2025" with no link. Not verified. — [AgentZap blog](https://agentzap.ai/blog/medical-practice-phone-statistics)
- **[UNSOURCED] (opened)** "Weekend calls represent 23% of weekly call volume" at practices with after-hours messaging, attributed to a "Solutionreach Data Report, 2025" with no link. Not verified. — [AgentZap blog](https://agentzap.ai/blog/medical-practice-phone-statistics)
- **[UNSOURCED] (opened)** Peerlogic says about 30% of dental calls arrive outside normal hours, or on evenings and weekends. No source or sample is given on its own pages. — [Peerlogic](https://www.peerlogic.com/post/patient-communication-by-the-numbers-what-every-ceo-should-know)
- **[UNSOURCED] (opened)** Solutionreach assumes 30-40% of a day's calls arrive in the first 90 minutes. It is an illustrative assumption with no data. — [Solutionreach blog](https://www.solutionreach.com/blog/how-many-calls-does-a-medical-practice-miss-each-week-and-what-it-costs-you)
- **[MEASURED, veterinary, not medical] (snippet)** A veterinary clinic panel found 8.8% of calls arrived after 6 PM or at weekends by clock time. A routing-based measure that includes lunch-hour and unanswered daytime calls reached 20.5%. — [Puppilot Q4 2025 insights report](https://www.puppilot.co/resources/insights/after-hours-q4-2025)
- **(snippet, outside the date window)** A family-practice log of physician-handled calls, published in 1988, found 78.1% received between 7:30 AM and 5:30 PM and 13.5% between 5:30 and 11:30 PM. It covers calls physicians took, not all practice calls. — [Journal of Family Practice, 1988 (PDF)](https://cdn.mdedge.com/files/s3fs-public/jfp-archived-issues/1988-volume_26-27/JFP_1988-08_v27_i2_the-nature-and-content-of-physician-tele.pdf)

### Inferences
- A defensible planning range for after-hours and lunch share cannot be set from published medical data. The veterinary panel suggests true clock-based after-hours volume may be around 10%, with 20-30% figures arising when lunch and overflow are counted. This is an inference across sectors and should be flagged as such.
- The two unverified claims conflict on lunch. One says the lunch hour is the lowest-volume hour. Other vendors treat lunch as a major missed-call window.

### Gaps
- No verified Relatient, Luma Health or Solutionreach document was found behind the 41%, 38% and 23% figures.
- No lunch-hour share from medical practice call logs was found.
- Dental blogs citing 27% (attributed to Dental Economics) and 25-38% appeared in a search summary only and could not be tied to a page.

## 6. How do competing AI phone-agent products price, and what volumes do their tiers assume?

### Takeaway
Published pricing splits into three groups: generic low-cost AI receptionists (about $64-$240 a month with small call or minute allowances), medical-specific managed products priced by minute tier (MedReception at $495, $995 and $1,495 for 500, 1,000 and 2,000 minutes), and enterprise vendors with no public price (Assort Health, Hello Patient, Hyro). The one medical product with published tiers tops out at about 1,700 calls a month. Vendor planning tables put 1-10 physician practices at about 300-4,000 calls a month, so bands of 750 up to 3,000 fit the published small-practice market and may run out for the largest practices in the range.

### Cited Findings
- **(opened)** MedReception managed plans, priced monthly (annual billing in brackets):
  - Essential: $495 ($420), 500 AI minutes, $1.25 per minute overage, "clinics with 2 or fewer providers"
  - Professional: $995 ($845), 1,000 minutes, $0.99 per minute overage, "most clinics"
  - Elite: $1,495 ($1,270), 2,000 minutes, $0.95 per minute overage, "high-volume practices"
  - self-serve Studio: $299 for 500 minutes, with EMR scheduling at $1,500 one-time plus $99 a month
  - after-hours coverage is a $99 a month add-on on Essential
  - no setup fee, and no location limit stated
  — [medreception.ai pricing](https://www.medreception.ai/pricing)
- **(opened)** MedReception's calculator assumes 70 seconds per handled call and one full-time staff member per 500 weekly calls at $4,000 a month. At its default of 200 calls a week it recommends the $995 plan. — [medreception.ai pricing](https://www.medreception.ai/pricing)
- **[UNSOURCED ranges] (opened)** An AI-receptionist vendor's cost guide gives monthly cost by profile:
  - solo, 300-600 calls: $1,200-2,400
  - 2-3 provider primary care, 600-1,200 calls: $2,400-4,200
  - 4-6 provider, 1,200-2,400 calls: $4,200-7,200
  - 8-12 provider, 2,400-4,000 calls: $7,200-12,000
  It also says:
  - most vendors tier by call volume, for example under 500 and 500-1,000 calls a month
  - overage runs $0.30-1.00 per minute
  - each extra workflow adds 10-15%
  - multilingual coverage adds 10-20%
  - paid 30-day pilots cost $500-2,000
  - 12-month terms are typical
  — [letsaskclaire.com](https://www.letsaskclaire.com/healthcare/ai-medical-receptionist-cost)
- **(opened)** receptionistcost.com lists generic AI receptionists (prices checked late October 2026):
  - Phonely Starter $68
  - AI-Receptionist.com Starter $64
  - Upfirst Premium $69.95
  - Goodcall Starter $79
  - My AI Front Desk $114
  - Telyn $122
  - Dialzara $135
  - Rosie $149
  - NextPhone $199
  - Smith.ai AI Receptionist Pro $212.50 for 75 calls
  - AgentZap Starter $236.50 plus $499 setup
  - Sameday AI $449
  - Abby Connect (AI plus human) $599
  - human services: Ruby $1,725 for 500 minutes, and Smith.ai virtual receptionists $915 for 90 calls
  Three vendors carry a "HIPAA option" but are not named. Arini and Numa have no public pricing. Synthflow is enterprise-only from $30,000 a year. — [receptionistcost.com](https://receptionistcost.com/industries/medical/)
- **(snippet)** DeepCura prices per provider: $129 per provider a month for 1-2 seats, $116 for 3-5, $110 for 6-10 and $101 for 11+, with 1,000 shared monthly credits per seat. — [DeepCura](https://www.deepcura.com/resources/best-ai-medical-receptionist)
- **(snippet)** AgentZap medical plans are sized in minutes: Solo Practice 150 minutes a month, Medical Practice 450, medical groups 1,500. — [AgentZap](https://agentzap.ai/industries/medical-practice)
- **(snippet)** Zocdoc Zo launched with outcome pricing: $2 each time the agent autonomously schedules an appointment, with no upfront or implementation fees. Whether this is still current is not confirmed. — [Fierce Healthcare](https://www.fiercehealthcare.com/health-tech/zocdoc-launches-voice-ai-tool-zo-streamline-phone-visit-bookings) (page returned 403 when opened)
- **(opened)** Hello Patient's own comparison of seven healthcare voice-agent vendors (Hello Patient, Assort Health, EliseAI, Confido Health, Notable, Hyro, Artera) publishes no pricing for any of them. — [Hello Patient](https://www.hellopatient.com/learn/best-ai-voice-agents-for-healthcare-2026)

### Inferences
- Effective per-call price at MedReception's own 70-second assumption is about $1.15 per call on Essential (about 430 calls), $1.16 on Professional (about 860 calls) and $0.87 on Elite (about 1,710 calls). Overage is about $1.11-1.46 per call. At 3 minutes per call the same plans cover only about 167, 333 and 667 calls. Minute-based pricing makes the per-call cost very sensitive to call length, and per-answered-call bands remove that uncertainty for the buyer. All of this is my arithmetic.
- The letsaskclaire ranges imply about $3-4 per call ($1,200-2,400 for 300-600 calls). Zocdoc's launch price was $2 per booked appointment, not per call. Smith.ai's AI plan works out to about $2.83 per included call. Published per-call equivalents for medical-capable products therefore span roughly $0.90 to $4.
- Band fit: a 750-call first band covers the "solo" and "2 or fewer providers" tiers that competitors define (300-600 calls, or about 430 calls). 1,500 and 2,250 cover the 2-6 provider profiles. 3,000 covers most of the 8-12 provider range (2,400-4,000) but not its top. A "3,000+" custom tier is the gap, particularly given MGMA's 301+ calls-a-day finding for larger groups.
- Per-location pricing is uncommon among the published medical products. Most price per minute, per call tier or per provider. Per-location flat pricing is reported for Hello Patient only by unconfirmed third-party reviews.

### Gaps
- Assort Health, Hello Patient, Hyro, Parakeet Health, Simbo AI and Peerlogic pricing is not public. Third-party review sites surfaced in search mention an unconfirmed $75,000 annual minimum and "$1,500+ monthly minimums" for Assort Health, and a flat per-location subscription for Hello Patient. None is vendor-confirmed and I could not tie the claims to a specific page.
- Zocdoc Zo's current pricing was not confirmed. The Fierce Healthcare page returned 403.
- KLAS, Gartner and Forrester public summaries on ambulatory voice-agent pricing or call volumes were not searched for lack of budget.
- A human answering-service range of $0.75-1.50 per minute appeared in a search summary without a traceable page.
