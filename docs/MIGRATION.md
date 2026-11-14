# Från Lovable till Codex

Flytten gäller hur agenten arbetar med koden. Hosting, databas, autentisering, lagring och betalningar behöver fortfarande en konkret konfiguration. Ett byte av editor flyttar inte automatiskt dessa tjänster.

## Vad som har ändrats

| Område | Codex-versionen |
| --- | --- |
| Verktyg och kommandon | Läs projektets framework, package manager, scripts och tillgängliga verktyg innan kommandon väljs. |
| Förhandsvisning | Upptäck verkligt serverkommando och URL. Ingen fast port eller särskild loggkatalog förutsätts. |
| Planer och kunskap | Följ projektets dokumentation, specs och AGENTS.md. Plattformsspecifika planfiler och minnes-URI:er har tagits bort. |
| Git | Lokala ändringar, staged innehåll och relevanta untracked filer ingår i granskningar. Branches och worktrees kan användas när miljön stödjer det. |
| Leverans | Commits, push, PR och publicering styrs av uppdraget. Inga automatiska commits efter varje tur förutsätts. |
| Godkännanden | Utför redan beställt rutinmässigt arbete. Fråga om beslut eller extern påverkan som faktiskt saknar stöd i uppdraget. |
| Tester | Återanvänd projektets teststack. Viktiga beteenden får meningsfullt regressionsskydd; visuella småändringar behöver ofta en visuell kontroll. |
| Felsökning | Föredra reproduktion men redovisa statiska slutsatser och blockerad verifiering när runtime saknas. Inga garantier om att ett test förhindrar alla framtida fel. |
| Kodstädning | Kontrollera dynamiska imports, filbaserad routing och externa konsumenter. Redan beställd säker städning kräver inte ett nytt godkännande för varje batch. |
| UI | Varumärke och uppgift styr. Gradienter, serifer och rena neutrala färger är möjliga designval. |
| Navigation | Behåll skip links, innehållsförteckningar och andra användbara ankarlänkar. |
| Mobil | Behåll zoom, synlig interaktionsfeedback och användbara scrollmarkörer. Skilj designråd från WCAG-krav. |
| Motion | Undvik transition: all. Föredra billiga egenskaper men tillåt mätt och motiverad layoutanimation. |
| Säkerhet | Följ verkliga attackvägar och kalibrera allvarlighetsgrad. Skilj granskning från åtgärder och statisk evidens från körd reproduktion. |
| Juridik | Börja med faktisk behandling, målgrupp och jurisdiktion. Kontrollera aktuella primärkällor och redovisa okända uppgifter. |
| Analys | Cookieless ger inget automatiskt undantag. Interna ID:n kan vara personuppgifter; samtycke och minimering gäller även relevanta serverflöden. |
| SEO | Sökning och modellträning har separata botregler. llms.txt är ett frivilligt komplement. |

## Tre tillagda skills

- browser-qa: använd och kontrollera webbappen i den verkliga webbläsarmiljön.
- preview-deploy: förbered, publicera och verifiera en beställd förhandsversion.
- git-pr: leverera beställda commits och PR:er samt undersök relevanta CI-fel.

## Praktisk ordning

1. Öppna projektets Git-repo i Codex och be agenten kartlägga hur det startas, testas och publiceras.
2. Dokumentera faktiska kommandon och viktiga konventioner i projektets AGENTS.md.
3. Installera startgruppen enligt [README](../README.md).
4. Lägg till exempelvis seo för publika innehållssidor eller domain-modeling, tdd och security-review för webbappar med data och behörigheter.
5. Kör codebase-audit när du vill bedöma den övertagna kodbasen.
6. Verifiera huvudflöden, backendkopplingar och miljövariabler innan en produktionspublicering.
