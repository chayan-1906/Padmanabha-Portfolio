'use client';

import {motion, Variants} from 'framer-motion';
import {FaDatabase, FaGitAlt, FaMobile, FaNodeJs, FaReact, FaTools} from 'react-icons/fa';
import {SiFirebase, SiFlutter, SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript} from 'react-icons/si';
import {cn} from '@/lib/utils';
import {SKILLS} from '@/constants';

function SkillsSection() {
	const containerVariants: Variants = {
		hidden: {opacity: 0},
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: {y: 40, opacity: 0},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				damping: 20,
				stiffness: 100,
			},
		},
	};

	const skillVariants: Variants = {
		hidden: {scale: 0.8, opacity: 0},
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				type: 'spring',
				damping: 15,
				stiffness: 120,
			},
		},
	};

	const skillCategories = [
		{
			title: 'Frontend',
			icon: FaReact,
			skills: SKILLS.frontend,
			color: 'from-blue-500 to-cyan-500',
		},
		{
			title: 'Mobile',
			icon: FaMobile,
			skills: SKILLS.mobile,
			color: 'from-purple-500 to-pink-500',
		},
		{
			title: 'Backend',
			icon: FaNodeJs,
			skills: SKILLS.backend,
			color: 'from-green-500 to-emerald-500',
		},
		{
			title: 'Tools',
			icon: FaTools,
			skills: SKILLS.tools,
			color: 'from-orange-500 to-red-500',
		},
	];

	const getSkillIcon = (skill: string) => {
		const icons: { [key: string]: any } = {
			'next.js 15': SiNextdotjs,
			'nextjs': SiNextdotjs,
			'react.js 19': FaReact,
			'react': FaReact,
			'react native': FaReact,
			'flutter': SiFlutter,
			'typescript': SiTypescript,
			'node.js': FaNodeJs,
			'mongodb': SiMongodb,
			'firebase': SiFirebase,
			'tailwind css': SiTailwindcss,
			'git': FaGitAlt,
			'database': FaDatabase,
		};

		const key = skill.toLowerCase();
		return icons[key] || FaTools;
	};

	return (
		<section id="skills" className={cn('py-32 px-6 relative overflow-hidden')} style={{backgroundColor: 'rgb(var(--color-background))'}}>
			{/* Background Elements */}
			<div className={cn('absolute inset-0 overflow-hidden pointer-events-none')}>
				<motion.div
					className={cn('absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-5 blur-3xl')}
					style={{background: 'linear-gradient(45deg, #ec4899, #f59e0b)'}}
					animate={{
						rotate: [360, 0],
						scale: [1.2, 1, 1.2],
					}}
					transition={{
						duration: 25,
						repeat: Infinity,
						ease: 'linear',
					}}
				/>
			</div>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{once: true, margin: '-100px'}}
				className={cn('max-w-7xl mx-auto relative z-10')}
			>
				{/* Section Header */}
				<motion.div variants={itemVariants} className={cn('text-center mb-20')}>
					<motion.div
						className={cn('inline-block mb-4 px-6 py-2 rounded-full text-sm font-medium text-white')}
						style={{background: 'linear-gradient(45deg, #6366f1, #8b5cf6)'}}
						whileHover={{scale: 1.05}}
					>
						Technical Skills
					</motion.div>
					<h2 className={cn('text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent')}>
						What I Work With
					</h2>
					<p className={cn('text-xl opacity-80 max-w-3xl mx-auto leading-relaxed')} style={{color: 'rgb(var(--color-foreground))'}}>
						A comprehensive toolkit for modern web and mobile development
					</p>
				</motion.div>

				{/* Skills Grid */}
				<div className={cn('grid md:grid-cols-2 lg:grid-cols-4 gap-8')}>
					{skillCategories.map((category, categoryIndex) => (
						<motion.div
							key={category.title}
							variants={itemVariants}
							className={cn('relative group')}
						>
							<motion.div
								className={cn('p-8 rounded-2xl border border-opacity-20 backdrop-blur-sm h-full')}
								style={{backgroundColor: 'rgba(var(--color-card), 0.5)', borderColor: 'rgba(var(--color-border), 0.3)'}}
								whileHover={{
									scale: 1.05,
									rotateY: 5,
									boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
								}}
								transition={{duration: 0.3}}
							>
								{/* Category Header */}
								<div className={cn('flex items-center gap-3 mb-6')}>
									<motion.div
										className={cn('p-3 rounded-xl bg-gradient-to-br text-white', category.color)}
										whileHover={{rotate: 360}}
										transition={{duration: 0.6}}
									>
										<category.icon className={cn('w-6 h-6')}/>
									</motion.div>
									<h3 className={cn('text-xl font-bold')} style={{color: 'rgb(var(--color-card-foreground))'}}>
										{category.title}
									</h3>
								</div>

								{/* Skills List */}
								<div className={cn('space-y-3')}>
									{category.skills.map((skill, skillIndex) => {
										const SkillIcon = getSkillIcon(skill);
										return (
											<motion.div
												key={skill}
												variants={skillVariants}
												className={cn('flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-opacity-50')}
												style={{backgroundColor: 'rgba(var(--color-secondary), 0.3)'}}
												whileHover={{
													x: 8,
													backgroundColor: 'rgba(var(--color-secondary), 0.5)',
												}}
												custom={skillIndex}
											>
												<SkillIcon className={cn('w-5 h-5 text-blue-500')}/>
												<span className={cn('text-sm font-medium')} style={{color: 'rgb(var(--color-card-foreground))'}}>
													{skill}
												</span>
											</motion.div>
										);
									})}
								</div>

								{/* Hover Effect */}
								<motion.div
									className={cn('absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300', category.color)}
									style={{pointerEvents: 'none'}}
								/>
							</motion.div>
						</motion.div>
					))}
				</div>

				{/* Additional Stats */}
				<motion.div variants={itemVariants} className={cn('mt-20 grid grid-cols-2 md:grid-cols-4 gap-8')}>
					{[
						{label: 'Years Experience', value: '3+', color: 'text-blue-500'},
						{label: 'Projects Built', value: '50+', color: 'text-purple-500'},
						{label: 'Technologies', value: '20+', color: 'text-green-500'},
						{label: 'Happy Clients', value: '15+', color: 'text-pink-500'},
					].map((stat, index) => (
						<motion.div
							key={stat.label}
							className={cn('text-center p-6 rounded-xl border border-opacity-20 backdrop-blur-sm')}
							style={{backgroundColor: 'rgba(var(--color-card), 0.5)', borderColor: 'rgba(var(--color-border), 0.3)'}}
							whileHover={{scale: 1.05, y: -5}}
							initial={{opacity: 0, y: 20}}
							whileInView={{opacity: 1, y: 0}}
							transition={{delay: index * 0.1}}
						>
							<motion.div
								className={cn('text-3xl font-bold mb-2', stat.color)}
								animate={{scale: [1, 1.1, 1]}}
								transition={{duration: 2, repeat: Infinity, delay: index * 0.2}}
							>
								{stat.value}
							</motion.div>
							<p className={cn('text-sm opacity-80')} style={{color: 'rgb(var(--color-card-foreground))'}}>
								{stat.label}
							</p>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</section>
	);
}

export {SkillsSection};