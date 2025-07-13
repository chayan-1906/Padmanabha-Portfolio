"use client";

import {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import {Moon, Sun, Monitor, ChevronDown} from "lucide-react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

function ThemeToggle() {
	const {theme, setTheme} = useTheme();
	const [mounted, setMounted] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const themes = [
		{value: 'light', label: 'Light', icon: <Sun className={cn('h-4 w-4')}/>},
		{value: 'dark', label: 'Dark', icon: <Moon className={cn('h-4 w-4')}/>},
		{value: 'system', label: 'System', icon: <Monitor className={cn('h-4 w-4')}/>}
	];

	const activeTheme = themes.find(t => t.value === theme) || themes[2];

	return (
		<>
			<div className={cn('fixed top-8 right-8 z-50')}>
				<Button
					variant={'ghost'}
					onClick={() => setIsOpen(!isOpen)}
					className={cn('flex items-center gap-2 px-3')}
					style={{
						backgroundColor: 'rgb(var(--color-card))',
						borderColor: 'rgb(var(--color-border))',
						border: '1px solid',
						color: 'rgb(var(--color-card-foreground))'
					}}
				>
					{activeTheme.icon}
					<span className={cn('text-sm')}>{activeTheme.label}</span>
					<ChevronDown className={cn('h-3 w-3')}/>
				</Button>

				{isOpen && (
					<div
						className={cn('absolute top-full right-0 mt-2 py-2 w-32 rounded-md shadow-lg z-50')}
						style={{backgroundColor: 'rgb(var(--color-card))', borderColor: 'rgb(var(--color-border))', border: '1px solid'}}>
						{themes.map((themeOption) => (
							<button
								key={themeOption.value}
								onClick={() => {
									setTheme(themeOption.value);
									setIsOpen(false);
								}}
								className={cn('w-full px-3 py-2 text-left text-sm flex items-center gap-2 transition-colors')}
								style={{
									color: 'rgb(var(--color-card-foreground))',
									backgroundColor: 'transparent'
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.backgroundColor = 'rgb(var(--color-secondary))';
									e.currentTarget.style.color = 'rgb(var(--color-secondary-foreground))';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.backgroundColor = 'transparent';
									e.currentTarget.style.color = 'rgb(var(--color-card-foreground))';
								}}
							>
								{themeOption.icon}
								{themeOption.label}
							</button>
						))}
					</div>
				)}
			</div>

			{isOpen && (
				<div
					className={cn('fixed inset-0 z-40')}
					onClick={() => setIsOpen(false)}
				/>
			)}
		</>
	);
}

export {ThemeToggle};
