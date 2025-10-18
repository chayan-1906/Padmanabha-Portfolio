import {SkillItem} from "@/types/skills";

export interface PersonalInfo {
	name: string;
	title: string;
	description: string;
	email: string;
	phone: string;
	gitHub: string;
	location: string;
	subtitle: string;
	avatar: { url: string };
	resumeUrl: string;
}

export interface SocialLink {
	name: string;
	url: string;
	icon: string;
}

export interface TechStack {
	name: string;
	order: number;
}

export interface HeroSectionProps {
	personalInfo: PersonalInfo;
	skillsData: SkillItem[];
	socialLinks: SocialLink[];
}

export interface HeroClientProps {
	personalInfo: PersonalInfo;
	skillsData: SkillItem[];
	techStacks: TechStack[];
	socialLinks: SocialLink[];
}
