import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Packages.css';
import usePackage from '../../Hooks/usePackage';
import Package from '../Package/Package';

const Packages = () => {
    const [packages] = usePackage();
    return (
        //Packages Part
        <>
    <div className="container">
        <h1 className="text-center mt-5">Most Popular Packages</h1>
    </div>
        <div className="py-5">
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        packages.map(addpackage => <Package allpackage={addpackage}></Package>)
                    }
                </Row>
            </Container>
        </div>
        
    </>
    );
};

export default Packages;