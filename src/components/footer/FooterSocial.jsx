import React from 'react'
import './footerSocial.css'

const FooterSocial = ({ socialText, linkFb, linkIg, iconFb, iconIg }) => {
    return (
        <div className="footerSocial">
            <h3>{socialText}</h3>
            <div className='footerSocial--items'>
                <a href={linkFb} target='_blank'>
                    <img src={iconFb} alt="Facebook" />
                </a>
                <a href={linkIg} target='_blank'>
                    <img src={iconIg} alt="Instagram" />
                </a>
            </div>
        </div>
    )
}

export default FooterSocial