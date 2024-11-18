// src/components/Home.jsx
import React from 'react';
import Banner from './Banner';
import Newsletter from './Newsletter';
import VideoCollection from './VideoCollection';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Banner />
            <VideoCollection />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;