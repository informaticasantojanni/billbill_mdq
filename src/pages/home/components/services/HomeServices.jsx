import React from 'react';
import './HomeServices.css';
import "../../../../../src/styles.css"

import servicesItems from "./servicesItems"
import SwiperServices from './SwiperServices'
import useHomeServices from './useHomeServices';


const HomeServices = ({ mb }) => {

    const { t } = useHomeServices()

    return (
        <div className={`homeServices ${mb}`}>
            <div className="main-container homeServices-container">
                <div className="homeServices__header">
                    <h1 className='mb-3 titleSize3 fontStyle1 fontColor2 '>{t('home_services_title_1')}</h1>
                </div>
                <div className="homeServices__body">
                    <SwiperServices servicesItems={servicesItems} />
                </div>
            </div>
        </div>
    )
}

export default HomeServices
