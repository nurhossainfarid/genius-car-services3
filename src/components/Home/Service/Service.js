import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price, id } = service;
    const navigate = useNavigate();
    const navigatedDetails = id => {
        navigate(`/service/${id}`)
    }

    return (
        <div id='services' className='service-container'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <h5>{price}</h5>
            <button onClick={() => navigatedDetails(id)}>Book</button>
        </div>
    );
};

export default Service;