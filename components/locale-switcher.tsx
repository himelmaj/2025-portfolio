"use client";

import { useParams } from 'next/navigation';
import { Locale, locales } from '@/i18n/routing';
import { useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';
import Dot from './ui/dot';

const LocaleSwitcher = () => {

    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();
    const t = useTranslations("locales");
    const currentLocale = useLocale();

    const handleChange = (locale: Locale) => {
        startTransition(() => {
            router.replace(
                // @ts-expect-error -- TypeScript will validate that only known `params`
                // are used in combination with a given `pathname`. Since the two will
                // always match for the current route, we can skip runtime checks.
                { pathname, params },
                { locale: locale }
            );
        });
    };

    return (
        <div className='flex flex-col gap-2 **:cursor-pointer'>
            {locales.map((locale) => (
                <button key={locale} disabled={isPending} onClick={() => handleChange(locale)} className='flex items-center'>
                    <span className="mr-2 capitalize"> {t(`${locale}`)}</span>
                    <Dot className={`h-2 w-2 ${locale === currentLocale ? "rounded-none" : "opacity-0"}`} />
                </button>
            ))}
        </div>
    )
}

export default LocaleSwitcher