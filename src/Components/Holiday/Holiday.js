import React from 'react';
import './Holiday.css';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Holiday = () => {
    return (
        <>
        {/* Holiday Section Part */}
        <section className="holiday text-center">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6">
                    <Image src="https://i.ibb.co/XWfSYx0/banner-bg.jpg" fluid />
                    </div>
                    <div className="col-md-6 py-3">
                        <h1>Enjoy Your Travel And Holiday</h1>
                        <p>A holiday is a day set aside by custom or by law on which normal activities, especially business or work including school, are suspended or reduced. Generally, holidays are intended to allow individuals to celebrate or commemorate an event or tradition of cultural or religious significance. Holidays may be designated by governments, religious institutions, or other groups or organizations. The degree to which normal activities are reduced by a holiday may depend on local laws, customs, the type of job held or personal choices.</p>
                        <Link to="/packages"><Button size="lg" className="booking-button mt-3">See Packages</Button></Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Holiday;