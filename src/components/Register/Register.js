import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef(null);
    const nameRef = useRef('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password)
    };
    if (user) {
        navigate('/home')
    }
    const navigateLogin = () => {
        navigate('/login')
    }
    return (
        <div>
            <h1 className='text-center'>Please Register Now</h1>
            <Form className='w-50 mx-auto' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password"required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='text-center'>Already have an account? <Link to={"/login"} className='text-center text-decoration-none text-danger fs-5' onClick={navigateLogin} >Login Now</Link></p>
        </div>
    );
};

export default Register;