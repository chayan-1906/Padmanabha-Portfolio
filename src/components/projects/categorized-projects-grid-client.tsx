'use client';

import {motion, Variants} from "framer-motion";
import {cn} from "@/lib/utils";
import {ProjectCard} from "@/components/projects/project-card";
import {CategorizedProjectsGridProps, Project} from "@/types/project";

function CategorizedProjectsGridClient({projects}: CategorizedProjectsGridProps) {
	const containerVariants: Variants = {
		hidden: {opacity: 0},
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.2,
				staggerChildren: 0.3,
			},
		},
	};

	const sectionVariants: Variants = {
		hidden: {opacity: 0, y: 30},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut"
			}
		},
	};

	const gridVariants: Variants = {
		hidden: {opacity: 0},
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.1,
				staggerChildren: 0.1,
			},
		},
	};

	return (
		<motion.div variants={containerVariants} initial={'hidden'} animate={'visible'} className={cn('space-y-16')}>
			{Object.entries(projects).map(([key, category]) => {
				console.log('gradient:', category.gradient);

				return (
					<motion.section key={key} variants={sectionVariants} className={cn('space-y-6')}>
						{/* Category Header */}
						<div className={cn('text-center space-y-4')}>
							<div className={cn('flex items-center justify-center gap-3')}>
								<span className={cn('text-4xl')}>{category.icon}</span>
								{/* TODO: FIX */}
								{/*<h2 className={cn('text-3xl md:text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent', category.gradient)}>{category.title}</h2>*/}
								<h2 className={cn('text-3xl md:text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent', 'from-amber-600 via-yellow-300 to-orange-500')}>{category.title}</h2>
							</div>
							<div className={cn('flex items-center justify-center gap-4')}>
								<div className={cn('h-1 w-16 rounded-full bg-gradient-to-r', category.gradient)}/>
								<span className={cn('text-sm font-medium opacity-70')} style={{color: 'rgb(var(--color-foreground))'}}>
									{category.projects.length} {category.projects.length === 1 ? 'Project' : 'Projects'}
								</span>
								{/* TODO: FIX */}
								{/*<div className={cn('h-1 w-16 rounded-full bg-gradient-to-l', category.gradient)}/>*/}
								<div className={cn('h-1 w-16 rounded-full bg-gradient-to-l', 'from-sky-500 via-violet-500 to-purple-500')}/>
							</div>
						</div>

						{/* Projects Grid for this category */}
						<motion.div variants={gridVariants} className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6')}>
							{category.projects.map((project: Project, projectIndex: number) => (
								<ProjectCard key={`${category.title}-${project.title}`} project={project} index={projectIndex}/>
							))}
						</motion.div>
					</motion.section>
				);
			})}
		</motion.div>
	);
}

export {CategorizedProjectsGridClient};
