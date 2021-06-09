import React from 'react';
import './Services.css';
import anti from '../../../image/anti.png';
import hair from '../../../image/hair.png';
import skin from '../../../image/skin.png';

const servicesData = [
    {
        id : 1,
        img : anti,
        name : 'Anti Age Face Treatment',
        price : '199',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorem quidem iure aut nisi omnis delectus exercitationem enim sapiente explicabo!',
    },
    {
        id : 2,
        img : hair,
        name : 'Hair Color & Styleing',
        price : '99',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorem quidem iure aut nisi omnis delectus exercitationem enim sapiente explicabo!',
    },
    {
        id : 3,
        img : skin,
        name : 'Skin Care Treatment',
        price : '299',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorem quidem iure aut nisi omnis delectus exercitationem enim sapiente explicabo!',
    }
];

const Services = () => {
    return (
        <section id="services__part">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="webSite__title">
                            <h2>Our Awesome <span className="brand-text-color">Services</span></h2>
                        </div>
                    </div>

                    {
                        servicesData.map((serv) => 
                            <div className="col-md-4 text-center">
                                <div className="services__content">
                                    <img src={serv.img} alt="" />
                                    <h4>{serv.name}</h4>
                                    <h4 className="brand-text-color">${serv.price}</h4>
                                    <p>{serv.text}</p>
                                </div>
                            </div>
                        )
                    }
                    <div className="col-md-12 text-center">
                        <div className="services__button">
                            <button className="btn btn-button">Explore more</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;