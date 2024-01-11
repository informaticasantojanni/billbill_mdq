import React, { useState } from 'react';
import "./RoomCard.css";

const RoomCard = ({ room }) => {

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
                    {isHovered && <p className='textSize1 fontStyle4 fontColor1'>{room.bathroom}</p>}
                    {isHovered && <p className='textSize3 fontStyle4 fontColor1'>{room.category}</p>}
                    {isHovered && <p className='textSize2 fontStyle4 fontColor1'>{room.type}</p>}

                </div>
            </div>
        </div>
    );

}

export default RoomCard