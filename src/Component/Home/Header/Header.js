import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <section id="header__part">
            <div className="container">
                <Navbar></Navbar>
            </div>
        </section>
    );
};

export default Header;