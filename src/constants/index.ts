import {SiFirebase, SiFlutter, SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript} from "react-icons/si";
import {FaBriefcase, FaCalendarAlt, FaCode, FaDatabase, FaEnvelope, FaGitAlt, FaMapMarkerAlt, FaMobile, FaNodeJs, FaPhone, FaReact, FaTools} from "react-icons/fa";

export const PERSONAL_INFO = {
	name: 'Padmanabha Das',
	title: 'Full-Stack Developer',
	description: 'Frontend Developer with 3+ years of experience building scalable web and mobile applications. Specialized in Next.js 15, React.js 19, and Flutter with expertise in AI integration through Model Context Protocol (MCP) development.',
	subtitle: 'Specializing in Next.js 15, React.js 19, React Native, and Flutter with expertise in AI integration through Model Context Protocol (MCP) development.',
	subtitleConfig: {
		text: 'Specializing in {Next.js 15}, {React.js 19}, {React Native}, and {Flutter} with expertise in {AI integration} through Model Context Protocol (MCP) development.',
		colors: {
			'Next.js 15': 'text-blue-500',
			'React.js 19': 'text-purple-500',
			'React Native': 'text-orange-500',
			'Flutter': 'text-pink-500',
			'AI integration': 'text-green-500'
		},
	},
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

export const SECTIONS = {
	aboutSectionConfig: {
		name: 'About',
		title: 'About Me',
		subtitle: 'Full-stack developer focused on clean code over clever code. Build scalable applications solving real problems, not theoretical ones. Enjoy turning ideas into working products people actually use. Create tools I wish existed. Cricket enthusiast who finds debugging clarity during match breaks.',
	},
	skillsSectionConfig: {
		name: 'Skills',
		title: 'What I Work With',
		subtitle: 'A comprehensive toolkit for modern web and mobile development',
	},
	experienceSectionConfig: {
		name: 'Experience',
		title: 'Work Experience',
		subtitle: 'Building impactful solutions across diverse industries and technologies',
	},
	educationSectionConfig: {
		name: 'Education',
		title: 'Academic Background',
		subtitle: 'Building a strong foundation in computer science and engineering',
	},
	projectsSectionConfig: {
		name: 'Projects',
		title: 'Featured Projects',
		subtitle: 'Cutting-edge solutions in AI integration, full-stack development, and modern web technologies',
	},
	certificationsSectionConfig: {
		name: 'Certifications',
		title: 'Certifications',
		subtitle: 'Professional certifications and achievements',
	},
	contactSectionConfig: {
		name: 'Contact',
		title: 'Let\'s Work Together',
		subtitle: 'Ready to bring your ideas to life? I\'m always excited to work on new projects and collaborate with amazing people',
	},
};

export const TECH_STACKS = [
	'Next.js 15',
	'React.js 19',
	'React Native',
	'Flutter',
	'TypeScript',
	'Node.js',
	'AI Integration',
	'MCP Development',
];

export const SKILLS = {
	frontend: {
		title: 'Frontend',
		icon: FaReact,
		color: 'from-blue-500 to-cyan-500',
		items: [
			{name: 'Next.js 15', level: 75, icon: SiNextdotjs},
			{name: 'React.js 19', level: 80, icon: FaReact},
			{name: 'React Native', level: 60, icon: FaReact},
			{name: 'Expo', level: 60, icon: FaReact},
			{name: 'TypeScript', level: 80, icon: SiTypescript},
			{name: 'JavaScript', level: 85, icon: FaCode},
			{name: 'Tailwind CSS', level: 80, icon: SiTailwindcss},
			{name: 'Framer Motion', level: 80, icon: FaCode},
			{name: 'Aceternity UI', level: 60, icon: FaCode},
			{name: 'Shadcn UI', level: 85, icon: FaCode},
			{name: 'Tanstack Query', level: 60, icon: FaCode},
			{name: 'Context API', level: 80, icon: FaReact},
			{name: 'Redux', level: 40, icon: FaCode},
		],
	},
	mobile: {
		title: 'Mobile',
		icon: FaMobile,
		color: 'from-purple-500 to-pink-500',
		items: [
			{name: 'Flutter', level: 80, icon: SiFlutter},
			{name: 'React Native', level: 60, icon: FaReact},
			{name: 'Expo', level: 60, icon: FaReact},
			{name: 'Firebase', level: 80, icon: SiFirebase},
			{name: 'Android Development', level: 75, icon: FaMobile},
			{name: 'iOS Development', level: 60, icon: FaMobile},
			{name: 'Cross-platform', level: 85, icon: FaMobile},
		],
	},
	backend: {
		title: 'Backend',
		icon: FaNodeJs,
		color: 'from-green-500 to-emerald-500',
		items: [
			{name: 'Node.js', level: 50, icon: FaNodeJs},
			{name: 'Express.js', level: 50, icon: FaNodeJs},
			{name: 'REST APIs', level: 75, icon: FaCode},
			{name: 'GraphQL', level: 30, icon: FaCode},
			{name: 'Spring Boot', level: 30, icon: FaCode},
			{name: 'Java', level: 75, icon: FaCode},
			{name: 'MongoDB', level: 60, icon: SiMongodb},
			{name: 'MySQL', level: 55, icon: FaDatabase},
			{name: 'PostgreSQL', level: 40, icon: FaDatabase},
			{name: 'Prisma', level: 40, icon: FaDatabase},
			{name: 'Mongoose', level: 70, icon: SiMongodb},
		],
	},
	tools: {
		title: 'Tools',
		icon: FaTools,
		color: 'from-orange-500 to-red-500',
		items: [
			{name: 'Git', level: 90, icon: FaGitAlt},
			{name: 'GitHub', level: 90, icon: FaGitAlt},
			{name: 'Sentry', level: 75, icon: FaTools},
			{name: 'Vercel', level: 85, icon: FaTools},
			{name: 'Netlify', level: 80, icon: FaTools},
			{name: 'Selenium', level: 50, icon: FaTools},
			{name: 'Model Context Protocol (MCP)', level: 85, icon: FaTools},
			{name: 'JetBrains (WebStorm, IntelliJ IDEA, Android Studio)', level: 90, icon: FaTools},
			{name: 'Postman', level: 85, icon: FaTools},
			{name: 'Claude AI Integration', level: 80, icon: FaTools},
			{name: 'OpenAI APIs', level: 75, icon: FaTools},
			{name: 'AI-powered applications', level: 70, icon: FaTools},
		],
	},
};

export const WORK_EXPERIENCES = [
	{
		company: 'CouchConcerts',
		icon: '🎵',
		logo: 'https://files.couchconcerts.com/public_facing_assets/logos/CouchConcerts_Blue_Background_Square.png',
		location: 'Remote',
		period: 'Mar 2023 – Present',
		color: 'from-blue-500 to-cyan-500',
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
		icon: '🧪',
		logo: 'https://pbs.twimg.com/profile_images/1628147936214368258/AiYLTdSG_400x400.jpg',
		location: 'Remote',
		period: 'Mar 2023 – Present',
		color: 'from-purple-500 to-pink-500',
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
		icon: '🚀',
		location: 'Hyderabad, India',
		period: 'Sep 2021 – Feb 2023',
		color: 'from-green-500 to-emerald-500',
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
		icon: '⚡',
		logo: 'https://cdn.prod.website-files.com/6640cd28f51f13175e577c05/664e0093d9e2a82b937fbe15_acc0a1b6-efaa-5a44-80eb-7c325b3ade71.svg',
		location: 'Bhubaneswar, India',
		period: 'Jan 2021 – Sep 2021',
		color: 'from-orange-500 to-red-500',
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
		value: WORK_EXPERIENCES.length,
		color: 'text-blue-500',
		icon: FaBriefcase,
	},
	{
		label: 'Years Experience',
		value: `${Math.floor((new Date().getTime() - new Date('2022-07-01').getTime()) / (1000 * 60 * 60 * 24 * 365))}+`,
		color: 'text-purple-500',
		icon: FaCalendarAlt,
	},
	{
		label: 'Technologies Used',
		value: `${Math.floor(Object.values(SKILLS).flatMap(category => category.items).length / 5) * 5}+`,
		color: 'text-green-500',
		icon: FaCode,
	},
];

export const EDUCATIONS = [
	{
		degree: 'Bachelor of Technology in Computer Science Engineering',
		institution: 'Kalinga Institute of Industrial Technology',
		logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/KIIT_logo.svg/1200px-KIIT_logo.svg.png',
		location: 'Bhubaneshwar, India',
		period: 'July 2018 – May 2022',
		cgpa: '9.15/10',
		highlights: [
			'Graduated with Distinction',
			'Specialized in Software Engineering',
			'Active in coding competitions',
		],
	},
];

export const COLLABORATORS = {
	arka: {
		name: 'Arka Bhattacharya',
		github: 'https://github.com/arka-bhat/',
		linkedin: 'https://www.linkedin.com/in/arka-bhattacharya/',
	},
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

export const CONTACTS = [
	{
		icon: FaEnvelope,
		label: 'Email',
		value: PERSONAL_INFO.email,
		href: `mailto:${PERSONAL_INFO.email}`,
	},
	{
		icon: FaPhone,
		label: 'Phone',
		value: PERSONAL_INFO.phone,
		href: `tel:${PERSONAL_INFO.phone}`,
	},
	{
		icon: FaMapMarkerAlt,
		label: 'Location',
		value: PERSONAL_INFO.location,
		href: '#',
	},
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

// https://docs.google.com/spreadsheets/d/1Yvqssmy6c7LVbg7M_-dDbMQ-1_OOEJyo1N-DpTbV7dg
export const CONTACT_SUBMISSION_SPREADSHEET_ID = '1Yvqssmy6c7LVbg7M_-dDbMQ-1_OOEJyo1N-DpTbV7dg';
