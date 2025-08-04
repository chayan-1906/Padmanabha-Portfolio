import {Section} from "@/types/section";

export interface SocialLink {
	name: string;
	url: string;
	icon: string;
}

export interface ContactSectionProps {
	sections: Section[];
	socialLinks: SocialLink[];
}

export interface ContactClientProps {
	contactSection: Section;
	socialLinks: SocialLink[];
}
