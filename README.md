# Mahdi Rezaei — Portfolio

An English portfolio for a full-stack developer working with Laravel, PHP, React and TypeScript.

[Visit the website](https://mahdirezaeidev.github.io/)

## Experience

- Six selected public projects with category filters, accessible project dialogs and repository links.
- Verified live demos for Air Pollution Metrics and Awesome Books.
- Technical focus, approach and direct contact links.
- Mobile navigation, keyboard focus, reduced-motion support and a clipboard fallback.
- Checked-in content, bundled fonts and code-native artwork. No runtime profile API or remote stylesheet is required.

Content and project credits are maintained in `src/data/profile.js` and `src/Portfolio.jsx`. Illustrative covers are workflow concepts, not screenshots or claims about deployed product interfaces. Employment history, customer results and proficiency ratings are not inferred from repository activity.

## Visual identity

The lowercase `mr.` mark, warm ivory background, ink typography and restrained terracotta accent form the visual identity. Instrument Serif provides the display typography, Manrope the readable interface text and IBM Plex Mono the index labels.

Palette: paper `#f4f1ea`, ink `#252722`, terracotta `#ac4b35`, sage `#bdcbb9`.

The design draws on the editorial scale of international portfolios and the detail of [Rauno Freiberg’s interaction work](https://rauno.me/craft). [Dennis Snellenberg’s portfolio](https://www.dennissnellenberg.com/) was also reviewed as a reference for clear personal positioning. Layout, copy, mark and project artwork were developed for this portfolio.

Fonts are self-hosted through Fontsource. Their redistribution licenses are included in `public/licenses/`.

## Run locally

Install Node.js and npm, then run:

```sh
npm ci
npm start
```

## Validate

```sh
npm test -- --watchAll=false --runInBand
npm run build
```

Tests cover rendering without a profile API, project filtering and dialogs, mobile navigation, clipboard success/failure and the error fallback.

## Publish

GitHub Pages serves the root of the `gh-pages` branch. From an authenticated checkout:

```sh
npm run deploy
```

The `predeploy` script builds the production bundle before publication. Keep `homepage` in `package.json` aligned with the site URL.

## Formatting

```sh
npm run format
```
