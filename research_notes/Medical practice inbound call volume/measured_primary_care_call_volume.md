# Measured inbound telephone call volume in US primary care and general medical practices

Researcher notes, compiled 2026-11-14. United States unless flagged. Verification tags used below:
- **[full text]** = numbers read from the article's full text or tables
- **[abstract]** = numbers read from the PubMed/journal abstract only
- **[secondary]** = numbers taken from news coverage or a search-result excerpt of the paper; the primary text could not be opened (PMC and several publisher sites blocked automated access)
- **[survey]** = self-reported poll, not a measured count
- **[vendor, unverified]** = vendor or trade number with no traceable method

Headline caution for the report writer: the published literature measures three different things that are routinely confused. (a) **All inbound calls to the practice main line** (phone-system logs) — only one US peer-reviewed study gives a per-patient rate (Dexter 2016). (b) **Calls that become a message or telephone encounter for the physician** (EHR in-basket "patient call" counts) — several large recent studies. (c) **Calls reaching a centralized call center** — health-system totals with no clean practice denominator. An AI answering product's addressable volume is (a); most of the recent, large-sample evidence is (b), which is several times smaller.

## 1. What do peer-reviewed studies report for inbound call volume per physician/provider per day or per 1,000 patients?

### Takeaway
The only US peer-reviewed per-panel measurement of all main-line inbound calls found is 439–1,002 calls per 1,000 patients per month (4 Oregon clinics, 2009–2014, phone-system logs, business hours only). Calls that actually reach the physician are far fewer: about 4–8 per physician per day in two large multi-site EHR datasets, and about 24–27 per clinic day in two single-organization studies that route more calls to physicians.

### Cited Findings

**A. All inbound calls, phone-system logs (the measure closest to what an answering product would handle)**
- Dexter et al., JABFM 2016. Setting: 4 primary care clinics tied to Oregon Health & Science University (community-based, university-based, rural health center, FQHC), February 2009–June 2014. Counted: incoming calls placed during regular business hours to each clinic, pulled from telephone management systems (Avaya Call Management System and Aceyus), not from the EHR; answered and abandoned calls combined; calls to individual direct lines excluded; after-hours calls excluded. Denominator: panel = unique patients seen by a PCP at the clinic within the prior 3 years. **[full text, Table 1]** — [JABFM 2016;29:613-619](https://www.jabfm.org/content/29/5/613)
- Dexter Table 1, "incoming telephone calls received at a clinic per 1000 patients per month": Clinic 1: 439 (Feb 2009, panel 11,878) and 584 (Jun 2014, panel 10,889). Clinic 2: 739 (Feb 2009, panel 11,179) and 502 (Jun 2014, panel 18,243). Clinic 3: 508 (Apr 2011, panel 7,538) and 636 (Jun 2014, panel 9,685). Clinic 4: 755 (Feb 2011, panel 11,010) and 1,002 (Jun 2014, panel 11,868). **[full text]** — [JABFM 2016](https://www.jabfm.org/content/29/5/613)
- Dexter clinic sizes: about 41,000 visits/year (clinic 1), 50,000 (clinic 2), 38,000 (clinic 3), 56,000 (clinic 4). **[full text]** — [JABFM 2016](https://www.jabfm.org/content/29/5/613)
- Internal inconsistency in Dexter: the Results text says starting panels "ranged from 5,915 (clinic 3) to 15,444 (clinic 4)", while Table 1 lists 7,538 and 11,010 at those clinics' start dates; and figure/table captions say "February 2009 and February 2011" while the methods say February 2009–June 2014. Table 1 values are used here. **[full text]** — [JABFM 2016](https://www.jabfm.org/content/29/5/613)
- Katz et al., JGIM 2003 (randomized trial, 2 University of Michigan-affiliated primary care centers, 10 months): 67 weekly phone calls per 100 scheduled visits for intervention physicians vs 55 for controls (P=.45). What exactly was logged as a "phone call" was not verifiable from the abstract. Dated. **[abstract]** — [PubMed 12950483](https://pubmed.ncbi.nlm.nih.gov/12950483/)

**B. Calls that reach the physician (EHR in-basket "patient call" messages or physician telephone encounters)**
- Nath et al., JAMA Network Open 2021. Yale New Haven-area ambulatory network: 419 physicians, 38 specialties, 141 practice sites, 10,850,401 inbox messages over 40 months (March 2018–June 2021). Primary care physicians' "patient call" inbox messages: 6.5 per physician per day before COVID (IQR 2.7–8.6) and 7.8 per day during COVID (IQR 4.7–10.0), a 21.1% rise. Total inbox messages for primary care physicians: about 45–46 per day. The authors state "The increase in electronic messages from patients did not displace patient calls." **[full text]** — [PMC8511977](https://pmc.ncbi.nlm.nih.gov/articles/PMC8511977/)
- Holmgren et al., JAMA Internal Medicine 2025. National EHR data, more than 280,700 outpatient physicians, June 2019–March 2022. Primary care physicians received about 18 patient calls per week at the end of 2019, rising to 24 in March 2020; call volume later stabilized while portal messages kept rising. **[secondary — AMA summary of the paper; primary text not opened]** — [AMA, Apr 2025](https://www.ama-assn.org/practice-management/digital-health/phone-calls-stable-patient-portal-messages-keep-piling); citation at [PubMed 39992635](https://pubmed.ncbi.nlm.nih.gov/39992635/)
- Arndt et al., Annals of Family Medicine 2024. 141 academic primary care physicians (University of Wisconsin), May 2019–March 2023, inbox volume measured per 8 hours of scheduled clinic appointments. From the pre-pandemic year to April 2022–March 2023, PCPs received "fewer patient calls (-2.8, -10.5%)" and more medical advice requests (+5.4, +55.5%) and prescription messages (+2.3, +19.5%) per 8 scheduled hours. **[abstract]** — [PubMed 38253499](https://pubmed.ncbi.nlm.nih.gov/38253499/)
- Baron, NEJM 2010 ("What's keeping us so busy in primary care? A snapshot from one practice"). Greenhouse Internists, a five-physician practice in Philadelphia, 2008 EHR data: 23.7 telephone calls per physician per day alongside 18.1 visits, 16.8 e-mails and 12.1 prescription refills per physician per day; the calls were those "of sufficient clinical import to engage a physician" and close to 80% were handled directly by the physician. Landmark single-practice study; relevant because it is one of the few independent-practice counts. **[secondary — news coverage; NEJM text not opened]** — [Washington Post, 2010](http://www.washingtonpost.com/wp-dyn/content/article/2010/04/28/AR2010042805825.html); [NPR, 2010](https://www.npr.org/sections/health-shots/2010/04/a_doctors_day_is_filled_with_b.html); citation at [PubMed 20427812](https://pubmed.ncbi.nlm.nih.gov/20427812/)
- Spencer & Daugird, J Fam Pract 1988 (landmark, dated). Two physicians in a private rural family practice (Missouri), 61-day sample: 1,264 calls, 905 (71.6%) received in the office setting; 10.4 calls per physician per day; mean call 1.6 minutes; 83.1% did not need a visit; 58.2% of office calls were handled through a message system rather than a direct physician call. Counted physician telephone encounters only. **[abstract]** — [PubMed 3404104](https://pubmed.ncbi.nlm.nih.gov/3404104/)
- Johnson & Johnson, JGIM 1990 (landmark, dated). Seven general internists, six months: 1,377 patient-initiated calls that resulted in a physician response; mean 3.4 minutes per call. **[abstract]** — [PubMed 2341924](https://pubmed.ncbi.nlm.nih.gov/2341924/)

**C. Calls reaching a centralized call center (health-system totals)**
- Kaiser Permanente Colorado (Bowman & Smith, Permanente Journal 2010): the centralized call center received about two million calls a year; medical advice calls were 20% of them and were routed electronically to 17 primary care medical offices; the rest were appointments, pharmacy requests and general information. **[abstract for results; the 2 million / 20% / 17 offices figures are from a search excerpt of the full text — secondary]** — [PubMed 20740112](https://pubmed.ncbi.nlm.nih.gov/20740112/); [PMC2912077](https://pmc.ncbi.nlm.nih.gov/articles/PMC2912077)
- Emory Healthcare call center (Al-Shakhshir et al., JMIR Medical Informatics 2026): full dataset of 9,331,316 calls, January 2023–May 2024 (17 months), all service lines; the analysis subset was 1,037,363 imaging-related calls. Not primary-care specific. **[full text]** — [JMIR Med Inform 2026;e88441](https://medinform.jmir.org/2026/1/e88441)
- UK HealthCare (University of Kentucky) Patient Access Center: approximately 60,000 phone calls per month, multi-specialty. **[secondary — trade newsletter, via search excerpt]** — [Clinician.com](https://www.clinician.com/articles/63424-abandoned-calls-cut-from-13-to-under-4)

**D. Survey and unverified numbers (kept separate)**
- MGMA / Insight Health sponsored report: of 302 practice leaders, 59% report 301 or more inbound calls per business day. Respondent practice size not stated in what was retrieved; MGMA membership skews to larger groups. **[survey; sponsor report; seen via search excerpt]** — [MGMA / Insight Health PDF](https://www.mgma.com/getkaiasset/3d85ddee-e329-4280-b726-3a93d63c7771/InsightHealth-MGMA-Agentic-Impact-for-Intake-and-Beyond-Final.pdf)
- "A primary-care practice will receive about 100 to 200 calls per physician per day" — trade article, no study named. **[vendor/trade, unverified]** — [Physicians Practice](https://www.physicianspractice.com/view/unclog-telephone-bottlenecks)
- "Roughly 53 inbound calls per physician daily" in primary care — phone-system vendor blog, source not identified. **[vendor, unverified]** — [RingRx, May 2026](https://ringrx.com/2026/05/15/5-call-metrics-that-reveal-whether-your-practices-phone-system-is-working/)

### Inferences
- **Dexter per working day (arithmetic, 21 working days/month):** 439 / 21 = 20.9 and 1,002 / 21 = 47.7 calls per 1,000 patients per working day. Median of the eight Table 1 values (439, 502, 508, 584, 636, 739, 755, 1,002) = (584 + 636) / 2 = 610 per 1,000 per month = 29.0 per 1,000 per working day. Per patient per year: 0.439 x 12 = 5.3 to 1.002 x 12 = 12.0 calls.
- **Dexter calls per clinic per month (rate x panel):** Clinic 1: 0.439 x 11,878 = 5,214 and 0.584 x 10,889 = 6,359. Clinic 2: 0.739 x 11,179 = 8,261 and 0.502 x 18,243 = 9,158. Clinic 3: 0.508 x 7,538 = 3,829 and 0.636 x 9,685 = 6,160. Clinic 4: 0.755 x 11,010 = 8,313 and 1.002 x 11,868 = 11,892. Range: about 3,800–11,900 main-line calls per clinic per month for clinics doing 38,000–56,000 visits a year.
- **Dexter calls per visit (monthly calls / (annual visits / 12)):** Clinic 1: 5,214–6,359 / 3,417 = 1.5–1.9. Clinic 2: 8,261–9,158 / 4,167 = 2.0–2.2. Clinic 3: 3,829–6,160 / 3,167 = 1.2–1.9. Clinic 4: 8,313–11,892 / 4,667 = 1.8–2.5. So roughly 1.2–2.5 inbound main-line calls per office visit. The visit totals are the paper's "about" figures and are not matched to specific months, so treat the ratio as approximate.
- **Arndt 2024 implied levels:** -2.8 calls = -10.5% implies a baseline of 2.8 / 0.105 = 26.7 patient-call messages per 8 scheduled clinic hours, falling to 26.7 - 2.8 = 23.9. Medical advice requests: 5.4 / 0.555 = 9.7 rising to 15.1. Patient-call messages still outnumbered portal advice messages (23.9 vs 15.1) in 2022–23 in this system. These levels are derived from the abstract's deltas, not read from a table.
- **Per-month conversions for physician-level counts:** Holmgren: 18 x 52 / 12 = 78 per month (24 x 52 / 12 = 104 at the March 2020 peak), or 18 / 5 = 3.6 per working day. Nath: 6.5 x 21 = 137 and 7.8 x 21 = 164 per month if "per day" means working days (the paper's day basis was not confirmed). Baron: 23.7 x 21 = 498 per month. Spencer 1988: 10.4 x 21 = 218 per month. Arndt: at most 26.7 x 21 = 561 per month, an upper bound because few PCPs schedule 8 clinic hours on all 21 days.
- **Why physician-level counts differ 6-fold (3.6 to 26.7 per day):** the measure depends on how much staff resolve without routing to the physician, and on the denominator (calendar or working day vs a full 8-hour scheduled clinic day). None of these is a count of calls answered by the front desk.
- **Ratio of all inbound calls to physician-routed calls:** all-inbound (Dexter-derived, section 5) is on the order of 20–120 per physician per working day versus 4–27 reaching the physician, which suggests most inbound calls are handled entirely by non-physician staff. This is a cross-study comparison, not a measured ratio.
- **Kaiser Colorado per-office arithmetic (weak):** 2,000,000 / 12 = 166,667 calls per month; / 17 primary care offices = about 9,800 per office per month. This overstates primary care volume if the call center also served specialty departments, which the retrieved text does not settle.
- **Emory:** 9,331,316 / 17 months = about 548,900 calls per month system-wide (all specialties).

### Gaps
- No US peer-reviewed study was found that reports total inbound calls per physician per day from phone-system logs for independent or small private practices. Dexter (academic-affiliated clinics, 2009–2014) is the only per-panel phone-log measurement located, and it predates online scheduling and two-way texting.
- Dexter's count excludes after-hours calls and direct-line calls (undercount) and includes abandoned calls and therefore repeat attempts (overcount relative to unique requests). Net direction unknown.
- Dexter does not report clinician FTE per clinic, so calls per provider cannot be computed directly from it.
- Baron (NEJM 2010), Holmgren (JAMA IM 2025) and the Kaiser full text could not be opened; their figures rest on secondary coverage or search excerpts and should be re-verified before publication.
- Patient Access Collaborative call-volume benchmarks are not public; nothing citable was found.
- Chen et al. (JGIM 2011, 33 general internists in 20 New York practices) is a time study of work outside visits; I could not retrieve call counts from it. A search summary attributed "41 patient-related telephone calls and e-mails daily" to it, which I could not confirm.
- Non-US context only, not blended: NHS England publishes monthly "Cloud Based Telephony" official statistics (collection began October 2024; 4,649 practices, about 75% of England, for October 2025). A secondary source reports 31.4 million calls for that month, which would be 31,400,000 / 4,649 = about 6,750 calls per practice per month. I did not verify that count on the NHS page and did not retrieve list sizes, so no per-1,000 rate is given. — [gov.uk statistics page](https://www.gov.uk/government/statistics/cloud-based-telephony-data-in-general-practice-november-2025); [X-on blog (vendor, secondary)](https://www.x-on.co.uk/blog/nhs-england-telephony-data-and-better-access/)

## 2. What share of calls are for appointments, refills, billing, prior authorization, results, clinical advice, referrals, other?

### Takeaway
I found no US peer-reviewed study that classifies all inbound primary care calls by reason from call logs. What exists is fragmentary: reason mixes for calls that reach a physician or nurse (symptoms, results and medications dominate), one HMO split (20% medical advice vs 80% appointments, pharmacy and general information), and a 2026 MGMA poll about time spent, not call share.

### Cited Findings
- Kaiser Permanente Colorado centralized call center: medical advice calls were 20% of about two million annual calls; the other calls covered appointments, pharmacy requests and general information (not split further). **[secondary — search excerpt of full text]** — [PMC2912077](https://pmc.ncbi.nlm.nih.gov/articles/PMC2912077)
- Johnson & Johnson 1990, calls reaching 7 general internists (n=1,377): symptom or medical complaint 45%, test-result questions 16%, medication queries 14%; over 60% concerned chronic conditions; a medication response was the reason for 22% of calls. Excludes scheduling and administrative calls by design. Dated. **[abstract]** — [PubMed 2341924](https://pubmed.ncbi.nlm.nih.gov/2341924/)
- VA primary care geriatric clinic, nurse-practitioner calls, 1998–1999 (1,541 calls): 42% of requests related to medication refills; 62% of calls were generated by others and 38% initiated by the NPs. Single clinic, about 25 years old. **[secondary — search excerpt of abstract]** — [PubMed 11930869](https://pubmed.ncbi.nlm.nih.gov/11930869)
- Deeds et al., Am J Med Qual 2018 (single outpatient clinic): a baseline audit "identified medication refills and test results as the most common preventable calls"; after standardized after-visit-summary instructions, calls for medications and results fell by an adjusted 23.9 per day (95% CI 15.4–32.4) to 16.2 per day (SD 7.7), a 61% relative reduction. **[abstract]** — [PubMed 29667895](https://pubmed.ncbi.nlm.nih.gov/29667895/)
- MGMA Stat poll, March 10, 2026 (294 responses), most time-consuming phone tasks for staff: eligibility and prior authorization 45%, scheduling 31%, intake 9%, prescription refills 6%, other 9%. This is the share of leaders naming each task as most time-consuming; it is not a share of inbound calls and includes outbound payer calls. **[survey]** — [MGMA Stat](https://mgma.com/mgma-stat/phones-are-still-a-backlog-costing-medical-practices-time)
- SLUCare General Internal Medicine clinic (16 providers, 2016–2017): many calls were for simple information such as the fax number or address, plus scheduling, refill requests and other routine requests; unresolved first calls generated repeat calls. Qualitative, no percentages. **[trade case report]** — [HFMA, Nov 2018](https://www.hfma.org/revenue-cycle/patient-access/62396/)
- After-hours calls to a Denver family practice residency over one year: the five most frequent chief complaints related to medications, pain, obstetric issues, fever and nausea. No percentages in the abstract. **[abstract]** — [PubMed 12100782](https://pubmed.ncbi.nlm.nih.gov/12100782/)
- Proxy from a different channel (secure messages, not calls): in VHA primary care, the most common reasons for secure messages were medication renewals and refills 47.2%, scheduling requests 17.6%, medication issues 12.9%, health issues 12.7%. **[secondary — search excerpt]** — [Annals of Family Medicine 2025;23(4):285](https://www.annfammed.org/content/23/4/285)
- Veterans' stated channel preference (448 interviews, 2012): telephone was the preferred channel for general medical questions, medication questions and refills, preventive reminders, scheduling and test results. Preference survey, not a call count. **[abstract; survey]** — [PubMed 22766452](https://pubmed.ncbi.nlm.nih.gov/22766452/)

### Inferences
- Deeds implies a baseline of about 16.2 + 23.9 = 40.1 medication-and-results calls per day at one clinic (23.9 / 40.1 = 60%, consistent with the reported 61%). Clinic size is not in the abstract, so this cannot be normalized.
- The only quantified all-calls split (Kaiser Colorado, about 2009) puts clinical advice at roughly one-fifth and administrative categories (appointments, pharmacy, information) at roughly four-fifths. That pattern, with scheduling and refills as the bulk, is consistent with the qualitative SLUCare description and with refills leading the secure-message mix in VHA, but it comes from an integrated HMO with its own pharmacy and should not be presented as a measured independent-practice mix.
- Studies of calls reaching clinicians (45% symptoms in Johnson 1990) describe a filtered subset and will overstate the clinical share of total inbound calls.

### Gaps
- No sourced percentage was found for billing calls, prior-authorization or insurance calls, or referral calls as a share of inbound patient calls. The MGMA 45% figure is about staff time ranking and likely reflects outbound payer calls.
- No sourced percentage was found for appointment/scheduling calls as a share of all inbound calls in a US primary care practice.
- Porterfield et al. (Health Communication 2025, UTMB family medicine residency clinic) stratified telephone encounters by reason for call, but the reason distribution is not in the abstract and the full text was not accessible. — [PubMed 38567512](https://pubmed.ncbi.nlm.nih.gov/38567512/)
- LaVela et al. 2012 (18 VA primary care clinics, fall 2009) studied reasons for incoming medical calls during office hours; the abstract gives no distribution. — [PubMed 21685222](https://pubmed.ncbi.nlm.nih.gov/21685222/)

## 3. What share of calls arrive during office hours versus after hours/weekends? Hour-of-day or day-of-week patterns?

### Takeaway
No peer-reviewed US primary care study was found that reports the after-hours share of total inbound calls or an hourly arrival curve. Available evidence describes the after-hours stream on its own (mostly weekends and holidays, with a 5–7 PM weekday bump) and one academic call center where abandonment risk peaked on Mondays and from 11:00 to 16:00.

### Cited Findings
- UCSF-affiliated academic adult primary care practice serving 30,000+ patients, after-hours physician triage line, January 2020–March 2021: 63% of after-hours calls were made on weekends or holidays, and 14% between 5:00 and 7:00 PM on weekdays; roughly a quarter of callers made more than one call. **[secondary — search excerpt of the JGIM 2025 paper; total call count not retrieved]** — [PMC12119426](https://pmc.ncbi.nlm.nih.gov/articles/PMC12119426/)
- Denver family practice residency, April 2000–March 2001: 4,949 calls to the answering service in 12 months, of which 2,835 were after-hours clinical calls (2,547 forwarded to the on-call physician, 288 not). After-hours defined as 5 pm to 8 am plus weekends and holidays. Practice size not reported. Dated. **[full text via journal page]** — [JABFM 2006;19:437](https://www.jabfm.org/content/19/5/437)
- Same practice: 56 "high utilizers" (0.6% of all patients) accounted for 23% of after-hours calls. **[abstract]** — [PubMed 12100782](https://pubmed.ncbi.nlm.nih.gov/12100782/)
- Spencer & Daugird 1988: 71.6% of physician telephone encounters (905 of 1,264) were received in the office setting, leaving 28.4% outside it, in a two-physician rural practice. Physician-level calls only; dated. **[abstract]** — [PubMed 3404104](https://pubmed.ncbi.nlm.nih.gov/3404104/)
- Emory Healthcare call center (imaging queues, 2023–2024): modeled abandonment risk was highest on Mondays and between 11:00 and 16:00. This is abandonment risk, not arrival volume, and not primary care. **[abstract/full text]** — [JMIR Med Inform 2026;e88441](https://medinform.jmir.org/2026/1/e88441)
- Survey of 91 primary care offices (2001): more than two-thirds used answering services after hours; 93% required the patient to decide whether the problem warranted contacting the on-call physician. **[abstract; survey]** — [PubMed 12620177](https://pubmed.ncbi.nlm.nih.gov/12620177/)
- Vendor claims conflict: one answering-service vendor reports 89.4% of patient calls arrive in standard business hours and 10.6% after hours (from "29 million calls"); another vendor page claims 41% of calls fall outside 8 AM–5 PM weekdays; another claims about 38% of calls arrive in the first and last hours of operation. Methods undocumented. **[vendor, unverified]** — [CallMyDoc](https://blog.callmydoc.com/new-blog-1/patient-phone-communication-2026); [RingRx](https://ringrx.com/2026/05/15/5-call-metrics-that-reveal-whether-your-practices-phone-system-is-working/)

### Inferences
- Denver after-hours volume: 4,949 / 12 = 412 calls per month, or 4,949 / 365 = 13.6 per night/day of coverage, for one residency practice.
- Rough after-hours rate per panel: if 56 patients are 0.6% of the practice, the practice had about 56 / 0.006 = 9,300 patients, giving 4,949 / 9.3 / 12 = about 44 after-hours calls per 1,000 patients per month. This assumes the 2002 and 2006 papers describe the same year of calls, which is likely (same practice and authors, one-year log) but not confirmed.
- Rough after-hours share: 44 against Dexter's business-hours 439–1,002 per 1,000 per month gives 44 / (44 + 1,002) = 4% to 44 / (44 + 439) = 9% of all calls arriving after hours. This splices two different practices and eras (2000–01 vs 2009–14) and should be labelled an order-of-magnitude estimate. It happens to sit near the one vendor's 10.6% claim and well below the other vendor's 41%.

### Gaps
- No peer-reviewed hour-of-day or day-of-week arrival distribution for inbound calls to US primary care practices was found; the commonly repeated "Monday morning peak" is supported here only by vendor material and by Emory's abandonment-risk result.
- No measured US figure for the after-hours share of total calls from a single dataset covering both periods.

## 4. Measured rates of unanswered, abandoned or voicemail calls; speed of answer and service-level benchmarks

### Takeaway
Published targets cluster at under 5% abandonment and a 30-second average speed of answer (the VHA standard), while measured baselines before improvement projects run 8.7%–34%. Small-practice miss rates are known only from surveys and vendor claims.

### Cited Findings
- VHA standard (2016 mandate): dedicated telephone capability for primary care scheduling, daytime nurse triage, operator services and pharmacy, with targets of 30 seconds or less average speed of answer and under 5% call abandonment. **[full text]** — [Telephone Access Management in Primary Care, JGIM 2022, PMC8806007](https://pmc.ncbi.nlm.nih.gov/articles/PMC8806007/)
- VHA 2015–2016 (Griffith et al., AJMC 2019): average speed of answer was inversely associated with patients' perceived access to urgent appointments; abandonment rate was not associated with any satisfaction outcome; VHA "made substantial strides in both access measures between 2015 and 2016." **[abstract]** — [PubMed 31518100](https://pubmed.ncbi.nlm.nih.gov/31518100/)
- A search summary of the same VHA study gave monthly medical-center abandonment rates of about 6% to 16%. **[secondary — not confirmed in the abstract or full text]** — [ResearchGate copy](https://www.researchgate.net/publication/339599068_Call_center_performance_affects_patient_perceptions_of_access_and_satisfaction)
- SLUCare General Internal Medicine clinic, Saint Louis University (16 providers): abandonment fell from 34% to 5% after a phone-tree redesign and outsourced scheduling implemented January 2017; before the change patients often waited at least 40 minutes on hold. The phone system recorded total main-line calls, answered calls and percent abandoned; total volume was unknown because patients also used back lines. **[trade case report]** — [HFMA, Nov 2018](https://www.hfma.org/revenue-cycle/patient-access/62396/)
- Emory Healthcare call center, imaging queues: abandonment fell from 8.7% (20,809 of 238,722 calls, January–April 2023) to 2.8% (8,293 of 300,060) in the final period after skill consolidation and cross-training; staffing in business hours was 14–17 active agents; "false abandonments" (callers who reconnected within 24 hours) were a small share of abandoned calls. **[abstract/full text]** — [JMIR Med Inform 2026;e88441](https://medinform.jmir.org/2026/1/e88441)
- The Emory paper's background states health care call-center abandonment rates often range "from 5% to over 20% during peak operational hours" (cited to other sources, not measured in the study). **[full text, background statement]** — [JMIR Med Inform 2026;e88441](https://medinform.jmir.org/2026/1/e88441)
- UK HealthCare (University of Kentucky): abandonment cut from 13% to under 4% after centralizing scheduling. **[secondary — trade newsletter]** — [Clinician.com](https://www.clinician.com/articles/63424-abandoned-calls-cut-from-13-to-under-4)
- Mayo Clinic Central Appointment Office: about a 70% improvement in average speed of answer and average abandonment rate without added staff while call volume rose 12%. Absolute rates not in the abstract. **[abstract]** — [PubMed 24422261](https://pubmed.ncbi.nlm.nih.gov/24422261/)
- Kaiser Permanente Colorado: routing 14%–17% of primary care calls to the home office team produced a 54% improvement in the central call center's speed of answer in the first quarter. **[abstract]** — [PubMed 20740112](https://pubmed.ncbi.nlm.nih.gov/20740112/)
- UTMB family medicine residency clinic: historically at least 1 in 4 patient calls remained unresolved three days after the call was placed (a resolution measure, not an answer rate). **[abstract]** — [PubMed 38567512](https://pubmed.ncbi.nlm.nih.gov/38567512/)
- MGMA Stat, March 2026: 36% of practice leaders said 11% or more of their calls go unanswered or reach voicemail at peak hours. **[survey; via search excerpt]** — [MGMA / Insight Health PDF](https://www.mgma.com/getkaiasset/3d85ddee-e329-4280-b726-3a93d63c7771/InsightHealth-MGMA-Agentic-Impact-for-Intake-and-Beyond-Final.pdf)
- "Small healthcare practices miss an estimated 1 in 4 calls." **[vendor, unverified]** — [Solutionreach](https://www.solutionreach.com/guide/resources-missed-calls-cost-guide)

### Inferences
- Measured pre-improvement abandonment in named US organizations: 8.7% (Emory imaging), 13% (UK HealthCare), 34% (SLUCare GIM). Post-improvement: 2.8%, under 4%, 5%. A defensible statement is that unmanaged ambulatory phone lines commonly lose roughly 9%–34% of calls and well-run ones get under 5%; this rests on three cases, two of them from trade press.
- All measured abandonment data come from centralized or academic operations with queueing phone systems. A 1–10 physician practice with a few lines and no ACD typically cannot measure abandonment at all, which is itself why no small-practice figure exists.

### Gaps
- No measured (non-survey) unanswered or voicemail rate for independent small practices was found.
- Patient Access Collaborative abandonment and service-level benchmarks are member-only; not found publicly.
- No measured average speed of answer in seconds for a US primary care practice was retrieved (only the VHA 30-second target and relative improvements).

## 5. How does volume scale with practice size and panel size? Implied calls per physician per day and per month

### Takeaway
No study reports call volume by practice-size band; scaling has to be derived. Applying the only measured per-panel rate (439–1,002 calls per 1,000 patients per month) to 1,500–2,500-patient panels implies about 31–119 main-line calls per physician per working day, while a visit-based cross-check from the same study implies about 22–50; the overlap, roughly 30–50 per physician per working day (650–1,050 per month), is the most defensible central band.

### Cited Findings
- Per-panel rate: 439–1,002 incoming main-line calls per 1,000 patients per month across four clinics and two time points; panel defined as patients seen in the prior 3 years. — [JABFM 2016](https://www.jabfm.org/content/29/5/613)
- Clinic visit volumes for the same clinics: about 38,000–56,000 visits per year. — [JABFM 2016](https://www.jabfm.org/content/29/5/613)
- Visits per physician per day in an independent five-physician internal medicine practice: 18.1 (2008). **[secondary]** — [Washington Post, 2010](http://www.washingtonpost.com/wp-dyn/content/article/2010/04/28/AR2010042805825.html)
- Phone calls per scheduled visit at the physician level in an older trial: 55–67 weekly calls per 100 scheduled visits. — [PubMed 12950483](https://pubmed.ncbi.nlm.nih.gov/12950483/)
- Unverified comparison points: 53 calls per physician per day (vendor) and 100–200 per physician per day (trade article). — [RingRx](https://ringrx.com/2026/05/15/5-call-metrics-that-reveal-whether-your-practices-phone-system-is-working/); [Physicians Practice](https://www.physicianspractice.com/view/unclog-telephone-bottlenecks)

### Inferences
All figures in this subsection are derived; none is measured at small-practice level.

**Method 1 — panel-based (rate per 1,000 per month x panel / 1,000; per day = / 21):**

| Panel per physician | Low rate 439 | Median rate 610 | High rate 1,002 |
|---|---|---|---|
| 1,500 | 659/month = 31.4/day | 915/month = 43.6/day | 1,503/month = 71.6/day |
| 2,000 | 878/month = 41.8/day | 1,220/month = 58.1/day | 2,004/month = 95.4/day |
| 2,500 | 1,098/month = 52.3/day | 1,525/month = 72.6/day | 2,505/month = 119.3/day |

Arithmetic examples: 439 x 1.5 = 658.5; 658.5 / 21 = 31.4. 1,002 x 2.5 = 2,505; 2,505 / 21 = 119.3. 610 x 2.0 = 1,220; 1,220 / 21 = 58.1.

**Method 2 — visit-based (calls per visit x visits per day):** Dexter-derived 1.2–2.5 main-line calls per visit (section 1) x 18–20 visits per physician per day = 1.2 x 18 = 21.6 to 2.5 x 20 = 50 calls per physician per working day; x 21 = about 454 to 1,050 per physician per month.

**Why the two methods differ:** Dexter's clinics had large 3-year panels relative to their visit volume, and they are teaching/safety-net sites with part-time clinicians, so panel per clinician FTE there is probably well under 1,500–2,500. Applying their per-1,000 rate to a full private-practice panel may overstate; the visit-based method avoids that but relies on approximate visit totals.

**Per practice location per month (linear scaling, physicians x per-physician monthly volume):**

| Physicians | Visit-based low (454) | Overlap band (650–1,050) | Panel-based median, 2,000 panel (1,220) | Panel-based high (2,505) |
|---|---|---|---|---|
| 1 (solo) | 454 | 650–1,050 | 1,220 | 2,505 |
| 2 | 908 | 1,300–2,100 | 2,440 | 5,010 |
| 5 | 2,270 | 3,250–5,250 | 6,100 | 12,525 |
| 6 | 2,724 | 3,900–6,300 | 7,320 | 15,030 |
| 10 | 4,540 | 6,500–10,500 | 12,200 | 25,050 |

- Reality check against measured clinic totals: Dexter's clinics logged about 3,800–11,900 main-line calls per month each at 38,000–56,000 visits per year, which at 18 visits per day and about 220 clinic days (3,960 visits per clinician-year, an assumption) corresponds to roughly 10–14 clinician FTE. That places a measured 10–14 FTE clinic inside the 5–10 physician rows above, i.e. the lower-to-middle columns fit the measured data better than the panel-based high column.
- The vendor's 53 calls per physician per day sits inside the panel-based range and at the top of the visit-based range; the trade "100–200 per physician per day" exceeds everything derivable from measured data except the extreme corner (1,002 rate x 2,500 panel = 119) and should not be used.
- Linear scaling by physician count is an assumption. Nothing found measures economies or diseconomies by practice size. Advanced practice clinicians who carry panels should be counted as providers when applying these rates.
- These are inbound main-line attempts in business hours. Add roughly 4%–9% for after-hours calls (section 3 estimate) and subtract repeat attempts if the pricing unit is unique conversations.

### Gaps
- No measured data comparing solo, 2–5 and 6–10 physician practices.
- No measured data for independent (non-academic, non-system) practices from phone logs after 2014.
- Clinician FTE for the Dexter clinics is not reported; the 10–14 FTE figure is my estimate from visit volume.
- Typical panel-size sourcing (1,500–2,500) was supplied by the assignment and not re-verified here.

## 6. How has volume shifted since portals, online scheduling and texting became common (2018–2026)?

### Takeaway
Measured evidence says portal messaging added to, and did not replace, phone calls through at least 2021; the first sign of decline is a 10.5% drop in physician-routed patient calls at one academic system between 2019–20 and 2022–23, against a 55.5% rise in portal advice messages. No study was found measuring total inbound call volume per patient after 2014, or any effect of online scheduling or texting on calls.

### Cited Findings
- Oregon, 2009–2014 (phone logs): portal messaging was positively correlated with incoming calls at two clinics (r = 0.546 and 0.543, both P < .001) and not significantly correlated at two (r = 0.098 and 0.069). Call rates per 1,000 patients per month rose at three of four clinics from portal start to June 2014 (439 to 584; 508 to 636; 755 to 1,002) and fell at one (739 to 502). — [JABFM 2016](https://www.jabfm.org/content/29/5/613)
- Yale New Haven network, 2018–2021: primary care patient-call inbox messages rose 21.1% (6.5 to 7.8 per physician per day) from before to during COVID while patient medical advice request messages rose 104.9% (1.8 to 3.9 per day); "The increase in electronic messages from patients did not displace patient calls." — [PMC8511977](https://pmc.ncbi.nlm.nih.gov/articles/PMC8511977/)
- National EHR data, 2019–2022: PCP patient calls went from about 18 per week (end of 2019) to 24 (March 2020), then stabilized, while portal messages stayed "meaningfully increased" versus pre-pandemic. **[secondary]** — [AMA summary of Holmgren et al., JAMA IM 2025](https://www.ama-assn.org/practice-management/digital-health/phone-calls-stable-patient-portal-messages-keep-piling)
- University of Wisconsin, 2019–2023: per 8 scheduled clinic hours, patient calls -2.8 (-10.5%), medical advice requests +5.4 (+55.5%), prescription messages +2.3 (+19.5%), results messages -0.3 (-2.7%). — [PubMed 38253499](https://pubmed.ncbi.nlm.nih.gov/38253499/)
- Cleveland Clinic primary care, 150 clinicians: mean quarterly portal messages per clinician rose from 340 to 695 between Q4 2019 and Q4 2021 while quarterly outpatient visits fell from 711 to 575. Call counts not in the abstract. — [PubMed 38129617](https://pubmed.ncbi.nlm.nih.gov/38129617/)
- Older controlled evidence, mixed: UC Davis web messaging, telephone volume 18.2% lower for case physicians than controls (6 case, 9 control physicians; P = .002) — [PubMed 15693928](https://pubmed.ncbi.nlm.nih.gov/15693928/); University of Michigan triage e-mail RCT, no difference in phone volume (67 vs 55 weekly calls per 100 scheduled visits, P = .45) — [PubMed 12950483](https://pubmed.ncbi.nlm.nih.gov/12950483/)
- Targeted instructions can cut specific call types: standardized after-visit-summary text cut medication and results calls by 61% at one clinic. — [PubMed 29667895](https://pubmed.ncbi.nlm.nih.gov/29667895/)

### Inferences
- Total patient-initiated contact volume (calls plus messages) rose over 2019–2023 in every dataset found; calls were flat to modestly down at the physician level while messages roughly doubled.
- Using the implied Wisconsin levels (23.9 patient-call messages vs 15.1 advice messages per 8 scheduled hours in 2022–23), phone remained the larger channel reaching physicians even after the portal surge.
- For market sizing, the evidence supports assuming flat to slightly declining calls per patient since 2019 (on the order of 0% to -10% over four years at one system), not a collapse. Applying the 2009–2014 Dexter rates today is therefore reasonable but should carry an explicit staleness caveat.
- Physician-routed calls can fall because staff resolve more at the front desk or because scheduling moved online; none of these studies can distinguish that from a true drop in inbound attempts.

### Gaps
- No measured study of the effect of online self-scheduling or two-way texting on inbound call volume in US primary care was found.
- No phone-log (all inbound) trend data after 2014; all post-2018 trend evidence is physician in-basket counts.
- No data for 2024–2026 on call volume per patient or per physician was found.
- Kaiser Permanente secure-messaging studies (often cited for reduced phone contacts) were not retrieved in this pass.
