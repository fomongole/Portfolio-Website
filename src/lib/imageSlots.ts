import type { ImageMetadata } from 'astro';

const imageModules = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/**/*.{avif,jpg,jpeg,png,webp}', {
	eager: true,
});

export function getImageSlot(path?: string) {
	if (!path) return undefined;
	return imageModules[path]?.default;
}
