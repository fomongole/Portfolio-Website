import type { Project } from '../lib/types';

export const placeholderProjectImage = {
	src: '/images/placeholders/project-frame.svg',
	alt: 'Reserved project screenshot placeholder',
	width: 1600,
	height: 1000,
};

const projectImage = (
	assetPath: string,
	alt: string,
	kind: 'web' | 'mobile' | 'system' | 'brand',
	caption: string,
) => ({
	...placeholderProjectImage,
	assetPath,
	alt,
	kind,
	group: kind,
	aspect: kind === 'mobile' ? '9 / 19.5' : '16 / 10',
	caption,
});

const primaryWebImage = (slug: string, alt: string, caption = 'Web product overview') =>
	projectImage(`/src/assets/images/projects/${slug}.jpg`, alt, 'web', caption);

const webImage = (slug: string, file: string, alt: string, caption: string) =>
	projectImage(`/src/assets/images/projects/${slug}/${file}`, alt, 'web', caption);

const mobileImage = (slug: string, file: string, alt: string, caption: string) =>
	projectImage(`/src/assets/images/projects/${slug}/${file}`, alt, 'mobile', caption);

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
		images: [
			primaryWebImage('rentora-houselink', 'Rentora HouseLink web explore properties screen'),
			webImage('rentora-houselink', 'web-02.jpg', 'Rentora HouseLink web admin dashboard', 'Admin dashboard'),
			webImage('rentora-houselink', 'web-03.jpg', 'Rentora HouseLink web bookings workflow', 'Bookings workflow'),
			webImage('rentora-houselink', 'web-04.jpg', 'Rentora HouseLink web media management', 'Media management'),
			mobileImage('rentora-houselink', 'mobile-01.jpg', 'Rentora HouseLink mobile home screen', 'Mobile home'),
			mobileImage('rentora-houselink', 'mobile-02.jpg', 'Rentora HouseLink mobile property detail screen', 'Property detail'),
			mobileImage('rentora-houselink', 'mobile-03.jpg', 'Rentora HouseLink mobile booking screen', 'Booking flow'),
			mobileImage('rentora-houselink', 'mobile-04.jpg', 'Rentora HouseLink mobile saved properties screen', 'Saved properties'),
		],
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
		technologies: ['Flutter', 'iOS release workflow', 'Android release workflow'],
		role: 'Mobile developer',
		images: [
			primaryWebImage('bllar-bllar-manager', 'Bllar web product surface screenshot'),
			webImage('bllar-bllar-manager', 'web-02.jpg', 'Bllar web listing discovery screen', 'Listing discovery'),
			webImage('bllar-bllar-manager', 'web-03.jpg', 'Bllar manager web dashboard screen', 'Manager dashboard'),
			webImage('bllar-bllar-manager', 'web-04.jpg', 'Bllar web account workflow screen', 'Account workflow'),
			mobileImage('bllar-bllar-manager', 'mobile-01.jpg', 'Bllar tenant app home screen', 'Tenant home'),
			mobileImage('bllar-bllar-manager', 'mobile-02.jpg', 'Bllar tenant listing screen', 'Tenant listing'),
			mobileImage('bllar-bllar-manager', 'mobile-03.jpg', 'Bllar Manager landlord dashboard screen', 'Manager dashboard'),
			mobileImage('bllar-bllar-manager', 'mobile-04.jpg', 'Bllar Manager property management screen', 'Manager property'),
		],
		links: {
			live: 'https://bllar.com',
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
		technologies: ['Flutter', 'Appointment booking', 'Facility workflows'],
		role: 'Full Stack Developer',
		images: [
			primaryWebImage('afrodoctor', 'Afrodoctor web pricing and plans screen'),
			webImage('afrodoctor', 'web-02.jpg', 'Afrodoctor web facility dashboard screenshot', 'Facility dashboard'),
			webImage('afrodoctor', 'web-03.jpg', 'Afrodoctor web referrals dashboard screenshot', 'Referrals dashboard'),
			webImage('afrodoctor', 'web-04.jpg', 'Afrodoctor web appointment scheduling screen', 'Appointment scheduling'),
			mobileImage('afrodoctor', 'mobile-01.jpg', 'Afrodoctor mobile app home screen', 'Mobile home'),
			mobileImage('afrodoctor', 'mobile-02.jpg', 'Afrodoctor mobile booking screen', 'Appointment booking'),
			mobileImage('afrodoctor', 'mobile-03.jpg', 'Afrodoctor mobile health worker profile screen', 'Health worker profile'),
			mobileImage('afrodoctor', 'mobile-04.jpg', 'Afrodoctor mobile referrals screen', 'Referrals'),
		],
		links: {
			live: 'https://afrodoctor.org',
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
		images: [
			primaryWebImage('educan', 'Educan web learning platform screenshot'),
			webImage('educan', 'web-02.jpg', 'Educan web lessons dashboard', 'Lessons dashboard'),
			webImage('educan', 'web-03.jpg', 'Educan web practice tests screen', 'Practice tests'),
			webImage('educan', 'web-04.jpg', 'Educan web bookshop screen', 'Bookshop'),
			mobileImage('educan', 'mobile-01.jpg', 'Educan mobile app home screen', 'Mobile home'),
			mobileImage('educan', 'mobile-02.jpg', 'Educan lessons screen', 'Lessons'),
			mobileImage('educan', 'mobile-03.jpg', 'Educan practice tests screen', 'Practice tests'),
			mobileImage('educan', 'mobile-04.jpg', 'Educan career guidance screen', 'Career guidance'),
		],
		links: {
			live: 'https://educanug.org',
		},
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
		technologies: ['Flutter', 'Responsive web UI', 'Search flows', 'Live chat widget'],
		role: 'Frontend developer on the web platform; also one of the developers on the Flutter mobile app version.',
		images: [
			primaryWebImage('boomry', 'Boomry web product screenshot'),
			webImage('boomry', 'web-02.jpg', 'Boomry web search screen', 'Music search'),
			webImage('boomry', 'web-03.jpg', 'Boomry web creator account screen', 'Creator account'),
			webImage('boomry', 'web-04.jpg', 'Boomry web playlist screen', 'Playlist view'),
			mobileImage('boomry', 'mobile-01.jpg', 'Boomry mobile app home screen', 'Mobile home'),
			mobileImage('boomry', 'mobile-02.jpg', 'Boomry mobile music player screen', 'Mobile player'),
			mobileImage('boomry', 'mobile-03.jpg', 'Boomry mobile search screen', 'Mobile search'),
			mobileImage('boomry', 'mobile-04.jpg', 'Boomry mobile creator profile screen', 'Creator profile'),
		],
		links: {
			live: 'https://boomry.com',
		},
		ownership: 'team',
		ownershipLabel: 'Team project',
		featured: false,
		type: 'production',
		notes: ['Built alongside other developers across the web platform and Flutter mobile app.'],
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
		images: [
			mobileImage('whatsapp-status-saver', 'mobile-01.jpg', 'WhatsApp Status Saver status list screen', 'Status list'),
			mobileImage('whatsapp-status-saver', 'mobile-02.jpg', 'WhatsApp Status Saver preview screen', 'Status preview'),
			mobileImage('whatsapp-status-saver', 'mobile-03.jpg', 'WhatsApp Status Saver saved statuses screen', 'Saved statuses'),
			mobileImage('whatsapp-status-saver', 'mobile-04.jpg', 'WhatsApp Status Saver settings screen', 'Settings'),
		],
		links: {
			github: 'https://github.com/EngFred/WA_Status_Saver'
		},
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
		description:
			'A native Android screen recording utility with recording controls, audio settings, video quality options, and a recordings library.',
		intro:
			'Screen Recorder is a focused Android utility for capturing device screen recordings with configurable audio and video quality settings.',
		category: 'mobile',
		categoryLabel: 'Mobile · Personal, unpublished',
		platform: ['Android'],
		technologies: ['Kotlin', 'Android MediaProjection', 'Foreground service', 'MediaStore'],
		role: 'Personal product engineering',
		images: [
			mobileImage('screen-recorder', 'mobile-01.jpg', 'Screen Recorder mobile home screen', 'Home screen'),
			mobileImage('screen-recorder', 'mobile-02.jpg', 'Screen Recorder recording screen', 'Recording screen'),
			mobileImage('screen-recorder', 'mobile-03.jpg', 'Screen Recorder recordings library screen', 'Recordings library'),
			mobileImage('screen-recorder', 'mobile-04.jpg', 'Screen Recorder settings screen', 'Settings'),
		],
		links: {
			github: 'https://github.com/EngFred/Screen_Recorder'
		},
		ownership: 'personal',
		ownershipLabel: 'Personal project',
		featured: false,
		type: 'prototype',
		problem:
			'Users need a simple recorder that exposes practical controls like audio capture and video quality without burying the core recording action.',
		solution:
			'Fred built a native Android recorder surface around clear recording settings, a direct start action, and a saved-recordings workflow.',
		features: ['Screen recording', 'Audio source settings', 'Bitrate and quality controls', 'Recordings library'],
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
