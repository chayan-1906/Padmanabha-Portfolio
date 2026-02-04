import {Suspense} from "react";
import {Section} from "@/types/section";
import {ProjectsSectionProps} from "@/types/project";
import {ProjectsClient} from "@/components/projects/projects-client";

async function ProjectsSection({sections, featuredProjects}: ProjectsSectionProps) {
	const projectsSection = sections.find((section: Section) => section.name === 'Projects');

	if (!projectsSection || !featuredProjects.length) {
		return null;
	}

	return (
		<Suspense fallback={null}>
			<ProjectsClient projectSection={projectsSection} projects={featuredProjects}/>
		</Suspense>
	);
}

export {ProjectsSection};
