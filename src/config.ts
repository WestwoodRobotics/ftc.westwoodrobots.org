export const SITE = {
	title: 'Westwood Robotics FTC',
	description: 'FTC Guidebook.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/wwrobologo.png?raw=true',
		alt:
			'The epic robot that is Westwood Robotics, the Westwood Robotics FTC team, and the Westwood Robotics FTC team logo.',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
export const GITHUB_EDIT_URL = `https://github.com/WestwoodRobotics/wwroboftc/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://discord.com/channels/689167175214301254/848353976659214366`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'wwroboftcindex',
  appId: 'XAT0LA8QPR',
  apiKey: 'cbaeb9ad9724d5334071cb65a196fadf',
}

export const SIDEBAR = {
	en: [
		{ text: 'Workshop', header: true, link: 'workshop/'},
		{ text:'Onshape Basics', link: 'onshape'},
		{ text: 'Design Basics', link: 'designbasics'},

		{ text: 'Programming', header: true, link: 'programming/' },
		{ text: 'Coding Teleops', link: 'teleop' },
		{ text: 'Java', link: 'java' },
		{ text: 'How to touch grass', link: 'touching-grass'},
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

		{ text: 'How to Contribute', header: true, link: 'contribute/' },
	],
};
