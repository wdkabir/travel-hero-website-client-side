import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './TourGuide.css';
import TourGuide1 from '../../images/TourGuide/TourGuide1.png';
import TourGuide2 from '../../images/TourGuide/TourGuide2.png';
import TourGuide3 from '../../images/TourGuide/TourGuide3.png';

const TourGuide = () => {
    return (
        <>
            <section className="tour-guide">
                <Container>
                    <Row>
                        <div className="text-center py-5">
                            <h1>All Guide Are 5 Year Expart In Travel</h1>
                        </div>
                        <div className="col-md-4">
                            <Col className="card-container">
                                <Card className="h-100 border-0 card-border position-relative my-3">
                                    <Card.Img variant="top" className="img-fluid border-0 card-img" src={TourGuide1} />

                                    <div className="position-absolute bottom-0 left-0 w-100 text-center p-3 guide-info">
                                        <Card.Title> <h2> Kabir Hossain</h2></Card.Title>
                                        <Card.Text><h5>Tour guide</h5></Card.Text>
                                    </div>
                                    
                                </Card>
                            </Col>
                        </div>
                        <div className="col-md-4">
                            <Col className="card-container">
                                <Card className="h-100 border-0 card-border position-relative my-3">
                                    <Card.Img variant="top" className="img-fluid border-0 card-img" src={TourGuide2} />

                                    <div className="position-absolute bottom-0 left-0 w-100 text-center p-3 guide-info">
                                        <Card.Title> <h2>Joya Hossain</h2></Card.Title>
                                        <Card.Text><h5>Tour guide</h5></Card.Text>
                                    </div>
                                   

                                </Card>
                            </Col>
                        </div>
                        <div className="col-md-4">
                            <Col className="card-container">
                                <Card className="h-100 border-0 card-border position-relative my-3">
                                    <Card.Img variant="top" className="img-fluid border-0 card-img" src={TourGuide3} />

                                    <div className="position-absolute bottom-0 left-0 w-100 text-center p-3 guide-info">
                                        <Card.Title> <h2>Badhan Roy</h2></Card.Title>
                                        <Card.Text><h5>Tour guide</h5></Card.Text>
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

export default TourGuide;