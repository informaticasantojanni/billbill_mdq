import React from 'react'
import './homeContactForm.css'
import useHomeContact from './useHomeContact';

const HomeContactForm = ({
    handleSubmit,
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    btnSubmitText
}) => {

    const { t } = useHomeContact()




    return (
        <div className="homeContact__form_body-outerContainer">
            <div className="homeContact__form">
                <div className="homeContact__form_body">
                    <form onSubmit={handleSubmit}>
                        <div className="homeContact__form-item">
                            <input className='textSize2 fontStyle3' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={t('home_contact_form_name')} required />
                        </div>
                        <div className="homeContact__form-item">
                            <input className='textSize2 fontStyle3' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t('home_contact_form_email')} required />
                        </div>
                        <div className="homeContact__form-item">
                            <textarea className='textSize2 fontStyle3' value={message} onChange={(e) => setMessage(e.target.value)} rows="6" placeholder={t('home_contact_form_message')} required />
                        </div>
                        <div className="homeContact__form-item">
                            <button className='btnSend textSize3 fontStyle5' type="submit">{btnSubmitText}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default HomeContactForm