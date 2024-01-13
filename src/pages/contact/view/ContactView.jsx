import React from 'react'
import "./contactView.css"
import ContactForm from '../components/ContactForm'
import PageHeader from '../../../components/pageHeader/PageHeader';
import image from '../../../../src/assets/gallery_mdq/billbillMdqContacto.png';

const ContactView = () => {
  return (
    <div>
    <PageHeader title={"Contacto"} image={image} />
      <ContactForm />
    </div>
  )
}

export default ContactView