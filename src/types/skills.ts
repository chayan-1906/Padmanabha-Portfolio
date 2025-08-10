import {Section} from "@/types/section";

export interface SkillItem {
	name: string;
	level: number;
	icon: string;
	order: number;
	category: SkillCategory;
}

export interface SkillCategory {
	title: string;
	gradient: string;
	color: string;
	icon: string;
	order: number;
}

export interface ProcessedSkillItem {
	name: string;
	level: number;
	icon: string;
}

export interface GroupedSkillCategory {
	title: string;
	gradient: string;
	color: string;
	icon: string;
	order: number;
	items: ProcessedSkillItem[];
}

export interface SkillsSectionProps {
	sections: Section[];
	skillsData: SkillItem[];
}

export interface SkillsClientProps {
	skillsSection: Section;
	skills: Record<string, GroupedSkillCategory>;
}
