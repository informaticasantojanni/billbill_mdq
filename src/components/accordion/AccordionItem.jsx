import React from 'react'
import "./Accordion.css"
import useAccordion from "./useAccordion"
import arrowUp from "../../../src/assets/accordion/arrowUp.svg"
import arrowDown from "../../../src/assets/accordion/arrowDown.svg"



const AccordionItem = ({ item }) => {

    const { isShowingFaq, toggleShow, t } = useAccordion();

    return (
        <article onClick={toggleShow} >
            <div className={!isShowingFaq ? "accordionItem__question" : "accordionItem__question accordionItem__question-marginBottom"}>
                <div >
                    <p className='textSize1 fontStyle4 mb-1'>{t(item.question)}</p>
                    {isShowingFaq && <p className='textSize1 fontStyle3'>{t(item.answer)}</p>}
                </div>
                <div>
                    <button className='' >
                        {isShowingFaq ? <img src={arrowUp} alt="minus-icon" /> : <img src={arrowDown} alt="plus-icon" />}
                    </button>
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