import "@/styles/globals.css";
import { cn } from '@/lib/utils';

//  i18n

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, Locale } from '@/i18n/routing';

// fonts

import { geistSans, geistMono, robotoSans, robotoMono } from '@/lib/fonts';

// theme

import { ThemeProvider } from "@/context/theme-provider"


type LayoutProps = {
    children: React.ReactNode;
    params: Promise<{ locale: Locale }>;
}


export default async function LocaleLayout({ children, params }: LayoutProps) {

    const { locale } = await params;

    if (!locales.includes(locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={cn(geistSans, geistMono, robotoSans, robotoMono)}>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}