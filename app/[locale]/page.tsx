import React from 'react'
import { useTranslations } from 'next-intl';

const Home = () => {
    const t = useTranslations('home');
    return (
        <div>
            <h1>
                {t('title')}
            </h1>

            <p>
                {t('welcome')}
            </p>
        </div>

    )
}

export default Home