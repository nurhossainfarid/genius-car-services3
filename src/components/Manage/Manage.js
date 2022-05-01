import React from 'react';
import useServices from '../../customHook/useServices';

const Manage = () => {
    const [services, setServices] = useServices();
    console.log(services);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure');
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining)
            })
        }
    }
    return (
        <div>
            <h4>Manage page</h4>
            {
                services.map(service => <div key={service._id}>
                    <section className='d-flex justify-content-center align-items-center gap-3 bg-primary mb-5 text-white w-50 mx-auto'>
                        <div>
                            <h5>{service.name}</h5>
                            <p>{service.price}</p>
                        </div>
                        <button onClick={() => handleDelete(service._id)}>X</button>
                    </section>
                </div>)
            }
        </div>
    );
};

export default Manage;