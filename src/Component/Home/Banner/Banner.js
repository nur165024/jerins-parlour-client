import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import bannerImage from '../../../image/beautiful-image.png';

const Banner = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="banner__content">
                    <h1>Beauty Salon <br /> For Every Women</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus maiores eum dolorem repellat ea suscipit eaque, rem perferendis at perspiciatis rerum voluptate provident aspernatur illum.</p>
                    <Link to="#" className="btn btn-button">Get Appointment</Link>
                </div>
            </div>
            <div className="col-md-6 text-center">
                <div className="banner__image">
                    <img src={bannerImage} alt="banner image" />
                </div>
            </div>
        </div>
    );
};

export default Banner;