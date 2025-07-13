import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import {cn} from "@/lib/utils";
import React from "react";
import {PERSONAL_INFO} from "@/constants";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
	description: PERSONAL_INFO.description,
};

function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang={'en'} suppressHydrationWarning>
		<body className={cn(inter.className, 'transition-colors duration-300')}>
		<ThemeProvider
			attribute={'class'}
			defaultTheme={'system'}
			enableSystem
			disableTransitionOnChange={false}
			forcedTheme={undefined}
		>
			{children}
		</ThemeProvider>
		</body>
		</html>
	);
}

export default RootLayout;