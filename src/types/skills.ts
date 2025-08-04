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

// For individual skill items without the full category object
export interface ProcessedSkillItem {
	name: string;
	level: number;
	icon: string;
}

// For grouped skills with items
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
