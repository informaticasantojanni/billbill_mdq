import React from 'react'
import useNavDesktop from './useNavDesktop'
import Logo from '../../../assets/logos/logo_billbill_2.svg';
// import { ReactComponent as Logo } from '../../../assets/logos/logo_billbill_1.svg';

const LogoDesktop = () => {

    const {
        logoSize,
        LOGO_SIZE } = useNavDesktop();

    return (
        <div className="navDesktop__logo">
            <img
                style={{
                    width: `${LOGO_SIZE + (LOGO_SIZE * logoSize)}px`,
                    height: `${LOGO_SIZE + (LOGO_SIZE * logoSize)}px`
                }}
                src={Logo}
                alt="Logo Bill&Bill"></img>
        </div>
    )
}

export default LogoDesktop