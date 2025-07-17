'use client';

import {useEffect, useState} from 'react';
import Image from "next/image";
import {motion, Variants} from 'framer-motion';
import {MdEmail, MdPhone} from 'react-icons/md';
import {FaDownload, FaGithub, FaLinkedin} from 'react-icons/fa';
import {cn} from '@/lib/utils';
import {PERSONAL_INFO, SOCIAL_LINKS, TECH_STACK} from '@/constants';

function HeroSection() {
	const [techGradients, setTechGradients] = useState<string[]>([]);

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
		hidden: {y: 20, opacity: 0},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				damping: 12,
				stiffness: 100,
			},
		},
	};

	const getIcon = (iconName: string) => {
		switch (iconName) {
			case 'Github':
				return FaGithub;
			case 'Linkedin':
				return FaLinkedin;
			case 'Mail':
				return MdEmail;
			case 'Phone':
				return MdPhone;
			default:
				return FaGithub;
		}
	};

	const generateRandomGradient = () => {
		const colors = [
			'#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981',
			'#3b82f6', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16',
			'#f97316', '#a855f7', '#14b8a6', '#f472b6', '#eab308'
		];

		const color1 = colors[Math.floor(Math.random() * colors.length)];
		const color2 = colors[Math.floor(Math.random() * colors.length)];
		const angle = Math.floor(Math.random() * 360);

		return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
	};

	useEffect(() => {
		setTechGradients(TECH_STACK.map(() => generateRandomGradient()));
	}, []);

	return (
		<section className={cn('min-h-screen relative overflow-hidden flex items-center justify-center pb-12')} style={{backgroundColor: 'rgb(var(--color-background))'}}>
			{/* Fixed Background - no layout impact */}
			<div className={cn('fixed inset-0 pointer-events-none')}>
				<motion.div
					className={cn('absolute top-20 left-20 size-96 rounded-full opacity-20 blur-3xl')}
					style={{background: 'linear-gradient(45deg, #6366f1, #8b5cf6)'}}
					animate={{
						scale: [1, 1.2, 1],
						rotate: [0, 180, 360],
					}}
					transition={{duration: 20, repeat: Infinity, ease: 'linear'}}
				/>
				<motion.div
					className={cn('absolute bottom-20 right-20 size-80 rounded-full opacity-20 blur-3xl')}
					style={{background: 'linear-gradient(45deg, #ec4899, #f59e0b)'}}
					animate={{
						scale: [1.2, 1, 1.2],
						rotate: [360, 180, 0],
					}}
					transition={{duration: 15, repeat: Infinity, ease: 'linear'}}
				/>
			</div>

			<motion.div variants={containerVariants} initial={'hidden'} animate={'visible'} className={cn('relative z-10 text-center max-w-4xl mx-auto px-6 pt-32')}>
				{/* Profile Image Placeholder */}
				<motion.div variants={itemVariants} className={cn('mb-8')}>
					<div className={cn('flex size-32 mx-auto mb-6 rounded-full border-4 border-gray-300 text-gray-500 bg-gray-100 overflow-hidden')}>
						<Image src={PERSONAL_INFO.avatar} alt={'profile-picture'} width={400} height={400} className={'rounded-full object-cover'} style={{objectPosition: '50% 20%'}}/>
					</div>
				</motion.div>

				{/* Name & Title */}
				<motion.div variants={itemVariants} className={cn('mb-8')}>
					<motion.h1
						className={cn('text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent')}
						style={{
							background: 'linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899)',
							backgroundClip: 'text',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
						}}
					>
						{PERSONAL_INFO.name}
					</motion.h1>
					<motion.h2 className={cn('text-2xl md:text-3xl font-medium opacity-90')} style={{color: 'rgb(var(--color-foreground))'}}>{PERSONAL_INFO.title}</motion.h2>
				</motion.div>

				{/* Subtitle */}
				<motion.div variants={itemVariants} className={cn('mb-8')}>
					<p className={cn('text-lg md:text-xl opacity-80 max-w-2xl mx-auto leading-relaxed')} style={{color: 'rgb(var(--color-foreground))'}}>
						Specializing in <span className={cn('font-semibold text-blue-500')}>Next.js 15</span>, <span className={cn('font-semibold text-purple-500')}>React.js 19</span>, <span
						className={cn('font-semibold text-orange-500')}>React Native</span>, and <span
						className={cn('font-semibold text-pink-500')}>Flutter</span> with expertise in <span className={cn('font-semibold text-green-500')}>AI integration</span> through Model Context
						Protocol (MCP) development.
					</p>
				</motion.div>

				{/* Tech Stack Pills */}
				<motion.div variants={itemVariants} className={cn('mb-12')}>
					<div className={cn('flex flex-wrap justify-center gap-3 mb-8')}>
						{TECH_STACK.map((tech, index) => (
							<motion.span
								key={tech}
								className={cn('px-4 py-2 rounded-full text-sm font-medium')}
								style={{
									background: techGradients[index] || 'rgb(var(--color-secondary))',
									color: 'white',
								}}
								whileHover={{
									scale: 1.05,
									boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
								}}
								initial={{opacity: 0, scale: 0.8}}
								animate={{opacity: 1, scale: 1}}
								transition={{delay: 0.5 + index * 0.1}}
							>
								{tech}
							</motion.span>
						))}
					</div>
				</motion.div>

				{/* Contact Links */}
				<motion.div variants={itemVariants} className={cn('mb-12')}>
					<div className={cn('flex justify-center gap-6 mb-8')}>
						{SOCIAL_LINKS.map(({name, url, icon}) => {
							const Icon = getIcon(icon);
							return (
								<motion.a
									key={name}
									href={url}
									target={url.startsWith('http') ? '_blank' : '_self'}
									rel={url.startsWith('http') ? 'noopener noreferrer' : ''}
									className={cn('p-3 rounded-full transition-all duration-300')}
									style={{
										backgroundColor: 'rgb(var(--color-card))',
										color: 'rgb(var(--color-card-foreground))',
										border: '1px solid rgb(var(--color-border))',
									}}
									whileHover={{
										scale: 1.1,
										boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
									}}
									whileTap={{scale: 0.95}}
								>
									<Icon className={cn('w-6 h-6')}/>
								</motion.a>
							);
						})}
					</div>
				</motion.div>

				{/* CTA Buttons */}
				<motion.div variants={itemVariants} className={cn('flex flex-col sm:flex-row gap-4 justify-center')}>
					<motion.button
						className={cn('px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer')}
						style={{
							background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
							color: 'white',
						}}
						whileHover={{
							scale: 1.05,
							boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)',
						}}
						whileTap={{scale: 0.95}}
						onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}
					>
						View My Work
					</motion.button>

					<motion.a
						href={PERSONAL_INFO.resumeUrl}
						target="_blank"
						rel="noopener noreferrer"
						className={cn('px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2')}
						style={{
							background: 'transparent',
							color: 'rgb(var(--color-foreground))',
							border: '2px solid rgb(var(--color-border))',
						}}
						whileHover={{
							scale: 1.05,
							backgroundColor: 'rgba(var(--color-card), 0.5)',
						}}
						whileTap={{scale: 0.95}}
					>
						<FaDownload className={cn('w-5 h-5')}/>
						Download Resume
					</motion.a>
				</motion.div>
			</motion.div>
		</section>
	);
}

export {HeroSection};