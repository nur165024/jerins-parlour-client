import React from 'react';
import './ContactForm.css';
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-row d-flex">
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" name="first_name" placeholder="Enter First Name" 
                                    {...register("first_name", { required: true })} />
                                    <p className="text-danger">{errors.first_name && "First Name is required"}</p>
                                </div>

                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" name="last_name" placeholder="Enter last Name"
                                    {...register("last_name", { required: true })} />
                                    <p className="text-danger">{errors.last_name && "last Name is required"}</p>
                                </div>
                            </div>
                            <div class="form-row d-flex">
                                <div class="form-group col-md-6">
                                    <input type="email" class="form-control" name="email" placeholder="Email"
                                    {...register("email", { required: true })} />
                                    <p className="text-danger">{errors.email && "Email is required"}</p>
                                </div>

                                <div class="form-group col-md-6">
                                    <input type="tel" class="form-control" name="phone__number" placeholder="Phone Number"
                                    {...register("phone__number", { required: true })} />
                                    <p className="text-danger">{errors.phone__number && "Phone Number is required"}</p>
                                </div>
                            </div>

                            <div class="form-group">
                                <textarea class="form-control" name="message" placeholder="Your message"
                                {...register("message", { required: true })} ></textarea>
                                <p className="text-danger">{errors.message && "message is required"}</p>
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