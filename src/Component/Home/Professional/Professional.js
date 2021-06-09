import React from 'react';
import './Professional.css';
import professionalImage from '../../../image/professonal-image.png'

const Professional = () => {
    return (
        <section id="professional__part">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={professionalImage} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="professional__content">
                            <div className="webSite__title">
                                <h2>Let us handle your <br /> screen <span className="brand-text-color">Professionally</span>.</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti natus esse in distinctio ab fugiat pariatur, molestiae quibusdam! Totam velit quia est reiciendis soluta, incidunt nesciunt commodi blanditiis nulla adipisci.</p>
                            </div>
                            <div className="d-flex">
                                <div className="services__info">
                                    <h3 className="brand-text-color">500+</h3>
                                    <h6>Happy Customer</h6>
                                </div>
                                <div className="services__info">
                                    <h3 className="brand-text-color">16+</h3>
                                    <h6>Total Service</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Professional;