import React from 'react';
import './Experts.css';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const Experts = () => {
    const expertsServicer = [
        {id:1, name:'Sabbir', img:expert1},
        {id:2, name:'Salman', img:expert2},
        {id:3, name:'Tareque', img:expert3},
        {id:4, name:'Rakib', img:expert4},
        {id:5, name:'Sagor', img:expert5},
        {id:6, name:'Ibrahim', img:expert6},
    ]
    return (
        <div>
            <h1>Our Experts</h1>
            <div className="row">
            {
                expertsServicer.map(expert => <Expert
                    key={expert.id}
                    expert={expert}
                ></Expert>)
            }
            </div>
        </div>
    );
};

export default Experts;