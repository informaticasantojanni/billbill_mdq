import React from 'react'
import { Link } from 'react-router-dom';
import { navItems } from "./navItems"
import useNavDesktop from './useNavDesktop';
import '../../navbar/navbar.css';
import "../../../../src/styles.css"

const Menu = () => {
    const { t,
        alpha } = useNavDesktop();

    return (
        <div className="navDesktop__links">
            <ul>
                {navItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className="linkTo textLinks" to={item.link}>{t(item.label)}</Link></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Menu