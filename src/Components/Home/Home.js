import React from 'react';
import { Spinner } from 'react-bootstrap';
import usePackage from '../../Hooks/usePackage';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Destination from '../Destination/Destination';
import Featured from '../Featured/Featured';
import Holiday from '../Holiday/Holiday';
import Packages from '../Packages/Packages';
import TourGuide from '../TourGuide/TourGuide';

const Home = () => {
    const [packages]= usePackage();
    if (packages.length === 0) {
        return (
            <div style={{ minHeight: '100vh' }} className="d-flex justify-content-center mt-5">
                <Spinner animation="grow" variant="info" />
            </div>
        )
    }
    return (
        //Components
        <>
            <Banner></Banner>
            <Featured></Featured>
            <Destination></Destination>
            <Holiday></Holiday>
            <Packages></Packages>
            <TourGuide></TourGuide>
            <Contact></Contact>
        </>
    );
};

export default Home;