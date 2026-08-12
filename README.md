# Engineer Fred Portfolio

Premium personal portfolio foundation for Fred Omongole ("Engineer Fred"), built with Astro and Tailwind CSS.

## Current Scope

The site now includes the design system, architecture, site shell, homepage, About page, Skills page, Projects listing, project detail pages, GitHub presence links, Contact/Freelance experience, placeholder media convention, image optimization slots, and SEO scaffolding.

## Project Structure

```text
/
├── public/
│   ├── images/placeholders/
│   └── social/
├── src/
│   ├── assets/images/
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

## Image Slots

Place real images in `src/assets/images/` using these exact paths. The `MediaSlot` component will automatically use Astro's image pipeline for local optimization and responsive `srcset` output when the files exist; otherwise the intentional placeholders remain visible.

| Image | Path | Suggested Shape |
| :---- | :--- | :-------------- |
| Fred profile portrait | `src/assets/images/profile/fred-omongole-profile.jpg` | 4:5 portrait, at least 1200x1500 |
| Fred workspace/context | `src/assets/images/profile/fred-workspace.jpg` | 5:4, at least 1500x1200 |
| Rentora HouseLink | `src/assets/images/projects/rentora-houselink.jpg` | 16:10 or 16:9, at least 1600px wide |
| Bllar / Bllar Manager | `src/assets/images/projects/bllar-bllar-manager.jpg` | 16:10 or 16:9, at least 1600px wide |
| Afrodoctor | `src/assets/images/projects/afrodoctor.jpg` | 16:10 or 16:9, at least 1600px wide |
| Educan | `src/assets/images/projects/educan.jpg` | 16:10 or 16:9, at least 1600px wide |
| Boomry | `src/assets/images/projects/boomry.jpg` | 16:10 or 16:9, at least 1600px wide |
| WhatsApp Status Saver | `src/assets/images/projects/whatsapp-status-saver.jpg` | Android screenshot composition, at least 1200px wide |
| Screen Recorder | `src/assets/images/projects/screen-recorder.jpg` | Android screenshot composition, at least 1200px wide |
| Social preview replacement | `src/assets/images/social/engineer-fred-og.jpg` | 1200x630 |

Use `.jpg`, `.png`, `.webp`, or `.avif` for local optimized image slots. The current data points to `.jpg`; if you choose another extension, update the relevant `assetPath` in `src/data/projects.ts` or component usage.

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
