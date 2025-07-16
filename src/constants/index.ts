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

// Custom demo links for projects that don't have homepage
export const CUSTOM_DEMO_LINKS = {
	'School-Management-Next.js': {
		type: 'website',
		url: 'https://school-management-next.vercel.app', // Replace with actual URL
		label: 'Live Demo',
		icon: 'ExternalLink',
	},
	'Busgo-React-Native': {
		type: 'apk',
		url: 'https://github.com/chayan-1906/Busgo-React-Native/releases/download/v1.0.0/busgo-app.apk', // Replace with actual APK link
		label: 'Download APK',
		icon: 'Download',
	},
	'GitHub-MCP': {
		type: 'executable',
		url: 'https://github.com/chayan-1906/GitHub-MCP/releases/download/v1.0.0/github-mcp.exe', // Replace with actual executable link
		label: 'Download',
		icon: 'Download',
	},
	'FS-MCP': {
		type: 'executable',
		url: 'https://github.com/chayan-1906/FS-MCP/releases/download/v1.0.0/fs-mcp.exe', // Replace with actual executable link
		label: 'Download',
		icon: 'Download',
	},
	'Google-Workspace-MCP': {
		type: 'executable',
		url: 'https://github.com/chayan-1906/Google-Workspace-MCP/releases/download/v1.0.0/workspace-mcp.exe', // Replace with actual executable link
		label: 'Download',
		icon: 'Download',
	},
	'Foodies-React-Native': {
		type: 'apk',
		url: 'https://github.com/chayan-1906/Foodies-React-Native/releases/download/v1.0.0/foodies-app.apk', // Replace with actual APK link
		label: 'Download APK',
		icon: 'Download',
	},
	'ai-radio': {
		type: 'apk',
		url: 'https://github.com/chayan-1906/ai-radio/releases/download/v1.0.0/ai-radio-app.apk', // Replace with actual APK link
		label: 'Download APK',
		icon: 'Download',
	},
	// Add more repositories as needed
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
		logo: 'https://remixlabs.com/images/web/logo_small.png',
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

export const TESTIMONIALS = [
	{
		name: 'John Smith',
		position: 'CTO, CouchConcerts',
		content: 'Padmanabha delivered exceptional work on our Flutter app. His expertise in cross-platform development and attention to detail resulted in a seamless user experience.',
		rating: 5,
		image: '/images/testimonial-1.jpg',
	},
	{
		name: 'Sarah Johnson',
		position: 'Product Manager, Remix Labs',
		content: 'Working with Padmanabha on MCP integrations was fantastic. He has deep understanding of AI technologies and delivered innovative solutions.',
		rating: 5,
		image: '/images/testimonial-2.jpg',
	},
	{
		name: 'Mike Chen',
		position: 'Lead Developer, Skywa Solutions',
		content: 'Padmanabha is a skilled developer who consistently delivers high-quality code. His Flutter expertise significantly improved our mobile app development process.',
		rating: 5,
		image: '/images/testimonial-3.jpg',
	},
];

export const SERVICES = [
	{
		title: 'Web Development',
		description: 'Modern web applications using Next.js, React, and TypeScript',
		icon: '🌐',
		features: [
			'Next.js 15 Applications',
			'React.js 19 Components',
			'TypeScript Development',
			'Responsive Design',
			'Performance Optimization',
		],
	},
	{
		title: 'Mobile Development',
		description: 'Cross-platform mobile apps with Flutter and React Native',
		icon: '📱',
		features: [
			'Flutter Applications',
			'React Native Apps',
			'Cross-platform Solutions',
			'App Store Deployment',
			'Firebase Integration',
		],
	},
	{
		title: 'Backend Development',
		description: 'Scalable backend systems with Node.js and modern databases',
		icon: '⚙️',
		features: [
			'Node.js APIs',
			'Express.js Servers',
			'Database Design',
			'Authentication Systems',
			'Cloud Deployment',
		],
	},
	{
		title: 'AI Integration',
		description: 'AI-powered applications with Model Context Protocol',
		icon: '🤖',
		features: [
			'MCP Development',
			'Claude AI Integration',
			'Custom AI Tools',
			'LLM Extensions',
			'Intelligent Automation',
		],
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

// Type definitions for demo links
export interface DemoLink {
	type: 'website' | 'apk' | 'executable' | 'github';
	url: string;
	label: string;
	icon: 'ExternalLink' | 'Download' | 'Github';
}