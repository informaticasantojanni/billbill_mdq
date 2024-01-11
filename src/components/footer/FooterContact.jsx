import React from 'react'
import './footerContact.css'

const FooterContact = ({ iconLocation, iconEmail, iconPhone, textContact, emailContact, telContact, addressContact }) => {
  return (
    <div className="footerContact">
      <h3 className='fontStyle4 titleSize1'>{textContact}</h3>
      <div>
        <a href={`mailto:${emailContact}`}>
          <img src={iconEmail} alt="Email" />
          <span className='textSize2'>{emailContact}</span>
        </a>
      </div>
      <div>
        <a href="#">
          <img src={iconPhone} alt="Phone" />
          <span className='textSize2'>{telContact}</span>
        </a>
      </div>
      <div>
        <a href="#" className='no-link'>
          <img src={iconLocation} alt="Location" />
          <span className='textSize2'>{addressContact}</span>
        </a>
      </div>

    </div>
  )
}

export default FooterContact