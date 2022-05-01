import axios from 'axios';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef(null);
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
    ] = useSignInWithEmailAndPassword(auth);
    // sign in with google
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    if (user) {
        navigate('/home');
    };
    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('http://localhost:5000/login', { email });
        console.log(data);
    };
    const navigateRegister = () => {
        navigate('/register')
    };
    return (
        <div className='mx-auto'>
            <PageTitle title="Login"></PageTitle>
            <h1 className='text-center'>Please Login</h1>
            <Form className='w-50 mx-auto'  onSubmit={handleSubmit}>
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
                    Login
                </Button>
            </Form>
            <p className='text-center'>Create a new car? <Link to={"/register"} className='text-center text-decoration-none text-danger fs-5' onClick={navigateRegister} >Register Now</Link></p>
            <button onClick={() => signInWithGoogle()}>Sign in With Google</button>
        </div>
    );
};

export default Login;