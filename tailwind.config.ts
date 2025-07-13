import type {Config} from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: ["class", '[data-theme="dark"]'],
	theme: {
		extend: {
			colors: {
				border: "hsl(var(--color-border))",
				background: "hsl(var(--color-background))",
				foreground: "hsl(var(--color-foreground))",
				primary: {
					DEFAULT: "hsl(var(--color-primary))",
					foreground: "hsl(var(--color-primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--color-secondary))",
					foreground: "hsl(var(--color-secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--color-muted))",
					foreground: "hsl(var(--color-muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--color-accent))",
					foreground: "hsl(var(--color-accent-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--color-card))",
					foreground: "hsl(var(--color-card-foreground))",
				},
			},
		},
	},
	plugins: [],
};

export default config;
