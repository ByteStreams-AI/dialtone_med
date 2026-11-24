---
geometry:
  - top=0.45in
  - bottom=0.55in
  - left=0.65in
  - right=0.65in
fontsize: 10pt
header-includes:
  - \input{dialtone-med-marketing.tex}
  - \DialToneMedCompact
---

# DialTone.Med AuthPulse {.marketing-title}

[Every prior auth, on the clock. Early access; in development, built by ByteStreams.]{.lead}

## Prior auth runs on phone calls and memory

The form takes minutes. The hours go to chasing status, missed deadlines, and denials nobody has time to appeal.

- **13 hours** a week per physician, physician and staff time combined, on about 40 prior authorizations.
- **44%** of medical group leaders say payer turnaround got slower in 2026 than in 2025. 7% say faster.
- **11.5%** of Medicare Advantage prior auth denials in 2024 were appealed, and **80.7%** of those appeals were overturned in full or in part.

::: note
Sources: AMA 2025 prior authorization physician survey; MGMA Stat poll, 2026; KFF analysis of 2024 Medicare Advantage data. Overturn rates are lower in other plan types: KFF reports 47% in Medicaid managed care and 43% in exchange plans.
:::

## One list. Every request. Every deadline.

AuthPulse lists every prior authorization your team is waiting on, shows when each plan's answer is due, and flags the requests that need your staff. For practices, practice groups, billing companies and specialty pharmacies.

```{=latex}
\begin{center}\fcolorbox{DTMRule}{white}{\includegraphics[width=0.93\textwidth]{images/authpulse-requests.png}}\\[2pt]{\footnotesize\itshape Sample data: invented practice, patients and plans.}\end{center}
```

- **The decision clock.** Each request runs against the timeframe its plan type carries, and turns amber, then red, as the deadline passes.
- **Denied without a specific reason.** Medicare Advantage, Medicaid and CHIP plans must give a specific reason when they deny a medical service. AuthPulse flags the denials that don't.
- **Approvals expiring soon.** Approvals that run out within 30 days are listed before they lapse.
- **A record you can take to the plan.** Each request keeps its timeline: submitted, delivery confirmed, calls to the plan, the decision, and any appeal. The turnaround report shows each plan's record over 90 days.

```{=latex}
\newpage
```

## Not every request has a federal deadline

| Plan type and request                    | Standard           | Expedited      | Rule                                     |
| ---------------------------------------- | ------------------ | -------------- | ---------------------------------------- |
| Medicare Advantage, Medicaid, CHIP: items and services | 7 calendar days    | 72 hours       | CMS-0057-F; CHIP may follow state law    |
| Medicare Part D and Part B drugs         | 72 hours           | 24 hours       | 42 CFR 423.568, 423.572; 422.568, 422.572 |
| Medicaid outpatient drugs                | 24 hours           | 24 hours       | Social Security Act §1927(d)(5)          |
| Employer, individual and exchange plans  | 15 days            | 72 hours       | 29 CFR 2560.503-1; 45 CFR 147.136        |
| Grandfathered individual plans, type unknown | None shown         | None shown     | State rules may apply                    |

Where no federal timeframe applies, AuthPulse still shows how long each request has waited.

::: note
Sources: CMS, Improving Prior Authorization Processes, and the federal regulations cited in each row. Some rules allow the plan an extension; AuthPulse tracks those too. AuthPulse shows these timeframes for tracking. It is not legal advice.
:::

## With the DialTone.Med voice agent

Patients stop calling to ask "is it approved yet?"

- **On the call, status only.** Verified callers hear how many requests are in each status. The test, drug and dates are never said aloud.
- **By secure link, the detail.** What each request is for, its dates, and the next step open in the patient's browser.
- **A text when it changes.** Sent when a request is approved, denied, needs more information, or an appeal is decided. It names no test, drug or plan.

The voice agent reads status from AuthPulse; AuthPulse also works without it.

## An example, not a result

A five-physician practice at the published averages (40 prior auths a week each, 13 hours of physician and staff time) handles about **10,000** a year and spends **3,250 hours**, about 1.6 full-time staff or **$97,500** at $30 an hour. If its appeal rate rose from 11.5% to 25%, about **83** more denials a year would be overturned.

::: note
An illustration, not a forecast or a measured AuthPulse result. Denial (7.7%) and overturn (80.7%) rates are KFF's 2024 Medicare Advantage figures; other plan types differ. The $30 hourly cost is an assumption.
:::

## Pricing

| For                                      | Price                | Details                                        |
| ---------------------------------------- | -------------------- | ---------------------------------------------- |
| Practices and practice groups            | $59 a month          | Per prescriber; $149 minimum per site          |
| Specialty pharmacies and billing companies | $0.50 a request      | Per request tracked in the month; $499 minimum a month |
| With a DialTone.Med plan                 | 20% off              | The tracker, added to any DialTone.Med plan    |
| Packet-and-fax assistant                 | From $99 a month     | Per site, with a page allowance                |
| Payer prior authorization APIs           | From $49 a month     | Per site, from 2027                            |
| Direct EHR integration                   | Quoted               | One-time setup and a monthly fee, per EHR vendor |

## What AuthPulse does, and does not do

- **Getting requests in.** Staff add requests by hand or upload a spreadsheet, and a scheduled import picks up the prior authorization report your EHR exports. Both are included.
- **It does not submit electronically.** Your team keeps submitting through the EHR, payer portals, or fax. The packet-and-fax assistant can build the packet and send the fax; its delivery receipt starts the clock.
- **It does not decide anything.** The plan decides and your team records it.

::: cta
**Join early access: put every prior auth on the clock.**

[dialtone.med/authpulse](https://dialtone.med/authpulse) \ \ | \ \ [hello@bytestreams.ai](mailto:hello@bytestreams.ai)
:::
