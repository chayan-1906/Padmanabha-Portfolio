export const PERSONAL_INFO = {
	name: 'Padmanabha Das',
	title: 'Full-Stack Developer',
	description: 'Frontend Developer specializing in Next.js, React.js, React Native, and Flutter with expertise in AI integration through Model Context Protocol development.',
	subtitle: 'Specializing in Next.js 15, React.js 19, React Native, and Flutter with expertise in AI integration through Model Context Protocol (MCP) development.',
	email: 'padmanabhadas9647@gmail.com',
	phone: '+919647100133',
	github: 'https://github.com/chayan-1906',
	linkedin: 'https://www.linkedin.com/in/padmanabha-das-59bb2019b/',
	location: 'West Bengal, India',
	company: 'Remix Labs',
	bio: 'Flutter, React & Next.js Developer',
};

export const TECH_STACK = [
	'Next.js 15',
	'React.js 19',
	'React Native',
	'Flutter',
	'TypeScript',
	'MCP',
	'Node.js',
];

export const SOCIAL_LINKS = [
	{
		name: 'GitHub',
		url: PERSONAL_INFO.github,
		icon: 'Github',
	},
	{
		name: 'LinkedIn',
		url: PERSONAL_INFO.linkedin,
		icon: 'Linkedin',
	},
	{
		name: 'Email',
		url: `mailto:${PERSONAL_INFO.email}`,
		icon: 'Mail',
	},
	{
		name: 'Phone',
		url: `tel:${PERSONAL_INFO.phone}`,
		icon: 'Phone',
	},
];

export const COLLABORATORS = {
	arka: {
		name: 'Arka Bhattacharya',
		github: 'https://github.com/arka-bhat/',
		linkedin: 'https://www.linkedin.com/in/arka-bhattacharya/',
	},
};

export const FEATURED_PROJECTS = [
	{
		title: 'Google-Workspace-MCP',
		description: 'MCP-compliant AI agent server - Extend Claude with Google Drive, Sheets, Docs superpowers',
		tech: ['TypeScript', 'MCP', 'Google APIs'],
		github: 'https://github.com/chayan-1906/Google-Workspace-MCP',
		featured: true,
		private: true,
	},
	{
		title: 'GitHub-MCP',
		description: 'MCP-compliant AI agent server - Extend Claude with GitHub Repos, Issues, PRs superpowers',
		tech: ['TypeScript', 'MCP', 'GitHub API'],
		github: 'https://github.com/chayan-1906/GitHub-MCP',
		featured: true,
		private: true,
	},
	{
		title: 'FS-MCP',
		description: 'MCP-compliant AI agent server - Extend Claude with full local File System superpowers',
		tech: ['TypeScript', 'MCP', 'Node.js'],
		github: 'https://github.com/chayan-1906/FS-MCP',
		featured: true,
		private: true,
		collaborators: [COLLABORATORS.arka],
	},
	{
		title: 'Jira Clone',
		description: 'Next.js 15 Jira clone with Appwrite, Hono.js, Kanban boards, role-based access',
		tech: ['Next.js 15', 'Appwrite', 'Hono.js', 'TypeScript'],
		github: 'https://github.com/chayan-1906/Jira',
		demo: 'https://jira-alpha.vercel.app',
		featured: true,
		private: false,
	},
	{
		title: 'BusGo',
		description: 'Full-stack bus booking system with secure ticketing and modern mobile UI',
		tech: ['React Native', 'Node.js', 'TypeScript', 'TanStack Query'],
		github: 'https://github.com/chayan-1906/BusGo-Node.js',
		featured: true,
		private: false,
	},
	{
		title: 'DocMingle',
		description: 'Google Docs clone with real-time collaboration for millions of users',
		tech: ['Next.js', 'React.js', 'TypeScript', 'Real-time'],
		github: 'https://github.com/chayan-1906/DocMingle-Next.js',
		demo: 'https://doc-mingle.vercel.app',
		featured: true,
		private: false,
	},
];

export const WORK_EXPERIENCE = [
	{
		title: 'Freelancer - Flutter & Next.js Developer',
		company: 'CouchConcerts',
		location: 'Remote',
		period: 'Mar 2023 – Present',
		type: 'Freelance',
		description: [
			'Built cross-platform mobile app using Flutter (GetX, Firebase) connecting 300+ users',
			'Developed Next.js 15 web application with React.js 19 and responsive design',
			'Implemented chat functionality and event booking system with approval workflows',
		],
	},
	{
		title: 'Product Analyst',
		company: 'Remix Labs',
		location: 'Remote',
		period: 'Mar 2023 – Present',
		type: 'Contract',
		description: [
			'Developed rapid prototyping platform using proprietary Remix Studio',
			'Built MCP connectors for Claude AI (Anthropic) integration extending LLM capabilities',
			'Created reusable component library for streamlined development workflows',
		],
	},
	{
		title: 'Flutter Developer',
		company: 'Skywa Solutions',
		location: 'Hyderabad, India',
		period: 'Sept 2021 – Feb 2023',
		type: 'Full-time',
		description: [
			'Developed cross-platform mobile applications published on Play Store and App Store',
			'Built service optimization app for reducing customer wait times',
			'Created customizable widget library ensuring consistent design system',
		],
	},
];

export const EDUCATION = {
	degree: 'Bachelor of Technology in Computer Science Engineering',
	institution: 'Kalinga Institute of Industrial Technology',
	location: 'Bhubaneshwar, India',
	period: 'July 2018 – May 2022',
	cgpa: '9.15/10',
};

export const SKILLS = {
	frontend: ['Next.js 15', 'React.js 19', 'React Native', 'Expo', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Aceternity UI'],
	mobile: ['Flutter', 'React Native', 'Expo', 'Firebase', 'Android Development'],
	backend: ['Node.js', 'Express.js', 'REST APIs', 'Spring Boot', 'Java', 'MongoDB', 'MySQL', 'PostgreSQL'],
	tools: ['Git', 'GitHub', 'Sentry', 'Vercel', 'Selenium', 'Model Context Protocol (MCP)'],
};
