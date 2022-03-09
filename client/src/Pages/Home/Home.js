import React from 'react';
import useSrollRestore from '../../Hooks/useSrollRestore';
import Slider from './Slider/Slider';
import TopTours from './TopTours/TopTours';
import TrandingOffer from './TrandingOffer/TrandingOffer';
import WhyBooking from './WhyBooking/WhyBooking';

const Home = () => {
    useSrollRestore()

    return (
        <div id="home">
            <Slider />
            <TopTours />
            <TrandingOffer />
            <WhyBooking />
        </div>
    );
};

export default Home;