import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../../customHook/useServiceDetail';

const ServicesDetail = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    return (
        <div>
            <h1>Welcome To Services Detail {service.name}</h1>
            <Link to={`/checkout/${serviceId}`}>
                <button>Checkout</button>
            </Link>
        </div>
    );
};

export default ServicesDetail;