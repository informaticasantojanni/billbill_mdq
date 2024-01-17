import React, { useState } from 'react'
import "./HomeContact.css"

import iconFb from '../../../../assets/Icons/facebookBlack.svg'
import iconIg from '../../../../assets/Icons/instagramBlack.svg'
import iconWhApps from '../../../../assets/Icons/whatsAppBlack.svg'

import HomeContactInfo from './HomeContactInfo'
import HomeContactForm from './HomeContactForm'
import useHomeContact from './useHomeContact'

// const urlFetch = "https://script.google.com/macros/s/AKfycbw_QHPSAxQATM25EatTGmkglDZFVSJUkitHfV4UMaVnTM3nIwqjwBpt6K8l7tWi8UMf/exec";
// const urlFetchDailu = "https://script.google.com/macros/s/AKfycbyKxrp0TOhXXRHhdt0_YRFeJKdMA2ei3242YwtFT5Kzlcdy4QIGbS39AzY15e9RQGut/exec";
const urlFetchBillBill = "https://script.google.com/macros/s/AKfycbxqt7n5uHw8MaGHwyA-pTU8qep3MIvkZwShXY1D8tpnZiA3FQigRlZIGxRibtjeoYTU_Q/exec";


const HomeContact = ({ mb }) => {

  const { t } = useHomeContact();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [btnSubmitText, setBtnSubmitText] = useState('Enviar');

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnSubmitText("...enviando...");

    const formData = {
      recipient: email,
      name: name,
      message: message
    }

    fetch(urlFetchBillBill, {
      method: 'POST',
      redirect: "follow",
      dataType: 'json',
      accepts: 'application/json',
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response status: ", data.status);
        setBtnSubmitText("Enviado!");
        setTimeout(() => { setBtnSubmitText('Enviar') }, 2000);
        setName("");
        setEmail("");
        setMessage("");

      })
      .catch((error) => {
        console.error('Error:', error);
      });

  };


  return (

    <div className="main-container">
      <div className={`homeContact  ${mb}`}>
        <div className="homeContact__container">
          <HomeContactInfo
            title1={t('home_contact_title1')}
            title2={t('home_contact_title2')}
            iconFb={iconFb}
            iconIg={iconIg}
            iconWhApps={iconWhApps}
          />


          <HomeContactForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            message={message}
            setMessage={setMessage}
            btnSubmitText={btnSubmitText}
          />
        </div>
      </div>
    </div>

  )
}

export default HomeContact