import React from 'react'
import "./roomsView.css"
import PageHeader from '../../../components/pageHeader/PageHeader';
import image from '../../../../src/assets/gallery_mdq/billbillMdq3.jpg';

const RoomsView = () => {
  return (
    <div className='Rooms'>
      <PageHeader title={"Habilaciones"} image={image}/>
      <p>Contenido</p>
    </div>
  )
}

export default RoomsView