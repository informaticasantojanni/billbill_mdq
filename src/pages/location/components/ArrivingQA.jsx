import React from 'react'
import "./ArrivingQA.css"
import items from '../arrivingItems';
import Accordion from '../../../components/accordion/Accordion';
import useLocation from '../useLocation';

const ArrivingQA = () => {
    const { t } = useLocation();

    return (
        <div className=''>
            <h2 className='titleSize3 fontStyle1 text-align mb-2'>{t('location_text_2')}</h2>
            <Accordion items={items} />
        </div>
    )
}

export default ArrivingQA
