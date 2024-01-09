import React, { useEffect, useState } from 'react';
import './navbar.css';
import NavDesktop from './components/NavDesktop';
import NavMobile from './components/NavMobile';
import useNavbar from './useNavbar';


const Navbar = () => {

// We deconstruct the variables that we need from useNavbar
// All the logic is in useNavbar

    const { mobileView } = useNavbar();

    return (
        <div>
            {(mobileView) ? <NavMobile /> : <NavDesktop />}
        </div>
    )

}

export default Navbar