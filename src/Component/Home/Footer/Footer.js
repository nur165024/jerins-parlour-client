import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import facebookIcon from '../../../image/Vector.png';
import instagramIcon from '../../../image/Vector-1.png';
import linkedinIcon from '../../../image/Vector-2.png';
import youtubeIcon from '../../../image/Vector-3.png';
import { GoLocation } from "react-icons/go";

const Footer = () => {
    return (
        <section id="footer__part">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="footer__text">
                            <h6>
                                <GoLocation /> H#000(0th Floor), Road #00,New Dohs, Mohakhali,Dhaka,Bangladesh.
                            </h6>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="footer__title">
                            <h3>Company</h3>
                        </div>
                        <ul className="footer__link">
                            <li><Link className="quick__link" to="/">About</Link></li>
                            <li><Link className="quick__link" to="/">Project</Link></li>
                            <li><Link className="quick__link" to="/">Our Team</Link></li>
                            <li><Link className="quick__link" to="/">Terms Conditions</Link></li>
                            <li><Link className="quick__link" to="/">Submit Listing</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <div className="footer__title">
                            <h3>Quick Link</h3>
                        </div>
                        <ul className="footer__link">
                            <li><Link className="quick__link" to="/">Quick Links</Link></li>
                            <li><Link className="quick__link" to="/">Rentals</Link></li>
                            <li><Link className="quick__link" to="/">Sales</Link></li>
                            <li><Link className="quick__link" to="/">Contact</Link></li>
                            <li><Link className="quick__link" to="/">Our Blog</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <div className="footer__title">
                            <h3>About us</h3>
                        </div>
                        <div className="social__media">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias reiciendis eaque, minus ut dolor aut sit obcaecati, iure commodi accusantium sequi sed eius, cupiditate fugiat.</p>
                            <ul>
                                <li>
                                    <a target="_blank" href="https://www.facebook.com/">
                                        <img src={facebookIcon} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://www.facebook.com/">
                                        <img src={instagramIcon} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://www.facebook.com/">
                                        <img src={linkedinIcon} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://www.facebook.com/">
                                        <img src={youtubeIcon} alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;