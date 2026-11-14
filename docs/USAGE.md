# Användning och urval

Installera bara de skills som hjälper projektet. Referenser till andra arbetsflöden betyder inte att samtliga måste vara installerade.

## Startgrupp

Startgruppen innehåller tio skills: codebase-design, diagnosing-bugs, code-review, prototype, mobile-native, break-ui, declutter-ui, unslop-ui, to-spec och launch-checklist.

De ger stöd för krav, kodstruktur, felsökning, design, mobil webb och lansering. Det är ett starturval, inte en lista över allt varje projekt måste använda.

## Lägg till efter uppgift

| Projekt eller behov | Bra tillägg |
| --- | --- |
| Publik hemsida | seo, browser-qa |
| Kommersiell landningssida | landing-page-cro, product-analytics när mätning behövs |
| Webbapp med data och roller | domain-modeling, tdd, security-review |
| Betald produkt | pricing-and-paywalls, user-activation |
| Personuppgifter och tracking | legal-compliance |
| Ny kodbas eller teknisk skuld | codebase-audit |
| Animationer | ui-motion |
| Förhandspublicering | preview-deploy |
| Commits, PR och CI | git-pr |
| Större otydlig idé | grilling, sedan to-spec |
| Kundkrav saknas | to-questionnaire |
| Underhåll av agentinstruktioner | knowledge-curator, skill-design |

implement, deepen-prompt och llm-council är valfria stödmetoder. De behövs inte för att Codex ska kunna utveckla ett projekt.

## Exempel

- ”Använd $break-ui för profilsidan och kontrollera lång text och saknade bilder.”
- ”Använd $code-review för alla mina lokala ändringar, även nya filer.”
- ”Använd $browser-qa och verifiera bokningen som en inloggad testanvändare.”
- ”Använd $seo för de publika innehållssidorna.”
- ”Använd $git-pr och skapa en PR med mina färdiga ändringar.”

Explicit anrop i lokal Codex kan göras med skillnamnet, exempelvis $break-ui. Väljaren och syntaxen kan skilja mellan klienter; kontrollera aktuell klientdokumentation.

## Verifiering

Paketering och installation testas automatiskt i detta repo. Att skillens filer är giltiga bevisar inte att den alltid väljs automatiskt eller att en framtida webbapp fungerar.

Efter installation: öppna projektet i Codex, kontrollera att skillen visas och prova en relevant uppgift. Starta om sessionen om filändringar inte upptäcks i din klient.
