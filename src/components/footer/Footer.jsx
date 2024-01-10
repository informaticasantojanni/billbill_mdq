import React from 'react'
import "./footer.css"
import SwitchLanguage from '../navbar/components/SwitchLanguage';
import { useTranslation } from 'react-i18next'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter
} from "react-icons/fa";
import {
  TfiLocationPin,
  TfiHeadphoneAlt,
  TfiEmail
} from "react-icons/tfi";
import logo from '../../assets/logos/logo_billbill_1.svg'
import FooterLogo from './FooterLogo';
import FooterContact from './FooterContact';
import FooterSocial from './FooterSocial';
import FooterCopyright from './FooterCopyright';



const Footer = () => {

  const { t } = useTranslation('translation', { keyPrefix: 'footer' });


  return (
    <footer>
      <div className='footer-container'>

        <FooterLogo
          logo={logo}
          textLogo='Hostel de Amigos'
        />

        <FooterContact
          iconLocation={<TfiLocationPin className='icon-help' size={15} />}
          iconEmail={<TfiEmail className='icon-help' size={15} />}
          iconPhone={<TfiHeadphoneAlt className='icon-help' size={15} />}
          textContact='San Telmo'
          emailContact='billandbillsantelmo@gmail.com'
          telContact='+54 9 11 2391-4629'
          addressContact='Chile 680, Buenos Aires, Argentina'
        />

        <FooterContact
          iconLocation={<TfiLocationPin className='icon-help' size={15} />}
          iconEmail={<TfiEmail className='icon-help' size={15} />}
          iconPhone={<TfiHeadphoneAlt className='icon-help' size={15} />}
          textContact='Mar del Plata'
          emailContact='billbillhostel@gmail.com'
          telContact='+54 9 223 602-2821'
          addressContact='Las Heras 2821, Mar del Plata, Argentina'
        />

        <FooterSocial
          socialText='Seguinos!'
          linkFb='https://www.facebook.com/profile.php?id=100093606550739&mibextid=ZbWKwL'
          linkIg='https://www.instagram.com/billandbillsantelmo/'
          iconFb={<FaFacebook size={35} />}
          iconIg={<FaInstagram size={35} />}
        />

        <FooterCopyright
          textYear='2024'
          textDevelop='Design by El Hornero'
          textRight='-Todos los derechos reservados.'
        />
      </div>
    </footer>
  )
}

export default Footer