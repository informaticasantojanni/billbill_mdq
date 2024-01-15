import React from 'react'
import RoomDescription from './RoomDescription'
import RoompPhoto from './RoompPhoto'

const RoomsList = () => {
    return (
        <div className="main-container">
            <div className="servicesList mt-5 mb-5">
                <div className="roomsList__item1">
                    <RoomDescription
                        title='Habitación Compartida'
                        description='Con nuestro servicio de telediagnóstico, la Dra. María Levin proporciona informes y diagnósticos de estudios a distancia. La eficiencia y la precisión son fundamentales para ofrecer un soporte rápido y de calidad a los profesionales de la salud.'
                    />
                </div>
                <div className="roomsList__item2">
                    <RoompPhoto
                        imgMobile={serviceMobile1}
                        imgDesktop={serviceDesktop1}
                    />
                </div>
            </div>
        </div>
    )
}

export default RoomsList