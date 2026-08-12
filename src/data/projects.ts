import type { Project } from '../lib/types';

export const placeholderProjectImage = {
	src: '/images/placeholders/project-frame.svg',
	alt: 'Reserved project screenshot placeholder',
	width: 1600,
	height: 1000,
};

export const projects: Project[] = [
	{
		title: 'Selected product build',
		slug: 'selected-product-build',
		description:
			'A reserved featured slot for a complete web or mobile product. Real case-study details arrive in Phase 2.',
		category: 'full-stack',
		platform: ['Web', 'Mobile'],
		technologies: ['Astro', 'React', 'Node.js', 'PostgreSQL'],
		role: 'Product engineering, frontend architecture, backend implementation',
		images: [placeholderProjectImage],
		links: {},
		ownership: 'client',
		featured: true,
		year: 2026,
		type: 'case-study',
	},
	{
		title: 'Mobile systems slot',
		slug: 'mobile-systems-slot',
		description:
			'A reserved slot for Flutter or Kotlin work, keeping the final screenshot ratio and metadata model ready.',
		category: 'mobile',
		platform: ['Android', 'iOS'],
		technologies: ['Flutter', 'Kotlin', 'Jetpack Compose'],
		role: 'Mobile engineering',
		images: [placeholderProjectImage],
		links: {},
		ownership: 'personal',
		featured: true,
		year: 2026,
		type: 'prototype',
	},
];

export const featuredProjects = projects.filter((project) => project.featured);
