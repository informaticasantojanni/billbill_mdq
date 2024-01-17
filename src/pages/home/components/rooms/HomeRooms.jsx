import React from 'react'
import "./HomeRooms.css"
import "../../../../../src/styles.css"
import useHome from '../useHome'
import roomsList from "./roomsList";
import RoomCard from './RoomCard';



const HomeRooms = ({ mb }) => {

    const { t } = useHome();


    return (
        <div className="main-container">
            <div className={`homeRooms ${mb}`}>
                <p className='titleSize3 fontStyle1 fontColor2 mb-2'>{t('home_rooms_title_1')}</p>
                <p className='textSize1 fontStyle4 fontColor8 text-align'>{t('home_rooms_text_1')}</p>

                <div className='homeRooms__gallery'>
                    {roomsList.map(room => (
                        <RoomCard key={room.id} room={room} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default HomeRooms
