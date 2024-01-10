import React from 'react'
import './footerSocial.css'

const FooterSocial = ({ socialText, linkFb, linkIg, iconFb, iconIg }) => {
    return (
        <div className="footerSocial">
            <h3>{socialText}</h3>
            <div className='footerSocial--items'>
                <a href={linkFb} target='_blank'>
                    {iconFb}
                </a>
                <a href={linkIg} target='_blank'>
                    {iconIg}
                </a>
            </div>
        </div>
    )
}

export default FooterSocial