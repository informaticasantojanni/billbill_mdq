import React from 'react'
import './customButton.css'

const CustomButton = (
  {
    link,
    text,
    classButton,
    classFontSize,
    classFontStyle
  }) => {

  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <div className='customButton'>
      <button 
      className={`${classButton} ${classFontSize} ${classFontStyle} `} 
      onClick={handleClick}>
          {text}
      </button>
    </div>
  )
}

export default CustomButton
