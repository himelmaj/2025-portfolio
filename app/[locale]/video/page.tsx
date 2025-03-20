import React from 'react'
import { useTranslations } from 'next-intl';

const Video = () => {
  const t = useTranslations('video');
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

export default Video