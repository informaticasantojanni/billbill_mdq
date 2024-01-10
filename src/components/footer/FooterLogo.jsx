import React from 'react'

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