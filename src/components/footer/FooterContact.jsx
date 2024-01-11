import React from 'react'
import './footerContact.css'

const FooterContact = ({ iconLocation, iconEmail, iconPhone, textContact, emailContact, telContact, addressContact }) => {
  return (
    <div className="footerContact">
      <h3 className='fontStyle5 textSize3'>{textContact}</h3>
      <div>
        <a href={`mailto:${emailContact}`}>
          <img src={iconEmail} alt="Email" />
          <span className='textSize1 fontStyle3'>{emailContact}</span>
        </a>
      </div>
      <div>
        <a href="#">
          <img src={iconPhone} alt="Phone" />
          <span className='textSize1 fontStyle3' >{telContact}</span>
        </a>
      </div>
      <div>
        <a href="#" className='no-link'>
          <img src={iconLocation} alt="Location" />
          <span className='textSize1 fontStyle3'>{addressContact}</span>
        </a>
      </div>

    </div>
  )
}

export default FooterContact