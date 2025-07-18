'use client';

import {motion, Variants} from 'framer-motion';
import {GitHubRepo} from '@/types/github';
import {ProjectCard} from '@/components/projects';
import {cn} from '@/lib/utils';
import {SECTIONS} from "@/constants";

interface ProjectsSectionProps {
	projects: GitHubRepo[];
}

function ProjectsSection({projects}: ProjectsSectionProps) {
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

	const itemVariants: Variants = {
		hidden: {y: 40, opacity: 0, rotateX: 15},
		visible: {
			y: 0,
			opacity: 1,
			rotateX: 0,
			transition: {
				type: 'spring',
				damping: 20,
				stiffness: 100,
			},
		},
	};

	return (
		<section id={'projects'} className={cn('pt-32 pb-24 px-6 relative overflow-hidden')} style={{backgroundColor: 'rgb(var(--color-background))'}}>
			{/* Floating Elements */}
			<div className={cn('absolute inset-0 overflow-hidden pointer-events-none')}>
				<motion.div
					className={cn('absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10 blur-3xl')}
					style={{background: 'linear-gradient(45deg, #6366f1, #8b5cf6)'}}
					animate={{
						rotate: [0, 360],
						scale: [1, 1.2, 1],
					}}
					transition={{duration: 20, repeat: Infinity, ease: 'linear'}}
				/>
				<motion.div
					className={cn('absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl')}
					style={{background: 'linear-gradient(45deg, #ec4899, #f59e0b)'}}
					animate={{
						rotate: [360, 0],
						scale: [1.2, 1, 1.2],
					}}
					transition={{duration: 25, repeat: Infinity, ease: 'linear'}}
				/>
			</div>

			<motion.div variants={containerVariants} initial={'hidden'} whileInView={'visible'} viewport={{once: true, margin: '-100px'}} className={cn('max-w-7xl mx-auto relative z-10')}>
				{/* Section Header */}
				<motion.div variants={itemVariants} className={cn('text-center mb-20')}>
					<h2 className={cn('text-5xl md:text-6xl font-bold mb-6 leading-16 md:leading-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent')}>
						{SECTIONS.projectsSectionConfig.title}
					</h2>
					<p className={cn('text-xl opacity-80 max-w-3xl mx-auto leading-relaxed')} style={{color: 'rgb(var(--color-foreground))'}}>
						{SECTIONS.projectsSectionConfig.subtitle}
					</p>
				</motion.div>

				{/* Projects Grid */}
				<div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8')}>
					{projects.map((project, index) => (
						<ProjectCard key={project.id} project={project} index={index}/>
					))}
				</div>

				{/* Floating CTA */}
				<motion.div variants={itemVariants} className={cn('text-center mt-20')}>
					<motion.a
						href="/projects"
						className={cn('inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-semibold text-white transition-all duration-300')}
						style={{background: 'linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899)'}}
						whileHover={{
							scale: 1.05,
							boxShadow: '0 20px 40px rgba(99, 102, 241, 0.4)',
						}}
						whileTap={{scale: 0.95}}
					>
						View All Projects
						<motion.span animate={{x: [0, 5, 0]}} transition={{repeat: Infinity, duration: 2}}>→</motion.span>
					</motion.a>
				</motion.div>
			</motion.div>
		</section>
	);
}

export {ProjectsSection};
