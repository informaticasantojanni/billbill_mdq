import React from 'react'
import "./LocationMap.css"
import "../../../../src/styles.css"
import useLocation from '../useLocation';

const LocationMap = () => {
    const { t } = useLocation();

    return (
        <div className="main-container">

            <div className='locationMap__header'>
            <h2 className='titleSize3 fontStyle1 text-align mt-5 mb-2'>{t('location_text_1')}</h2>
            </div>

            <div className="locationMap__iframe mb-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.463646920889!2d-57.5452935!3d-38.0129692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc238433de95%3A0x5d70d03822d7e6dd!2sCSA%2C%20Las%20Heras%202821%2C%20B7602%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1705467137941!5m2!1ses!2sar"
                    width="100%"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>

    )
}

export default LocationMap
