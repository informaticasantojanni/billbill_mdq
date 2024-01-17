import React from 'react'
import './customButton.css'

const CustomButton = ({props}) => {
  return (
    <div className={`customButton ${props.classButton} ${props.classFontSize} ${props.classFontStile} `}>
    <button>
      <a target="_blank" href={props.link}>
        {props.text}
      </a>
    </button>
  </div>
  )
}

export default CustomButton