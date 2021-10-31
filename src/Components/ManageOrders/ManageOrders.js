import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';

const ManageOrders = () => {
    const [manageOrder, setManageOrder] = useState([]);
    useEffect(() =>{
        fetch('https://howling-monster-36925.herokuapp.com/manageorders')
        .then((res) => res.json())
        .then((data) => setManageOrder(data));
    });
    const handleDelete = (id) => {
        const proced = window.confirm('Are you Sure, Delete Your Data?');
        if (proced) {
            const url = `https://howling-monster-36925.herokuapp.com/allorderdelete/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            "Data Delete SuccessFull!",
                            "success"
                        )

                    }
                })
        }
    }

    const handleUpdate = (id) => {
        const url = `https://howling-monster-36925.herokuapp.com/placeorders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(manageOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
            
                    Swal.fire("WoW!",
                        "Status Update SuccessFull!",
                        "success"
                    )
                }
            })
    }
    return (
        <>
    <div className="container">
        <h1 className="text-center mt-5">Manage Orders</h1>
    </div>
        <div className="py-5">
        <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        manageOrder.map(myorder => {
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
                                            <Button className="my-1" onClick={()=>handleUpdate(myorder._id)} variant="outline-success">Update Package</Button>
                                            <Button className="my-1" onClick={()=>handleDelete(myorder._id)} variant="outline-danger"> Delete Package</Button>
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

export default ManageOrders;