import React from 'react'
import "./ArrivingQA.css"
import items from '../arrivingItems';
import Accordion from '../../../components/accordion/Accordion';
import useLocation from '../useLocation';
import "../../../../src/styles.css"

const ArrivingQA = () => {
    const { t } = useLocation();

    return (
        <div className='main-container'>
            <h2 className='titleSize2 fontStyle1 text-align mb-2'>{t('arrivingQA_title')}</h2>
            <h2 className='textSize2 fontStyle3 text-align mb-2'>{t('arrivingQA_text_1')}</h2>
            <Accordion items={items} />
        </div>
    )
}

export default ArrivingQA
