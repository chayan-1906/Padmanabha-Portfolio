import {Section} from "@/types/section";
import {Collaborator} from "@/types/github";

export interface ProjectCategory {
	title: string;
	icon: string;
	gradient: string;
	order: number;
}

export interface Project {
	title: string;
	description: string;
	gitHubUrl: string;
	logoUrl: string;
	actionUrl: string;
	actionType: string;
	language: string;
	topics: string[];
	stargazers_count: number;
	collaborators: Collaborator[];
	featured: boolean;
	projectCategory: ProjectCategory;
}

export interface GroupedProjectCategory {
	title: string;
	icon: string;
	gradient: string;
	order: number;
	projects: Project[];
}

export interface ProjectCardProps {
	project: Project;
	index: number;
}

export interface ProjectsGridProps {
	projects: Project[];
}

export interface ProjectsSectionProps {
	sections: Section[];
	featuredProjects: Project[];
}

export interface CategorySection {
	name: string;
	projects: Project[];
	gradient: string;
	icon: string;
}

export interface ProjectsClientProps {
	projectSection: Section;
	projects: Project[];
}

export interface CategorizedProjectsGridProps {
	projects: Record<string, GroupedProjectCategory>;
}
