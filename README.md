# Engineer Fred Portfolio

Premium personal portfolio foundation for Fred Omongole ("Engineer Fred"), built with Astro and Tailwind CSS.

## Current Scope

The site now includes the design system, architecture, site shell, homepage, About page, Skills page, Projects listing, project data model, placeholder media convention, and SEO scaffolding. Project detail pages, GitHub integration, and the full contact/freelance experience are intentionally reserved for later phases.

## Project Structure

```text
/
├── public/
│   ├── images/placeholders/
│   └── social/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── hero/
│   │   ├── home/
│   │   ├── layout/
│   │   └── ui/
│   ├── data/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   └── styles/
└── package.json
```

## Deployment

The current Astro config assumes Vercel via `@astrojs/vercel`. Revisit `astro.config.mjs` if the deployment target changes or once the production domain is confirmed.

## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

Per `AGENTS.md`, use Astro background mode for local development:

```sh
astro dev --background
```
