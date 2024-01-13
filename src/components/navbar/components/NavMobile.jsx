import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../../navbar/navbar.css';
import '../../../../src/styles.css'
import { navItems } from "./navItems"
import Hamburger from './Hamburger';
import { useTranslation } from 'react-i18next'
import SwitchLanguage from './SwitchLanguage';


const NavMobile = () => {
    //Constants for i18n
    const { t } = useTranslation('translation', { keyPrefix: 'navbar' });
    // const [locale, setLocale] = useState()

    const [menuOpen, setMenuOpen] = useState(false);
    const [hamburgerCheckbox, setHamburgerCheckbox] = useState(false);

    //Local Hooks
    // const handleChange = (event) => setLocale(event.target.value)

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
        setHamburgerCheckbox(!hamburgerCheckbox);
    };

    // useEffect(() => {
    //     setLocale(i18n.resolvedLanguage);
    //     console.log("Language detected is: ", i18n.resolvedLanguage)
    // }, [])

    // useEffect(() => {
    //     i18n.changeLanguage(locale)
    // }, [locale])

    useEffect(() => {
        menuOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible';
    }, [menuOpen]);


    return (
        <nav>
            <div className="navMobile--container">
                {/* HEADER */}
                < div className={menuOpen ? "navMobile__header expanded" : "navMobile__header"}>
                    <div className="navMobile__header__content">
                        <div>
                            <p className="titleSize1 fontStyle5 fontColor8">BILL & BILL</p>
                        </div>
                        <div>
                            <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} hamburgerCheckbox={hamburgerCheckbox} setHamburgerCheckbox={setHamburgerCheckbox} />
                        </div>

                        {/* <SwitchLanguage /> */}
                        {/* <div>
                            <select value={locale} onChange={handleChange}>
                                <option value="es">Español</option>
                                <option value="en">English</option>
                            </select>
                        </div> */}
                    </div>
                </div>


                <div className={menuOpen ? "navMobile__body visible" : "navMobile__body"}>

                    <ul>
                        {navItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    {/* < Link className="linkTo textLinks" to={item.link} onClick={handleMenuToggle} >{item.label}</Link> */}
                                    < Link className="linkTo textLinks" to={item.link} onClick={handleMenuToggle} >{t(item.label)}</Link>
                                </li>
                            )
                        })}
                        <li>
                            <SwitchLanguage />
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default NavMobile