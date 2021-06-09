import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../../image/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="row" id="navbar__part">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/">
                    <img width="150px" src={logoImage} alt="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Our Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Our Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Contact us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn-button" to="#">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;