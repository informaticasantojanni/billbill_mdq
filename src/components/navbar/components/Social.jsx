import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaWhatsapp,
} from "react-icons/fa";
import '../../navbar/navbar.css';
import "../../../../src/styles.css"



const Social = () => {
    return (
        <div className="navDesktop__social">
            <a href="https://www.facebook.com/profile.php?id=100093606550739&mibextid=ZbWKwL" target='_blank'><FaFacebook size={35} /></a>
            <div className='mx-1'></div>
            <a href="https://www.instagram.com/billandbillsantelmo/" target='_blank'><FaInstagram size={35} /></a>
        </div>
    )
}

export default Social