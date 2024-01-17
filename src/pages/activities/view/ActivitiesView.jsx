import React from 'react'
import "./activitiesView.css"

import PageHeader from '../../../components/pageHeader/PageHeader';
import ActivitiesList from '../components/ActivitiesList';

import image from '../../../../src/assets/gallery_mdq/billbillMdqActividades.png';
import useActivities from '../useActivities';


const ActivitiesView = () => {

  const { t } = useActivities()

  return (
    <div>
        <PageHeader 
        title={t('titleHeader')} 
        image={image} 
        colorHeader={"fontColor7"}
         />
        <ActivitiesList
        // title={t('titleActivities')}
        paragraph={t('paragraphActivities')}
        />
    </div>
    
  )
}

export default ActivitiesView