import React from 'react'
import "./HomeServices.css"
import { useTranslation } from 'react-i18next';

const HomeServices = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'home' });

  return (
    <div className='main-container'>
      <div className="homeServices">
        <p>Servicios en desarrollo</p>
      </div>
    </div>
  )
}

export default HomeServices