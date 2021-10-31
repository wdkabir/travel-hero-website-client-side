import React from 'react';
import './Holiday.css';
import img from '../../images/banner-bg.jpg';
import { Button, Image } from 'react-bootstrap';

const Holiday = () => {
    return (
        <>
        <section className="holiday">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6">
                    <Image src={img} fluid />
                    </div>
                    <div className="col-md-6">
                        <h1>Enjoy Your Travel And Holiday</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum perspiciatis harum enim provident illo rem officia quo impedit molestiae eaque, nihil culpa eum, inventore omnis iste rerum quidem ex ipsa?</p>
                        <Button variant="primary" size="lg">Book Now</Button>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Holiday;