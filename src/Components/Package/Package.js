import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Package = (props) => {
    const  {_id, title, description, price, image} = props.allpackage;
    return (
        <Col>
                        <Card>
                        <Card.Img variant="top" className=" img-fluid rounded-4 packages-card-img" src={image}/>
                            <Card.Body>
                            <Card.Title><h3>{title}</h3></Card.Title>
                            <Card.Text className="d-flex flex-column flex-md-row justify-content-between"><p className="text-muted">{description}</p>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex flex-column flex-md-row card-footer justify-content-between">
                            <h5 className="text-muted">${price}</h5>
                            <Link to={`/placeorder/${_id}`}><Button variant="outline-success"> Book Now</Button></Link>
                            </Card.Footer>
                        </Card>
                    </Col>
    );
};

export default Package;