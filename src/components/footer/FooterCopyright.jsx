import React from 'react'

const FooterCopyright = ({textYear, textDevelop, textRight}) => {
  return (
    <div className="footer-copyright">
    <small>&copy; {textYear} <b>{textDevelop}</b>{textRight}</small>
  </div>
  )
}

export default FooterCopyright