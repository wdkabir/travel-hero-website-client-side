import React from 'react';
import { Container, Row } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSignInAlt, faClock, faUsers } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
import './Packages.css';
import usePackage from '../../Hooks/usePackage';
import Package from '../Package/Package';

const Packages = () => {
    const [packages] = usePackage();
    // const userSignIn = <FontAwesomeIcon icon={faSignInAlt} />
    // const durationIcon = <FontAwesomeIcon icon={faClock} />
    // const enrolledUsersIcon = <FontAwesomeIcon icon={faUsers} />
    return (
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