import React from "react";
import { FaWifi, FaSnowflake, FaConciergeBell, FaUmbrellaBeach, FaLaptopHouse, FaThermometerFull, FaLock } from "react-icons/fa";
import { MdSignalWifi2Bar, MdLaptopChromebook } from 'react-icons/md';
import useHomeServices from './useHomeServices';
import { Link } from 'react-router-dom';
import "../../../../../src/styles.css"

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
            <Link to="/services"><div className="cardService__icon">
                <IconComponent size={40} className="text-align mx-2 my-2 " />
            </div></Link>
            <p className='textSize1 fontStyle3 text-align mt-2'>{t(text)}</p>
        </div>
    );
};

export default CardService;
