'use client';

import {motion, Variants} from 'framer-motion';
import {FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaUsers} from 'react-icons/fa';
import {cn} from '@/lib/utils';
import {WORK_EXPERIENCE} from '@/constants';

function ExperienceSection() {
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

	const timelineVariants: Variants = {
		hidden: {scaleY: 0, opacity: 0},
		visible: {
			scaleY: 1,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: 'easeInOut',
			},
		},
	};

	const getExperienceIcon = (company: string) => {
		const icons: { [key: string]: string } = {
			'CouchConcerts': '🎵',
			'Remix Labs': '🧪',
			'Skywa Solutions': '🚀',
		};
		return icons[company] || '💼';
	};

	const getExperienceColor = (index: number) => {
		const colors = [
			'from-blue-500 to-cyan-500',
			'from-purple-500 to-pink-500',
			'from-green-500 to-emerald-500',
			'from-orange-500 to-red-500',
		];
		return colors[index % colors.length];
	};

	return (
		<section id="experience" className={cn('py-32 px-6 relative overflow-hidden')} style={{backgroundColor: 'rgb(var(--color-background))'}}>
			{/* Background Elements */}
			<div className={cn('absolute inset-0 overflow-hidden pointer-events-none')}>
				<motion.div
					className={cn('absolute top-40 right-20 w-80 h-80 rounded-full opacity-5 blur-3xl')}
					style={{background: 'linear-gradient(45deg, #6366f1, #8b5cf6)'}}
					animate={{
						rotate: [0, 360],
						scale: [1, 1.2, 1],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: 'linear',
					}}
				/>
				<motion.div
					className={cn('absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-5 blur-3xl')}
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
				className={cn('max-w-6xl mx-auto relative z-10')}
			>
				{/* Section Header */}
				<motion.div variants={itemVariants} className={cn('text-center mb-20')}>
					<motion.div
						className={cn('inline-block mb-4 px-6 py-2 rounded-full text-sm font-medium text-white')}
						style={{background: 'linear-gradient(45deg, #6366f1, #8b5cf6)'}}
						whileHover={{scale: 1.05}}
					>
						Career Journey
					</motion.div>
					<h2 className={cn('text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent')}>
						Work Experience
					</h2>
					<p className={cn('text-xl opacity-80 max-w-3xl mx-auto leading-relaxed')} style={{color: 'rgb(var(--color-foreground))'}}>
						Building impactful solutions across diverse industries and technologies
					</p>
				</motion.div>

				{/* Timeline */}
				<div className={cn('relative')}>
					{/* Timeline Line */}
					<motion.div
						variants={timelineVariants}
						className={cn('absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 origin-top')}
					/>

					{/* Experience Items */}
					<div className={cn('space-y-12')}>
						{WORK_EXPERIENCE.map((experience, index) => (
							<motion.div
								key={index}
								variants={itemVariants}
								className={cn('relative flex items-start gap-8')}
							>
								{/* Timeline Dot */}
								<motion.div
									className={cn('relative z-10 flex items-center justify-center w-16 h-16 rounded-full text-white text-2xl bg-gradient-to-br', getExperienceColor(index))}
									whileHover={{scale: 1.2, rotate: 360}}
									transition={{duration: 0.6}}
								>
									{getExperienceIcon(experience.company)}
								</motion.div>

								{/* Content */}
								<motion.div
									className={cn('flex-1 p-8 rounded-2xl border border-opacity-20 backdrop-blur-sm')}
									style={{backgroundColor: 'rgba(var(--color-card), 0.5)', borderColor: 'rgba(var(--color-border), 0.3)'}}
									whileHover={{
										scale: 1.02,
										boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
									}}
									transition={{duration: 0.3}}
								>
									{/* Header */}
									<div className={cn('flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4')}>
										<div>
											<h3 className={cn('text-2xl font-bold mb-2')} style={{color: 'rgb(var(--color-card-foreground))'}}>
												{experience.title}
											</h3>
											<p className={cn('text-lg font-medium mb-2', getExperienceColor(index).includes('blue') ? 'text-blue-500' : getExperienceColor(index).includes('purple') ? 'text-purple-500' : getExperienceColor(index).includes('green') ? 'text-green-500' : 'text-orange-500')}>
												{experience.company}
											</p>
										</div>
										<div className={cn('flex flex-col lg:items-end gap-2')}>
											<motion.span
												className={cn('px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r', getExperienceColor(index))}
												whileHover={{scale: 1.1}}
											>
												{experience.type}
											</motion.span>
										</div>
									</div>

									{/* Details */}
									<div className={cn('flex flex-wrap gap-4 mb-6 text-sm opacity-80')} style={{color: 'rgb(var(--color-card-foreground))'}}>
										<div className={cn('flex items-center gap-2')}>
											<FaCalendarAlt className={cn('w-4 h-4')}/>
											<span>{experience.period}</span>
										</div>
										<div className={cn('flex items-center gap-2')}>
											<FaMapMarkerAlt className={cn('w-4 h-4')}/>
											<span>{experience.location}</span>
										</div>
									</div>

									{/* Description */}
									<div className={cn('space-y-3')}>
										{experience.description.map((desc, descIndex) => (
											<motion.div
												key={descIndex}
												className={cn('flex items-start gap-3')}
												initial={{opacity: 0, x: -20}}
												whileInView={{opacity: 1, x: 0}}
												transition={{delay: descIndex * 0.1}}
											>
												<motion.div
													className={cn('w-2 h-2 rounded-full bg-gradient-to-r mt-2 flex-shrink-0', getExperienceColor(index))}
													whileHover={{scale: 1.5}}
												/>
												<p className={cn('text-sm leading-relaxed')} style={{color: 'rgb(var(--color-card-foreground))'}}>
													{desc}
												</p>
											</motion.div>
										))}
									</div>

									{/* Achievements Badge */}
									{index === 0 && (
										<motion.div
											className={cn('mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium')}
											style={{backgroundColor: 'rgba(var(--color-secondary), 0.5)', color: 'rgb(var(--color-secondary-foreground))'}}
											whileHover={{scale: 1.05}}
										>
											<FaUsers className={cn('w-4 h-4')}/>
											<span>300+ Active Users</span>
										</motion.div>
									)}
								</motion.div>
							</motion.div>
						))}
					</div>
				</div>

				{/* Summary Stats */}
				<motion.div variants={itemVariants} className={cn('mt-20 text-center')}>
					<div className={cn('grid grid-cols-1 md:grid-cols-3 gap-8')}>
						{[
							{
								label: 'Companies Worked',
								value: WORK_EXPERIENCE.length,
								color: 'text-blue-500',
								icon: FaBriefcase,
							},
							{
								label: 'Years Experience',
								value: '3+',
								color: 'text-purple-500',
								icon: FaCalendarAlt,
							},
							{
								label: 'Projects Delivered',
								value: '50+',
								color: 'text-green-500',
								icon: FaUsers,
							},
						].map((stat, index) => (
							<motion.div
								key={stat.label}
								className={cn('p-6 rounded-xl border border-opacity-20 backdrop-blur-sm')}
								style={{backgroundColor: 'rgba(var(--color-card), 0.5)', borderColor: 'rgba(var(--color-border), 0.3)'}}
								whileHover={{scale: 1.05, y: -5}}
								initial={{opacity: 0, y: 20}}
								whileInView={{opacity: 1, y: 0}}
								transition={{delay: index * 0.1}}
							>
								<stat.icon className={cn('w-8 h-8 mx-auto mb-4', stat.color)}/>
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
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
}

export {ExperienceSection};