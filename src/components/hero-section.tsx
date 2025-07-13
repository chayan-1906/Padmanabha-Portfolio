'use client';

import Image from "next/image";
import {ChevronDown} from 'lucide-react';
import {motion, Variants} from 'framer-motion';
import {MdEmail, MdPhone} from 'react-icons/md';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {cn} from '@/lib/utils';
import {PERSONAL_INFO, TECH_STACK, SOCIAL_LINKS} from '@/constants';

function HeroSection() {
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

	const floatingVariants: Variants = {
		initial: {y: 0},
		animate: {
			y: [-10, 10, -10],
			transition: {
				duration: 3,
				repeat: Infinity,
				ease: 'easeInOut',
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

	return (
		<section className={cn('min-h-screen relative overflow-hidden flex items-center justify-center')} style={{backgroundColor: 'rgb(var(--color-background))'}}>
			{/* Animated Background */}
			<div className={cn('absolute inset-0 overflow-hidden')}>
				<motion.div
					className={cn('absolute top-20 left-20 size-96 rounded-full opacity-20 blur-3xl')}
					style={{background: 'linear-gradient(45deg, #6366f1, #8b5cf6)'}}
					animate={{
						scale: [1, 1.2, 1],
						rotate: [0, 180, 360],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: 'linear',
					}}
				/>
				<motion.div
					className={cn('absolute bottom-20 right-20 size-80 rounded-full opacity-20 blur-3xl')}
					style={{background: 'linear-gradient(45deg, #ec4899, #f59e0b)'}}
					animate={{
						scale: [1.2, 1, 1.2],
						rotate: [360, 180, 0],
					}}
					transition={{
						duration: 15,
						repeat: Infinity,
						ease: 'linear',
					}}
				/>
			</div>

			<motion.div variants={containerVariants} initial={'hidden'} animate={'visible'} className={cn('relative z-10 text-center max-w-4xl mx-auto px-6')}>
				{/* Profile Image Placeholder */}
				<motion.div variants={itemVariants} className={cn('mb-8')}>
					<div className={cn('flex size-32 mx-auto mb-6 rounded-full border-4 border-gray-300 text-gray-500 bg-gray-100 overflow-hidden')}>
						<Image src={'/images/profile-photo.jpg'} alt={'profile-picture'} width={400} height={400} className={'rounded-full object-cover'} style={{objectPosition: '50% 20%'}}/>
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
					<motion.h2 className={cn('text-2xl md:text-3xl font-medium opacity-90')} style={{color: 'rgb(var(--color-foreground))'}}>
						{PERSONAL_INFO.title}
					</motion.h2>
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
									backgroundColor: 'rgb(var(--color-secondary))',
									color: 'rgb(var(--color-secondary-foreground))',
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

				{/* CTA Button */}
				<motion.div variants={itemVariants}>
					<motion.button
						className={cn('px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300')}
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
				</motion.div>
			</motion.div>

			{/* Floating Scroll Indicator */}
			<motion.div
				variants={floatingVariants}
				initial={'initial'}
				animate={'animate'}
				className={cn('absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer')}
				onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}
			>
				<motion.div className={cn('flex flex-col items-center space-y-2')} style={{color: 'rgb(var(--color-foreground))'}}>
					<span className={cn('text-sm opacity-70')}>Scroll to explore</span>
					<motion.div
						animate={{y: [0, 8, 0]}}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					>
						<ChevronDown className={cn('w-6 h-6')}/>
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
}

export {HeroSection};
