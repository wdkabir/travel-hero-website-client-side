import React from "react";
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
                            Millions of people of all ages and from around the
                            world are improving their lives with us.We work with
                            a passion of taking challenges and creating new ones
                            in advertising sector.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <h4>Top Services</h4>
                        <span>ENGINE DIAGNOSTIC</span>
                        <br />
                        <span>WHEEL ALIGNMENT</span>
                        <br />
                        <span>OIL CHANGING</span>
                        <br />
                        <span>BRAKE REPAIRING</span>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
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
                            to="/services"
                        >
                            Services
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
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <h4>Follow us</h4>
                        <p>
                            Subscribe our Youtube channel to get our latest
                            update & news
                        </p>
                        <div className="d-flex justify-content-around">
                            <a href="https://www.facebook.com/">
                                <i className="fab fa-2x fa-facebook-square text-dark"></i>
                            </a>
                            <a href="https://www.linkedin.com/signup">
                                <i className="fab fa-2x fa-linkedin text-dark"></i>
                            </a>
                            <a href="https://twitter.com/?lang=en">
                                <i className="fab fa-2x fa-twitter-square text-dark"></i>
                            </a>
                            <a href="https://www.youtube.com/">
                                <i className="fab fa-2x fa-youtube text-dark"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container pb-3">
                    <h5 className="text-center ">
                        Copyright &copy; 2021 All rights reserved | This Site
                        Developed by {" "}
                        <span
                            style={{ color: "#f4c70b" }}
                            className=" mt-2 d-inline-block"> Kabir Hossain
                        </span>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Footer;