import {FaBriefcase, FaCalendarAlt, FaCode} from "react-icons/fa";

export const PERSONAL_INFO = {
	name: 'Padmanabha Das',
	title: 'Full-Stack Developer',
	description: 'Frontend Developer with 3+ years of experience building scalable web and mobile applications. Specialized in Next.js 15, React.js 19, and Flutter with expertise in AI integration through Model Context Protocol (MCP) development.',
	subtitle: 'Specializing in Next.js 15, React.js 19, React Native, and Flutter with expertise in AI integration through Model Context Protocol (MCP) development.',
	aboutMe: 'Full-stack developer focused on clean code over clever code. Build scalable applications solving real problems, not theoretical ones. Enjoy turning ideas into working products people actually use. Create tools I wish existed. Cricket enthusiast who finds debugging clarity during match breaks.',
	email: 'padmanabhadas9647@gmail.com',
	phone: '+919647100133',
	github: 'https://github.com/chayan-1906',
	linkedin: 'https://www.linkedin.com/in/padmanabha-das-59bb2019b/',
	location: 'West Bengal, India',
	company: 'Remix Labs',
	bio: 'Flutter, React & Next.js Developer',
	avatar: '/images/profile-photo.jpg',
	resumeUrl: 'https://drive.google.com/file/d/1dV1-68JA95d_eWWwn0SqcS_V_G83BxHx/view',
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

export const SKILLS = {
	frontend: [
		{name: 'Next.js 15', level: 75},
		{name: 'React.js 19', level: 80},
		{name: 'React Native', level: 60},
		{name: 'Expo', level: 60},
		{name: 'TypeScript', level: 80},
		{name: 'JavaScript', level: 85},
		{name: 'Tailwind CSS', level: 80},
		{name: 'Framer Motion', level: 80},
		{name: 'Aceternity UI', level: 60},
		{name: 'Shadcn UI', level: 85},
		{name: 'Tanstack Query', level: 60},
		{name: 'Context API', level: 80},
		{name: 'Redux', level: 40},
	],
	mobile: [
		{name: 'Flutter', level: 80},
		{name: 'React Native', level: 60},
		{name: 'Expo', level: 60},
		{name: 'Firebase', level: 80},
		{name: 'Android Development', level: 75},
		{name: 'iOS Development', level: 60},
		{name: 'Cross-platform', level: 85},
	],
	backend: [
		{name: 'Node.js', level: 50},
		{name: 'Express.js', level: 50},
		{name: 'REST APIs', level: 75},
		{name: 'GraphQL', level: 30},
		{name: 'Spring Boot', level: 30},
		{name: 'Java', level: 75},
		{name: 'MongoDB', level: 60},
		{name: 'MySQL', level: 55},
		{name: 'PostgreSQL', level: 40},
		{name: 'Prisma', level: 40},
		{name: 'Mongoose', level: 70},
	],
	tools: [
		{name: 'Git', level: 90},
		{name: 'GitHub', level: 90},
		{name: 'Sentry', level: 75},
		{name: 'Vercel', level: 85},
		{name: 'Netlify', level: 80},
		{name: 'Selenium', level: 50},
		{name: 'Model Context Protocol (MCP)', level: 85},
		{name: 'JetBrains (WebStorm, IntelliJ IDEA, Android Studio)', level: 90},
		{name: 'Postman', level: 85},

		{name: 'Claude AI Integration', level: 80},
		{name: 'OpenAI APIs', level: 75},
		{name: 'AI-powered applications', level: 70},
	],
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
					'Worked on Deeplink implementation for several screens'
				],
				achievements: [
					'300+ active users',
					'Real-time chat system',
					'Event booking platform',
					'Deeplink implementation',
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
				period: 'Jan 2025 – Present',
				type: 'Contract',
				description: [
					'Built MCP connectors for Claude AI (Anthropic) integration extending LLM capabilities',
				],
				achievements: [
					'MCP integrations',
					'AI-powered tools',
				],
			},
			{
				title: 'Associate Software Engineer',
				period: 'Mar 2023 – Dec 2024',
				type: 'Full-time',
				description: [
					'Developed rapid prototyping platform using proprietary Remix Studio',
					'Created reusable component library for streamlined development workflows',
				],
				achievements: [
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
				period: 'Jun 2022 – Feb 2023',
				type: 'Full-time',
				description: [
					'Developed cross-platform mobile applications published on Play Store and App Store',
					'Created customizable widget library ensuring consistent design system',
					'Mentored junior interns in Flutter development and coding best practices',
				],
				achievements: [
					'Published apps on stores',
					'Widget library',
					'Mentored junior interns',
				],
			},
			{
				title: 'Flutter Developer',
				period: 'Sep 2021 – May 2022',
				type: 'Internship',
				description: [
					'Developed Flutter applications and designed better UI for mobile apps',
					'Built service optimization app for reducing customer wait times',
				],
				achievements: [
					'Flutter expertise',
					'UI design skills',
					'Reduced wait times',
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

export const EXPERIENCE_SUMMARY = [
	{
		label: 'Companies Worked',
		value: WORK_EXPERIENCE.length,
		color: 'text-blue-500',
		icon: FaBriefcase,
	},
	{
		label: 'Years Experience',
		value: '3+',
		color: 'text-purple-500',
		icon: FaCalendarAlt,
	},
	{
		label: 'Technologies Used',
		value: `${Math.floor(Object.values(SKILLS).flat().length / 5) * 5}+`,
		color: 'text-green-500',
		icon: FaCode,
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

export const CERTIFICATIONS = [
	{
		name: 'Skywa Internship Certificate',
		issuer: 'Skywa Solutions',
		date: '2022',
		credentialId: 'SKYWA-INTERN-2022',
		url: 'https://drive.google.com/file/d/1udP-ehFX7qLiXXNsy-AOHnjaEolnrlV_/view',
	},
	{
		name: 'Android App Development Certificate',
		issuer: 'UDEMY',
		date: '2021',
		credentialId: 'UDEMY-ANDROID-2021',
		url: 'https://drive.google.com/file/d/1jptIEUAk-OQ8v9mbXf79NBFPXC7VMIkx/view',
	},
	{
		name: 'DSA Course Certificate',
		issuer: 'Katallyst',
		date: '2021',
		credentialId: 'DS-COURSE-2021',
		url: 'https://drive.google.com/file/d/1UwTsM5oD8LdkzLFqLX4XmGD9qj7J8jRi/view',
	},
];

// https://docs.google.com/spreadsheets/d/1Yvqssmy6c7LVbg7M_-dDbMQ-1_OOEJyo1N-DpTbV7dg
export const CONTACT_SUBMISSION_SPREADSHEET_ID = '1Yvqssmy6c7LVbg7M_-dDbMQ-1_OOEJyo1N-DpTbV7dg';
