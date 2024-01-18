import React from 'react';
import "./ServicesView.css"
import PageHeader from '../../../components/pageHeader/PageHeader';
import image from '../../../../src/assets/gallery_mdq/billbillMdq4.jpg';
import Tag from "../../../../src/pages/services/components/svg/Tag";
// import Bar from "../../../../src/pages/services/components/svg/Bar";
// import Cocina from "../../../../src/pages/services/components/svg/Cocina";
// import Dormitorio from "../../../../src/pages/services/components/svg/Dormitorio";
// import Entretenimiento from "../../../../src/pages/services/components/svg/Entretenimiento";
// import Lavadero from "../../../../src/pages/services/components/svg/Lavadero";
// import Refrigeracion from "../../../../src/pages/services/components/svg/Refrigeracion";
import { getColor } from '../components/colorList';
import ServicesList from '../components/ServicesList';



const ServicesView = () => {

  const width = 100;
  const height = 100;

  return (

    <div>
      <PageHeader
        title={"Servicios"}
        image={image}
        colorHeader={"fontColor7"} />

      <ServicesList />
      {/* <p>Test svg</p>
      <Bar color={''} width={width} height={height}/>
      <Cocina color={''} width={width} height={height}/>
      <Dormitorio color={''} width={width} height={height}/>
      <Entretenimiento color={''} width={width} height={height}/>
      <Lavadero color={''} width={width} height={height}/>
      <Refrigeracion color={''} width={width} height={height}/>
      <p>Test svg</p> */}
    </div>


  )
}

export default ServicesView;