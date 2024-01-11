import React, { useState } from 'react';
import "./RoomCard.css";
import useHome from "./useHome"
const RoomCard = ({ room }) => {

    const {t} = useHome()
    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className='homeRooms__gallery__card-container'>
            <div
                className='homeRooms__gallery__card'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>

                <img className={isHovered ? 'zoom' : ''} src={room.image} alt="Imagen habitación" />
                <div className={isHovered ? 'homeRooms__gallery__card-layer active' : 'homeRooms__gallery__card-layer'}>
                    {isHovered && <p className='textSize1 fontStyle4 fontColor1 mb-2'>{t(room.category)}</p>}
                    {isHovered && <p className='textSize3 fontStyle4 fontColor1'>{t(room.category)}</p>}
                    {isHovered && <p className='textSize2 fontStyle4 fontColor1'>{t(room.type)}</p>}
                    <button> Ver más</button>
                </div>
            </div>
        </div>
    );

}

export default RoomCard