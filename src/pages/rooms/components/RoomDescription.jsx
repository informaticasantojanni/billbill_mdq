import React from 'react'
import './roomDescription.css'

const RoomDescription = ({
  title, 
  description, 
  titleServices, 
  servicesRoom1, 
  t
}) => {
  return (
    <div className='roomDescription mt-3'>
      <h2 className='mb-1 titleSize1 fontStyle1'>{title}</h2>
      <p className='mb-1 textSize fontStyle4'>{description}</p>
      <div>
        <p className='mb-1 textSize2 fontStyle4'>{titleServices}:</p>
        <ul>
          {servicesRoom1.map((service, index) => (
            <li key={index} className='textSize2 fontStyle4'>{t(`servicesRoom1.${service}`)}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RoomDescription