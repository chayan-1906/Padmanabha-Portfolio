'use client';

import {motion} from 'framer-motion';
import {cn} from '@/lib/utils';
import {CTAProps} from '@/types/cta';
import {GradientButton} from '@/components/ui/gradient-button';

function CTASection({title, buttons}: CTAProps) {
	const handleCTAClick = (reason: string) => {
		const contactSection = document.getElementById('contact');
		if (contactSection) {
			window.history.pushState({}, '', `/?reason=${reason}#contact`);
			contactSection.scrollIntoView({behavior: 'smooth'});
		}
	}

	return (
		<section className={cn('py-20 px-6 relative overflow-hidden')} style={{backgroundColor: 'rgb(var(--color-background))'}}>
			<div className={cn('absolute inset-0 overflow-hidden pointer-events-none')}>
				<motion.div
					className={cn('absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl')}
					style={{background: 'linear-gradient(45deg, #6366f1, #8b5cf6)'}}
					animate={{scale: [1, 1.2, 1], rotate: [0, 180, 360]}}
					transition={{duration: 20, repeat: Infinity, ease: 'linear'}}
				/>
			</div>

			<motion.div className={cn('max-w-4xl mx-auto text-center relative z-10')} initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, margin: '-100px'}}
			            transition={{duration: 0.6}}>
				<h2 className={cn('text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent')}>{title}</h2>

				<div className={cn('flex flex-wrap gap-4 justify-center')}>
					{buttons.map((button, index) => (
						<GradientButton key={index} className={cn('px-8 py-4 text-lg')} whileHover={{scale: 1.05, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)'}} whileTap={{scale: 0.95}}
						                onClick={() => handleCTAClick(button.reason)}>
							{button.label}
						</GradientButton>
					))}
				</div>
			</motion.div>
		</section>
	);
}

export {CTASection};
