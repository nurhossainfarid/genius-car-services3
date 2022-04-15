import React from 'react';
import { Card, Col} from 'react-bootstrap';
import './Expert.css';
const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <>
            <Col id='experts' xs={12} lg={4} md={6}>
                <Card className='mt-10'>
                    <Card.Img variant="top" src={img} />    
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Expert;