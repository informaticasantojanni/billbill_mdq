import React from 'react'
import './homeContactInfo.css'

const HomeContactInfo =({
  title1,
  title2,
  iconFb, 
  iconIg, 
  iconWhApps}) => {
  return (
    <div className="homeContact__info">
    <div className="homeContact__info_body mb-1">
      <div className='homeContact__info_body-title1'>
        <p className='title1Size1 fontStyle1 fontColor2'>{title1}</p>
      </div>
      <div className='homeContact__info_body-title1'>
        <p className='title1Size1 fontStyle1 fontColor2'>{title2}</p>
      </div>
      <div className='homeContact__info_body-socialmedia'>
        <a href="https://www.facebook.com/profile.php?id=100093606550739&mibextid=ZbWKwL" target='_blank'>
          <img className='mt-1' src={iconFb} alt="Icon Facebook" />
        </a>
        <a href="https://www.instagram.com/billandbillsantelmo/" target='_blank'>
          <img className='mt-1' src={iconIg} alt="Icon Instagram" />
        </a>
        <a href="">
          <img className='mt-1' src={iconWhApps} alt="Icon WhatsApps" />
        </a>
      </div>
    </div>
  </div>
  )
}

export default HomeContactInfo