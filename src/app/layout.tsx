import React from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";
import "./globals.css";
import {cn} from "@/lib/utils";
import {PERSONAL_INFO} from "@/constants";
import {ThemeProvider} from "@/components/theme-provider";

const inter: NextFont = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    metadataBase: new URL('https://padmanabha-portfolio.vercel.app'),
    title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
    description: PERSONAL_INFO.description,
    icons: {
        icon: '/favicon.svg',
    }
};

function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang={'en'} suppressHydrationWarning>
        <body className={cn(inter.className, 'transition-colors duration-300')}>
        <ThemeProvider attribute={'class'} defaultTheme={'system'} enableSystem disableTransitionOnChange={false} forcedTheme={undefined}>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}

export default RootLayout;
