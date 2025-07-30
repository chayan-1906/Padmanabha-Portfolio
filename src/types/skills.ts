import React from "react";
import {Section} from "@/types/section";

export interface SkillItem {
	name: string;
	level: number;
	icon: React.ComponentType<{ className?: string }>;
}

export interface SkillCategory {
	title: string;
	color: string;
	icon: React.ComponentType<{ className?: string }>;
	items: SkillItem[];
}

export interface SkillsClientProps {
	skillsSection: Section;
	skills: Record<string, SkillCategory>;
}