import React, {useEffect} from 'react'
import "./contactView.css"
import ContactForm from '../components/ContactForm'
import PageHeader from '../../../components/pageHeader/PageHeader';
import image from '../../../../src/assets/gallery_mdq/billbillMdqContacto.png';

const ContactView = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <div>
      <PageHeader title={"Contacto"}
        image={image}
        colorHeader={"fontColor7"} />
      <ContactForm />
    </div>
  )
}

export default ContactView