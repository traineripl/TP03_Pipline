# Liste de courses — projet du TP3 (Pipeline CI)

Petite application web (`index.html` + `server.js`) et sa suite de tests Playwright.

## En local

```bash
npm install
npx playwright install chromium
npx playwright test
```

L'application démarre toute seule pendant les tests (`webServer` dans `playwright.config.ts`).
Pour la voir à la main : `node server.js` puis http://localhost:3003.

## Ce que vous devez faire

Suivre l'énoncé du TP3 : ajouter le workflow `.github/workflows/playwright.yml`
pour que cette suite tourne automatiquement à chaque `push`.
