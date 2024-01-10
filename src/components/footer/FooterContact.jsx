import React from 'react'
import './footerContact.css'

const FooterContact = ({iconLocation, iconEmail, iconPhone, textContact, emailContact, telContact, addressContact}) => {
  return (
    <div className="footerContact">
    <h3>{textContact}</h3>
    <a href={`mailto:${emailContact}`}>
      {iconEmail}
      <span>{emailContact}</span>
    </a>
    <a href="#">
      {iconPhone}
      <span>{telContact}</span>
    </a>
    <a href="#" className='no-link'>
      {iconLocation}
      <span>{addressContact}</span>
    </a>
  </div>
  )
}

export default FooterContact