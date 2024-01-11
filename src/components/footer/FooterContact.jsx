import React from 'react'
import './footerContact.css'

const FooterContact = ({iconLocation, iconEmail, iconPhone, textContact, emailContact, telContact, addressContact}) => {
  return (
    <div className="footerContact">
    <h3 className='fontStyle4'>{textContact}</h3>
    <a href={`mailto:${emailContact}`}>
    <img src={iconEmail} alt="Email"/>
      <span>{emailContact}</span>
    </a>
    <a href="#">
    <img src={iconPhone} alt="Phone"/>
      <span>{telContact}</span>
    </a>
    <a href="#" className='no-link'>
    <img src={iconLocation} alt="Location"/>
      <span>{addressContact}</span>
    </a>
  </div>
  )
}

export default FooterContact