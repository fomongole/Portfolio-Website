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
		intro:
			'Rentora HouseLink brings the rental and property-sale journey into one product surface for Ugandan renters, buyers, landlords, and property operators.',
		category: 'full-stack',
		categoryLabel: 'Full-stack · Web + mobile',
		platform: ['Web', 'Mobile'],
		technologies: ['NestJS', 'Next.js', 'Flutter', 'Backblaze B2', 'Cloudflare CDN', 'Hetzner VPS'],
		role: 'Tech Lead',
		images: [{ ...placeholderProjectImage, alt: 'Rentora HouseLink product screenshot', assetPath: '/src/assets/images/projects/rentora-houselink.jpg' }],
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
		problem:
			'Property discovery needs more than a listing grid: users need to distinguish rent, sale, land, hostel rooms, saved options, and bookings while operators need a reliable way to manage media-heavy inventory.',
		solution:
			'Fred led the build across the API, admin dashboard, and mobile apps, keeping the property workflow connected from content management to mobile discovery.',
		features: [
			'Rent and sale listings, including land plots',
			'Bookings and favorites',
			'Hostel-room listings',
			'Area-based push notifications',
			'Photo and video media delivery',
		],
		architecture: [
			'NestJS API deployed on a Hetzner VPS',
			'Next.js admin dashboard for operators',
			'Flutter mobile apps for the customer-facing experience',
			'Backblaze B2 storage with Cloudflare CDN for photos and video',
		],
	},
	{
		title: 'Bllar / Bllar Manager',
		slug: 'bllar-bllar-manager',
		description:
			'Two companion Flutter apps for a rental platform: Bllar for tenants and Bllar Manager for landlords.',
		intro:
			'Bllar splits the rental experience into tenant and landlord mobile apps so each audience gets a focused workflow.',
		category: 'mobile',
		categoryLabel: 'Mobile',
		platform: ['Android', 'iOS'],
		technologies: ['Flutter', '[PLAY_STORE_URL]', '[APP_STORE_URL]'],
		role: 'Mobile developer',
		images: [{ ...placeholderProjectImage, alt: 'Bllar and Bllar Manager app screenshots', assetPath: '/src/assets/images/projects/bllar-bllar-manager.jpg' }],
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
		problem:
			'Tenants and landlords need different rental workflows, and forcing both into one app can make each side less direct.',
		solution:
			'Fred worked on companion Flutter apps that separate tenant and landlord responsibilities while keeping the product family aligned.',
		features: ['Tenant app: Bllar', 'Landlord app: Bllar Manager', 'iOS release progress tracked through App Store review'],
	},
	{
		title: 'Afrodoctor',
		slug: 'afrodoctor',
		description:
			'A digital health platform for Uganda connecting patients to vetted health workers for appointment booking, with a facility-side system for scheduling, patient pathways, and referrals between health facilities.',
		intro:
			'Afrodoctor connected patient booking with facility-side scheduling and referral workflows for healthcare delivery in Uganda.',
		category: 'full-stack',
		categoryLabel: 'Full-stack · Web + mobile',
		platform: ['Web', 'Mobile'],
		technologies: ['Flutter', '[PLAY_STORE_URL]'],
		role: 'Full Stack Developer',
		images: [{ ...placeholderProjectImage, alt: 'Afrodoctor product screenshot', assetPath: '/src/assets/images/projects/afrodoctor.jpg' }],
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
		problem:
			'Patients need access to vetted health workers, while facilities need scheduling and referral flows that support patient movement between services.',
		solution:
			'Fred contributed as a Full Stack Developer across the digital health product before the company closed.',
		features: [
			'Appointment booking with vetted health workers',
			'Facility-side scheduling',
			'Patient pathways',
			'Referrals between health facilities',
		],
	},
	{
		title: 'Educan',
		slug: 'educan',
		description:
			'A Ugandan e-learning app offering lessons, textbooks, revision notes, practice tests, live and recorded classes, teacher-learner interaction, a bookshop for materials, and career guidance.',
		intro:
			'Educan is a broad e-learning app for Ugandan learners, teachers, and education content workflows.',
		category: 'mobile',
		categoryLabel: 'Mobile',
		platform: ['Android', 'iOS'],
		technologies: ['Flutter', 'Google Play', 'App Store'],
		role: 'Bug fixes and Play Store release prep',
		images: [{ ...placeholderProjectImage, alt: 'Educan app screenshot', assetPath: '/src/assets/images/projects/educan.jpg' }],
		links: {},
		ownership: 'client',
		ownershipLabel: 'Client project',
		featured: false,
		type: 'production',
		notes: [
			'Fixed a login loop, a crash on the competition/science-fair dashboard, and a build memory-error issue.',
		],
		problem:
			'The app needed targeted stability fixes and release preparation before Play Store delivery.',
		solution:
			'Fred handled bug fixes and release prep, focusing on login reliability, dashboard crash handling, and build stability.',
		features: [
			'Lessons, textbooks, and revision notes',
			'Practice tests',
			'Live and recorded classes',
			'Teacher-learner interaction',
			'Bookshop and career guidance',
		],
	},
	{
		title: 'Boomry',
		slug: 'boomry',
		description:
			'A music platform for creators, promoters, and listeners to discover, create, and share music — including artist, song, and playlist search, creator and listener accounts, and a live chat support widget.',
		intro:
			'Boomry supports music discovery and creator/listener account flows across web and mobile product surfaces.',
		category: 'full-stack',
		categoryLabel: 'Web + mobile',
		platform: ['Web', 'Mobile'],
		technologies: ['Flutter', '[CONFIRM_TO_ADD]'],
		role: 'Frontend developer on the web platform; also one of the developers on the Flutter mobile app version.',
		images: [{ ...placeholderProjectImage, alt: 'Boomry product screenshot', assetPath: '/src/assets/images/projects/boomry.jpg' }],
		links: {
			live: 'https://boomry.com',
		},
		ownership: 'team',
		ownershipLabel: 'Team project',
		featured: false,
		type: 'production',
		notes: ['Built alongside other developers.', 'Web frontend stack: [CONFIRM_TO_ADD]'],
		problem:
			'Music platforms need search, account flows, and support tools that feel coherent for creators, promoters, and listeners.',
		solution:
			'Fred worked as a frontend developer on the web platform and also contributed to the Flutter mobile app version alongside other developers.',
		features: [
			'Artist, song, and playlist search',
			'Creator and listener accounts',
			'Sign up and login flows',
			'Live chat support widget',
		],
	},
	{
		title: 'WhatsApp Status Saver',
		slug: 'whatsapp-status-saver',
		description:
			'A native Android app for viewing and saving WhatsApp status updates before they expire.',
		intro:
			'A personal native Android utility for saving WhatsApp status updates before they disappear.',
		category: 'mobile',
		categoryLabel: 'Mobile · Personal, unpublished',
		platform: ['Android'],
		technologies: ['Kotlin'],
		role: 'Personal product engineering',
		images: [{ ...placeholderProjectImage, alt: 'WhatsApp Status Saver app screenshot', assetPath: '/src/assets/images/projects/whatsapp-status-saver.jpg' }],
		links: {},
		ownership: 'personal',
		ownershipLabel: 'Personal project',
		featured: false,
		type: 'prototype',
		problem:
			'WhatsApp statuses expire quickly, and users may want a simple way to view and save them locally.',
		solution:
			'Fred built a native Kotlin Android app focused on that single utility workflow.',
		features: ['View WhatsApp status updates', 'Save statuses before they expire'],
	},
	{
		title: 'Screen Recorder',
		slug: 'screen-recorder',
		description: '[CONFIRM_TO_ADD — no description on file yet]',
		intro: '[CONFIRM_TO_ADD — no description on file yet]',
		category: 'mobile',
		categoryLabel: 'Mobile · Personal, unpublished',
		platform: ['Android'],
		technologies: ['[CONFIRM_TO_ADD]'],
		role: 'Personal product engineering',
		images: [{ ...placeholderProjectImage, alt: 'Screen Recorder app screenshot', assetPath: '/src/assets/images/projects/screen-recorder.jpg' }],
		links: {},
		ownership: 'personal',
		ownershipLabel: 'Personal project',
		featured: false,
		type: 'prototype',
		problem: '[CONFIRM_TO_ADD — no description on file yet]',
	},
];

export const featuredProjects = projects.filter((project) => project.featured);
export const supportingProjects = projects.filter((project) => !project.featured);

export function getProjectBySlug(slug: string) {
	return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(project: Project, limit = 3) {
	return projects
		.filter((candidate) => candidate.slug !== project.slug)
		.filter(
			(candidate) =>
				candidate.category === project.category ||
				candidate.ownership === project.ownership ||
				candidate.platform.some((platform) => project.platform.includes(platform)),
		)
		.slice(0, limit);
}
