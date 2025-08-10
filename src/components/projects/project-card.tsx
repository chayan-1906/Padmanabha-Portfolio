'use client';

import React, {useState} from 'react';
import Image from 'next/image';
import {motion, Variants} from 'framer-motion';
import {Collaborator} from "@/types/github";
import {camelToWords, cn} from '@/lib/utils';
import {ProjectCardProps} from "@/types/project";
import {FaBook, FaDownload, FaExternalLinkAlt, FaGithub, FaUsers} from 'react-icons/fa';

function ProjectCard({project, index}: ProjectCardProps) {
	const [isHovered, setIsHovered] = useState(false);

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
	}

	const generateTechGradient = (tech: string) => {
		const colors = [
			'#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981',
			'#3b82f6', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16',
			'#f97316', '#a855f7', '#14b8a6', '#f472b6', '#eab308',
			'#6366f1', '#d946ef', '#0ea5e9', '#22c55e', '#f59e0b',
			'#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'
		];

		let hash = 0;
		for (let i = 0; i < tech.length; i++) {
			const char = tech.charCodeAt(i);
			hash = ((hash << 5) - hash) + char;
			hash = hash & hash; // Convert to 32bit integer
		}

		const color1Index = Math.abs(hash) % colors.length;
		const color2Index = Math.abs(hash >> 8) % colors.length;
		const angle = Math.abs(hash >> 16) % 360;

		const color1 = colors[color1Index];
		const color2 = colors[color2Index];

		return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
	}

	const getDemoIcon = (type: string) => {
		switch (type) {
			case 'liveDemo':
				return FaExternalLinkAlt;
			case 'apkDownload':
				return FaDownload;
			case 'userGuide':
				return FaBook;
			default:
				return FaGithub;
		}
	}

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
				className={cn('absolute inset-0 rounded-2xl flex items-center justify-center z-30 pointer-events-none')}
				initial={{opacity: 0, scale: 0.5}}
				animate={{
					opacity: isHovered ? 1 : 0,
					scale: isHovered ? 1 : 0.5,
				}}
				transition={{duration: 0.3}}
			>
				<motion.a href={project.gitHubUrl} target={'_blank'} rel={'noopener noreferrer'} className={cn('pointer-events-auto')} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
					<FaGithub className={cn('w-16 h-16 drop-shadow-lg')} style={{color: 'rgba(var(--color-border), 0.3)'}}/>
				</motion.a>
			</motion.div>

			{/* Gradient Overlay */}
			<div className={cn('absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500')}/>

			{/* Animated Border */}
			<div className={cn('absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm')}/>

			{/* Project Header */}
			<div className={'relative z-10 mb-6'}>
				<div className={'flex items-start justify-between mb-4'}>
					<motion.div className={cn('w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden', project.logoUrl ? 'bg-white border border-black' : '')}
					            style={{background: project.logoUrl ? 'white' : generateTechGradient(project.language)}}>
						{project.logoUrl ? (
							<Image src={project.logoUrl} alt={`${project.title} logo`} height={400} width={400} className={cn('w-full h-full object-contain p-1')}/>
						) : (
							<span className={cn('text-white font-bold text-lg')}>{project.title.charAt(0)}</span>
						)}
					</motion.div>
				</div>

				<h3 className={cn('text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-500')}
				    style={{color: 'rgb(var(--color-card-foreground))'}}>
					{project.title}
				</h3>

				<p className={cn('text-base opacity-80 leading-relaxed')} style={{color: 'rgb(var(--color-card-foreground))'}}>{project.description}</p>
			</div>

			{/* Divider */}
			<div className={'h-[1px] w-full mb-4'} style={{backgroundColor: 'rgb(var(--color-divider))'}}/>

			{/* Collaborators */}
			{project.collaborators && project.collaborators.length > 0 && (
				<div className={cn('mb-4')}>
					<div className={cn('flex items-center gap-2 mb-2')}>
						<FaUsers className={cn('w-4 h-4 opacity-60')} style={{color: 'rgb(var(--color-card-foreground))'}}/>
						<span className={cn('text-sm font-medium opacity-80')} style={{color: 'rgb(var(--color-card-foreground))'}}>Collaborators</span>
					</div>
					<div className={cn('flex flex-wrap gap-2')}>
						{project.collaborators.map((collaborator: Collaborator, idx: number) => (
							<motion.a
								key={idx}
								href={collaborator.html_url}
								target={'_blank'}
								rel={'noopener noreferrer'}
								className={cn('px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-400 hover:to-teal-500 transition-all duration-300 z-1')}
								whileHover={{scale: 1.05, y: -1}}
								whileTap={{scale: 0.95}}
							>
								{collaborator.login}
							</motion.a>
						))}
					</div>
				</div>
			)}

			{/* Divider */}
			<div className={'h-[1px] w-full mb-4'} style={{backgroundColor: 'rgb(var(--color-divider))'}}/>

			{/* Tech Stack */}
			<div className={cn('flex flex-wrap gap-2 mb-3')}>
				{project.topics.slice(0, 10).map((tech: string) => (
					<motion.span key={tech} className={'px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r'} style={{background: generateTechGradient(tech)}}
					             whileHover={{scale: 1.1, y: -2}}>
						{tech}
					</motion.span>
				))}
			</div>

			{/* Divider */}
			<div className={'h-[1px] w-full mb-4'} style={{backgroundColor: 'rgb(var(--color-divider))'}}/>

			{/* Language Tag */}
			{project.language && (
				<div className={cn('flex mb-6')}>
					<motion.span
						className={'px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-400 hover:to-pink-500 transition-all duration-300 z-1'}
						whileHover={{scale: 1.1, y: -2}}>
						{project.language}
					</motion.span>
				</div>
			)}

			{/* Project Stats */}
			<div className={cn('flex items-center gap-4 text-sm opacity-80 mb-6')} style={{color: 'rgb(var(--color-card-foreground))'}}>
				<motion.div className={cn('flex items-center gap-1')} whileHover={{scale: 1.1}}>
					<span>⭐</span>
					<span className={cn('font-medium')}>{project.stargazers_count}</span>
				</motion.div>
			</div>

			{/* Demo Button */}
			{project.actionUrl && project.actionType !== 'none' && (
				<div className={cn('flex justify-center mt-auto relative z-40')}>
					<motion.a
						href={project.actionUrl}
						target={'_blank'}
						rel={'noopener noreferrer'}
						className={cn('flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white transition-all duration-300 relative z-40')}
						style={{background: 'linear-gradient(45deg, #6366f1, #8b5cf6)'}}
						whileHover={{scale: 1.05, y: -2, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)'}}
						whileTap={{scale: 0.95}}
					>
						{React.createElement(getDemoIcon(project.actionType), {className: cn('w-4 h-4')})}
						{camelToWords(project.actionType)}
					</motion.a>
				</div>
			)}
		</motion.div>
	);
}

export {ProjectCard};
