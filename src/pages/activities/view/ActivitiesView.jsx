import React from 'react'
import "./activitiesView.css"
import PageHeader from '../../../components/pageHeader/PageHeader';
import image from '../../../../src/assets/gallery_mdq/billbillMdqActividades.png';

const ActivitiesView = () => {
  return (
    <PageHeader title={"Actividades"} image={image} colorHeader={"fontColor7"} />
  )
}

export default ActivitiesView