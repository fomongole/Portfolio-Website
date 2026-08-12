// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// Deployment assumption: Vercel. Revisit if the hosting target changes.
export default defineConfig({
	site: 'https://engineerfred.dev',
	adapter: vercel(),
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
