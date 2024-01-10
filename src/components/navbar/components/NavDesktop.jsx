import React from 'react'
import SwitchLanguage from './SwitchLanguage';
// import { ReactComponent as Logo } from '../../../assets/logos/logo_billbill_1.svg';

import '../../navbar/navbar.css';
import "../../../../src/styles.css"
import useNavDesktop from './useNavDesktop';
import LogoDesktop from './LogoDesktop';
import Menu from './Menu';
import Social from './Social'

const NavDesktop = () => {
  const { alpha, logoSize, NAV_HX } = useNavDesktop();

  return (
    <nav>
      <div className="navDesktop--container"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, ${alpha}))`,
          clipPath: `polygon(0 0, 100% 0, 100% 50%, 0 ${NAV_HX + (NAV_HX * logoSize)}%)`
        }}>

        <LogoDesktop /> {/* Logo Container */}

        <div className='navDesktop--containerInner'>
          <Menu /> {/* Menu Container */}
          <Social /> {/* Social Container */}
          <SwitchLanguage />
        </div>

      </div>
    </nav>
  )
}

export default NavDesktop