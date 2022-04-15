import React from 'react';
import Experts from './Experts/Experts';
import './Home.css'
import Services from './Services/Services'
import Slide from './Slide/Slide';

const Home = () => {
    return (
        <div>
            <Slide></Slide>
            <h1 className='text-primary text-center'>Our Services</h1>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;