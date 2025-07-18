'use client';

import {motion, Variants} from 'framer-motion';
import {FaCalendarAlt, FaMapMarkerAlt, FaTrophy} from 'react-icons/fa';
import {cn} from '@/lib/utils';
import {EDUCATIONS, SECTIONS} from '@/constants';
import Image from "next/image";

function EducationSection() {
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
		<section id={SECTIONS.educationSectionConfig.name.toLowerCase()} className={cn('pt-32 pb-24 px-6 relative overflow-hidden')} style={{backgroundColor: 'rgb(var(--color-background))'}}>
			{/* Background Elements */}
			<div className={cn('absolute inset-0 overflow-hidden pointer-events-none')}>
				<motion.div
					className={cn('absolute top-20 right-20 w-96 h-96 rounded-full opacity-5 blur-3xl')}
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
						{SECTIONS.educationSectionConfig.title}
					</h2>
					<p className={cn('text-xl opacity-80 max-w-3xl mx-auto leading-relaxed')} style={{color: 'rgb(var(--color-foreground))'}}>
						{SECTIONS.educationSectionConfig.subtitle}
					</p>
				</motion.div>

				{/* Education Cards */}
				<div className={cn('space-y-8')}>
					{EDUCATIONS.map((education, index) => (
						<motion.div key={index} variants={itemVariants} className={cn('max-w-4xl mx-auto')}>
							<motion.div
								className={cn('p-8 rounded-2xl border border-opacity-20 backdrop-blur-sm')}
								style={{backgroundColor: 'rgba(var(--color-card), 0.5)', borderColor: 'rgba(var(--color-border), 0.3)'}}
								whileHover={{
									scale: 1.02,
									boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
								}}
								transition={{duration: 0.3}}
							>
								{/* Institution Header */}
								<div className={cn('flex items-center gap-4 mb-6')}>
									<motion.div className={cn('p-4 rounded-full')}>
										<Image src={education.logoUrl} alt={'university-logo'} width={200} height={200} className={'w-20'}/>
									</motion.div>
									<div>
										<h3 className={cn('text-2xl font-bold mb-1')} style={{color: 'rgb(var(--color-card-foreground))'}}>{education.institution}</h3>
										<div className={cn('flex items-center gap-4 text-sm opacity-80')} style={{color: 'rgb(var(--color-card-foreground))'}}>
											<div className={cn('flex items-center gap-1')}>
												<FaMapMarkerAlt className={cn('w-3 h-3')}/>
												<span>{education.location}</span>
											</div>
											<div className={cn('flex items-center gap-1')}>
												<FaCalendarAlt className={cn('w-3 h-3')}/>
												<span>{education.period}</span>
											</div>
										</div>
									</div>
								</div>

								{/* Degree Info */}
								<div className={cn('mb-6')}>
									<h4 className={cn('text-xl font-semibold mb-2')} style={{color: 'rgb(var(--color-card-foreground))'}}>{education.degree}</h4>
									<div className={cn('flex items-center gap-2 mb-4')}>
										<span className={cn('text-sm')} style={{color: 'rgb(var(--color-card-foreground))'}}>CGPA:</span>
										<motion.span className={cn('px-3 py-1 rounded-full text-sm font-bold text-white bg-gradient-to-r from-green-500 to-emerald-500')} whileHover={{scale: 1.05}}>
											{education.cgpa}
										</motion.span>
									</div>
								</div>

								{/* Highlights */}
								<div className={cn('space-y-3')}>
									<h5 className={cn('text-lg font-semibold mb-3')} style={{color: 'rgb(var(--color-card-foreground))'}}>Highlights</h5>
									<div className={cn('grid md:grid-cols-2 gap-3')}>
										{education.highlights.map((highlight, highlightIndex) => (
											<motion.div
												key={highlightIndex}
												className={cn('flex items-center gap-3 p-3 rounded-xl')}
												style={{backgroundColor: 'rgba(var(--color-secondary), 0.3)'}}
												whileHover={{scale: 1.02, x: 4}}
												initial={{opacity: 0, x: -20}}
												whileInView={{opacity: 1, x: 0}}
												transition={{delay: highlightIndex * 0.1}}
											>
												<FaTrophy className={cn('w-4 h-4 text-yellow-500')}/>
												<span className={cn('text-sm font-medium')} style={{color: 'rgb(var(--color-card-foreground))'}}>{highlight}</span>
											</motion.div>
										))}
									</div>
								</div>
							</motion.div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}

export {EducationSection};
