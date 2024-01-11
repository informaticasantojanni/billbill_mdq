import React from 'react'
import "./HomeContact.css"
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HomeContact = ({mb}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'home' });

  return (
    <div className= {`homeContact  ${mb}`}>
      <div className="main-container">
        <div className="homeContact--container">

          <p>Contacto en desarrollo</p>

        </div>
      </div>

    </div>

  )
}

export default HomeContact