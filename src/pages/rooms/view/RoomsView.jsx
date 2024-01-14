import React from 'react'
import "./roomsView.css"
import PageHeader from '../../../components/pageHeader/PageHeader';
import image from '../../../../src/assets/gallery_mdq/billbillMdq3.jpg';
import useRooms from '../useRooms';

const RoomsView = () => {

  const { t } = useRooms()


  return (
    <div className='Rooms'>
      <PageHeader title={t('titleHeader')} image={image}/>
      <p>Contenido</p>
    </div>
  )
}

export default RoomsView