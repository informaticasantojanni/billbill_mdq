import React from 'react'
import "./PageHeader.css"
import "../../styles.css"

const PageHeader = ({ title, image, colorHeader }) => {
    return (
        <div className="header" style={{
            width: '100%',
            height: '500px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className="header-container">
                <h2 className={`title1Size1 fontStyle1 ${colorHeader}`}>{title}</h2>
            </div>
        </div>
    )
}

export default PageHeader