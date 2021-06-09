import React from 'react';
import Header from '../Header/Header';
import Professional from '../Professional/Professional';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Services></Services>
            <Professional></Professional>
        </>
    );
};

export default Home;