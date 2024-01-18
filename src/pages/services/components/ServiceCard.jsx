import React from 'react'
import "./ServiceCard.css"
import useServices from '../useServices'

const ServiceCard = ({ card: card, image: ServiceIcon, title: title, items: items }) => {

    const { t, imageSize } = useServices();

    return (
        <div className='serviceCard'>
            <div className="serviceCard__image">
                <ServiceIcon width={imageSize} height={imageSize} />
            </div>
            <div className="serviceCard__info">
                <p className='titleSize1 fontStyle1'>{t(`${card}.${title}`)}</p>
                {items.map(item =>
                    <p className='textSize1 fontStyle3'>{t(`${card}.${item}`)}</p>)}
            </div>
        </div>
    )
}

export default ServiceCard;
