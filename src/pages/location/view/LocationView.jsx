import React from 'react'
import "./locationView.css"
import PageHeader from '../../../components/pageHeader/PageHeader';
import image from '../../../../src/assets/gallery_mdq/billbillMdqUbicacion.png';

const LocationView = () => {
  return (
    <PageHeader title={"Ubicación"} image={image} />
  )
}

export default LocationView