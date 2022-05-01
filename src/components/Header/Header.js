import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
            <Container>
            <Navbar.Brand as={Link} to={'/home'}>
                <img src={logo} alt="" height={'30px'} />        
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link as={Link} to={'/home'}>Home</Nav.Link>
                <Nav.Link href='home#services'>Services</Nav.Link>  
                <Nav.Link href='home#experts'>Experts</Nav.Link>  
                <Nav.Link as={Link} to={'/shared'}>Shared</Nav.Link>
                </Nav>
                <Nav>
                        <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
                        {
                            user && <>
                                <Nav.Link as={Link} to={'/addservice'}>Add</Nav.Link>
                                <Nav.Link as={Link} to={'/manage'}>Manage</Nav.Link>
                                <Nav.Link as={Link} to={'/orders'}>Orders</Nav.Link>
                            </>
                        }
                        {
                            user ? <button onClick={handleSignOut}>Sign out</button> : 
                            <Nav.Link as={Link} to={'/login'}>Login</Nav.Link> 
                        }   
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
    );
};

export default Header;