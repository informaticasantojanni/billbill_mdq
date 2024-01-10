import React from 'react'

const FooterSocial = ({ socialText, linkFb, linkIg, iconFb, iconIg }) => {
    return (
        <div className="footer-social">
            <h3>{socialText}</h3>
            <div >
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