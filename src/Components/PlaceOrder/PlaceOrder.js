import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { user } = useAuth();
    console.log(user);
    const { id } = useParams();
    const [orderplace, setOrderplace] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/allorder/${id}`)
        .then(res => res.json())
        .then(data =>{
            setOrderplace(data)
        })
    }, [id])
    const { register, handleSubmit,} = useForm();
  const onSubmit = (data) =>{
    data.status = 'pending';
    data.email = user?.email;
    data.orderplace = orderplace;
    fetch('http://localhost:5000/placeorder', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then (res =>{
        alert('orde place hoiche');
    })
  } 
    return (
        <>
        <Container>
            <Row>
                <div className="col-md-3"></div>
                <div className="col-md-6 my-5 px-5 py-5 package-form">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row className="mb-3">
                            <h1 className="text-center my-3">Add Your Package</h1>
                            <Form.Group className="mb-3" controlId="formGridname">
                                <Form.Control
                                {...register("name", { required: true })}
                                 readOnly defaultValue={user?.displayName}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridemail">
                                <Form.Control
                                {...register("email", { required: true })}
                                 readOnly defaultValue={user?.email}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridaddress">
                                <Form.Control
                                {...register("address", { required: true })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridnumber">
                                <Form.Control
                                {...register("number", { required: true })}
                                />
                            </Form.Group>
                            
                        </Row>
                        <Button variant="primary" type="submit" className="w-100">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div className="col-md-3"></div>
            </Row>
        </Container>
    </>
    );
};

export default PlaceOrder;