import React, { useEffect } from 'react'
import "./ServicesView.css"
import PageHeader from '../../../components/pageHeader/PageHeader';
import image from '../../../../src/assets/gallery_mdq/billbillMdq4.jpg';
import ServicesList from '../components/ServicesList';
import useServices from '../useServices';


const ServicesView = () => {

const {t} = useServices();

useEffect(() => {
  window.scrollTo(0, 0) ;
}, []);

  return (

    <div>
      <PageHeader
        title={t('titleHeader')}
        image={image}
        colorHeader={"fontColor7"} />

      <ServicesList />

    </div>


  )
}

export default ServicesView;