"use client";

import Image from "next/image";
import {motion, Variants} from "framer-motion";
import {FaBriefcase, FaCalendarAlt, FaCode, FaTrophy} from "react-icons/fa";
import {cn} from "@/lib/utils";
import {GroupedSkillCategory} from "@/types/skills";
import {CTASection} from "@/components/cta/cta-section";
import {Experience, ExperienceRole, ExperiencesClientProps} from "@/types/experiences";

function ExperienceClient({experienceSection, skills, workExperiences}: ExperiencesClientProps) {
	const EXPERIENCE_SUMMARY = [
		{
			label: 'Companies Worked',
			value: workExperiences.length,
			color: 'text-blue-500',
			icon: FaBriefcase,
		},
		{
			label: 'Years Experience',
			value: `${Math.floor((new Date().getTime() - new Date('2022-07-01').getTime()) / (1000 * 60 * 60 * 24 * 365))}+`,
			color: 'text-purple-500',
			icon: FaCalendarAlt,
		},
		{
			label: 'Technologies Used',
			value: `${Math.floor(Object.values(skills).flatMap((category: GroupedSkillCategory) => category.items).length / 5) * 5}+`,
			color: 'text-green-500',
			icon: FaCode,
		},
	];

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

	return (
		<section id={experienceSection.name.toLowerCase()} className={cn('pt-32 pb-24 px-6 relative overflow-hidden')} style={{backgroundColor: 'rgb(var(--color-background))'}}>
			{/* Background Elements */}
			<div className={cn('absolute inset-0 overflow-hidden pointer-events-none')}>
				<motion.div
					className={cn('absolute top-40 right-20 w-80 h-80 rounded-full opacity-5 blur-3xl')}
					style={{background: 'linear-gradient(45deg, #6366f1, #8b5cf6)'}}
					animate={{rotate: [0, 360], scale: [1, 1.2, 1]}} transition={{duration: 20, repeat: Infinity, ease: 'linear'}}
				/>
				<motion.div
					className={cn('absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-5 blur-3xl')}
					style={{background: 'linear-gradient(45deg, #ec4899, #f59e0b)'}}
					animate={{rotate: [360, 0], scale: [1.2, 1, 1.2]}} transition={{duration: 25, repeat: Infinity, ease: 'linear'}}
				/>
			</div>

			<motion.div variants={containerVariants} initial={'hidden'} whileInView={'visible'} viewport={{once: true, margin: '-100px'}} className={cn('max-w-6xl mx-auto relative z-10')}>
				{/* Section Header */}
				<motion.div variants={itemVariants} className={cn('text-center mb-20')}>
					<h2 className={cn('text-5xl md:text-7xl font-bold mb-6 leading-16 md:leading-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent')}>
						{experienceSection.title}
					</h2>
					<p className={cn('text-xl opacity-80 max-w-3xl mx-auto leading-relaxed')} style={{color: 'rgb(var(--color-foreground))'}}>
						{experienceSection.subtitle}
					</p>
				</motion.div>

				{/* Timeline */}
				<div className={cn('relative')}>
					{/* Timeline Line */}
					<motion.div variants={timelineVariants} className={cn('absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 origin-top')}/>

					{/* Experience Items */}
					<div className={cn('space-y-12')}>
						{workExperiences.map((experience: Experience, index: number) => (
							<motion.div key={index} variants={itemVariants} className={cn('relative flex items-start gap-8')}>
								{/* Timeline Dot */}
								<motion.div
									className={cn('relative z-10 flex items-center justify-center w-16 h-16 rounded-full text-white text-2xl bg-gradient-to-br', experience.color)}
									whileHover={{scale: 1.2, rotate: 360}}
									transition={{duration: 0.6}}
								>
									{experience.icon}
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
									{/* Company Header */}
									<div className={cn('flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6')}>
										<div className={cn('flex items-center gap-3')}>
											{experience.logo.url && (
												<Image src={experience.logo.url} alt={`${experience.company} logo`} width={200} height={200} className={cn('w-10 h-10 object-contain rounded-lg')}/>
											)}
											<div>
												<h3 className={cn('text-2xl font-bold mb-1')} style={{color: 'rgb(var(--color-card-foreground))'}}>{experience.company}</h3>
												<p className={cn('text-sm opacity-80')} style={{color: 'rgb(var(--color-card-foreground))'}}>{experience.location} • {experience.period}</p>
											</div>
										</div>
									</div>

									{/* Roles */}
									<div className={cn('space-y-6')}>
										{experience.role.map((role: ExperienceRole, roleIndex: number) => (
											<motion.div
												key={roleIndex}
												className={cn('border-l-2 pl-4 py-2')}
												style={{borderLeftColor: `rgb(${experience.color.includes('blue') ? '59 130 246' : experience.color.includes('purple') ? '139 92 246' : experience.color.includes('green') ? '34 197 94' : '249 115 22'})`}}
												initial={{opacity: 0, x: -20}}
												whileInView={{opacity: 1, x: 0}}
												transition={{delay: roleIndex * 0.1}}
											>
												<div className={cn('flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2')}>
													<h4 className={cn('text-lg font-semibold')} style={{color: 'rgb(var(--color-card-foreground))'}}>{role.title}</h4>
													<div className={cn('flex items-center gap-2')}>
														<span className={cn('text-sm opacity-80')} style={{color: 'rgb(var(--color-card-foreground))'}}>{role.period}</span>
														<motion.span className={cn('px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r', experience.color)}
														             whileHover={{scale: 1.05}}>
															{role.type}
														</motion.span>
													</div>
												</div>

												{/* Description */}
												<div className={cn('space-y-2 mb-4')}>
													{role.description.split('\n').map((desc, descIndex) => (
														<motion.div
															key={descIndex}
															className={cn('flex items-start gap-2')}
															initial={{opacity: 0, x: -10}}
															whileInView={{opacity: 1, x: 0}}
															transition={{delay: descIndex * 0.05}}
														>
															<motion.div className={cn('w-1.5 h-1.5 rounded-full bg-gradient-to-r mt-2 flex-shrink-0', experience.color)} whileHover={{scale: 1.5}}/>
															<p className={cn('text-sm leading-relaxed')} style={{color: 'rgb(var(--color-card-foreground))'}}>{desc}</p>
														</motion.div>
													))}
												</div>

												{/* Achievements */}
												{role.achievements && (
													<div className={cn('flex flex-wrap gap-2')}>
														{role.achievements.split('\n').map((achievement, achIndex) => (
															<motion.div
																key={achIndex}
																className={cn('inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium')}
																style={{backgroundColor: 'rgba(var(--color-secondary), 0.5)', color: 'rgb(var(--color-secondary-foreground))'}}
																whileHover={{scale: 1.05}}
															>
																<FaTrophy className={cn('w-2 h-2')}/>
																<span>{achievement}</span>
															</motion.div>
														))}
													</div>
												)}
											</motion.div>
										))}
									</div>
								</motion.div>
							</motion.div>
						))}
					</div>
				</div>

				{/* Summary Stats */}
				<motion.div variants={itemVariants} className={cn('mt-20 text-center')}>
					<div className={cn('grid grid-cols-1 md:grid-cols-3 gap-8')}>
						{EXPERIENCE_SUMMARY.map((stat, index) => (
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
								<motion.div className={cn('text-3xl font-bold mb-2', stat.color)} animate={{scale: [1, 1.1, 1]}} transition={{duration: 2, repeat: Infinity, delay: index * 0.2}}>
									{stat.value}
								</motion.div>
								<p className={cn('text-sm opacity-80')} style={{color: 'rgb(var(--color-card-foreground))'}}>{stat.label}</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</motion.div>

			<CTASection
				title={'Want someone who gets it done?'}
				subtext={"I'm open to full-time, contract, and consulting opportunities"}
				buttons={[{label: 'Hire Me 🎯', reason: 'job'}]}/>
		</section>
	);
}

export {ExperienceClient};
