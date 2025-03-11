import React from 'react'
import { useTranslations } from 'next-intl';

const Work = () => {
    const t = useTranslations('work');
  return (
    <div>
        <h1>{t('title')}</h1>
        <p>{t('welcome')}</p>
    </div>
  )
}

export default Work