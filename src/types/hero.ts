export interface PersonalInfo {
	name: string;
	title: string;
	description: string;
	email: string;
	phone: string;
	location: string;
	subtitle: string;
	avatar: { url: string };
	resumeUrl: string;
}

interface SocialLink {
	name: string;
	url: string;
	icon: string;
}

export interface TechStack {
	name: string;
	order: number;
}

export interface HeroClientProps {
	personalInfo: PersonalInfo;
	socialLinks: SocialLink[];
	techStacks: TechStack[];
}
