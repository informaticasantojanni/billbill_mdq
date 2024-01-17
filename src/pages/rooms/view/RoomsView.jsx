import React from 'react'
import "./roomsView.css"

import image from '../../../../src/assets/gallery_mdq/billbillMdq3.jpg';

import useRooms from '../useRooms';
import RoomsList from '../components/RoomsList';
import PageHeader from '../../../components/pageHeader/PageHeader';


const RoomsView = () => {

  const { t } = useRooms()

  return (
    <div className='Rooms'>
      <PageHeader 
      title={t('titleHeader')} 
      image={image}
      colorHeader={'fontColor1'}
      />
      <RoomsList
        title={t('titleRooms')}
        paragraph={t('paragraphRooms')}
      />
    </div>
  )
}

export default RoomsView