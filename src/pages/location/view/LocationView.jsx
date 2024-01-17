import React from 'react'
import "./locationView.css"
import PageHeader from '../../../components/pageHeader/PageHeader';
import image from '../../../../src/assets/gallery_mdq/billbillMdqUbicacion.png';
import LocationMap from '../components/LocationMap';
import ArrivingQA from '../components/arrivingQA';




const LocationView = () => {

  return (
    <div>
      <PageHeader title={"Ubicación"} image={image} colorHeader={"fontColor7"} />
      <LocationMap />
      <ArrivingQA />
    </div>

  )
}

export default LocationView

