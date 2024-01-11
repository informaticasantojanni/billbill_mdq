import React from 'react'
import './footerLogo.css'

const FooterLogo = ({logo}) => {
  return (
    <div className="footer-logo">
            <a href="#">
              <img src={logo} alt="Bill & Bill Logo" />
            </a>
    </div>
  )
}

export default FooterLogo