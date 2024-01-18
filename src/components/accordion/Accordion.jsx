import React from 'react'
import "./Accordion.css"
import AccordionItem from './AccordionItem'
import "../../../src/styles.css"

const Accordion = ({ items }) => {

    return (
        <div className=' main-container accordion'>
            {items.map((item) => {
                return (<AccordionItem
                    key={item.id}
                    {...item} />)
            })}
        </div>

    )
}

export default Accordion