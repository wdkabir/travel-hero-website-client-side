import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Destination.css';

const Destination = () => {
    return (
        //Destination Section
        <>
        <section className="destination">
            <Container>
                <Row>
                    <div className="text-center py-5">
                        <h1>Most Popular Destination</h1>
                    </div>
                    <div className="col-md-3">
                        <Col className="card-container">
                            <Card className="h-100 border-0 card-border position-relative my-3">
                                <Card.Img variant="top" className="img-fluid border-0 card-img" src="https://i.ibb.co/F4MJZmQ/location-1.jpg" />

                                <div className="position-absolute bottom-0 left-0 w-100 bg-info text-center p-3 text-white">
                                    <Card.Title>Austria</Card.Title>
                                </div>
                                <div className="middle">
                                    <div className="card-btn">
                                        <Link to="/packages"><Button variant="info" className="fs-6 fw-bolder">See Packages</Button></Link>
                                    </div>
                                </div>

                            </Card>
                        </Col>
                    </div>
                    <div className="col-md-3">
                        <Col className="card-container">
                            <Card className="h-100 border-0 card-border position-relative my-3">
                                <Card.Img variant="top" className="img-fluid border-0 card-img" src="https://i.ibb.co/18RwdY3/location-2.jpg" />

                                <div className="position-absolute bottom-0 left-0 w-100 bg-info text-center p-3 text-white">
                                    <Card.Title>Italy</Card.Title>
                                </div>
                                <div className="middle">
                                    <div className="card-btn">
                                    <Link to="/packages"><Button variant="info" className="fs-6 fw-bolder">See Packages</Button></Link>
                                    </div>
                                </div>

                            </Card>
                        </Col>
                    </div>
                    <div className="col-md-3">
                        <Col className="card-container">
                            <Card className="h-100 border-0 card-border position-relative my-3">
                                <Card.Img variant="top" className="img-fluid border-0 card-img" src="https://i.ibb.co/gmCXj9b/location-3.jpg" />

                                <div className="position-absolute bottom-0 left-0 w-100 bg-info text-center p-3 text-white">
                                    <Card.Title>India</Card.Title>
                                </div>
                                <div className="middle">
                                    <div className="card-btn">
                                    <Link to="/packages"><Button variant="info" className="fs-6 fw-bolder">See Packages</Button></Link>
                                    </div>
                                </div>

                            </Card>
                        </Col>
                    </div>
                    <div className="col-md-3">
                        <Col className="card-container">
                            <Card className="h-100 border-0 card-border position-relative my-3">
                                <Card.Img variant="top" className="img-fluid border-0 card-img" src="https://i.ibb.co/3R1Yd79/location-4.jpg" />

                                <div className="position-absolute bottom-0 left-0 w-100 bg-info text-center p-3 text-white">
                                    <Card.Title>China</Card.Title>
                                </div>
                                <div className="middle">
                                    <div className="card-btn">
                                    <Link to="/packages"><Button variant="info" className="fs-6 fw-bolder">See Packages</Button></Link>
                                    </div>
                                </div>

                            </Card>
                        </Col>
                    </div>
                    <div className="col-md-3">
                        <Col className="card-container">
                            <Card className="h-100 border-0 card-border position-relative my-3">
                                <Card.Img variant="top" className="img-fluid border-0 card-img" src="https://i.ibb.co/3vLSJ7n/location-5.jpg" />

                                <div className="position-absolute bottom-0 left-0 w-100 bg-info text-center p-3 text-white">
                                    <Card.Title>Australia</Card.Title>
                                </div>
                                <div className="middle">
                                    <div className="card-btn">
                                    <Link to="/packages"><Button variant="info" className="fs-6 fw-bolder">See Packages</Button></Link>
                                    </div>
                                </div>

                            </Card>
                        </Col>
                    </div>
                    <div className="col-md-3">
                        <Col className="card-container">
                            <Card className="h-100 border-0 card-border position-relative my-3">
                                <Card.Img variant="top" className="img-fluid border-0 card-img" src="https://i.ibb.co/pnjkwfY/location-6.jpg" />

                                <div className="position-absolute bottom-0 left-0 w-100 bg-info text-center p-3 text-white">
                                    <Card.Title>Rome</Card.Title>
                                </div>
                                <div className="middle">
                                    <div className="card-btn">
                                    <Link to="/packages"><Button variant="info" className="fs-6 fw-bolder">See Packages</Button></Link>
                                    </div>
                                </div>

                            </Card>
                        </Col>
                    </div>
                    <div className="col-md-3">
                        <Col className="card-container">
                            <Card className="h-100 border-0 card-border position-relative my-3">
                                <Card.Img variant="top" className="img-fluid border-0 card-img" src="https://i.ibb.co/W5Wv8TG/location-7.jpg" />

                                <div className="position-absolute bottom-0 left-0 w-100 bg-info text-center p-3 text-white">
                                    <Card.Title>Bangladesh</Card.Title>
                                </div>
                                <div className="middle">
                                    <div className="card-btn">
                                    <Link to="/packages"><Button variant="info" className="fs-6 fw-bolder">See Packages</Button></Link>
                                    </div>
                                </div>

                            </Card>
                        </Col>
                    </div>
                    <div className="col-md-3">
                        <Col className="card-container">
                            <Card className="h-100 border-0 card-border position-relative my-3">
                                <Card.Img variant="top" className="img-fluid border-0 card-img" src="https://i.ibb.co/sqxprtF/location-8.jpg" />

                                <div className="position-absolute bottom-0 left-0 w-100 bg-info text-center p-3 text-white">
                                    <Card.Title>Khasmir</Card.Title>
                                </div>
                                <div className="middle">
                                    <div className="card-btn">
                                    <Link to="/packages"><Button variant="info" className="fs-6 fw-bolder">See Packages</Button></Link>
                                    </div>
                                </div>

                            </Card>
                        </Col>
                    </div>
                </Row>
            </Container>
        </section>
    </>
    );
};

export default Destination;