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
    <div className='roomDescription'>
      <h2 className='textsize3 fontStyle1 mb-1'>{title}</h2>
      <p className='textSize1 fontStyle4 mb-1'>{description}</p>
      <div>
        <p className='textSize1 fontStyle4 mb-1'>{titleServices}:</p>
        <ul>
          {servicesRoom1.map((service, index) => (
            <li key={index} className='textSize1 fontStyle4'>{t(`servicesRoom1.${service}`)}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RoomDescription