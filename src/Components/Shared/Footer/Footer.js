import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "#FF3614",
        textDecoration: "underline",
    };
    return (
        <div
            style={{ backgroundColor: "#F8F9FA" }}
            className="text-dark">
            <div className="container text-center">
                <div className="row pt-4 pb-2">
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <img style={{height: "100px", width: "180px"}} className='mb-3' src="https://i.ibb.co/hHf7Hgd/travel-hero-logo.png" alt="" />
                        <p>
                        The tourism industry is full of big achievers and thrilling personalities, real travel heroes! The Travel Hero Podcast by ITB is a series of intimate talks with inspriring minds of the tourism industry about their lives.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4 mt-5">
                        <h4>Top Destination</h4>
                        <span>Austria</span>
                        <br />
                        <span>Italy</span>
                        <br />
                        <span>India</span>
                        <br />
                        <span>Bangladesh</span>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4 mt-5">
                        <h4>Quic Links</h4>
                        <NavLink
                            className="text-dark text-decoration-none"
                            activeStyle={activeStyle}
                            to="/home"
                        >
                            Home
                        </NavLink>
                        <br />
                        <NavLink
                            className="text-dark text-decoration-none"
                            activeStyle={activeStyle}
                            to="/packages"
                        >
                            Packages
                        </NavLink>
                        <br />
                        <NavLink
                            className="text-dark text-decoration-none"
                            activeStyle={activeStyle}
                            to="/about"
                        >
                            About us
                        </NavLink>
                        <br />
                        <NavLink
                            className="text-dark text-decoration-none"
                            activeStyle={activeStyle}
                            to="/contact"
                        >
                            Contact us
                        </NavLink>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4 mt-5 text-center">
                        <h4>Follow us</h4>
                        <p>
                            Subscribe Now! For Get Our Latest Update
                        </p>
                        <div className="mt-3">
                            <h4>Subscibe Now</h4>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Your Email"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="info" onClick={(e) => { e.preventDefault() }} id="button-addon2">
                                    Subscribe Now!
                                </Button>
                            </InputGroup>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container pb-3">
                    <h5 className="text-center ">
                        Copyright &copy; 2021 All rights reserved |
                        Developed By {" "}
                        <span
                            style={{ color: "#26B9BC" }}
                            className=" mt-2 d-inline-block"> Kabir Hossain
                        </span>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Footer;