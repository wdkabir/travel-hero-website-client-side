import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        //Contact Section part
        <>
        <section className="contact-section py-5">
        <div>
            <Container>
                <Row className="text-center">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 my-3">
                        <h1>Get In Touch!</h1>
                        <p>We've answered our most common queries in the FAQs. · If you have a query regarding a payment, or wish to change your billing date, you can call usWe've answered our.</p>
                    </div>
                    <div className="col-md-2"></div>
                </Row>
            </Container>
        </div>
        <div>
            <Container>
                <Row className="text-center my-5">
                <div className="col-md-6">
                <Image src="https://i.ibb.co/wpmqH9w/contact.jpg" fluid />
                    <p className="my-3">For further information on any of our services, or to reach a patient, please contact The Greenlife Hospital main phone line. If you have any questions, one of our Contact Centre Agents will be happy to direct your call to the appropriate area.</p>
                </div>
                {/* Contact Form Part */}
                <div className="col-md-6">
                    <Form className="contact">
                    <Form.Text className="text-center">
                            <h1 className="py-3">Contact Us</h1>
                        </Form.Text>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                            <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Control type="email" placeholder="Enter Email" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Control placeholder="Address" />
                        </Form.Group>


                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Control placeholder="City" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Control placeholder="State" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Control placeholder="Zipcode" />
                            </Form.Group>
                        </Row>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                 <Form.Control as="textarea" rows={3} placeholder="Massage"/>
                            </Form.Group>

                        <Button className="w-100" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                </Row>
                
            </Container>
        </div>
        </section>
        
        </>
    );
};

export default Contact;