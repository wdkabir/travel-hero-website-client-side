import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        //About section
        <>
            <section className="about-container my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-12">
                            <div className="home-about">
                                <img className="img-fluid" src="https://i.ibb.co/94Y358r/aboutusimage.png" alt="home-about" />
                            </div>
                        </div>
                        <div className="col-md-4 col-12 mt-2">
                            <div className="sec-title text-center">
                                <p className="text-uppercase abril-font">About Travel Hero</p>
                                <h2 className="text-uppercase abril-font mb-3">Travel Hero World Best Travel Agency Company Since 1990.</h2>
                                <p className="text-justify">
                                “Perhaps travel cannot prevent bigotry, but by demonstrating that all peoples cry, laugh, eat, worry, and die, it can introduce the idea that if we try and understand each other, we may even become friends.” The wise words above were excerpted from Maya Angelou’s book, Wouldn’t Take Nothing for My Journey Now. With her literary prominence, Maya Angelou wrote stories centred on themes she strongly believed in, including travel. In this particular book, she expressed an opinion that travellers would most likely agree with — that to widen our perspective, to deepen our knowledge, one must explore the world.
                                </p>
                                <Link to="/packages">
                                    <Button variant="outline-info" className="mt-4 text-uppercase fw-bolder">See Our Packages</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;