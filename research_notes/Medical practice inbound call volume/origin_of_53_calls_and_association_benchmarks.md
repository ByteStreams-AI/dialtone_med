# Origin of "53 calls per physician per day" and what US professional bodies actually publish on inbound call volume

Research date: 2026-11-14. US only. Labels used throughout: **[MEASURED]** = counted from phone-system or EHR logs; **[SURVEY]** = self-reported by respondents; **[ESTIMATE]** = author's estimate or calculation; **[VENDOR]** = vendor marketing content. "Not opened" means I only saw the search-result snippet, not the page itself.

## 1. Where do "53 calls per physician per day", "150 to 300 calls per week per doctor" and "50-60 calls/day for a solo practice" come from?

### Takeaway
"53" is not an MGMA number in any source I could open. The earliest source found is a 2017 vendor blog (Spruce Health) where 53 is the author's own calculation of inbound **plus outbound** patient calls per provider per day (about 31 inbound + 22 outbound); the "MGMA DataDive, 2025" attribution first appears in a 2026 vendor blog with no link. "150 to 300 calls per week" is a separate, older figure: an unmeasured estimate from a 2000 journal review article, also not MGMA.

### Cited Findings

**The 53 figure**
- [VENDOR][ESTIMATE] Earliest source found: Spruce Health blog, "Phone Call Overhead Costs Doctors an Hour Every Day", by David Craig, MD, dated November 6, 2017 (page shows "updated August 14, 2026"). It states "A typical provider has 53 patient calls per day!" MGMA is not mentioned anywhere in the article. — [Spruce Health](https://sprucehealth.com/blog/doctors-losing-hour-day-phone-call-overhead/)
- [VENDOR][ESTIMATE] How Spruce derives it: a table of seven practices ranging from 11 to 33 incoming calls per day per 1,000 panel patients, which "average out to 21 incoming patient calls per day for every thousand panel patients"; an assumed "panel size of 1,500 patients per provider"; and "a 10:7 ratio of inbound to outbound calls" from one unnamed study of nine primary care sites. The result is 31 inbound + 22 outbound = 53. So 53 is inbound and outbound combined, patient calls only (the article says it excludes pharmacies, insurers, drug reps and other practices). — [Spruce Health](https://sprucehealth.com/blog/doctors-losing-hour-day-phone-call-overhead/)
- [VENDOR] Citation quality in the Spruce post is poor: the call-volume table is labelled as drawn from NEJM, Medical Economics, JABFM and JGIM, but two of the cited reference numbers are missing from the reference list, one is mislabelled (table says JGIM, list entry is Baron 2010 NEJM), and the reference for the 10:7 ratio is missing entirely. No URLs are given for any number. — [Spruce Health](https://sprucehealth.com/blog/doctors-losing-hour-day-phone-call-overhead/)
- [VENDOR] First MGMA attribution found: AgentZap blog, "Medical Practice Phone Statistics: 15 Numbers Every Healthcare Provider Should Know", published January 29, 2026 (updated May 20, 2026): "Primary care practices receive approximately 53 inbound calls per physician per day", source given as plain text "MGMA DataDive, 2025" with no hyperlink. The same page adds a specialty range "from 25 calls/day (radiology) to 75 calls/day (OB/GYN)" under the same unlinked attribution. — [AgentZap](https://agentzap.ai/blog/medical-practice-phone-statistics)
- [VENDOR] RingRx blog, "5 Call Metrics That Reveal Whether Your Practice's Phone System Is Working", published May 15, 2026: "Primary care practices handle approximately 53 inbound calls per physician each day." No source or link is given for the sentence; adjacent statistics on the page link to the AgentZap post. MGMA is cited on that page for other things, not for 53. — [RingRx](https://ringrx.com/?p=17162)
- The same AgentZap page carries "38% of daily calls occur during the first and last hours" of operation, attributed to "Luma Health Analytics, 2025" (another vendor, unlinked). This matches the "Nearly 38% of daily call volume" line that sits directly below the 53 claim in the local buyer-universe document. — [AgentZap](https://agentzap.ai/blog/medical-practice-phone-statistics)

**The 150 to 300 per week figure**
- [ESTIMATE] Source: Elnicki DM, Ogden P, Flannery M, Hannis M, Cykert S. "Telephone medicine for internists." J Gen Intern Med. 2000;15(5):337-343 (PMID 10840269, PMCID PMC1495459). This is a review/perspectives article, not a measurement study. — [Europe PMC record](https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=PMCID:PMC1495459&format=json&resultType=core); [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC1495459)
- [ESTIMATE] Exact wording, as quoted verbatim by the American College of Physicians in a July 2003 public policy paper: "Primary care physicians receive an estimated 150 to 300 calls per week, of which about half deal with clinical issues. In general internal medicine practice, 25% of patient contacts are made via the telephone, which is second only to the proportion in pediatrics", cited to Elnicki, J Gen Intern Med 2000. — [ACP policy paper, "The Changing Face of Ambulatory Medicine: Reimbursing Physicians for Telephone Care" (2003)](https://www.acponline.org/sites/default/files/acp-policy-library/policies/ambulatory_medicine_reimburse_telephone_care_2003.pdf)
- [VENDOR] The 150 to 300 range is repeated without a primary citation in a 2023 RingRx call-routing post (not opened; per search snippet). — [RingRx 2023](https://ringrx.com/2023/07/05/the-basics-of-call-routing-simple-ways-to-streamline-communication-for-your-practice/)

### Inferences
- The most likely citation chain is: Spruce 2017 calculation (53 inbound + outbound, per provider) -> later vendor blogs drop "outbound", change "provider" to "physician", and attach "MGMA DataDive, 2025". I cannot prove AgentZap took the number from Spruce, but the identical value, the nine-year gap, the absence of any public MGMA figure, and the missing hyperlink all point that way.
- The local document's wording pairs two unrelated numbers (53/day from a 2017 vendor calculation, 150-300/week from a 2000 review article) and attributes both to MGMA. Neither comes from MGMA in any source I could open.
- "Solo practice 50-60 calls/day, 3 MDs 150-180, 5 MDs 250-300" is 53 rounded and multiplied by headcount. I found no source that measured call volume by practice size this way; it is a linear extrapolation of an already-unsourced number.
- If Spruce's method is taken at face value, the inbound-only number is about 31 per provider per day, not 53.

### Gaps
- I could not open the Elnicki full text (PMC returned a bot check, Springer redirected to a login), so I could not identify which earlier study Elnicki cites for "150 to 300". A search snippet suggested Johnson BE, Johnson CA, "Telephone medicine: a general internal medicine experience", J Gen Intern Med 1990, as a candidate; this is unconfirmed.
- I could not see the 2017 original of the Spruce post (the page was updated in August 2026). I did not check an archive snapshot, so I cannot confirm the 53 figure and derivation were worded identically in 2017.
- I have no access to MGMA DataDive (paid, gated), so I cannot rule out that a "calls per physician" field exists inside it. What I can say is that no public MGMA page, press release, MGMA Stat article or sponsored report I found states 53 or any per-physician call figure.

## 2. Has MGMA published any measured benchmark for inbound calls per physician, per FTE provider, per 1,000 patients or per practice?

### Takeaway
Publicly, no per-physician or per-FTE inbound call benchmark from MGMA was found. MGMA's public material covers speed of answer (2017), poll results on how phones are answered and which phone tasks consume staff time, and one 2026 vendor-sponsored survey giving a per-practice bucket (59% of respondents report 301+ inbound calls per business day). Call volume and abandonment rate are listed as DataDive Practice Operations metrics, but the numbers are behind the paywall.

### Cited Findings
- [SURVEY] 2017 MGMA DataDive Practice Operations Survey (press release dated August 30, 2017; "comparative data of more than 1,200 organizations"): "Multispecialty practices reported the slowest speed to answer incoming calls (49 seconds)", with "surgical specialties reporting the quickest time at 13.5 seconds to answer an inbound call". The release gives no call volume, no abandonment rate and no calls-per-physician figure. — [MGMA press release](https://www.mgma.com/press/mgma-releases-industry-benchmarks-for-optimizing-medical-practice-operations-including-findings-that-average-wait-times-decreased-by-five-minutes-in-2016)
- MGMA's DataDive Practice Operations product page lists "call volume" and "call abandonment rate" as call-center data it contains, alongside wait times, appointment availability and scheduling metrics. No numeric benchmark is shown publicly; the page directs visitors to request a demo. Contributor counts and data year are not stated on the page. — [MGMA DataDive Practice Operations](https://mgma.com/datadive/practice-operations)
- MGMA's practice-operations glossary defines inbound call abandonment rate as the percentage of total inbound calls that were disconnected and/or not answered (not opened; per search snippet). — [MGMA practice ops glossary](https://www.mgma.com/practice-ops-glossary)
- [SURVEY][VENDOR-SPONSORED] "Agentic Impact for Intake and Beyond", a joint report from Insight Health (an AI phone/fax agent vendor) and MGMA, page dated April 30, 2026, based on 302 medical practice leaders: "59% report 301 or more inbound calls per business day" and "More than one in three medical groups miss 11% or more of calls at peak times." This is per practice/organization, self-reported, with no breakdown by size or specialty on the public page and no per-physician figure. — [MGMA sponsored solutions page](https://www.mgma.com/sponsored-solutions/agentic-impact-for-intake-and-beyond)
- [SURVEY][VENDOR-SPONSORED] The full PDF of that report reportedly says 77% of hospital- and system-owned groups report 301+ inbound calls per business day (PDF too large to open; per search snippet only). — [Insight Health/MGMA PDF](https://www.mgma.com/getkaiasset/3d85ddee-e329-4280-b726-3a93d63c7771/InsightHealth-MGMA-Agentic-Impact-for-Intake-and-Beyond-Final.pdf)
- [SURVEY] MGMA Stat poll, March 10, 2026 (294 applicable responses), on which phone tasks take the most staff time: eligibility/prior authorization 45%, scheduling 31%, intake 9%, prescription refills 6%, other 9%. The article gives no call-volume, abandonment or speed-of-answer figures. — [MGMA Stat, "Phones are still a backlog costing medical practices time"](https://mgma.com/mgma-stat/phones-are-still-a-backlog-costing-medical-practices-time)
- [SURVEY] MGMA Stat poll, March 27, 2017: "Most respondents (52%) said that a staff member answers incoming calls"; "42% said an automated phone tree guides callers through different options." The same article mentions one hospital call center (All Children's) with "a call volume of 750,000 per year inbound and outbound" and 40 employees; that is a single-site anecdote, not a benchmark. — [MGMA, "Help for calls: Is your patient phone strategy in need of a call center?" (July 20, 2017)](https://preview.mgma.com/articles/help-for-calls-is-your-patient-phone-strategy-in-need-of-a-call-center-)
- [SURVEY] An MGMA Stat poll on 2026 patient access priorities reportedly had phone access (22%) and wait times (21%) as top answers; I saw this only as relayed by a vendor blog, not on MGMA's page. — [RingRx](https://ringrx.com/?p=17162); MGMA page not opened: [MGMA Stat, patient access priorities for 2026](https://prod.mgma.com/mgma-stat/patient-access-priorities-for-2026)

### Inferences
- MGMA Stat polls are quick self-report polls of MGMA members, and DataDive is voluntary survey submission. Even the gated call metrics would be survey-reported practice data, not audited phone-system counts.
- The 59% "301+ calls per business day" figure describes MGMA's respondent base, which the 77% hospital/system-owned sub-result suggests skews toward larger groups. It should not be read as typical for 1-5 physician practices, and it cannot be converted to a per-physician number because respondent practice size is not published.
- The specialty spread on the AgentZap page ("25 radiology to 75 OB/GYN") has the shape of a DataDive table but has no link, table name or percentile, so it is unverifiable from public sources.

### Gaps
- Actual DataDive Practice Operations call-volume and abandonment-rate values (any year) are not public. Confirming or refuting "53" against DataDive needs an MGMA member or a DataDive demo.
- No public MGMA figure was found for calls per scheduler FTE, calls per 1,000 patients, or average speed of answer more recent than the 2017 release.
- The full answer distribution (buckets below 301) for the Insight Health/MGMA survey was not retrievable.

## 3. What do AAFP, AMA, ACP and the trade press publish on phone-call volume per physician per day in primary care?

### Takeaway
No association publishes a current national per-physician call benchmark. ACP (2003) repeats the 150-300/week estimate; AAFP's Family Practice Management gives process advice with no volume figure; the most-cited measured figure in the trade press is Baron's 2010 NEJM single-practice count of about 24 clinically significant calls per physician per day. Other measured studies are small, local, and count different things.

### Cited Findings
- [ESTIMATE] ACP, July 2003 policy paper: quotes the 150 to 300 calls per week estimate (about half clinical) and "25% of patient contacts are made via the telephone" in general internal medicine, both from Elnicki 2000; it also relays an MSNBC report that "Telephone calls make up 15 to 28% of encounters between doctors and patients, according to several studies". — [ACP policy paper (2003)](https://www.acponline.org/sites/default/files/acp-policy-library/policies/ambulatory_medicine_reimburse_telephone_care_2003.pdf)
- AAFP, Family Practice Management, May 2005 (Conomikes G, "Improving Telephone Management in Your Practice", FPM 2005;12(5):49-52): contains no calls-per-physician or calls-per-practice figure and does not mention MGMA. It advises practices to run their own telephone traffic study ("record all calls for four to six weeks"). — [AAFP FPM](https://www.aafp.org/pubs/fpm/issues/2005/0500/p49.html)
- [MEASURED, single practice] Baron RJ, "What's Keeping Us So Busy in Primary Care? A Snapshot from One Practice", NEJM 2010: a five-physician Philadelphia internal medicine practice (Greenhouse Internists), analyzed from its EHR. Per physician per day: 18.1 visits, 23.7 telephone calls "of sufficient clinical import to engage a physician" (almost 80% handled directly by the physician), 16.8 e-mails. I read this through secondary coverage, not the NEJM page. — [AASM summary](https://aasm.org/study-examines-average-workday-in-one-primary-care-practice/); [KevinMD](https://kevinmd.com/2010/05/calls-emails-patients-big-part-primary-care.html)
- [Trade press relay of Baron] Physicians Practice, April 30, 2010: "Each physician got 24 phone calls a day, about three-quarters of which were fielded by the doctor, Washington Post reports." "A third of the calls concerned an acute medical problem and resulted in a prescription." — [Physicians Practice, "All your unpaid tasks"](https://physicianspractice.com/view/all-your-unpaid-tasks)
- [MEASURED, phone-system logs] Dexter EN et al., "Patient-Provider Communication: Does Electronic Messaging Reduce Incoming Telephone Calls?", J Am Board Fam Med 2016;29(5):613-619: four Oregon clinics affiliated with a university hospital (community, university, rural and FQHC sites), February 2009 to June 2014. Incoming business-hours calls to the clinic lines, from all sources, answered and abandoned, ranged from 439 to 1,002 per 1,000 patients per month. Calls to individual clinician or staff lines were excluded; outbound calls not counted. — [JABFM](https://www.jabfm.org/content/29/5/613.full)
- [MEASURED, EHR inbox] Margolius D et al., "Primary Care Physician Factors Associated with Inbox Message Volume", J Am Board Fam Med 2020;33:460-462: 86 PCPs at 19 sites in one academic system in Northeast Ohio (MetroHealth). Mean of "84 messages per weekday per 1.0 FTE"; by type, "phone refill requests (14%), other patient calls (13%)". — [JABFM PDF](https://www.jabfm.org/content/jabfp/33/3/460.full.pdf)
- [MEASURED, old and tiny] J Fam Pract, August 1988: two physicians in a rural private family practice over 61 days averaged 10.4 calls per physician per day and 16.2 minutes per physician per day on telephone encounters (not opened; per search snippet). — [J Fam Pract 1988 PDF](https://cdn.mdedge.com/files/s3fs-public/jfp-archived-issues/1988-volume_26-27/JFP_1988-08_v27_i2_the-nature-and-content-of-physician-tele.pdf)
- [MEASURED, old] J Fam Pract, April 1984 (Minnesota): 11.8% of family physicians' physician-patient encounters occurred by telephone (not opened; per search snippet). — [J Fam Pract 1984 PDF](https://cdn.mdedge.com/files/s3fs-public/jfp-archived-issues/1984-volume_18-19/JFP_1984-04_v18_i4_office-telephone-calls-in-family-practic.pdf)

### Inferences
- Dexter's range converts to roughly 21 to 48 inbound calls per 1,000 patients per business day (dividing by about 21 business days; my arithmetic), or about 31 to 72 inbound calls per business day for a 1,500-patient panel. That brackets Spruce's 31 inbound and reaches 53 only at the upper end. These were teaching-affiliated clinics including an FQHC, and the count includes non-patient callers and abandoned calls, so it is an upper-leaning reference for a small private practice.
- Margolius implies about 23 phone-originated messages per weekday reaching a 1.0 FTE PCP's inbox (27% of 84; my arithmetic). That closely matches Baron's 23.7 clinically significant calls per physician per day, a decade apart and by a different method. Both count calls that reach the physician, which is a subset of all inbound calls hitting the front desk.
- The measured evidence therefore supports "about 20-25 calls per day that need the physician" and "about 30-70 total inbound calls per provider-panel per business day" as defensible ranges. A single figure of 53 inbound per physician per day is not supported by any measured primary source I found.

### Gaps
- AMA: I found no AMA or STEPS Forward publication giving phone-call volume per physician; AMA material surfaced only for in-basket/portal message volume. Not exhaustively searched.
- ACP Internist's March 2008 article "The front office bottleneck: schedules, phones and refills" returned HTTP 403 and could not be read. — [ACP Internist](https://immattersacp.org/archives/2008/03/one.htm)
- I did not open the NEJM Baron article itself, the Medical Economics piece that Spruce's table draws on, or any Becker's coverage. No Medical Economics per-physician call figure was verified.
- No nationally representative, post-2015 measured study of total inbound calls per physician in small private US practices was found. This appears to be a real gap in the literature, not just in my search.

## 4. For each figure: per whom, inbound or total, clinical or all calls, measured or estimated?

### Takeaway
The figures in circulation are not comparable: they mix per-provider, per-physician and per-practice denominators, inbound-only and inbound + outbound, and all calls versus only those reaching the physician. Only three are measured, and each comes from one practice or one health system.

### Cited Findings

| Figure | Denominator | Direction | Call scope | Basis | Year / population | Source |
|---|---|---|---|---|---|---|
| 53 per day | per provider (1,500-patient panel assumed) | inbound + outbound (31 + 22) | patient calls only | [VENDOR][ESTIMATE] author calculation | 2017 blog; inputs from seven practices | [Spruce Health](https://sprucehealth.com/blog/doctors-losing-hour-day-phone-call-overhead/) |
| "approximately 53 inbound calls per physician per day" | per physician | stated as inbound only | not stated | [VENDOR] unlinked "MGMA DataDive, 2025" | 2026 blog | [AgentZap](https://agentzap.ai/blog/medical-practice-phone-statistics) |
| 21 per day per 1,000 patients (range 11-33) | per 1,000 panel patients | inbound | patient calls | [VENDOR] compilation with broken citations | 2017 blog | [Spruce Health](https://sprucehealth.com/blog/doctors-losing-hour-day-phone-call-overhead/) |
| 150-300 per week | per primary care physician | received (inbound) | all calls, "about half" clinical | [ESTIMATE] in a review article | 2000 (pre-portal era) | [ACP 2003 quoting Elnicki 2000](https://www.acponline.org/sites/default/files/acp-policy-library/policies/ambulatory_medicine_reimburse_telephone_care_2003.pdf) |
| 23.7 per day | per physician | calls engaging the physician | clinical calls only | [MEASURED] EHR, one practice | 2010; five internists, Philadelphia | [AASM summary of Baron, NEJM](https://aasm.org/study-examines-average-workday-in-one-primary-care-practice/) |
| 439-1,002 per month per 1,000 patients | per 1,000 panel patients | inbound, business hours, incl. abandoned | all sources, main clinic lines | [MEASURED] phone-system logs | 2009-2014; four Oregon clinics | [Dexter, JABFM 2016](https://www.jabfm.org/content/29/5/613.full) |
| 84 inbox messages per weekday, 27% phone-originated | per 1.0 FTE PCP | messages reaching physician | refill calls 14% + other patient calls 13% | [MEASURED] EHR inbox | 2020; 86 PCPs, one Ohio system | [Margolius, JABFM 2020](https://www.jabfm.org/content/jabfp/33/3/460.full.pdf) |
| 10.4 per day | per physician | received by physician | physician-handled | [MEASURED] 61 days, two physicians | 1988; rural private practice | [J Fam Pract 1988](https://cdn.mdedge.com/files/s3fs-public/jfp-archived-issues/1988-volume_26-27/JFP_1988-08_v27_i2_the-nature-and-content-of-physician-tele.pdf) |
| 59% report 301+ per business day | per practice / organization | inbound | all | [SURVEY][VENDOR-SPONSORED] self-report bucket | 2026; 302 practice leaders, mix unpublished | [MGMA / Insight Health](https://www.mgma.com/sponsored-solutions/agentic-impact-for-intake-and-beyond) |
| 49 s / 13.5 s speed to answer | per practice | inbound | all | [SURVEY] DataDive submission | 2017; 1,200+ organizations | [MGMA press release](https://www.mgma.com/press/mgma-releases-industry-benchmarks-for-optimizing-medical-practice-operations-including-findings-that-average-wait-times-decreased-by-five-minutes-in-2016) |

### Inferences
- The vendor chain silently changed three things between 2017 and 2026: "provider" became "physician", "inbound + outbound" became "inbound", and "our calculation" became "MGMA DataDive". Each change inflates or over-credentials the number for an inbound-answering use case.
- For an inbound-answering product, the relevant quantity is total inbound to the practice's main lines (the Dexter-type measure), not calls reaching the physician (Baron, Margolius) and not inbound + outbound (Spruce's 53).

### Gaps
- No source gives a measured split of inbound calls by caller type (patients vs pharmacies, payers, other practices) for small practices. Spruce says 53 excludes non-patient calls but offers no measured figure for them.

## 5. Internal contradictions

### Takeaway
The local wording is internally loose rather than flatly contradictory: 53/day is 265/week on a five-day week, which is one point near the top of "150 to 300", not a translation of it. The real problems are that the two numbers come from unrelated sources 17 years apart with different definitions, and neither is from MGMA.

### Cited Findings
- 150 to 300 calls per week is an estimate for calls received per primary care physician from a 2000 review article. — [ACP 2003 quoting Elnicki 2000](https://www.acponline.org/sites/default/files/acp-policy-library/policies/ambulatory_medicine_reimburse_telephone_care_2003.pdf)
- 53 per day is a 2017 calculation of inbound plus outbound patient calls per provider, made up of 31 inbound and 22 outbound. — [Spruce Health](https://sprucehealth.com/blog/doctors-losing-hour-day-phone-call-overhead/)
- Vendor blogs disagree with the original on direction: AgentZap and RingRx call 53 "inbound", whereas the Spruce derivation counts both directions. — [AgentZap](https://agentzap.ai/blog/medical-practice-phone-statistics); [RingRx](https://ringrx.com/?p=17162); [Spruce Health](https://sprucehealth.com/blog/doctors-losing-hour-day-phone-call-overhead/)
- The one measured per-physician figure in the trade press is less than half of 53: "Each physician got 24 phone calls a day". — [Physicians Practice](https://physicianspractice.com/view/all-your-unpaid-tasks)

### Inferences
- Arithmetic check (mine): 150-300 per week is 30-60 per day over five days. Spruce's inbound-only component (31/day, about 155/week) lands at the bottom of that range; the headline 53 (265/week) lands near the top only because it adds outbound calls. So "53 inbound per day, i.e. 150 to 300 per week" overstates inbound volume by roughly 70% relative to the source's own inbound figure (53 vs 31).
- The solo/3-MD/5-MD table compounds this by multiplying 53 by physician count, which assumes per-physician volume is constant with practice size and that all 53 are inbound. No source supports either assumption.
- Suggested safe wording for downstream use: no MGMA attribution; state inbound volume as a range with the measured sources named (roughly 30 inbound patient calls per provider per day by one vendor compilation; 21-48 inbound calls per 1,000 patients per business day in one four-clinic phone-log study; about 24 calls per day reaching the physician in one practice), and flag that no national benchmark for small practices is public.

### Gaps
- Whether volumes have shifted materially since portals and online scheduling became common is unresolved: every measured per-physician or per-1,000 figure found predates 2021, and the only 2025-2026 figures are survey buckets or vendor claims.
