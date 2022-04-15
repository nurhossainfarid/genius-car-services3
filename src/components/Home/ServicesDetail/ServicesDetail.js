import React from 'react';
import { useParams } from 'react-router-dom';

const ServicesDetail = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h1>Welcome To Services Detail {serviceId}</h1>
        </div>
    );
};

export default ServicesDetail;