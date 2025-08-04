import {Section} from "@/types/section";
import {SocialLink} from "@/types/contact";
import {PersonalInfo} from "@/types/hero";

export interface FooterSectionProps {
	sections: Section[];
	socialLinks: SocialLink[];
	personalInfo: PersonalInfo;
}

export interface FooterClientProps {
	sections: Section[];
	socialLinks: SocialLink[];
	personalInfo: PersonalInfo;
}
