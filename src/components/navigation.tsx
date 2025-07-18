'use client';

import {useEffect, useRef, useState} from 'react';
import {useTheme} from 'next-themes';
import {AnimatePresence, motion} from 'framer-motion';
import {ChevronDown, Menu, Monitor, Moon, Sun, X} from 'lucide-react';
import {cn} from '@/lib/utils';
import {PERSONAL_INFO, SECTIONS} from '@/constants';

function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
	const {theme, setTheme} = useTheme();
	const [mounted, setMounted] = useState(false);
	const navRef = useRef<HTMLDivElement>(null);
	const themeDropdownRef = useRef<HTMLDivElement>(null);

	const navItems = [
		{name: 'Home', href: '#home'},
		...Object.values(SECTIONS).map(section => ({
			name: section.name,
			href: `#${section.name.toLowerCase()}`
		}))
	];

	const themes = [
		{value: 'light', label: 'Light', icon: <Sun className={cn('h-4 w-4')}/>},
		{value: 'dark', label: 'Dark', icon: <Moon className={cn('h-4 w-4')}/>},
		{value: 'system', label: 'System', icon: <Monitor className={cn('h-4 w-4')}/>}
	];

	const scrollToSection = (href: string) => {
		setTimeout(() => {
			const element = document.querySelector(href);
			if (element) {
				element.scrollIntoView({behavior: 'smooth'});
			}
		}, 100);
		setIsOpen(false);
	}

	useEffect(() => {
		setMounted(true);
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		const handleClickOutside = (event: MouseEvent) => {
			if (navRef.current && !navRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
			if (themeDropdownRef.current && !themeDropdownRef.current.contains(event.target as Node)) {
				setThemeDropdownOpen(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	if (!mounted) {
		return null;
	}

	const activeTheme = themes.find(t => t.value === theme) || themes[2];

	return (
		<motion.nav
			ref={navRef}
			initial={{y: -100}}
			animate={{y: 0}}
			className={cn('fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-300', scrolled ? 'bg-opacity-80 backdrop-blur-lg shadow-lg' : 'bg-opacity-60 backdrop-blur-sm')}
			style={{
				backgroundColor: scrolled ? 'rgba(var(--color-card), 0.8)' : 'rgba(var(--color-card), 0.6)',
				borderColor: 'rgba(var(--color-border), 0.3)',
			}}
		>
			<div className={cn('flex items-center justify-between px-6 py-4')}>
				{/* Logo */}
				<motion.div whileHover={{scale: 1.05}} className={cn('font-bold text-xl cursor-pointer')} style={{color: 'rgb(var(--color-card-foreground))'}} onClick={() => scrollToSection('#home')}>
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
							className={cn('text-sm font-medium transition-colors duration-200 hover:text-blue-500 cursor-pointer')}
							style={{color: 'rgb(var(--color-card-foreground))'}}
							whileHover={{scale: 1.1}}
							whileTap={{scale: 0.95}}
						>
							{item.name}
						</motion.button>
					))}

					{/* Theme Dropdown as Nav Item */}
					<div className={cn('relative')} ref={themeDropdownRef}>
						<motion.button
							onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
							className={cn('flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:text-blue-500 cursor-pointer')}
							style={{color: 'rgb(var(--color-card-foreground))'}}
							whileHover={{scale: 1.1}}
							whileTap={{scale: 0.95}}
						>
							{activeTheme.icon}
							<span>Theme</span>
							<ChevronDown className={cn('h-3 w-3')}/>
						</motion.button>

						<AnimatePresence>
							{themeDropdownOpen && (
								<motion.div
									initial={{opacity: 0, y: -10}}
									animate={{opacity: 1, y: 0}}
									exit={{opacity: 0, y: -10}}
									className={cn('absolute top-full right-0 mt-2 py-2 w-32 rounded-md shadow-lg z-50')}
									style={{backgroundColor: 'rgb(var(--color-background))', borderColor: 'rgb(var(--color-border))', border: '1px solid'}}
								>
									{themes.map((themeOption) => (
										<button
											key={themeOption.value}
											onClick={() => {
												setTheme(themeOption.value);
												setThemeDropdownOpen(false);
											}}
											className={cn('flex items-center w-full px-3 py-2 text-sm gap-2 transition-colors hover:bg-secondary cursor-pointer')}
											style={{color: 'rgb(var(--color-card-foreground))'}}
										>
											{themeOption.icon}
											{themeOption.label}
										</button>
									))}
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>

				{/* Mobile Menu Button */}
				<div className={cn('md:hidden')}>
					<motion.button
						onClick={() => setIsOpen(!isOpen)}
						className={cn('p-2 rounded-lg cursor-pointer')}
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
									className={cn('block w-full text-left text-sm font-medium transition-colors duration-200 hover:text-blue-500 py-2 cursor-pointer')}
									style={{color: 'rgb(var(--color-card-foreground))'}}
									whileHover={{x: 8}}
								>
									{item.name}
								</motion.button>
							))}

							{/* Mobile Theme Options */}
							<div className={cn('border-t pt-4')} style={{borderColor: 'rgba(var(--color-border), 0.2)'}}>
								<p className={cn('text-xs font-medium mb-2 opacity-60')} style={{color: 'rgb(var(--color-card-foreground))'}}>Theme</p>
								{themes.map((themeOption) => (
									<motion.button
										key={themeOption.value}
										onClick={() => {
											setTheme(themeOption.value);
											setIsOpen(false);
										}}
										className={cn('flex items-center py-2 w-full text-left text-sm font-medium transition-colors duration-200 hover:text-blue-500 gap-2 cursor-pointer')}
										style={{color: 'rgb(var(--color-card-foreground))'}}
										whileHover={{x: 8}}
									>
										{themeOption.icon}
										{themeOption.label}
									</motion.button>
								))}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
}

export {Navigation};
