# Ursprung och licens

Samlingen bygger på [Socialmannen/skills](https://github.com/Socialmannen/skills), låst till revision [e09293227511c642ac5e00c2f4b775f1d01bd911](https://github.com/Socialmannen/skills/tree/e09293227511c642ac5e00c2f4b775f1d01bd911). Den revisionen innehåller de 28 skills som granskades före flytten.

Detta är ett nytt, fristående repo med en egen Git-historik. Föregångaren lämnas oförändrad. Skillnamnen har behållits för att göra övergången begriplig. Instruktionerna har skrivits om för Codex och referenserna har anpassats. Fyra referensfiler har i huvudsak behållits och redigerats: katalogen för extremdata, glossary-format samt exemplen för tester och mocking.

## Krediter

Den tekniska grunden kommer från [Matt Pococks skills](https://github.com/mattpocock/skills). Ursprunglig MIT-notis för Matt Pocock finns kvar i [LICENSE](../LICENSE).

Föregångarens README krediterar också [HumanLayer](https://github.com/humanlayer/skills) för PR-struktur, Googles Mantis för regler om falska positiva säkerhetsfynd och [launch readiness guide](https://ducktate.com/learn/launch-readiness/) för delar av lanseringsunderlaget.

Det medföljande ursprungsunderlaget anger dessutom följande inspirationskällor:

- [Emil Kowalski](https://github.com/emilkowalski/skills): motion, mobil webb och UI-kvalitet.
- [Corey Haines](https://github.com/coreyhaines31/marketingskills): landningssidor, prissättning, aktivering och analys.
- [Silvio Ventre](https://github.com/silvioventre/lovable-skills): kodstädning och stående instruktioner.
- [Charles Skills](https://github.com/lemonface0309/charles-skills): visuell riktning och minskad generisk AI-estetik.
- [Claudient](https://github.com/Claudient/Claudient): systematisk felsökning.
- [Anthropic Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills): principer för fokuserade skills och referenser.

Ingen automatisk hämtning från dessa inspirationskällor sker vid installation. Deras aktuella innehåll eller licenser är inte en del av installationsprocessen.

## Codex-versionen

UI-vägledningen har kompletterats med idéer från [GoogleChrome Modern Web Guidance](https://github.com/GoogleChrome/modern-web-guidance-src), npm-paketet `modern-web-guidance` version 1.0.1 (Apache-2.0). Vägledningen har anpassats till detta repos arbetsflöden; paketet installeras eller körs inte av samlingen.

Nya arbetsflöden är browser-qa, preview-deploy och git-pr. Installerare, validerare, tester, Codex-metadata och dokumentation har lagts till i denna version.

Format och upptäckt följer [Codex dokumentation](https://developers.openai.com/codex/skills/). Samlingen är ett fristående projekt och inte en officiell OpenAI-produkt.
