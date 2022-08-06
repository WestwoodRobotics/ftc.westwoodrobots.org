export const SITE = {
	title: 'Documentation',
	description: 'Your website description.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
	en: [
		{ text: '', header: true },
		{ text: 'Programming', header: true, link: 'programming/' },
		{ text: 'Coding Teleops', link: 'teleop' },
		{ text: 'GitHub', link: 'GitHub'},

		{ text: 'CAD', header: true, link: 'cad/' },
		{ text: 'OnShape Extensions', link: 'onshape-extensions' },
		{ text: 'Getting started with Autodesk', link: 'autodesk'},
		{ text: 'Advanced tips and tricks', link: 'tips-tricks'},

		{ text: 'Hardware', header: true, link: 'hardware/'},
		{ text: 'Getting to know your allen keys', link: 'allen-keys'},
		{ text: 'The Maker Space', link: 'maker-space'},

		{ text: 'Outreach', header: true, link: 'outreach/'},
		{ text: 'Top 10 outreach projects', link: 'top-10-outreach-projects'},
		
		{ text: 'Marketing', header: true, link: 'marketing/'},
		{ text: 'Help us find sponsors!', link: 'how-to-help-with-sponsors'},,
	],
};
