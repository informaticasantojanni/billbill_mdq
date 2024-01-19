import React from "react";
import useHomeServices from './useHomeServices';
import { Link } from 'react-router-dom';
import "../../../../../src/styles.css"

const CardService = ({ name: name, icon: ServiceIcon }) => {

    const { t } = useHomeServices();

    return (
        <div className="cardService__content">
            <Link to="/services"><div >
            <ServiceIcon width={100} height={100} />
            </div></Link>
            <p className='textSize1 fontStyle3 text-align mt-2'>{t(name)}</p>
        </div>
    );
};

export default CardService;
