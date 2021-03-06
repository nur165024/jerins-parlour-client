import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <section id="header__part">
            <div className="container">
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
        </section>
    );
};

export default Header;