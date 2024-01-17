import React from 'react'
import "./activitiesView.css"
import PageHeader from '../../../components/pageHeader/PageHeader';
import image from '../../../../src/assets/gallery_mdq/billbillMdqActividades.png';
import ActivitiesList from '../components/ActivitiesList';

const ActivitiesView = () => {
  return (
    <div>
        <PageHeader title={"Actividades"} image={image} colorHeader={"fontColor7"} />
        <ActivitiesList/>
    </div>
    
  )
}

export default ActivitiesView