import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../customHook/useServiceDetail';
import auth from '../../firebase.init';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const order = {
            name: event.target.name.value,
            email: user.email,
            service: service.name,
            service_ID: serviceId,
            address: event.target.address.value,
            phone: event.target.contact.value
        };
        axios.post('http://localhost:5000/order', order) 
            .then(res => {
                const { data } = res;
                if (data.insertedId ) {
                    alert('Your order is booked');
                    event.target.reset();
                }
        })

    }

    // const [user, setUser] = useState({
    //     user_name: "Nur Hossain Farid",
    //     user_email: "nur35-843@diu.edu.bd",
    //     user_contact: '01841268946',
    //     user_address: 'Madla, senbag, Noakhali'
    // });
    
    // const handleChange = e => {
    //     console.log(e.target.value)
    //     const { user_address, ...rest } = user;
    //     const newAddress = e.target.value;
    //     setUser(newAddress, rest)
    // }
    return (
        <div className='w-50 mx-auto'>
            <h3>Please order : {service.name}</h3>
            <form onSubmit={handleSubmit} className='d-flex flex-column gap-3' >
                <input type="text" name='service' value={service?.name} placeholder='Product Name' />
                <input type="text" name='name' placeholder='Your name' />
                <input type="email" name='email' placeholder='Enter your email' value={user?.email} required disabled />
                <input type="text" name='address' placeholder='Address' />
                <input type="tel" name="contact" placeholder='Your contact number' id="" />
                <input type="submit" className='bg-primary w-50 text-white' value="Submit" />
            </form>
        </div>
    );
};

export default Checkout;