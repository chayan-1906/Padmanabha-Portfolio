import {Section} from "@/types/section";
import {PersonalInfo} from "@/types/hero";

export interface SocialLink {
	name: string;
	url: string;
	icon: string;
}

export interface ContactSectionProps {
	sections: Section[];
	socialLinks: SocialLink[];
	personalInfo: PersonalInfo;
}

export interface ContactClientProps {
	contactSection: Section;
	socialLinks: SocialLink[];
	personalInfo: PersonalInfo;
}
