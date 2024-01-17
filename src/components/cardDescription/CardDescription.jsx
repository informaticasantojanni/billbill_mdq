import React from 'react'
import './cardDescription.css'

const CardDescription = ({
  title,
  description,
  listTitle,
  listCard,
  t
}) => {
  return (
    <div className='cardDescription'>
      <h2 className='textsize3 fontStyle1 mb-1'>{title}</h2>
      <p className='textSize1 fontStyle4 mb-1'>{description}</p>
      <div>
        <p className='textSize1 fontStyle4 mb-1'>{listTitle}:</p>
        <ul>
          {Array.isArray(listCard) && listCard.map((item, index) => (
            <li key={index} className='textSize1 fontStyle4'>{t(`${item}`)}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CardDescription