import React from 'react';
import { Button, Card, Container, Form, FormSelect, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas, faHandshake, faAssistiveListeningSystems, faRoute } from '@fortawesome/free-solid-svg-icons';
import './Featured.css';

const Featured = () => {
    // Font Awesome Icon
    const cardIcon1 = <FontAwesomeIcon icon={faGlobeAmericas} />
    const cardIcon2 = <FontAwesomeIcon icon={faHandshake} />
    const cardIcon3 = <FontAwesomeIcon icon={faAssistiveListeningSystems} />
    const cardIcon4 = <FontAwesomeIcon icon={faRoute} />
    return (
        <>
        {/* Features Section Part */}
        <section className="featured my-5">
            <Container className="mx-auto">
                <Row className="mx-auto">
                <div className="col-md-3 text-center mb-3">
                        <Card className="featured-card py-3">
                        <Card.Body>
                            <Card.Title> <p className="card-icon">{cardIcon1}</p> </Card.Title>
                            <Card.Text>
                                <h4 className="card-text">2000+ Our worldwide guide</h4>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3 text-center mb-3">
                        <Card className="featured-card py-3">
                        <Card.Body>
                            <Card.Title> <p className="card-icon">{cardIcon2}</p> </Card.Title>
                            <Card.Text>
                                <h4 className="card-text">100% trusted travel agency</h4>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3 text-center mb-3">
                        <Card className="featured-card py-3">
                        <Card.Body>
                            <Card.Title> <p className="card-icon">{cardIcon3}</p> </Card.Title>
                            <Card.Text>
                                <h4 className="card-text">20+ year of travel experience</h4>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3 text-center mb-3">
                        <Card className="featured-card py-3">
                        <Card.Body>
                            <Card.Title> <p className="card-icon">{cardIcon4}</p> </Card.Title>
                            <Card.Text>
                                <h4 className="card-text">95% of our traveller happy</h4>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Container>
        </section>
        {/* Booking Section Part */}
        <section className="booking-section container my-5">
                <Container className="text-center">
                    <div className="sec-title text-center">
                        <h2 className="text-uppercase abril-font mb-5">Check Availability</h2>
                    </div>
                    <Form className="p-5 rounded-3 booking-form">
                        <Row className="g-0 g-3">
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="text-container d-flex justify-content-center fw-bold text-muted">
                                    <i className="fas fa-calendar-alt mt-1 me-2"></i>
                                    <p>Check-In</p>
                                </div>
                                <input
                                    type="date"
                                    className="form-control px-md-5 shadow-none  mb-5 mb-md-0"
                                />
                            </div>

                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="text-container d-flex justify-content-center fw-bold text-muted">
                                    <i className="fas fa-calendar-alt mt-1 me-2"></i>
                                    <p>Check-Out</p>
                                </div>
                                <input
                                    type="date"
                                    className="form-control px-md-5 shadow-none mb-5 mb-md-0"
                                />
                            </div>

                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="row">
                                    <div className="col-12 col-md-6 mb-5 mb-md-0">
                                        <div className="text-container d-flex justify-content-center fw-bold text-muted">
                                            <i className="fas fa-user-friends mt-1 me-2"></i>
                                            <p>Persons</p>
                                        </div>
                                        <FormSelect className="form-control shadow-none">
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                        </FormSelect>
                                    </div>
                                    <div className="col-12 col-md-6 mb-5 mb-md-0">
                                        <div className="text-container d-flex justify-content-center fw-bold text-muted">
                                            <i className="fas fa-map-marker-alt mt-1 me-2"></i>
                                            <p>Country</p>
                                        </div>
                                        <FormSelect className="shadow-none form-control">
                                            <option value="Austria">Austria</option>
                                            <option value="Italy">Italy</option>
                                            <option value="India">India</option>
                                            <option value="China">China</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Bangladesh">Bangladesh</option>
                                        </FormSelect>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3 d-flex align-items-center justify-content-center">
                                <Button
                                    onClick={(e) => e.preventDefault()}
                                    type="submit"
                                    className="py-3 px-3 mt-4 btn-info fw-bold border-0"
                                >
                                    Check Availability
                                </Button>
                            </div>
                        </Row>
                    </Form>
                </Container>
            </section>
        </>
    );
};

export default Featured;