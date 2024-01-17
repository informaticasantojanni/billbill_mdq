import React from 'react'
import "./Accordion.css"
import AccordionItem from './AccordionItem'
import "../../../src/styles.css"

const Accordion = ({ items }) => {

    return (
        <div className=' main-container accordion'>
            {items.map((item, index) => {
                return (<AccordionItem
                    key={index}
                    item={item} />)

            })}
        </div>

    )
}

export default Accordion