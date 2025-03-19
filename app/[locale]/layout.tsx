import "@/styles/globals.css";
import { cn } from '@/lib/utils';

//  i18n

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, Locale } from '@/i18n/routing';

// fonts

import { inter, jetbrains, roboto } from "@/lib/fonts";

// theme

import { ThemeProvider } from "@/context/theme-provider"

import Header from "@/components/header";

import type { Metadata } from "next";


type LayoutProps = {
    children: React.ReactNode;
    params: Promise<{ locale: Locale }>;
}

export const metadata: Metadata = {
    title: "Himel Majumder"
};


export default async function LocaleLayout({ children, params }: LayoutProps) {

    const { locale } = await params;

    if (!locales.includes(locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={cn(inter.variable, jetbrains.variable, roboto.variable)}>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <div className="flex flex-col min-h-screen p-8">
                            <Header />
                            {children}
                        </div>

                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}