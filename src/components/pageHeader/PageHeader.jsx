import React from 'react'
import "./PageHeader.css"
import "../../styles.css"
import olita from "../../assets/olita.svg"

const PageHeader = ({ title, image }) => {
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
                <h2 className='title1Size1 fontStyle1 fontColor1'>{title}</h2>
            </div>
        </div>
    )
}

export default PageHeader