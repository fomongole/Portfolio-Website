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

Place real images in `src/assets/images/`. `MediaSlot` and `ProjectGallery` automatically use Astro's image pipeline for local optimization and responsive `srcset` output when files exist; otherwise intentional placeholders remain visible.

Profile images:

| Image | Path | Suggested Shape |
| :---- | :--- | :-------------- |
| Fred profile portrait | `src/assets/images/profile/fred-omongole-profile.jpg` | 4:5 portrait, at least 1200x1500 |
| Fred workspace/context | `src/assets/images/profile/fred-workspace.jpg` | 5:4, at least 1500x1200 |
| Social preview replacement | `src/assets/images/social/engineer-fred-og.jpg` | 1200x630 |

Project galleries expect every product to have both web and mobile surfaces. The Work cards use the primary landscape image. Detail pages render four web screenshots in wide frames and four mobile screenshots in compact portrait frames without cropping.

| Project | Current primary fallback | Additional gallery folder |
| :------ | :----------------------- | :------------------------ |
| Rentora HouseLink | `src/assets/images/projects/rentora-houselink.jpg` | `src/assets/images/projects/rentora-houselink/` |
| Bllar / Bllar Manager | `src/assets/images/projects/bllar-bllar-manager.jpg` | `src/assets/images/projects/bllar-bllar-manager/` |
| Afrodoctor | `src/assets/images/projects/afrodoctor.jpg` | `src/assets/images/projects/afrodoctor/` |
| Educan | `src/assets/images/projects/educan.jpg` | `src/assets/images/projects/educan/` |
| Boomry | `src/assets/images/projects/boomry.jpg` | `src/assets/images/projects/boomry/` |
| WhatsApp Status Saver | `src/assets/images/projects/whatsapp-status-saver.jpg` | `src/assets/images/projects/whatsapp-status-saver/` |
| Screen Recorder | `src/assets/images/projects/screen-recorder.jpg` | `src/assets/images/projects/screen-recorder/` |

Required project screenshot naming:

```text
src/assets/images/projects/{project-slug}.jpg
src/assets/images/projects/{project-slug}/web-02.jpg
src/assets/images/projects/{project-slug}/web-03.jpg
src/assets/images/projects/{project-slug}/web-04.jpg
src/assets/images/projects/{project-slug}/mobile-01.jpg
src/assets/images/projects/{project-slug}/mobile-02.jpg
src/assets/images/projects/{project-slug}/mobile-03.jpg
src/assets/images/projects/{project-slug}/mobile-04.jpg
```

Use `.jpg`, `.png`, `.webp`, or `.avif`. The current data points to `.jpg`; if you choose another extension, update the relevant `assetPath` in `src/data/projects.ts`. Astro optimizes these automatically at build time through `astro:assets`, so you do not need a separate manual compression step before adding them.

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
