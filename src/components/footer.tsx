'use client';

import {motion} from 'framer-motion';
import {FaArrowUp, FaEnvelope, FaGithub, FaHeart, FaLinkedin, FaPhone} from 'react-icons/fa';
import {cn} from '@/lib/utils';
import {PERSONAL_INFO, SECTIONS, SOCIAL_LINKS} from '@/constants';

function Footer() {
	const currentYear = new Date().getFullYear();

	const scrollToTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

	const scrollToSection = (href: string) => {
		setTimeout(() => {
			const element = document.querySelector(href);
			if (element) {
				element.scrollIntoView({behavior: 'smooth'});
			}
		}, 100);
	}

	return (
		<footer className={cn('relative py-16 px-6 border-t border-opacity-20')} style={{backgroundColor: 'rgb(var(--color-background))', borderColor: 'rgba(var(--color-border), 0.2)'}}>
			{/* Background Elements */}
			<div className={cn('absolute inset-0 overflow-hidden pointer-events-none')}>
				<motion.div
					className={cn('absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl')}
					style={{background: 'linear-gradient(45deg, #6366f1, #8b5cf6)'}}
					animate={{
						rotate: [0, 360],
						scale: [1, 1.2, 1],
					}}
					transition={{duration: 20, repeat: Infinity, ease: 'linear'}}
				/>
			</div>

			<div className={cn('max-w-6xl mx-auto relative z-10')}>
				<div className={cn('grid lg:grid-cols-4 gap-12 mb-16')}>
					{/* About Column */}
					<motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} className={cn('lg:col-span-2 space-y-6')}>
						<div>
							<h3 className={cn('text-2xl font-bold mb-4')} style={{color: 'rgb(var(--color-foreground))'}}>{PERSONAL_INFO.name}</h3>
							<p className={cn('text-blue-500 font-medium mb-4')}>{PERSONAL_INFO.title}</p>
							<p className={cn('opacity-80 leading-relaxed')} style={{color: 'rgb(var(--color-foreground))'}}>{PERSONAL_INFO.description}</p>
						</div>
						<div className={cn('flex items-center gap-4')}>
							{SOCIAL_LINKS.map((link) => {
								const Icon = link.name === 'GitHub' ? FaGithub : link.name === 'LinkedIn' ? FaLinkedin : link.name === 'Email' ? FaEnvelope : FaPhone;
								return (
									<motion.a
										key={link.name}
										href={link.url}
										target={link.url.startsWith('http') ? '_blank' : '_self'}
										rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
										className={cn('p-3 rounded-full transition-all duration-300')}
										style={{
											backgroundColor: 'rgba(var(--color-card), 0.5)',
											color: 'rgb(var(--color-card-foreground))',
											border: '1px solid rgba(var(--color-border), 0.3)',
										}}
										whileHover={{
											scale: 1.1,
											backgroundColor: 'rgba(var(--color-card), 0.8)',
										}}
										whileTap={{scale: 0.9}}
									>
										<Icon className={cn('w-5 h-5')}/>
									</motion.a>
								);
							})}
						</div>
					</motion.div>

					{/* Quick Links */}
					<motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.2}} className={cn('space-y-6')}>
						<h4 className={cn('text-lg font-semibold')} style={{color: 'rgb(var(--color-foreground))'}}>Quick Links</h4>
						<div className={cn('space-y-3')}>
							{Object.values(SECTIONS).map((section) => (
								<motion.button
									key={section.name}
									onClick={() => scrollToSection(`#${section.name.toLowerCase()}`)}
									className={cn('block text-left opacity-80 transition-all duration-300 hover:opacity-100 hover:text-blue-500')}
									style={{color: 'rgb(var(--color-foreground))'}}
									whileHover={{x: 4}}
								>
									{section.name}
								</motion.button>
							))}
						</div>
					</motion.div>

					{/* Contact Info */}
					<motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.4}} className={cn('space-y-6')}>
						<h4 className={cn('text-lg font-semibold')} style={{color: 'rgb(var(--color-foreground))'}}>Get In Touch</h4>
						<div className={cn('space-y-3')}>
							<motion.a
								href={`mailto:${PERSONAL_INFO.email}`}
								className={cn('block opacity-80 transition-all duration-300 hover:opacity-100 hover:text-blue-500')}
								style={{color: 'rgb(var(--color-foreground))'}}
								whileHover={{x: 4}}
							>
								{PERSONAL_INFO.email}
							</motion.a>
							<motion.a
								href={`tel:${PERSONAL_INFO.phone}`}
								className={cn('block opacity-80 transition-all duration-300 hover:opacity-100 hover:text-blue-500')}
								style={{color: 'rgb(var(--color-foreground))'}}
								whileHover={{x: 4}}
							>
								{PERSONAL_INFO.phone}
							</motion.a>
							<motion.p className={cn('opacity-80')} style={{color: 'rgb(var(--color-foreground))'}} whileHover={{x: 4}}>
								{PERSONAL_INFO.location}
							</motion.p>
						</div>
					</motion.div>
				</div>

				{/* Bottom Bar */}
				<motion.div
					initial={{opacity: 0}}
					whileInView={{opacity: 1}}
					transition={{delay: 0.6}}
					className={cn('flex flex-col md:flex-row items-center justify-between pt-8 border-t border-opacity-20')}
					style={{borderColor: 'rgba(var(--color-border), 0.2)'}}
				>
					<div className={cn('flex items-center gap-2 text-sm opacity-80 mb-4 md:mb-0')} style={{color: 'rgb(var(--color-foreground))'}}>
						<span>© {currentYear} {PERSONAL_INFO.name}. Made with</span>
						<motion.div
							animate={{
								scale: [1, 1.2, 1],
								rotate: [0, 10, -10, 0],
							}}
							transition={{duration: 2, repeat: Infinity, ease: 'easeInOut'}}
						>
							<FaHeart className={cn('w-4 h-4 text-red-500')}/>
						</motion.div>
						<span>and Next.js</span>
					</div>

					{/* Back to Top Button */}
					<motion.button
						onClick={scrollToTop}
						className={cn('flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300')}
						style={{
							backgroundColor: 'rgba(var(--color-card), 0.5)',
							color: 'rgb(var(--color-card-foreground))',
							border: '1px solid rgba(var(--color-border), 0.3)',
						}}
						whileHover={{
							scale: 1.05,
							backgroundColor: 'rgba(var(--color-card), 0.8)',
						}}
						whileTap={{scale: 0.95}}
					>
						<span>Back to Top</span>
						<motion.div animate={{y: [0, -2, 0]}} transition={{duration: 1.5, repeat: Infinity, ease: 'easeInOut'}}>
							<FaArrowUp className={cn('w-4 h-4')}/>
						</motion.div>
					</motion.button>
				</motion.div>
			</div>
		</footer>
	);
}

export {Footer};
