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
                    <div className="col-md-8">
                        <form>
                            <div class="form-row d-flex">
                                <div class="form-group col-md-6">
                                    <label for="first_name">First Name</label>
                                    <input type="email" class="form-control" id="first_name" placeholder="Enter First Name" />
                                </div>

                                <div class="form-group col-md-6">
                                    <label for="last_name">Last Name</label>
                                    <input type="password" class="form-control" id="last_name" placeholder="Enter last Name" />
                                </div>
                            </div>
                            <div class="form-row d-flex">
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                                </div>

                                <div class="form-group col-md-6">
                                    <label for="inputPassword4">Password</label>
                                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="message">Address</label>
                                <textarea class="form-control" id="message" placeholder="1234 Main St"></textarea>
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