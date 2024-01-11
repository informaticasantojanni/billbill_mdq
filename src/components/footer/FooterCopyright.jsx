import React from 'react'
import './footerCopyright.css'

const FooterCopyright = ({textYear, textDevelop, textRight}) => {
  return (
    <div className="footerCopyright textSize1 fontStyle4">
    <small>&copy; {textYear} <b>{textDevelop}</b>{textRight}</small>
  </div>
  )
}

export default FooterCopyright