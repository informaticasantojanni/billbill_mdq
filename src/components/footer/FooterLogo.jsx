import React from 'react'
import './footerLogo.css'

const FooterLogo = ({logo, textLogo}) => {
  return (
    <div className="footer-logo">
          <figure>
            <a href="#">
              <img src={logo} alt="Bill & Bill Logo" />
            </a>
            <figcaption>{textLogo}</figcaption>
          </figure>
    </div>
  )
}

export default FooterLogo