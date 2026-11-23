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

# DialTone.Med Security and Data Handling {.marketing-title}

[How DialTone.Med protects patient information, for the people who review vendors.]{.lead}

## Our role

Healthcare practices and pharmacies that use DialTone.Med are covered entities under HIPAA. ByteStreams LLC acts as their business associate: it handles protected health information (PHI) only to provide the service on their behalf.

- We sign a business associate agreement before handling any patient information.
- Vendors that handle PHI on our behalf are required to sign business associate agreements with us.
- Workflows collect and use only the information needed for the request being handled.

## What happens to patient information

- **On the call.** The assistant confirms who is calling, then says only what is safe to say aloud. Balances, medications, and procedures are never read out.
- **By secure link.** Appointments, balances, and prior authorization detail open in the patient's browser from a link sent by text. Card payments are handled by the payment processor; card numbers are not read to staff or to the assistant.
- **Decisions.** DialTone.Med relays facts. It does not approve refills, decide prior authorizations, or give medical advice.

## Safeguards

| Administrative               | Technical                    | Physical                     |
| ---------------------------- | ---------------------------- | ---------------------------- |
| Annual risk analysis, with the risk management plan updated from its findings | AES-256 encryption at rest and TLS 1.2+ in transit, including API and telephony channels | Cloud data centers with restricted physical access |
| Role-based, least-privilege access, reviewed quarterly | Unique user IDs, multi-factor authentication, and automatic logoff | Workstations with automatic lock, full-disk encryption, and secured remote access |
| Incident handling with containment, investigation, remediation, and post-incident review | Audit logging of access to patient information | Documented disposal and sanitization of devices and media |
| Contingency planning: daily encrypted backups, disaster recovery, and annual testing | Integrity controls, including checksums, versioning, and alerts | |

```{=latex}
\newpage
```

## Retention

| Information                        | How long it is kept                                        |
| ---------------------------------- | ---------------------------------------------------------- |
| Call recordings and transcripts    | 30 days, then deleted. Every call opens with a recording notice, and a caller can ask to stop recording |
| Patient and request records        | While you use the service; removed or returned when you leave |
| Audit logs and compliance records  | At least six years                                         |
| Card numbers                       | Not stored by DialTone.Med; handled by the payment processor |

## Breach notification

- Suspected incidents are reported to our compliance officer within 24 hours and assessed using the four HIPAA risk factors in 45 CFR 164.402.
- As a business associate, we notify affected customers without unreasonable delay and within 30 days.
- Breach investigations and corrective actions are documented and kept for at least six years.

## Training and review

- HIPAA training before access to systems holding PHI, with an annual refresher
- Policy review at least annually, with quarterly log review and an annual risk assessment
- Good-faith reporting of concerns is required and protected from retaliation

## Patient rights

Patients exercise their HIPAA rights through their healthcare provider. We support our customers in meeting requests for access, amendment, restriction, confidential communications, and an accounting of disclosures.

## Service providers

| Provider   | What it does                                                             |
| ---------- | ------------------------------------------------------------------------ |
| Supabase   | Database and secure application data storage                             |
| Telnyx     | Phone number routing and text message delivery                           |
| Vapi       | Voice agent platform connecting the call to speech recognition, the language model, and speech generation |
| Deepgram   | Speech-to-text transcription                                             |
| OpenAI     | Language model powering the voice agent                                  |
| ElevenLabs | Text-to-speech voice generation                                          |
| Stripe     | Payment processing for bills paid through a secure link                  |
| Resend     | Delivery of confirmation emails                                          |
| Cloudflare | Web hosting, application delivery, and encrypted storage of call recordings |

## Contact

**Compliance officer:** Steven Cotton, Owner \ \ | \ \ **Phone:** (629) 250-1143 \ \ | \ \ **Email:** [hello@bytestreams.ai](mailto:hello@bytestreams.ai)

::: cta
**Request the full HIPAA compliance policy and a business associate agreement.**

[hello@bytestreams.ai](mailto:hello@bytestreams.ai) \ \ | \ \ [dialtone.med/hipaa](https://dialtone.med/hipaa)
:::

::: note
Summarized from the Security and HIPAA page and the Privacy Policy at dialtone.med, last updated November 2026. Client configuration and contractual requirements apply.
:::
