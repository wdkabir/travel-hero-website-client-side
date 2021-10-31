import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Notfound.css';

const Notfound = () => {
    return (
        <>
            <section className="notfound">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="mt-5">
                                <img src="https://i.ibb.co/p3RDDX6/page-not-found.png" alt="Page Not Found" />
                            </div>
                            <div className="mt-5 mx-auto text-center">
                                <Link to="/">
                                    <Button className="fs-5 fw-bolder">
                                        Back TO Home
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Notfound;