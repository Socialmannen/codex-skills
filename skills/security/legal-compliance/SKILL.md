---
name: legal-compliance
description: "Use when reviewing privacy, consent, terms, accessibility obligations, or related web-app requirements. Används vid GDPR, integritetspolicy, cookies, användarvillkor och juridisk lanseringskontroll."
---

# Legal and Privacy Readiness

Map actual processing and relevant jurisdictions, then verify applicable requirements with current authoritative sources.

## Scope first

Identify the operator, audience and jurisdictions, personal data and purposes, retention, hosting, processors, tracking, AI features, user content, subscriptions, communications, and any health or children's data.

Do not infer applicable law from the developer's language or timezone. Distinguish a legal obligation, a vendor requirement, and a recommended product practice.

## Read only the relevant references

| Area | Read when | Reference |
| --- | --- | --- |
| Vendors and transfers | An external provider processes data | [references/third-parties.md](references/third-parties.md) |
| Notices and terms | Reviewing policies, terms, or deletion | [references/privacy-policy-and-terms.md](references/privacy-policy-and-terms.md) |
| Consent and tracking | Analytics, pixels, replay, or client storage | [references/consent-and-tracking.md](references/consent-and-tracking.md) |
| Health and children | Sensitive information or younger users | [references/health-and-kids.md](references/health-and-kids.md) |
| Accessibility | Checking interface access or legal coverage | [references/accessibility.md](references/accessibility.md) |
| AI features | Personal data reaches a model or AI acts for users | [references/ai-features.md](references/ai-features.md) |
| User content | Hosting posts, files, images, or public sharing | [references/user-content.md](references/user-content.md) |
| Subscriptions | Paid trials or recurring billing | [references/subscriptions.md](references/subscriptions.md) |
| Email and SMS | Sending notifications or marketing | [references/email-and-sms.md](references/email-and-sms.md) |

Reference files are investigation guides, not a universal legal checklist. Verify current coverage, thresholds, dates, exceptions, and sources before stating an obligation.

## Implement within scope

Check whether policy promises match real data flows and vendor settings. Draft accurately from established facts; flag missing facts instead of inventing them.

For requested technical changes, implement the relevant consent controls, withdrawal, account data flows, or accessible UI and test their actual behavior. A cookie banner alone does not establish compliance; neither does cookieless tracking or a passing automated accessibility scan.

Keep changes to contracts, registrations, or provider accounts within the user's authorized scope. Identify issues that need qualified jurisdiction-specific review when concrete risk or complexity warrants it.

## Report

Give evidence, the applicable source and verification date, required or recommended action, and confidence. Use UNKNOWN for unavailable facts. Do not certify general legal compliance.
