import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import './Addpackages.css';

const Addpackages = () => {
    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) =>{
    fetch('https://howling-monster-36925.herokuapp.com/packages', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res =>{
        if (res){
            alert('Add Your Package');
            history.push('/packages');
            reset();
        }
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
                            <Form.Group className="mb-3" controlId="formGridtitle">
                                <Form.Control
                                {...register("title", { required: true })}
                                type="text" placeholder="Add Packages Title" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGriddescription">
                                <Form.Control
                                {...register("description", { required: true })}
                                as="textarea" placeholder="Add Packages Description"/>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} className="mb-3" controlId="formGridprice">
                                <Form.Control
                                {...register("price", { required: true })}
                                type="number" placeholder="Add Packages Price"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridimage" className="mb-3">
                                <Form.Control
                                {...register("image", { required: true })}
                                type="text" placeholder="Add Packages Image URL"/>
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

export default Addpackages;