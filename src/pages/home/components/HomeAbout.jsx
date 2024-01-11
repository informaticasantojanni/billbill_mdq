import React from 'react'
import "./HomeAbout.css"
import "../../../../src/styles.css"
import useHome from './useHome';



const HomeAbout = () => {

  const { t, truncate } = useHome();

  return (


    <div className="main-container">
      <div className="homeAbout mb-5">

        <p className='titleSize1 fontStyle1 fontColor8 mb-2'>{t('home_about_title_1')}</p>


        <p className='textSize1 fontStyle4 fontColor8'>{t('home_about_text_1')}</p>
        <p className='textSize1 fontStyle4 fontColor8'>{t('home_about_text_2')}</p>
        <p className='textSize1 fontStyle4 fontColor8'>{t('home_about_text_3')}</p>
        <p className='textSize1 fontStyle4 fontColor8'>{t('home_about_text_4')}</p>
      </div>

    </div>

  )
}

export default HomeAbout
// { truncate(t('home_about_text_1')) }