import React from 'react'
import './roomPhoto.css'

const RoomPhoto = ({ imgMobile, imgDesktop }) => {
  return (
    <div className='roomPhoto'>
    <picture>
      <source srcSet={imgMobile} media='(max-width: 767px)' />
      <source srcSet={imgDesktop} media='(min-width: 768px)' />
      <img src={imgMobile} alt="Room Photo" />
    </picture>
  </div>
  )
}

export default RoomPhoto

