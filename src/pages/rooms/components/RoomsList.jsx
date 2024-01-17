import React from 'react'
import './roomList.css'

import RoomDescription from './RoomDescription'
import RoomPhoto from './RoomPhoto'
import CardDescription from '../../../components/cardDescription/CardDescription'
import CardPhoto from '../../../components/cardPhoto/CardPhoto'

import dataRooms from '../dataRooms'
import useRooms from '../useRooms'
import RoomButton from './RoomButton'
import CustomButton from '../../../components/cutomButton/CustomButton'


const RoomsList = ({ title, paragraph }) => {
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
                title={room.title}
                description={room.description}
                listTitle={'Servicios'}
                listCard={room.servicesRoom}
              />
              {/* <RoomDescription
                  title={t(`roomTitle${index + 1}`)}
                  description={t(`roomDescription${index + 1}`)}
                  titleServices={t('titleServices')}
                  servicesRoom1={room.servicesRoom1}
                  t={t}
                /> */}

              <div>
                {/* <RoomButton
                  link="#"
                  textButton={t(`textButton`)}
                /> */}
                <CustomButton
                  link={'#'}
                  text={t(`textButton`)}
                  classButton={'btnBook'}
                  classFontSize={'textSize2'}
                  classFontStile={'fontStyle4'}
                  />
              </div>
            </div>

            <div className={`roomsList__items_photo roomsList__item${index * 2 + 2} mb-2`}>
              {/* <RoomPhoto
                imgMobile={room.imgRoom1_mobile}
                imgDesktop={room.imgRoom1_desktop}
              /> */}
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

