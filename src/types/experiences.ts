import {Section} from "@/types/section";
import {SkillCategory} from "@/types/skills";

export interface ExperienceRole {
	title: string;
	period: string;
	type: string;
	description: string;
	achievements: string;
}

export interface Experience {
	company: string;
	icon: string;
	logo: {
		url: string;
	};
	location: string;
	period: string;
	color: string;
	role: ExperienceRole[];
}

export interface ExperiencesClientProps {
	experienceSection: Section;
	skills: SkillCategory[];
	workExperiences: Experience[];
}
