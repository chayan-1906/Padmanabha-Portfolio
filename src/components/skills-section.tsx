'use client';

import {motion, Variants} from 'framer-motion';
import {cn} from '@/lib/utils';
import {SECTIONS, SKILLS} from '@/constants';

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

	return (
		<section id={SECTIONS.skillsSectionConfig.name.toLowerCase()} className={cn('pt-32 pb-24 px-6 relative overflow-hidden')} style={{backgroundColor: 'rgb(var(--color-background))'}}>
			{/* Background Elements */}
			<div className={cn('absolute inset-0 overflow-hidden pointer-events-none')}>
				<motion.div
					className={cn('absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-5 blur-3xl')}
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
						{SECTIONS.skillsSectionConfig.title}
					</h2>
					<p className={cn('text-xl opacity-80 max-w-3xl mx-auto leading-relaxed')} style={{color: 'rgb(var(--color-foreground))'}}>
						{SECTIONS.skillsSectionConfig.subtitle}
					</p>
				</motion.div>

				{/* Skills Grid */}
				<div className={cn('grid md:grid-cols-2 lg:grid-cols-4 gap-8')}>
					{Object.entries(SKILLS).map(([key, category], categoryIndex) => (
						<motion.div key={key} variants={itemVariants} className={cn('relative group')}>
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
									<motion.div className={cn('p-3 rounded-xl bg-gradient-to-br text-white', category.color)} whileHover={{rotate: 360}} transition={{duration: 0.6}}>
										<category.icon className={cn('w-6 h-6')}/>
									</motion.div>
									<h3 className={cn('text-xl font-bold')} style={{color: 'rgb(var(--color-card-foreground))'}}>{category.title}</h3>
								</div>

								{/* Skills List */}
								<div className={cn('space-y-4')}>
									{category.items.map((skill, skillIndex) => (
										<motion.div key={skill.name} variants={skillVariants} className={cn('space-y-2')} custom={skillIndex}>
											<div className={cn('flex items-center justify-between')}>
												<div className={cn('flex items-center gap-2')}>
													<skill.icon className={cn('w-4 h-4 text-blue-500')}/>
													<span className={cn('text-sm font-medium')} style={{color: 'rgb(var(--color-card-foreground))'}}>{skill.name}</span>
												</div>
												<span className={cn('text-xs opacity-70')} style={{color: 'rgb(var(--color-card-foreground))'}}>{skill.level}%</span>
											</div>
											<div className={cn('w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700')}>
												<motion.div
													className={cn('h-2 rounded-full bg-gradient-to-r', category.color)}
													initial={{width: 0}}
													whileInView={{width: `${skill.level}%`}}
													transition={{duration: 1, delay: skillIndex * 0.1}}
												/>
											</div>
										</motion.div>
									))}
								</div>

								{/* Hover Effect */}
								<motion.div className={cn('absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300', category.color)}
								            style={{pointerEvents: 'none'}}/>
							</motion.div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}

export {SkillsSection};
