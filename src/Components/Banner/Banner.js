import React from 'react';
import { Button, Container, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Banner.css';

const Banner = () => {
    const packageButtonIcon = <FontAwesomeIcon icon={faArrowRight} />
    return (
        <>
        <section className="banner">
        <div className="">
                <Container className="banner-booking text-center">
                    <Row>
                        <div className="col-md-12">
                            <h1 className="booking-text">TO MAKE YOUR NEXT TRAVEL DESTINATION...</h1>
                            <Link to="/packages"><Button size="lg" className="booking-button mt-3">View All Packages {packageButtonIcon}</Button></Link>
                        </div>
                    </Row>
                </Container>
            </div>
            
        </section>
            
        </>
    );
};

export default Banner;