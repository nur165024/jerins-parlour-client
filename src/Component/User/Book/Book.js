import React from 'react';
import { useForm } from 'react-hook-form';
import UserSideBar from '../UserSideBar/UserSideBar';
import './Book.css';

const Book = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <UserSideBar></UserSideBar>
                    <div className="col-md-10" style={{ background:'#F4F7FC' }}>
                        <div style={{ padding:'20px 0' }} className="d-flex">
                            <h4>Book</h4>
                            <h4 style={{ position:'absolute',top:'20px', right:'20px' }}>Hello</h4>
                        </div>
                        <div className="row my-4">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body" id="add_service_form">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="form-group">
                                                <input type="text" className="form-control" autoFocus {...register("name", { required: true })} name="name" id="name" placeholder="Enter Name" />
                                                <span className="text-danger">{errors.name && "Name is required"}</span>
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control" {...register("email", { required: true })} name="email" id="email" placeholder="Enter Email" />
                                                <span className="text-danger">{errors.email && "Email is required"}</span>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" {...register("serviceName", { required: true })} name="serviceName" id="serviceName" placeholder="Enter Service Name" />
                                                <span className="text-danger">{errors.serviceName && "Service Name is required"}</span>
                                            </div>

                                            <div class="form-check form-check-inline mb-3">
                                                <input class="form-check-input" type="radio" {...register("payWith", { required: true })} checked name="payWith" id="creaditCard" value="1" />
                                                <label class="form-check-label" htmlFor="creaditCard">Creadit Card</label>
                                                <span className="text-danger">{errors.payWith && "Creadit Card is required"}</span>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" {...register("payWith", { required: true })} name="payWith" id="paypal" value="2" />
                                                <label class="form-check-label" htmlFor="paypal">Paypal</label>
                                                <span className="text-danger">{errors.payWith && "Paypal is required"}</span>
                                            </div>

                                            <div className="form-group">
                                                <input type="text" className="form-control" {...register("cardNumber", { required: true })} name="cardNumber" id="cardNumber" placeholder="Card Number" />
                                                <span className="text-danger">{errors.cardNumber && "Card Number is required"}</span>
                                            </div>

                                            <div class="form-row">
                                                <div class="col">
                                                    <input type="text" className="form-control" {...register("MM_YY", { required: true })} name="MM_YY" id="MM_YY" placeholder="MM/YY" />
                                                    <span className="text-danger">{errors.MM_YY && "MM/YY is required"}</span>
                                                </div>
                                                <div class="col">
                                                    <input type="text" className="form-control" {...register("CVC", { required: true })} name="CVC" id="CVC" placeholder="CVC" />
                                                    <span className="text-danger">{errors.CVC && "CVC is required"}</span>
                                                </div>
                                            </div>
                                            <p>Your Service charged will be <b>$1000</b></p>

                                            <div className="form-group text-right">
                                                <button className="btn btn-button">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Book;