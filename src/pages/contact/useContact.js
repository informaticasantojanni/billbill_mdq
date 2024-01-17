
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

const useContact = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'contact' });
    const urlFetchDailu = "https://script.google.com/macros/s/AKfycbyKxrp0TOhXXRHhdt0_YRFeJKdMA2ei3242YwtFT5Kzlcdy4QIGbS39AzY15e9RQGut/exec";
    // Define state variables for form fields
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [btnSubmitText, setBtnSubmitText] = useState(t('btn_send'));


    const handleSubmit = (e) => {
        e.preventDefault();
        setBtnSubmitText(t('btn_sending'));

        // Prepara data object with form input data
        const formData = {
            recipient: email,
            name: name,
            lastname: lastname,
            message: message
        }

        // Fetch Gmail to send email
        fetch(urlFetchDailu, {
            method: 'POST',
            redirect: "follow",
            dataType: 'json',
            accepts: 'application/json',
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the Google Apps Script endpoint
                console.log("Response status: ", data.status);
                setBtnSubmitText(t('btn_sent'));
                setTimeout(() => { setBtnSubmitText(t('btn_send')) }, 2000);
                // Reset form fields after submission
                setName('');
                setLastname('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error:', error);
            });


    };


    return {
        t,
        handleSubmit,
        email,
        setEmail,
        name,
        setName,
        lastname,
        setLastname,
        setBtnSubmitText,
        message,
        setMessage,
        btnSubmitText,

    }
}

export default useContact;