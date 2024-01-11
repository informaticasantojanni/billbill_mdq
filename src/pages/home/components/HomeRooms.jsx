import React from 'react'
import "./HomeRooms.css"
import "../../../../src/styles.css"
import useHome from './useHome'
import roomsList from "./roomsList";
const HomeRooms = () => {

    const { t } = useHome();


    return (
        <div className="main-container">
            <div className="homeRooms mb-5">

                <p className='titleSize1 fontStyle1 fontColor1 mb-2'>{t('home_rooms_title_1')}</p>
                <p className='textSize1 fontStyle4 fontColor1'>{t('home_rooms_text_1')}</p>


                <div className='homeRooms__gallery'>
                    {roomsList.map(room => (
                        <div key={room.id} className='homeRooms__gallery__card-container'>
                            <div className='homeRooms__gallery__card'>
                                <img src={room.image} alt="Imagen" />
                                <div className='homeRooms__gallery__card-layer'>
                                    <p>Texto</p>
                                </div>
                            </div>


                        </div>

                    ))}
                </div>
            </div>

        </div>
    )
}

export default HomeRooms
