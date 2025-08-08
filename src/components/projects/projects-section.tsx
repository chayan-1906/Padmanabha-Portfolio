import {Section} from "@/types/section";
import {ProjectsSectionProps} from "@/types/project";
import {ProjectsClient} from "@/components/projects/projects-client";

async function ProjectsSection({sections, featuredProjects}: ProjectsSectionProps) {
	const projectsSection = sections.find((section: Section) => section.name === 'Projects');

	if (!projectsSection || !featuredProjects.length) {
		return null;
	}

	return (
		<ProjectsClient projectSection={projectsSection} projects={featuredProjects}/>
	);
}

export {ProjectsSection};
