'use client';

import {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {Menu, X} from 'lucide-react';
import {cn} from '@/lib/utils';
import {ThemeToggle} from '@/components/theme-toggle';
import {PERSONAL_INFO} from '@/constants';

function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navItems = [
		{name: 'Home', href: '#home'},
		{name: 'About', href: '#about'},
		{name: 'Skills', href: '#skills'},
		{name: 'Experience', href: '#experience'},
		{name: 'Projects', href: '#projects'},
		{name: 'Contact', href: '#contact'},
	];

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({behavior: 'smooth'});
		}
		setIsOpen(false);
	};

	return (
		<motion.nav
			initial={{y: -100}}
			animate={{y: 0}}
			className={cn(
				'fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-300',
				scrolled ? 'bg-opacity-80 backdrop-blur-lg shadow-lg' : 'bg-opacity-60 backdrop-blur-sm'
			)}
			style={{
				backgroundColor: scrolled ? 'rgba(var(--color-card), 0.8)' : 'rgba(var(--color-card), 0.6)',
				borderColor: 'rgba(var(--color-border), 0.3)',
			}}
		>
			<div className={cn('flex items-center justify-between px-6 py-4')}>
				{/* Logo */}
				<motion.div
					whileHover={{scale: 1.05}}
					className={cn('font-bold text-xl cursor-pointer')}
					style={{color: 'rgb(var(--color-card-foreground))'}}
					onClick={() => scrollToSection('#home')}
				>
					{PERSONAL_INFO.name.split(' ').map((word, index) => (
						<span key={index} className={index === 0 ? 'text-blue-500' : 'text-purple-500'}>
							{word}
							{index === 0 && ' '}
						</span>
					))}
				</motion.div>

				{/* Desktop Navigation */}
				<div className={cn('hidden md:flex items-center space-x-8')}>
					{navItems.map((item) => (
						<motion.button
							key={item.name}
							onClick={() => scrollToSection(item.href)}
							className={cn('text-sm font-medium transition-colors duration-200 hover:text-blue-500')}
							style={{color: 'rgb(var(--color-card-foreground))'}}
							whileHover={{scale: 1.1}}
							whileTap={{scale: 0.95}}
						>
							{item.name}
						</motion.button>
					))}
					<ThemeToggle/>
				</div>

				{/* Mobile Menu Button */}
				<div className={cn('md:hidden flex items-center gap-2')}>
					<ThemeToggle/>
					<motion.button
						onClick={() => setIsOpen(!isOpen)}
						className={cn('p-2 rounded-lg')}
						style={{color: 'rgb(var(--color-card-foreground))'}}
						whileHover={{scale: 1.1}}
						whileTap={{scale: 0.9}}
					>
						{isOpen ? <X size={24}/> : <Menu size={24}/>}
					</motion.button>
				</div>
			</div>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{opacity: 0, height: 0}}
						animate={{opacity: 1, height: 'auto'}}
						exit={{opacity: 0, height: 0}}
						className={cn('md:hidden border-t border-opacity-20 rounded-b-2xl overflow-hidden')}
						style={{borderColor: 'rgba(var(--color-border), 0.2)'}}
					>
						<div className={cn('px-6 py-4 space-y-4')}>
							{navItems.map((item) => (
								<motion.button
									key={item.name}
									onClick={() => scrollToSection(item.href)}
									className={cn('block w-full text-left text-sm font-medium transition-colors duration-200 hover:text-blue-500 py-2')}
									style={{color: 'rgb(var(--color-card-foreground))'}}
									whileHover={{x: 8}}
								>
									{item.name}
								</motion.button>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
}

export {Navigation};