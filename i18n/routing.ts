import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en-US', 'es-ES', 'ca-ES'],
    defaultLocale: 'en-US',
});

export type Locale = typeof routing.locales[number];

export const { locales, defaultLocale } = routing;