import React from 'react';
import "./ServicesList.css"
import "../../../../src/styles.css"
import servicesData from './servicesData';  // Adjust the path accordingly
import ServiceCard from './ServiceCard';



const ServiceList = () => {
    return (
        <div className='main-container servicesList'>
            <div className="servicesList-container">
                {servicesData.map(service => (
                    <ServiceCard
                        key={service.id}
                        {...service}
                    />
                ))}
            </div>

        </div>
    );
};

export default ServiceList;
