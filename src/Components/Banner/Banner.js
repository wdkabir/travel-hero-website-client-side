import React from 'react';
import { Button, Container, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <>
        <section className="banner">
        <div className="">
                <Container className="banner-booking text-center">
                    <Row>
                        <div className="col-md-12">
                            <h1 className="booking-text">TO MAKE YOUR NEXT TRAVEL DESTINATION...</h1>
                            <Link to="/packages"><Button size="lg" className="booking-button mt-3">View All Packages</Button></Link>
                        </div>
                    </Row>
                </Container>
            </div>
            
        </section>
            
        </>
    );
};

export default Banner;