import type {Config} from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				border: "rgb(var(--color-border) / <alpha-value>)",
				background: "rgb(var(--color-background) / <alpha-value>)",
				foreground: "rgb(var(--color-foreground) / <alpha-value>)",
				card: {
					DEFAULT: "rgb(var(--color-card) / <alpha-value>)",
					foreground: "rgb(var(--color-card-foreground) / <alpha-value>)",
				},
				secondary: {
					DEFAULT: "rgb(var(--color-secondary) / <alpha-value>)",
					foreground: "rgb(var(--color-secondary-foreground) / <alpha-value>)",
				},
			},
		},
	},
	plugins: [],
};

export default config;