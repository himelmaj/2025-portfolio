import "@/styles/globals.css";
import { cn } from '@/lib/utils';
//  i18n

import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing, Locale } from '@/i18n/routing';

// fonts

import { fontsVaribles } from "@/lib/fonts";

// theme

import { ThemeProvider } from "@/context/theme-provider"

import Navbar from "@/components/layout/navbar";

import type { Metadata } from "next";


type LayoutProps = {
    children: React.ReactNode;
    params: Promise<{ locale: Locale }>;
}

export const metadata: Metadata = {
    title: "Himel Majumder",
    description: "Himel Majumder is a web developer and designer interested in ideas surrounding technology, design, the arts, e-sports, & artificial intelligence."
};


export default async function LocaleLayout({ children, params }: LayoutProps) {

    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={cn(fontsVaribles, "bg-noise")}>

                <div className="fixed top-0 left-0 w-full bg-green-600 text-white text-center py-1 z-50 text-[10px]">
                    Project in development. Some features may not work as expected.
                </div>

                <NextIntlClientProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <div className="flex flex-col min-h-screen p-8">
                            <header>
                                <Navbar />
                            </header>

                            <main className="flex flex-col flex-1">
                                {children}
                            </main>

                        </div>

                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}