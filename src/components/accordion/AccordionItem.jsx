import React from 'react'
import "./Accordion.css"
import useAccordion from "./useAccordion"
import ArrowUp from './svg/ArrowUp'
import "../../../src/styles.css"


const AccordionItem = ({ icon: icon, question: question, answer: answer }) => {

    const { isShowingFaq, toggleShow, t } = useAccordion();

    return (
        <article onClick={toggleShow} >
            <div className="accordionItem">
                <div className='accordionItem__question'>
                    <div className="accordionItem__question-title">
                        <img className='iconStyle' src={icon} alt="icono" />
                        <p className='textSize1 fontStyle4 mb-1'>{t(question)}</p>
                    </div>
                    <div className="accordionItem__question-arrow">
                        {isShowingFaq ? <ArrowUp rotate={0} /> : <ArrowUp rotate={180} />}
                    </div>
                </div>
                <div className={isShowingFaq? 'accordionItem__answer accordionItem__answer-show' : 'accordionItem__answer'}>
                    <p className='textSize1 fontStyle3 mt-1 mb-1'>{t(answer)}</p>
                </div>
            </div>
        </article>
    )
}

export default AccordionItem


/*
<div className=''>
<h3 className=''>{item.question}</h3>
<button className='' >
    {
        isShowingFaq ? <img src={arrowUp} alt="minus-icon" /> : <img src={arrowDown} alt="plus-icon" />
    }
</button>
</div>
{isShowingFaq && <p className='font-workSans font-normal text-sm text-left lg:text-lg'>{item.answer}</p>}

*/