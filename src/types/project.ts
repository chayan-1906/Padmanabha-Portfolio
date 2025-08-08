import {Section} from "@/types/section";
import {Collaborator} from "@/types/github";

export interface Project {
	title: string;
	description: string;
	gitHubUrl: string;
	logoUrl: string;
	actionUrl: string;
	actionType: string;
	language: string;
	technologies: string[];
	stargazers_count: number;
	collaborators: Collaborator[];
	featured: boolean;
	category: string;
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

export interface ProjectsClientProps {
	projectSection: Section;
	projects: Project[];
}
