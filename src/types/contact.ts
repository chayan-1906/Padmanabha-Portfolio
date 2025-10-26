import {Section} from "@/types/section";
import {PersonalInfo} from "@/types/hero";
import {CONTACT_REASONS} from "@/constants";

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

export interface ContactReason {
	value: string;
	label: string;
}

export type ContactReasonValue = typeof CONTACT_REASONS[number]['value'];
