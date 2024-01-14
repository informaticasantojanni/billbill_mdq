import React from 'react'
import "./footer.css"
import SwitchLanguage from '../navbar/components/SwitchLanguage';
import { useTranslation } from 'react-i18next'


import logo from '../../assets/logos/logo_billbill_footer.svg'
import iconEmail from '../../assets/Icons/mail.svg'
import iconPhone from '../../assets/Icons/phone.svg'
import iconLocation from '../../assets/Icons/location.svg'
import iconFb from '../../assets/Icons/facebook.svg'
import iconIg from '../../assets/Icons/instagram.svg'



import FooterLogo from './FooterLogo';
import FooterContact from './FooterContact';
import FooterSocial from './FooterSocial';
import FooterCopyright from './FooterCopyright';
import useFooter from './useFooter';



const Footer = () => {

  const { t } = useFooter()


  return (
    <div className='footer'>
      <div className='footerContainer'>
        <div className='logoFooter'>
          <FooterLogo
            logo={logo}
          />
        </div>

        <div className='contactFooter1'>
          <FooterContact
            iconLocation={iconLocation}
            iconEmail={iconEmail}
            iconPhone={iconPhone}
            textContact='San Telmo'
            emailContact='billandbillsantelmo@gmail.com'
            telContact='+54 9 11 2391-4629'
            addressContact='Chile 680, Buenos Aires, Argentina'
          />
        </div>

        <div className='contactFooter2'>
          <FooterContact
            iconLocation={iconLocation}
            iconEmail={iconEmail}
            iconPhone={iconPhone}
            textContact='Mar del Plata'
            emailContact='billbillhostel@gmail.com'
            telContact='+54 9 223 602-2821'
            addressContact='Las Heras 2821, Mar del Plata, Argentina'
          />
        </div>

        <div className='socialFooter'>
          <FooterSocial
            socialText={t('followUs')}
            linkFb='https://www.facebook.com/profile.php?id=100093606550739&mibextid=ZbWKwL'
            linkIg='https://www.instagram.com/billandbillsantelmo/'
            iconFb={iconFb}
            iconIg={iconIg}
          />

        </div>
        <div className='copyFooter'>
          <FooterCopyright
            textYear='2024'
            textDevelop='Hornero Web'
            textRight={t('copyRight')}
          />
        </div>

      </div>
    </div >
  )
}

export default Footer