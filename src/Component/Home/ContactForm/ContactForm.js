import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <section id="contactForm__part">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="webSite__title">
                            <h2>Let us handle your <br /> project Professionally</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8 message__form">
                        <form>
                            <div class="form-row d-flex">
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" id="first_name" placeholder="Enter First Name" />
                                </div>

                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" id="last_name" placeholder="Enter last Name" />
                                </div>
                            </div>
                            <div class="form-row d-flex">
                                <div class="form-group col-md-6">
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                                </div>

                                <div class="form-group col-md-6">
                                    <input type="tel" class="form-control" id="phone__number" placeholder="Phone Number" />
                                </div>
                            </div>

                            <div class="form-group">
                                <textarea class="form-control" id="message" placeholder="Your message"></textarea>
                            </div>
                            <br />
                            <div className="text-center">
                                <button type="submit" class="btn btn-button">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;