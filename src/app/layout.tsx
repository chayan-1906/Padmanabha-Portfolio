import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "Padmanabha Das - Full Stack Developer",
	description: "Frontend Developer specializing in Next.js, React.js, and Flutter with expertise in AI integration through Model Context Protocol development.",
};

export default function RootLayout({
	                                   children,
                                   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
		<body className={`${inter.className} transition-colors duration-300`}>
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
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
