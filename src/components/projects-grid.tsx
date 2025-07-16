'use client';

import {motion, Variants} from 'framer-motion';
import {GitHubRepo} from '@/types/github';
import {ProjectCard} from '@/components/projects';
import {cn} from '@/lib/utils';

interface ProjectsGridProps {
	projects: GitHubRepo[];
}

function ProjectsGrid({projects}: ProjectsGridProps) {
	const containerVariants: Variants = {
		hidden: {opacity: 0},
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	return (
		<motion.div
			variants={containerVariants}
			initial={'hidden'}
			animate={'visible'}
			className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8')}
		>
			{projects.map((project, index) => (
				<ProjectCard key={project.id} project={project} index={index}/>
			))}
		</motion.div>
	);
}

export {ProjectsGrid};