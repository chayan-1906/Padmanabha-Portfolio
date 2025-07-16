export const PERSONAL_INFO = {
	name: 'Padmanabha Das',
	title: 'Full-Stack Developer',
	description: 'Frontend Developer with 3+ years of experience building scalable web and mobile applications. Specialized in Next.js 15, React.js 19, and Flutter with expertise in AI integration through Model Context Protocol (MCP) development.',
	subtitle: 'Specializing in Next.js 15, React.js 19, React Native, and Flutter with expertise in AI integration through Model Context Protocol (MCP) development.',
	email: 'padmanabhadas9647@gmail.com',
	phone: '+919647100133',
	github: 'https://github.com/chayan-1906',
	linkedin: 'https://www.linkedin.com/in/padmanabha-das-59bb2019b/',
	location: 'West Bengal, India',
	company: 'Remix Labs',
	bio: 'Flutter, React & Next.js Developer',
	avatar: '/images/profile-photo.jpg',
	resumeUrl: '#', // Will be added later
};

export const TECH_STACK = [
	'Next.js 15',
	'React.js 19',
	'React Native',
	'Flutter',
	'TypeScript',
	'Node.js',
	'AI Integration',
	'MCP Development',
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

export const WORK_EXPERIENCE = [
	{
		company: 'CouchConcerts',
		logo: 'https://files.couchconcerts.com/public_facing_assets/logos/CouchConcerts_Blue_Background_Square.png',
		location: 'Remote',
		period: 'Mar 2023 – Present',
		roles: [
			{
				title: 'Freelancer - Flutter & Next.js Developer',
				period: 'Mar 2023 – Present',
				type: 'Freelance',
				description: [
					'Built cross-platform mobile app using Flutter (GetX, Firebase) connecting 300+ users',
					'Developed Next.js 15 web application with React.js 19 and responsive design',
					'Implemented chat functionality and event booking system with approval workflows',
				],
				achievements: [
					'300+ active users',
					'Real-time chat system',
					'Event booking platform',
				],
			},
		],
	},
	{
		company: 'Remix Labs',
		logo: 'https://pbs.twimg.com/profile_images/1628147936214368258/AiYLTdSG_400x400.jpg',
		location: 'Remote',
		period: 'Mar 2023 – Present',
		roles: [
			{
				title: 'Product Analyst',
				period: 'Mar 2023 – Present',
				type: 'Contract',
				description: [
					'Developed rapid prototyping platform using proprietary Remix Studio',
					'Built MCP connectors for Claude AI (Anthropic) integration extending LLM capabilities',
					'Created reusable component library for streamlined development workflows',
				],
				achievements: [
					'MCP integrations',
					'AI-powered tools',
					'Component library',
				],
			},
		],
	},
	{
		company: 'Skywa Solutions',
		location: 'Hyderabad, India',
		period: 'Sep 2021 – Feb 2023',
		roles: [
			{
				title: 'Associate Software Engineer',
				period: 'May 2022 – Feb 2023',
				type: 'Full-time',
				description: [
					'Developed cross-platform mobile applications published on Play Store and App Store',
					'Built service optimization app for reducing customer wait times',
					'Created customizable widget library ensuring consistent design system',
				],
				achievements: [
					'Published apps on stores',
					'Reduced wait times',
					'Widget library',
				],
			},
			{
				title: 'Flutter Developer',
				period: 'Sep 2021 – May 2022',
				type: 'Internship',
				description: [
					'Developed Flutter applications and designed better UI for mobile apps',
					'Built service optimization app for reducing customer wait times',
					'Created customizable widget library ensuring consistent design system',
				],
				achievements: [
					'Flutter expertise',
					'UI design skills',
					'Service optimization',
				],
			},
		],
	},
	{
		company: 'HighRadius',
		logo: 'https://cdn.prod.website-files.com/6640cd28f51f13175e577c05/664e0093d9e2a82b937fbe15_acc0a1b6-efaa-5a44-80eb-7c325b3ade71.svg',
		location: 'Bhubaneswar, India',
		period: 'Jan 2021 – Sep 2021',
		roles: [
			{
				title: 'Automation Engineer',
				period: 'Jun 2021 – Sep 2021',
				type: 'Internship',
				description: [
					'Created full-stack web-based project identifying user requirements and designing better UI/UX',
					'Built machine learning models for automated invoice processing',
					'Developed responsive web interfaces with modern frameworks',
				],
				achievements: [
					'ML model development',
					'Full-stack development',
					'UI/UX design',
				],
			},
			{
				title: 'Winter Intern',
				period: 'Jan 2021 – Mar 2021',
				type: 'Internship',
				description: [
					'Participated in winter training program for web development and machine learning',
					'Worked on invoice processing automation using ML algorithms',
					'Contributed to team projects and learned industry best practices',
				],
				achievements: [
					'Web development training',
					'ML automation',
					'Team collaboration',
				],
			},
		],
	},
];

export const EDUCATION = {
	degree: 'Bachelor of Technology in Computer Science Engineering',
	institution: 'Kalinga Institute of Industrial Technology',
	location: 'Bhubaneshwar, India',
	period: 'July 2018 – May 2022',
	cgpa: '9.15/10',
	highlights: [
		'Graduated with Distinction',
		'Specialized in Software Engineering',
		'Active in coding competitions',
	],
};

export const SKILLS = {
	frontend: [
		'Next.js 15',
		'React.js 19',
		'React Native',
		'Expo',
		'TypeScript',
		'JavaScript',
		'Tailwind CSS',
		'Framer Motion',
		'Aceternity UI',
		'Shadcn UI',
	],
	mobile: [
		'Flutter',
		'React Native',
		'Expo',
		'Firebase',
		'Android Development',
		'iOS Development',
		'Cross-platform',
	],
	backend: [
		'Node.js',
		'Express.js',
		'REST APIs',
		'GraphQL',
		'Spring Boot',
		'Java',
		'MongoDB',
		'MySQL',
		'PostgreSQL',
		'Prisma',
		'Mongoose',
	],
	tools: [
		'Git',
		'GitHub',
		'Sentry',
		'Vercel',
		'Netlify',
		'Selenium',
		'Model Context Protocol (MCP)',
		'Docker',
		'Postman',
		'VS Code',
	],
	ai: [
		'Model Context Protocol (MCP)',
		'Claude AI Integration',
		'OpenAI APIs',
		'AI-powered applications',
		'Machine Learning basics',
	],
};

export const CERTIFICATIONS = [
	{
		name: 'React Developer Certification',
		issuer: 'Meta',
		date: '2023',
		credentialId: 'META-REACT-2023',
	},
	{
		name: 'Flutter Development',
		issuer: 'Google',
		date: '2022',
		credentialId: 'GOOGLE-FLUTTER-2022',
	},
	{
		name: 'Node.js Application Development',
		issuer: 'IBM',
		date: '2022',
		credentialId: 'IBM-NODE-2022',
	},
];

export const ACHIEVEMENTS = [
	{
		title: 'Top Contributor',
		description: 'Recognized as top contributor in open-source Flutter packages',
		year: '2023',
		icon: '🏆',
	},
	{
		title: 'Hackathon Winner',
		description: 'Won first place in college hackathon for innovative web app',
		year: '2021',
		icon: '🥇',
	},
	{
		title: 'Academic Excellence',
		description: 'Graduated with 9.15 CGPA in Computer Science Engineering',
		year: '2022',
		icon: '🎓',
	},
];

export const STATS = {
	yearsExperience: 3,
	projectsCompleted: 50,
	happyClients: 15,
	technologies: 25,
	githubRepos: 100,
	codeCommits: 2500,
};
