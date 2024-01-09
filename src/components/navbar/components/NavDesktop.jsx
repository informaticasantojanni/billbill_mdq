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

  const { alpha } = useNavDesktop();


  return (
    <nav>
      <div className="navDesktop--container"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, ${alpha}), rgba(255,255,255, ${alpha}))`
        }}>

        {/* Logo Container */}
        <div className="navDesktop__logo">
          <LogoDesktop />
        </div>

        {/* Menu Container */}
        <div className="navDesktop__links">
          <Menu />
        </div>

        {/* Social Container */}
        <Social />

        <SwitchLanguage />
      </div>
    </nav>
  )
}

export default NavDesktop