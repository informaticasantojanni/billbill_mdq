import React from 'react'
import './roomList.css'

import RoomDescription from './RoomDescription'
import RoomPhoto from './RoomPhoto'
import RoomButton from './RoomButton'

import CardDescription from '../../../components/cardDescription/CardDescription'
import CardPhoto from '../../../components/cardPhoto/CardPhoto'

import dataRooms from '../dataRooms'
import useRooms from '../useRooms'

import CustomButton from '../../../components/cutomButton/CustomButton'


const RoomsList = ({ title, paragraph, }) => {
  const { t } = useRooms();

  return (
    <div className="main-container">
      <div className="roomList mt-5">
        <div className="roomList__header mb-8">
          <div className="roomList__title title1Size1 fontStyle1 mt-4 mb-3">{title}</div>
          <div className="roomList__paragraph textSize3 fontStyle4 mt-4">{paragraph}</div>
        </div>
        {dataRooms.map((room, index) => (
          <div className="roomList__grid" key={index}>
            <div className={`roomsList__items_description roomsList__item${index * 2 + 1} mb-2`}>
              <CardDescription
                title={t(`${room.title}`)}
                description={t(`${room.description}`)}
                listTitle={'Servicios'}
                listCard={room.servicesRoom}
                t={t}
              />
              <div>
                <CustomButton
                  link={'#'}
                  text={t(`textButton`)}
                  classButton={'btnBook'}
                  classFontSize={'textSize2'}
                  classFontStyle={'fontStyle4'}
                />
              </div>
            </div>

            <div className={`roomsList__items_photo roomsList__item${index * 2 + 2} mb-2`}>
              <CardPhoto
                imgMobile={room.imgRoom1_mobile}
                imgDesktop={room.imgRoom1_desktop}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomsList;

