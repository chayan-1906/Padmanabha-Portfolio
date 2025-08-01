import {Section} from "@/types/section";

export interface SkillItem {
	name: string;
	level: number;
	icon: string;
}

export interface SkillCategory {
	title: string;
	color: string;
	icon: string;
	items: SkillItem[];
}

export interface SkillsClientProps {
	skillsSection: Section;
	skills: Record<string, SkillCategory>;
}
