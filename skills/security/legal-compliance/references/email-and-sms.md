# Email and SMS

Read when the application sends notifications or marketing.

Inventory purpose, recipient source, jurisdiction, legal basis or permission where applicable, provider, sender identity, suppression, and preference controls.

Distinguish authentication/transactional messages from marketing using their actual content and purpose. Verify current consent, identification, and opt-out requirements for the relevant channel and region.

Check suppression consistently across all sending paths. Keep a usable withdrawal/unsubscribe mechanism where required and avoid leaking addresses or message content in logs.

Verify sender-domain configuration, provider errors, bounce handling, and retries. Test with authorized sandbox recipients; a development request must not send to real customer lists.

Sources for investigation include the relevant national consumer authority, [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng), [ePrivacy legislation](https://eur-lex.europa.eu/eli/dir/2002/58/oj/eng), and [FTC business guidance](https://www.ftc.gov/business-guidance).
