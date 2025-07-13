"use client"

import {ChevronDown, Monitor, Moon, Sun} from "lucide-react"
import {useTheme} from "next-themes"
import {Button} from "@/components/ui/button"
import {useEffect, useState} from "react"

export function ThemeToggle() {
	const {theme, setTheme} = useTheme()
	const [mounted, setMounted] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	const themes = [
		{value: "light", label: "Light", icon: <Sun className="h-4 w-4"/>},
		{value: "dark", label: "Dark", icon: <Moon className="h-4 w-4"/>},
		{value: "system", label: "System", icon: <Monitor className="h-4 w-4"/>}
	]

	const activeTheme = themes.find(t => t.value === theme) || themes[2]

	return (
		<>
			<div className="fixed top-8 right-8 z-50">
				<Button
					variant="ghost"
					onClick={() => setIsOpen(!isOpen)}
					className="flex items-center gap-2 px-3"
					style={{
						backgroundColor: 'hsl(var(--color-card))',
						borderColor: 'hsl(var(--color-border))',
						border: '1px solid'
					}}
				>
					{activeTheme.icon}
					<span className="text-sm">{activeTheme.label}</span>
					<ChevronDown className="h-3 w-3"/>
				</Button>

				{isOpen && (
					<div
						className="absolute top-full right-0 mt-2 py-2 w-32 rounded-md shadow-lg z-50"
						style={{
							backgroundColor: 'hsl(var(--color-card))',
							borderColor: 'hsl(var(--color-border))',
							border: '1px solid'
						}}
					>
						{themes.map((themeOption) => (
							<button
								key={themeOption.value}
								onClick={() => {
									setTheme(themeOption.value)
									setIsOpen(false)
								}}
								className="w-full px-3 py-2 text-left text-sm flex items-center gap-2 transition-colors"
								style={{
									color: theme === themeOption.value ? 'hsl(var(--color-primary))' : 'hsl(var(--color-foreground))',
									backgroundColor: 'transparent'
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.backgroundColor = 'hsl(var(--color-accent))'
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.backgroundColor = 'transparent'
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
					className="fixed inset-0 z-40"
					onClick={() => setIsOpen(false)}
				/>
			)}
		</>
	)
}
