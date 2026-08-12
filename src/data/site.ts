export const site = {
	name: 'Engineer Fred',
	personName: 'Fred Omongole',
	role: 'Full-stack software engineer',
	location: 'Kampala, Uganda',
	experience: '4+ years',
	email: 'engfred88@gmail.com',
	phone: '0754348118',
	whatsapp: '256754348118',
	url: 'https://engineerfred-dev.vercel.app',
	description:
		'Fred Omongole (Engineer Fred) is a full-stack software engineer in Kampala, Uganda. He designs and builds complete software products across web, backend, and mobile systems.',
	ogImage: '/social/engineer-fred-og.svg',
};

export const navItems = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about/' },
	{ label: 'Work', href: '/work/' },
	{ label: 'Skills', href: '/skills/' },
	{ label: 'Contact', href: '/contact/' },
];

export const socials = [
	{ label: 'GitHub: fomongole', shortLabel: 'Web/backend GitHub', href: 'https://github.com/fomongole' },
	{ label: 'GitHub: EngFred', shortLabel: 'Mobile GitHub', href: 'https://github.com/EngFred' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/fred-omongole-a5943b2b0/' },
];

export const imageSlots = [
	{
		name: 'Fred profile portrait',
		path: 'src/assets/images/profile/fred-omongole-profile.jpg',
		usage: 'Homepage hero and About page portrait',
		shape: 'Portrait, 4:5 aspect ratio, minimum 1200x1500px',
	},
	{
		name: 'Fred workspace/context image',
		path: 'src/assets/images/profile/fred-workspace.jpg',
		usage: 'Homepage About teaser',
		shape: 'Landscape or environmental image, 5:4 aspect ratio, minimum 1500x1200px',
	},
	{
		name: 'Rentora HouseLink screenshot',
		path: 'src/assets/images/projects/rentora-houselink.jpg',
		usage: 'Rentora card and detail page',
		shape: 'Product screenshot, 16:10 or 16:9, minimum 1600px wide',
	},
	{
		name: 'Bllar / Bllar Manager screenshot',
		path: 'src/assets/images/projects/bllar-bllar-manager.jpg',
		usage: 'Bllar card and detail page',
		shape: 'App screenshots combined or device mockup, 16:10 or 16:9, minimum 1600px wide',
	},
	{
		name: 'Afrodoctor screenshot',
		path: 'src/assets/images/projects/afrodoctor.jpg',
		usage: 'Afrodoctor card and detail page',
		shape: 'Product screenshot, 16:10 or 16:9, minimum 1600px wide',
	},
	{
		name: 'Educan screenshot',
		path: 'src/assets/images/projects/educan.jpg',
		usage: 'Educan card and detail page',
		shape: 'App screenshots combined or product screenshot, minimum 1600px wide',
	},
	{
		name: 'Boomry screenshot',
		path: 'src/assets/images/projects/boomry.jpg',
		usage: 'Boomry card and detail page',
		shape: 'Web or mobile product screenshot, 16:10 or 16:9, minimum 1600px wide',
	},
	{
		name: 'WhatsApp Status Saver screenshot',
		path: 'src/assets/images/projects/whatsapp-status-saver.jpg',
		usage: 'WhatsApp Status Saver card and detail page',
		shape: 'Android app screenshot composition, minimum 1200px wide',
	},
	{
		name: 'Screen Recorder screenshot',
		path: 'src/assets/images/projects/screen-recorder.jpg',
		usage: 'Screen Recorder card and detail page',
		shape: 'Android app screenshot composition, minimum 1200px wide',
	},
	{
		name: 'Social preview image',
		path: 'src/assets/images/social/engineer-fred-og.jpg',
		usage: 'Open Graph / Twitter preview once replacing the current SVG placeholder',
		shape: '1200x630px',
	},
];

export const availability = {
	headline: 'Available for freelance product, web, mobile, backend, and app improvement work.',
	description:
		'Fred is a good fit when you need a working engineer to move an existing product forward, stabilize an app, build a focused product surface, or connect mobile, backend, and web pieces into one coherent system.',
};
