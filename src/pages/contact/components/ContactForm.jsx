
import "./ContactForm.css";
import useContact from '../useContact';


const ContactForm = () => {


  const {
    t,
    handleSubmit,
    email,
    setEmail,
    name,
    setName,
    lastname,
    setLastname,
    message,
    setMessage,
    btnSubmitText,
  } = useContact();



  return (
    <div className='contactForm mt-5 mb-5'>

      <div className="contactForm--container">

        <div className="contactForm__header">
          <p className='textSize2 fontStyle3 mb-2'>{t('title_1')}</p>
        </div>

        <div className="contactForm__body">
          <form onSubmit={handleSubmit}>
            <div className="contactForm__form text3">

              <div className="contactForm__form__input">
                <label className="textSize1 fontStyle3">{t('input_name')}</label>
                <input
                  className='text2'
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="contactForm__form__input">
                <label className="textSize1 fontStyle3">{t('input_lastname')}</label>
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>

              <div className="contactForm__form__input">
                <label className="textSize1 fontStyle3">{t('input_email')}</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>


              <div className="contactForm__form__input">
                <label className="textSize1 fontStyle3">{t('input_message')}</label>
                <textarea
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows = '8'
                />
              </div>

              <input className="btnSend2 textSize1 fontStyle3" type="submit" value={btnSubmitText} />

            </div>

          </form>
        </div>


      </div>
    </div>
  )
}

export default ContactForm