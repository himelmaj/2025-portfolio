import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'es', 'ca'],
    defaultLocale: 'en',
    localeDetection: true
});

export type Locale = typeof routing.locales[number];

export const { locales, defaultLocale } = routing;