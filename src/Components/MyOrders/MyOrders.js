import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {
    // const  {_id, title, description, price, image} = props.allpackage;
    const {user} = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    console.log(myOrders);
    useEffect(()=>{
        fetch(`http://localhost:5000/myorders/${user?.email}`)
        .then((res)=> res.json())
        .then((data) => setMyOrders(data));
    }, [user?.email]);
    return (
        <>
    <div className="container">
        <h1 className="text-center mt-5">Most Popular Packages</h1>
    </div>
        <div className="py-5">
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        myOrders.map(myorder => {
                            return(
                                <Col key={myorder._id}>
                        <Card>
                        <Card.Img variant="top" className=" img-fluid rounded-4 packages-card-img" src={myorder?.orderplace?.image}/>
                            <Card.Body>
                            <Card.Title><h3>{myorder?.orderplace?.title}</h3></Card.Title>
                            <Card.Text className="d-flex flex-column flex-md-row justify-content-between"><p className="text-muted">{myorder?.orderplace?.description}</p>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex flex-column flex-md-row card-footer justify-content-between">
                            <h5 className="text-muted">${myorder?.orderplace?.price}</h5>
                            <Link to=""><Button variant="outline-success"> Delete</Button></Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                            )
                        })
                    }
                
                </Row>
            </Container>
        </div>
        
    </>
    );
};

export default MyOrders;