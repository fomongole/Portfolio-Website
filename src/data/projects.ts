import type { Project } from '../lib/types';

export const placeholderProjectImage = {
	src: '/images/placeholders/project-frame.svg',
	alt: 'Reserved project screenshot placeholder',
	width: 1600,
	height: 1000,
};

export const projects: Project[] = [
	{
		title: 'Rentora HouseLink',
		slug: 'rentora-houselink',
		description:
			'A property rental and sale platform for Uganda — listings for rent or sale, including land plots, bookings, favorites, hostel-room listings, and area-based push notifications.',
		category: 'full-stack',
		categoryLabel: 'Full-stack · Web + mobile',
		platform: ['Web', 'Mobile'],
		technologies: ['NestJS', 'Next.js', 'Flutter', 'Backblaze B2', 'Cloudflare CDN', 'Hetzner VPS'],
		role: 'Tech Lead',
		images: [placeholderProjectImage],
		links: {
			live: 'https://rentorahouselink.com',
		},
		ownership: 'client',
		ownershipLabel: 'Client project · Deepcode Innovations',
		featured: true,
		type: 'production',
		notes: [
			'Fred built the NestJS API, Next.js admin dashboard, and Flutter mobile apps end-to-end.',
			'Media pipeline uses Backblaze B2 with Cloudflare CDN for photos and video.',
		],
	},
	{
		title: 'Bllar / Bllar Manager',
		slug: 'bllar-bllar-manager',
		description:
			'Two companion Flutter apps for a rental platform: Bllar for tenants and Bllar Manager for landlords.',
		category: 'mobile',
		categoryLabel: 'Mobile',
		platform: ['Android', 'iOS'],
		technologies: ['Flutter', '[PLAY_STORE_URL]', '[APP_STORE_URL]'],
		role: 'Mobile developer',
		images: [placeholderProjectImage],
		links: {
			playStore: '[PLAY_STORE_URL]',
			appStore: '[APP_STORE_URL]',
		},
		ownership: 'client',
		ownershipLabel: 'Client project · Deepcode Innovations',
		featured: true,
		type: 'production',
		notes: [
			'Bllar reached v1.4.0 on the App Store.',
			'Bllar Manager was in review as of the last update.',
		],
	},
	{
		title: 'Afrodoctor',
		slug: 'afrodoctor',
		description:
			'A digital health platform for Uganda connecting patients to vetted health workers for appointment booking, with a facility-side system for scheduling, patient pathways, and referrals between health facilities.',
		category: 'full-stack',
		categoryLabel: 'Full-stack · Web + mobile',
		platform: ['Web', 'Mobile'],
		technologies: ['Flutter', '[PLAY_STORE_URL]'],
		role: 'Full Stack Developer',
		images: [placeholderProjectImage],
		links: {
			playStore: '[PLAY_STORE_URL]',
		},
		ownership: 'employer',
		ownershipLabel: 'Employer project',
		featured: true,
		type: 'production',
		notes: [
			'Fred worked here as Full Stack Developer before the company closed.',
			'The Flutter mobile app is still live on Google Play even though the company has since closed.',
		],
	},
	{
		title: 'Educan',
		slug: 'educan',
		description:
			'A Ugandan e-learning app offering lessons, textbooks, revision notes, practice tests, live and recorded classes, teacher-learner interaction, a bookshop for materials, and career guidance.',
		category: 'mobile',
		categoryLabel: 'Mobile',
		platform: ['Android', 'iOS'],
		technologies: ['Flutter', 'Google Play', 'App Store'],
		role: 'Bug fixes and Play Store release prep',
		images: [placeholderProjectImage],
		links: {},
		ownership: 'client',
		ownershipLabel: 'Client project',
		featured: false,
		type: 'production',
		notes: [
			'Fixed a login loop, a crash on the competition/science-fair dashboard, and a build memory-error issue.',
		],
	},
	{
		title: 'Boomry',
		slug: 'boomry',
		description:
			'A music platform for creators, promoters, and listeners to discover, create, and share music — including artist, song, and playlist search, creator and listener accounts, and a live chat support widget.',
		category: 'full-stack',
		categoryLabel: 'Web + mobile',
		platform: ['Web', 'Mobile'],
		technologies: ['Flutter', '[CONFIRM_TO_ADD]'],
		role: 'Frontend developer on the web platform; also one of the developers on the Flutter mobile app version.',
		images: [placeholderProjectImage],
		links: {
			live: 'https://boomry.com',
		},
		ownership: 'team',
		ownershipLabel: 'Team project',
		featured: false,
		type: 'production',
		notes: ['Built alongside other developers.', 'Web frontend stack: [CONFIRM_TO_ADD]'],
	},
	{
		title: 'WhatsApp Status Saver',
		slug: 'whatsapp-status-saver',
		description:
			'A native Android app for viewing and saving WhatsApp status updates before they expire.',
		category: 'mobile',
		categoryLabel: 'Mobile · Personal, unpublished',
		platform: ['Android'],
		technologies: ['Kotlin'],
		role: 'Personal product engineering',
		images: [placeholderProjectImage],
		links: {},
		ownership: 'personal',
		ownershipLabel: 'Personal project',
		featured: false,
		type: 'prototype',
	},
	{
		title: 'Screen Recorder',
		slug: 'screen-recorder',
		description: '[CONFIRM_TO_ADD — no description on file yet]',
		category: 'mobile',
		categoryLabel: 'Mobile · Personal, unpublished',
		platform: ['Android'],
		technologies: ['[CONFIRM_TO_ADD]'],
		role: 'Personal product engineering',
		images: [placeholderProjectImage],
		links: {},
		ownership: 'personal',
		ownershipLabel: 'Personal project',
		featured: false,
		type: 'prototype',
	},
];

export const featuredProjects = projects.filter((project) => project.featured);
export const supportingProjects = projects.filter((project) => !project.featured);
