'use client';

import Image from 'next/image';
import {motion, Variants} from 'framer-motion';
import {FaEnvelope, FaGraduationCap, FaMapMarkerAlt, FaPhone} from 'react-icons/fa';
import {cn} from '@/lib/utils';
import {EDUCATION, PERSONAL_INFO, WORK_EXPERIENCE} from '@/constants';

function AboutSection() {
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

	return (
		<section id={'about'} className={cn('py-32 px-6 relative overflow-hidden')} style={{backgroundColor: 'rgb(var(--color-background))'}}>
			{/* Background Elements */}
			<div className={cn('absolute inset-0 overflow-hidden pointer-events-none')}>
				<motion.div
					className={cn('absolute top-20 left-20 w-96 h-96 rounded-full opacity-5 blur-3xl')}
					style={{background: 'linear-gradient(45deg, #6366f1, #8b5cf6)'}}
					animate={{
						rotate: [0, 360],
						scale: [1, 1.2, 1],
					}}
					transition={{duration: 30, repeat: Infinity, ease: 'linear'}}
				/>
			</div>

			<motion.div variants={containerVariants} initial={'hidden'} whileInView={'visible'} viewport={{once: true, margin: '-100px'}} className={cn('max-w-6xl mx-auto relative z-10')}>
				{/* Section Header */}
				<motion.div variants={itemVariants} className={cn('text-center mb-20')}>
					<h2 className={cn('text-5xl md:text-6xl font-bold mb-6 leading-16 md:leading-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent')}>
						My Story
					</h2>
					<p className={cn('text-xl opacity-80 max-w-3xl mx-auto leading-relaxed')} style={{color: 'rgb(var(--color-foreground))'}}>
						Passionate developer with 3+ years of experience building scalable applications
					</p>
				</motion.div>

				<div className={cn('grid lg:grid-cols-2 gap-12 items-start')}>
					{/* Personal Info */}
					<motion.div variants={itemVariants} className={cn('space-y-8')}>
						<div className={cn('p-8 rounded-2xl border border-opacity-20 backdrop-blur-sm')}
						     style={{backgroundColor: 'rgba(var(--color-card), 0.5)', borderColor: 'rgba(var(--color-border), 0.3)'}}>
							<h3 className={cn('text-2xl font-bold mb-6')} style={{color: 'rgb(var(--color-card-foreground))'}}>
								Personal Information
							</h3>
							<div className={cn('space-y-4')}>
								<div className={cn('flex items-center gap-3')}>
									<FaMapMarkerAlt className={cn('w-5 h-5 text-blue-500')}/>
									<span style={{color: 'rgb(var(--color-card-foreground))'}}>{PERSONAL_INFO.location}</span>
								</div>
								<div className={cn('flex items-center gap-3')}>
									<FaEnvelope className={cn('w-5 h-5 text-purple-500')}/>
									<a href={`mailto:${PERSONAL_INFO.email}`} className={cn('hover:text-purple-500 transition-colors')} style={{color: 'rgb(var(--color-card-foreground))'}}>
										{PERSONAL_INFO.email}
									</a>
								</div>
								<div className={cn('flex items-center gap-3')}>
									<FaPhone className={cn('w-5 h-5 text-green-500')}/>
									<a href={`tel:${PERSONAL_INFO.phone}`} className={cn('hover:text-green-500 transition-colors')} style={{color: 'rgb(var(--color-card-foreground))'}}>
										{PERSONAL_INFO.phone}
									</a>
								</div>
							</div>
						</div>

						{/* Education */}
						<motion.div
							className={cn('p-8 rounded-2xl border border-opacity-20 backdrop-blur-sm')}
							style={{backgroundColor: 'rgba(var(--color-card), 0.5)', borderColor: 'rgba(var(--color-border), 0.3)'}}
							whileHover={{scale: 1.02}}
						>
							<div className={cn('flex items-center gap-3 mb-6')}>
								<FaGraduationCap className={cn('w-6 h-6 text-yellow-500')}/>
								<h3 className={cn('text-2xl font-bold')} style={{color: 'rgb(var(--color-card-foreground))'}}>
									Education
								</h3>
							</div>
							<div className={cn('space-y-3')}>
								<h4 className={cn('text-lg font-semibold')} style={{color: 'rgb(var(--color-card-foreground))'}}>
									{EDUCATION.degree}
								</h4>
								<p className={cn('text-blue-500 font-medium')}>{EDUCATION.institution}</p>
								<p className={cn('opacity-80')} style={{color: 'rgb(var(--color-card-foreground))'}}>
									{EDUCATION.location} • {EDUCATION.period}
								</p>
								<div className={cn('flex items-center gap-2 mt-4')}>
									<span className={cn('px-3 py-1 rounded-full text-sm font-medium')}
									      style={{backgroundColor: 'rgb(var(--color-secondary))', color: 'rgb(var(--color-secondary-foreground))'}}>
										CGPA: {EDUCATION.cgpa}
									</span>
								</div>
							</div>
						</motion.div>
					</motion.div>

					{/* Experience Summary */}
					<motion.div variants={itemVariants} className={cn('space-y-6')}>
						<div className={cn('p-8 rounded-2xl border border-opacity-20 backdrop-blur-sm')}
						     style={{backgroundColor: 'rgba(var(--color-card), 0.5)', borderColor: 'rgba(var(--color-border), 0.3)'}}>
							<h3 className={cn('text-2xl font-bold mb-6')} style={{color: 'rgb(var(--color-card-foreground))'}}>
								Professional Journey
							</h3>
							<div className={cn('space-y-6')}>
								{WORK_EXPERIENCE.map((exp, index) => (
									<motion.div key={index} className={cn('border-l-4 border-blue-500 pl-6 py-4')} whileHover={{x: 8}}>
										<div className={cn('flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2')}>
											<h4 className={cn('text-lg font-semibold')} style={{color: 'rgb(var(--color-card-foreground))'}}>{exp.roles[0].title}</h4>
											<span className={cn('text-sm opacity-80')} style={{color: 'rgb(var(--color-card-foreground))'}}>{exp.period}</span>
										</div>
										<div className={cn('flex items-center gap-3 mb-2')}>
											{exp.logo && (
												<Image src={exp.logo} alt={`${exp.company} logo`} width={200} height={200} className={cn('w-16 h-16 object-contain rounded-lg')}/>
											)}
											<p className={cn('text-blue-500 font-medium')}>{exp.company}</p>
										</div>
										<p className={cn('text-sm opacity-80 mb-3')} style={{color: 'rgb(var(--color-card-foreground))'}}>{exp.location} • {exp.roles[0].type}</p>
										<ul className={cn('text-sm space-y-1 opacity-90')} style={{color: 'rgb(var(--color-card-foreground))'}}>
											{exp.roles[0].description.map((desc, idx) => (
												<li key={idx} className={cn('flex items-start gap-2')}>
													<span className={cn('text-blue-500 mt-1')}>•</span>
													{desc}
												</li>
											))}
										</ul>
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}

export {AboutSection};