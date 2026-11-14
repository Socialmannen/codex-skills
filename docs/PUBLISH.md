# Publicera detta som ett nytt GitHub-repo

Källkoden och verktygen fungerar även om du fått samlingen som ZIP. Packa upp katalogen, öppna en terminal där och kör npm run check.

För att skapa repot på ditt konto behöver GitHub-kontot eller anslutningen ha rätt att skapa repositories. Skrivbehörighet till ett befintligt repo är inte samma rättighet.

## Från ZIP till eget repo

Kör följande i den uppackade codex-skills-katalogen, med Git och en inloggad GitHub CLI:

~~~bash
git init -b main
git add .
git commit -m "Create Codex web skills collection"
gh repo create Socialmannen/codex-skills --public --source . --remote origin --push
~~~

Byt ägare, namn och synlighet om du vill ha en annan destination. Lägg inte in en token i kommandot eller i remote-URL:en.

## Om repot redan är skapat

Använd ett tomt repo och den verkliga HTTPS-URL:en från GitHub. Lägg till origin om den saknas och pusha main:

~~~bash
git remote add origin REPO_URL
git push -u origin main
~~~

Ersätt REPO_URL med din riktiga repo-URL. Om origin redan finns, kontrollera destinationen innan du ändrar något. Forcera inte en push över en befintlig historik.

Efter publicering kör GitHub Actions samma npm run check som lokalt. Kontrollera resultatet i repots Actions-flik.
