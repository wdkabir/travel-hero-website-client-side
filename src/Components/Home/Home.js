import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Destination from '../Destination/Destination';
import Featured from '../Featured/Featured';
import Holiday from '../Holiday/Holiday';
import Packages from '../Packages/Packages';
import TourGuide from '../TourGuide/TourGuide';

const Home = () => {
    return (
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