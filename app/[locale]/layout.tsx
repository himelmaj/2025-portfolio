import "@/styles/globals.css";
import { cn } from '@/lib/utils';
//  i18n

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, Locale } from '@/i18n/routing';

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

    if (!locales.includes(locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={cn(fontsVaribles, "bg-noise")}>
                <NextIntlClientProvider messages={messages}>
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