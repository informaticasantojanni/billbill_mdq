import React from 'react'
import './cardPhoto.css'

const CardPhoto = ({ imgMobile, imgDesktop }) => {
  return (
    <div className='cardPhoto'>
    <picture>
      <source srcSet={imgMobile} media='(max-width: 767px)' />
      <source srcSet={imgDesktop} media='(min-width: 768px)' />
      <img src={imgMobile} alt="Card Photo" />
    </picture>
  </div>
  )
}

export default CardPhoto