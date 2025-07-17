'use client';

import React, {useState} from 'react';
import {motion, Variants} from 'framer-motion';
import {FaDownload, FaExternalLinkAlt, FaGithub, FaUsers} from 'react-icons/fa';
import {GitHubRepo} from '@/types/github';
import {COLLABORATORS} from '@/constants';
import {DemoLink} from '@/lib/github';
import {cn} from '@/lib/utils';

interface ProjectCardProps {
	project: GitHubRepo;
	index: number;
}

function ProjectCard({project, index}: ProjectCardProps) {
	const [isHovered, setIsHovered] = useState(false);
	const [demoLink, setDemoLink] = useState<DemoLink | null>(null);

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

	const getTechColor = (tech: string) => {
		const colors: { [key: string]: string } = {
			// Web Development & Frontend
			'nextjs15': 'from-gray-800 to-black',
			'tailwindcss': 'from-cyan-400 to-blue-600',
			'tainwindcss': 'from-cyan-400 to-blue-600', // typo variant
			'framer-motion': 'from-purple-500 to-pink-600',
			'approuter': 'from-gray-700 to-gray-900',
			'app-router': 'from-gray-700 to-gray-900',
			'typescript': 'from-blue-500 to-blue-700',
			'react-native': 'from-blue-400 to-cyan-600',
			'express': 'from-green-600 to-green-800',
			'express-js': 'from-green-600 to-green-800',
			'shadcn-ui': 'from-slate-600 to-slate-800',

			// Backend & APIs
			'nodejs': 'from-green-500 to-green-700',
			'backend': 'from-gray-600 to-gray-800',
			'rest-api': 'from-orange-500 to-red-600',
			'api': 'from-orange-400 to-orange-600',
			'crud': 'from-yellow-600 to-orange-700',
			'authentication': 'from-red-500 to-red-700',
			'jwt-authentication': 'from-red-600 to-red-800',
			'google-authentication': 'from-blue-500 to-green-500',
			'github-oauth': 'from-slate-800 to-gray-500',
			'clerk': 'from-purple-600 to-purple-800',
			'email-verification': 'from-blue-600 to-indigo-700',

			// Databases
			'mongodb': 'from-green-500 to-green-700',
			'mongoose': 'from-green-600 to-green-800',
			'mongo-db': 'from-green-500 to-green-700',
			'postgresql': 'from-blue-600 to-indigo-700',
			'prisma': 'from-indigo-500 to-purple-600',
			'neon-database': 'from-cyan-500 to-blue-600',
			'redis': 'from-red-500 to-red-700',

			// Mobile Development
			'mobile-app': 'from-blue-500 to-purple-600',
			'tanstack-query': 'from-orange-500 to-red-600',
			'featured': 'from-yellow-400 to-yellow-600',

			// Business Applications
			'bus-booking': 'from-blue-600 to-blue-800',
			'ticketing-logic': 'from-purple-500 to-purple-700',
			'ticketing-system': 'from-purple-500 to-purple-700',
			'transport': 'from-blue-500 to-blue-700',
			'travel-app': 'from-green-500 to-teal-600',
			'restaurant-management': 'from-orange-600 to-red-700',
			'admin-panel': 'from-gray-700 to-gray-900',
			'role-based-access': 'from-red-600 to-red-800',
			'user-management': 'from-indigo-600 to-purple-700',

			// Security & Validation
			'security': 'from-red-600 to-red-800',
			'rate-limiting': 'from-yellow-600 to-orange-700',
			'zod-validation': 'from-blue-600 to-indigo-700',
			'encryption': 'from-gray-700 to-gray-900',

			// Development Tools & Utilities
			'development': 'from-gray-500 to-gray-700',
			'development-tools': 'from-gray-500 to-gray-700',
			'utilities': 'from-cyan-500 to-blue-600',
			'server': 'from-green-600 to-green-800',
			'mcp': 'from-purple-600 to-indigo-700',
			'model-context-protocol': 'from-purple-600 to-indigo-700',
			'claude': 'from-orange-500 to-orange-700',
			'llm': 'from-amber-600 to-yellow-800',

			// Additional categories...
			'fintech': 'from-green-400 to-green-600',
			'productivity': 'from-blue-400 to-blue-600',
			'analytics': 'from-purple-400 to-purple-600',
			'dashboard': 'from-indigo-500 to-purple-600',
			'ai': 'from-orange-500 to-red-700',
		};

		const techLower = tech.toLowerCase();

		// Try exact match first
		if (colors[techLower]) {
			return colors[techLower];
		}

		// Try partial match - find first key that tech contains
		for (const key in colors) {
			if (techLower.includes(key)) {
				return colors[key];
			}
		}

		return 'from-gray-500 to-gray-700';
	};

	const getDemoIcon = (iconName: string) => {
		switch (iconName) {
			case 'ExternalLink':
				return FaExternalLinkAlt;
			case 'Download':
				return FaDownload;
			case 'Github':
				return FaGithub;
			default:
				return FaExternalLinkAlt;
		}
	};

	const getCollaborators = (repoName: string) => {
		if (repoName === 'FS-MCP') {
			return [COLLABORATORS.arka];
		}
		return [];
	};

	const collaborators = getCollaborators(project.name);

	return (
		<motion.div
			variants={itemVariants}
			className={cn('group relative rounded-2xl p-8 border border-opacity-20 backdrop-blur-sm transition-all duration-500 flex flex-col')}
			style={{
				backgroundColor: 'rgba(var(--color-card), 0.5)',
				borderColor: 'rgba(var(--color-border), 0.3)',
			}}
			whileHover={{
				y: -10,
				rotateX: 5,
				boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
			}}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
		>
			{/* GitHub Icon Overlay */}
			<motion.div
				className={cn('absolute inset-0 rounded-2xl flex items-center justify-center z-50 pointer-events-none')}
				initial={{opacity: 0, scale: 0.5}}
				animate={{
					opacity: isHovered ? 1 : 0,
					scale: isHovered ? 1 : 0.5,
				}}
				transition={{duration: 0.3}}
			>
				<motion.a
					href={project.html_url}
					target={'_blank'}
					rel={'noopener noreferrer'}
					className={cn('pointer-events-auto')}
					whileHover={{scale: 1.1}}
					whileTap={{scale: 0.9}}
				>
					<FaGithub className={cn('w-16 h-16 drop-shadow-lg')} style={{color: 'rgba(var(--color-border), 0.3)'}}/>
				</motion.a>
			</motion.div>

			{/* Gradient Overlay */}
			<div className={cn('absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500')}/>

			{/* Animated Border */}
			<div className={cn('absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm')}/>

			{/* Project Header */}
			<div className={cn('relative z-10 mb-6')}>
				<div className={cn('flex items-start justify-between mb-4')}>
					<motion.div className={cn('w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center', getTechColor(project.language || ''))} whileHover={{rotate: 360}}
					            transition={{duration: 0.6}}>
						<span className={cn('text-white font-bold text-lg')}>{project.name.charAt(0)}</span>
					</motion.div>
				</div>

				<h3 className={cn('text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-500')}
				    style={{color: 'rgb(var(--color-card-foreground))'}}>
					{project.name}
				</h3>

				<p className={cn('text-base opacity-80 leading-relaxed')} style={{color: 'rgb(var(--color-card-foreground))'}}>
					{project.description || 'Innovative solution with modern technologies'}
				</p>
			</div>

			{/* Tech Stack */}
			<div className={cn('flex flex-wrap gap-2 mb-3')}>
				{project.topics.filter(topic => topic !== 'featured' && !topic.startsWith('demo-')).slice(0, 8).map((tech) => (
					<motion.span key={tech} className={cn('px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r', getTechColor(tech))} whileHover={{scale: 1.1, y: -2}}>
						{tech}
					</motion.span>
				))}
			</div>

			{/* Language Tag */}
			{project.language && (
				<div className={cn('flex mb-6')}>
					<motion.span className={cn('px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r', getTechColor(project.language))} whileHover={{scale: 1.1, y: -2}}>
						{project.language}
					</motion.span>
				</div>
			)}

			{/* Collaborators */}
			{collaborators.length > 0 && (
				<motion.div className={cn('flex items-center gap-2 mb-6 p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10')} whileHover={{scale: 1.02}}>
					<FaUsers className={cn('w-4 h-4 text-purple-500')}/>
					<span className={cn('text-sm font-medium')} style={{color: 'rgb(var(--color-card-foreground))'}}>
						Collaboration with {collaborators.map(collab => collab.name).join(', ')}
					</span>
				</motion.div>
			)}

			{/* Project Stats */}
			<div className={cn('flex items-center gap-4 text-sm opacity-80')} style={{color: 'rgb(var(--color-card-foreground))'}}>
				<motion.div className={cn('flex items-center gap-1')} whileHover={{scale: 1.1}}>
					<span>⭐</span>
					<span className={cn('font-medium')}>{project.stargazers_count}</span>
				</motion.div>
			</div>

			{/* Demo Button at bottom */}
			{demoLink && (
				<div className={cn('flex justify-center mt-auto relative z-60')}>
					<motion.a
						href={demoLink.url}
						target={'_blank'}
						rel={'noopener noreferrer'}
						className={cn('flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white transition-all duration-300 relative z-60')}
						style={{background: 'linear-gradient(45deg, #6366f1, #8b5cf6)'}}
						whileHover={{scale: 1.05, y: -2, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)'}}
						whileTap={{scale: 0.95}}
					>
						{React.createElement(getDemoIcon(demoLink.icon), {className: cn('w-4 h-4')})}
						{demoLink.label}
					</motion.a>
				</div>
			)}
		</motion.div>
	);
}

export {ProjectCard};