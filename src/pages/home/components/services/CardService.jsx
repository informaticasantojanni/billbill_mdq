import React from "react";
import { FaWifi, FaSnowflake, FaConciergeBell, FaUmbrellaBeach, FaLaptopHouse, FaThermometerFull, FaLock } from "react-icons/fa";
import { MdSignalWifi2Bar, MdLaptopChromebook } from 'react-icons/md';

import useHomeServices from './useHomeServices';

const CardService = ({ iconComponent, text }) => {
    const iconMapping = {
        wifi: FaWifi,
        snowflake: FaSnowflake,
        bell: FaConciergeBell,
        beach: FaUmbrellaBeach,
        laptop: FaLaptopHouse,
        thermometer: FaThermometerFull,
        lock: FaLock,
        wifiSignal: MdSignalWifi2Bar,
        laptopChromebook: MdLaptopChromebook,
    };

    const IconComponent = iconMapping[iconComponent];
    const { t } = useHomeServices();

    return (
        <div className="cardService__content">
            <div className="cardService__icon">
                <IconComponent size={40} className="mx-2 my-2" />
            </div>
            <p className='cardService__text'>{t(text)}</p>
        </div>
    );
};

export default CardService;
