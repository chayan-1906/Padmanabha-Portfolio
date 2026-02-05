"use client";

import {motion, Variants} from "framer-motion";
import {FaCertificate, FaExternalLinkAlt} from "react-icons/fa";
import {cn} from "@/lib/utils";
import {Certification, CertificationsClientProps} from "@/types/certification";

function CertificationsClient({certificationsSection, certifications}: CertificationsClientProps) {
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

	const cardVariants: Variants = {
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
		<section id={certificationsSection.name.toLowerCase()} className={cn('py-32 px-6 relative overflow-hidden')} style={{backgroundColor: 'rgb(var(--color-background))'}}>
			{/* Background Elements */}
			<div className={cn('absolute inset-0 overflow-hidden pointer-events-none')}>
				<motion.div
					className={cn('absolute top-20 right-20 w-96 h-96 rounded-full opacity-5 blur-3xl')}
					style={{background: 'linear-gradient(45deg, #f59e0b, #ef4444)'}}
					animate={{rotate: [0, 360], scale: [1, 1.2, 1]}}
					transition={{duration: 20, repeat: Infinity, ease: 'linear'}}
				/>
			</div>

			<motion.div variants={containerVariants} initial={'hidden'} whileInView={'visible'} viewport={{once: true, margin: '-100px'}} className={cn('max-w-6xl mx-auto relative z-10')}>
				{/* Section Header */}
				<motion.div variants={itemVariants} className={cn('text-center mb-20')}>
					<h2 className={cn('text-5xl md:text-7xl font-bold mb-6 leading-16 md:leading-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent')}>{certificationsSection.title}</h2>
					<p className={cn('text-xl opacity-80 max-w-3xl mx-auto leading-relaxed')} style={{color: 'rgb(var(--color-foreground))'}}>{certificationsSection.subtitle}</p>
				</motion.div>

				{/* Certifications Grid */}
				<div className={cn('grid md:grid-cols-2 lg:grid-cols-3 gap-8')}>
					{certifications.map((certificate: Certification, index: number) => (
						<motion.div key={certificate.credentialId} variants={cardVariants} className={cn('group relative')} custom={index}>
							<motion.div
								className={cn('p-6 rounded-2xl border border-opacity-20 backdrop-blur-sm h-full flex flex-col')}
								style={{backgroundColor: 'rgba(var(--color-card), 0.5)', borderColor: 'rgba(var(--color-border), 0.3)'}}
								whileHover={{
									scale: 1.05,
									rotateY: 5,
									boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
								}}
								transition={{duration: 0.3}}
							>
								{/* Certificate Icon */}
								<div className={cn('flex items-center justify-center mb-4')}>
									<motion.div className={cn('p-4 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 text-white')} whileHover={{rotate: 360}} transition={{duration: 0.6}}>
										<FaCertificate className={cn('w-8 h-8')}/>
									</motion.div>
								</div>

								{/* Certificate Details */}
								<div className={cn('flex-1 text-center')}>
									<h3 className={cn('text-lg font-bold mb-2')} style={{color: 'rgb(var(--color-card-foreground))'}}>{certificate.name}</h3>
									<p className={cn('text-sm text-blue-500 font-medium mb-2')}>{certificate.issuer}</p>
									<p className={cn('text-xs opacity-70 mb-4')} style={{color: 'rgb(var(--color-card-foreground))'}}>{certificate.date}</p>
								</div>

								<motion.a
									href={certificate.url}
									target={'_blank'}
									rel={'noopener noreferrer'}
									className={cn('flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-medium transition-colors')}
									style={{backgroundColor: 'rgba(var(--color-primary), 0.1)', color: 'rgb(var(--color-primary))'}}
									whileHover={{scale: 1.05}}
									whileTap={{scale: 0.95}}
								>
									<FaExternalLinkAlt className={cn('w-3 h-3')}/>
									View Certificate
								</motion.a>

								{/* Hover Effect */}
								<motion.div
									className={cn('absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300')}
									style={{pointerEvents: 'none'}}/>
							</motion.div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}

export {CertificationsClient};
