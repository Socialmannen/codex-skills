# Codex Skills för hemsidor och webbappar

31 fokuserade skills för Codex, med svenska användningsfraser och stöd för vanliga webbprojekt. Samlingen bygger på Socialmannen/skills och har anpassats för terminal, Git, projektets faktiska verktyg och verifiering i webbläsare.

Börja med startgruppen på tio skills och lägg till efter behov. Alla 28 tidigare skillnamn finns kvar. Tre nya skills täcker webbläsarkontroll, förhandspublicering samt Git/PR.

## Installera

Du behöver Node.js 22 eller nyare för verktygen i detta repo. Ingen npm-installation eller tredjepartspaket behövs.

~~~bash
git clone https://github.com/Socialmannen/codex-skills.git
cd codex-skills
node scripts/install-skills.mjs --list
~~~

Välj målprojektet och granska först vad som ska installeras:

~~~bash
node scripts/install-skills.mjs --target /sokvag/till/ditt-projekt --preset starter --dry-run
node scripts/install-skills.mjs --target /sokvag/till/ditt-projekt --preset starter
~~~

Filerna kopieras till målprojektets .agents/skills. Installera enskilda tillägg eller hela samlingen så här:

~~~bash
node scripts/install-skills.mjs --target /sokvag/till/ditt-projekt seo browser-qa security-review
node scripts/install-skills.mjs --target /sokvag/till/ditt-projekt --preset all
~~~

För ett personligt urval som är tillgängligt över projekt:

~~~bash
node scripts/install-skills.mjs --user --preset starter
~~~

Använd citattecken runt målsökvägar med blanksteg. Skapa målprojektets katalog först. Projektets symlänkade .agents-kataloger eller skill-kataloger ersätts inte.

### Skydd och uppdateringar

Installeraren kontrollerar hela urvalet innan något kopieras och stoppar vid en befintlig skill. Uppdatera ett tidigare installerat, oförändrat urval med:

~~~bash
git pull --ff-only
node scripts/install-skills.mjs --target /sokvag/till/ditt-projekt --preset starter --replace --dry-run
node scripts/install-skills.mjs --target /sokvag/till/ditt-projekt --preset starter --replace
~~~

Använd samma enskilda namn eller preset som du vill uppdatera. --replace gäller bara oförändrade skills som installerats av detta verktyg. Lokala ändringar och skills från andra källor bevaras; flytta eller säkerhetskopiera dem själv om du vill byta ut dem.

Installeraren lämnar en liten källmarkör i varje installerad skills assets-katalog. Avinstallation görs genom att ta bort just den installerade skillens katalog i målprojektets .agents/skills eller i ~/.agents/skills. Ta inte bort andra skills eller instruktioner.

Starta Codex i målprojektet, kontrollera att de installerade skillsen visas och prova exempelvis:

> Använd $break-ui för att kontrollera profilsidan med lång text och saknade bilder.

Skilda installationer med samma skillnamn slås inte ihop av Codex. Undvik att installera samma urval både personligt och i projektet om det ger dubbla val. Läs mer i [Codex dokumentation](https://developers.openai.com/codex/skills/).

## Välj efter arbetet

- Startgrupp: krav, kodstruktur, felsökning, UI, mobil webb och lansering.
- Publik hemsida: lägg till seo och browser-qa.
- Webbapp med data och behörigheter: lägg till domain-modeling, tdd och security-review.
- Betald produkt: lägg till pricing-and-paywalls och user-activation.
- Leverans: lägg till preview-deploy och git-pr.

[Användning och exempel](docs/USAGE.md) beskriver fler urval. [Flyttguiden](docs/MIGRATION.md) förklarar förändringarna från Lovable.

Skills utökar agentens arbetssätt. Hosting, databas, autentisering och andra tjänster följer projektets riktiga konfiguration och flyttas inte automatiskt genom installationen.

## Samtliga skills

Stjärnan anger att skillen ingår i startgruppen.

### Utveckling och UI

| Skill | Innehåll |
| --- | --- |
| [break-ui](skills/engineering/break-ui/SKILL.md) ★ | Stress-test interfaces with realistic edge-case data. |
| [code-review](skills/engineering/code-review/SKILL.md) ★ | Review behavior, project rules and regressions across all changed files. |
| [codebase-audit](skills/engineering/codebase-audit/SKILL.md) | Find dead code, unused packages and maintainability risks. |
| [codebase-design](skills/engineering/codebase-design/SKILL.md) ★ | Feature modules, testable interfaces and focused architecture reviews. |
| [declutter-ui](skills/engineering/declutter-ui/SKILL.md) ★ | Remove redundant interface elements while preserving useful navigation. |
| [diagnosing-bugs](skills/engineering/diagnosing-bugs/SKILL.md) ★ | Reproduce, isolate and fix bugs with evidence. |
| [domain-modeling](skills/engineering/domain-modeling/SKILL.md) | Align domain language, data models and access rules. |
| [implement](skills/engineering/implement/SKILL.md) | Implement agreed work in small complete slices. |
| [mobile-native](skills/engineering/mobile-native/SKILL.md) ★ | Touch, viewport, keyboard and safe-area behavior on the mobile web. |
| [prototype](skills/engineering/prototype/SKILL.md) ★ | Compare layouts and test flows before production implementation. |
| [tdd](skills/engineering/tdd/SKILL.md) | Behavior-focused test-first work using the project's test stack. |
| [ui-motion](skills/engineering/ui-motion/SKILL.md) | Purposeful animation with measured performance and reduced-motion support. |
| [unslop-ui](skills/engineering/unslop-ui/SKILL.md) ★ | Give generic interfaces a deliberate visual identity. |

### Säkerhet och lansering

| Skill | Innehåll |
| --- | --- |
| [launch-checklist](skills/security/launch-checklist/SKILL.md) ★ | Evidence-based checks before releasing a website or app. |
| [legal-compliance](skills/security/legal-compliance/SKILL.md) | Scope legal and privacy requirements using current primary sources. |
| [security-review](skills/security/security-review/SKILL.md) | Evidence-based security review matched to the actual stack. |

### SEO

| Skill | Innehåll |
| --- | --- |
| [seo](skills/seo/seo/SKILL.md) | Technical search readiness for public routes and clear, useful content. |

### Produkt och konvertering

| Skill | Innehåll |
| --- | --- |
| [landing-page-cro](skills/growth/landing-page-cro/SKILL.md) | Clear commercial landing pages and honest conversion improvements. |
| [pricing-and-paywalls](skills/growth/pricing-and-paywalls/SKILL.md) | Pricing clarity and server-enforced entitlements. |
| [product-analytics](skills/growth/product-analytics/SKILL.md) | Decision-led event tracking and controlled experiments. |
| [user-activation](skills/growth/user-activation/SKILL.md) | Shorten signup-to-value and keep cancellation usable. |

### Krav och arbetsmetoder

| Skill | Innehåll |
| --- | --- |
| [deepen-prompt](skills/productivity/deepen-prompt/SKILL.md) | Clarify task instructions without expanding the requested scope. |
| [grilling](skills/productivity/grilling/SKILL.md) | Resolve the important open decisions before a larger build. |
| [knowledge-curator](skills/productivity/knowledge-curator/SKILL.md) | Place durable project guidance in the right Codex files. |
| [llm-council](skills/productivity/llm-council/SKILL.md) | Optional structured perspectives for consequential decisions. |
| [skill-design](skills/productivity/skill-design/SKILL.md) | Maintain focused Codex skills and test their activation boundaries. |
| [to-questionnaire](skills/productivity/to-questionnaire/SKILL.md) | Collect missing requirements from a client or specialist. |
| [to-spec](skills/productivity/to-spec/SKILL.md) ★ | Turn agreed requirements into a concise spec and verifiable slices. |

### Webbläsare och leverans

| Skill | Innehåll |
| --- | --- |
| [browser-qa](skills/delivery/browser-qa/SKILL.md) | Exercise real browser flows and document what was verified. |
| [git-pr](skills/delivery/git-pr/SKILL.md) | Deliver scoped changes through commits, PRs and relevant CI checks. |
| [preview-deploy](skills/delivery/preview-deploy/SKILL.md) | Prepare and verify a preview using the project's hosting setup. |

## Underhåll och verifiering

~~~bash
npm run check
~~~

Kontrollen validerar format, katalog, metadata, lokala länkar och kvarvarande plattformsantaganden samt kör tester för installerarens och validerarens beteende. GitHub Actions kör samma kontroll.

Se [AGENTS.md](AGENTS.md) för bidragsregler, [CHANGELOG.md](CHANGELOG.md) för ändringar och [ursprung och krediter](docs/PROVENANCE.md) för källor.

## Licens

MIT. Ursprunglig notis för Matt Pocock finns kvar i [LICENSE](LICENSE). Codex-anpassning och nya verktyg: Socialmannen. Detta är ett fristående projekt.
