interface PersonalInfo {
	name: string;
	title: string;
	subtitle: string;
	avatar: { url: string };
	resumeUrl: string;
}

interface SocialLink {
	name: string;
	url: string;
	icon: string;
}

interface TechStack {
	name: string;
	order: number;
}

export interface HeroClientProps {
	personalInfo: PersonalInfo;
	socialLinks: SocialLink[];
	techStacks: TechStack[];
}
