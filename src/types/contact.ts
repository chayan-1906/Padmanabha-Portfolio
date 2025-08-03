import {Section} from "@/types/section";

export interface SocialLink {
	name: string;
	url: string;
	icon: string;
}

export interface ContactClientProps {
	contactSection: Section;
	socialLinks: SocialLink[];
}
