import React from 'react';
import Header from '../Header/Header';
import Professional from '../Professional/Professional';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import './Home.css';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Services></Services>
            <Professional></Professional>
            <Testimonials></Testimonials>
        </>
    );
};

export default Home;