import React from 'react';
import { useForm } from 'react-hook-form';
import UserSideBar from '../UserSideBar/UserSideBar';
import './Review.css';

const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <UserSideBar></UserSideBar>
                    <div className="col-md-10" style={{ background:'#F4F7FC' }}>
                        <div style={{ padding:'20px 0' }} className="d-flex">
                            <h4>User Review</h4>
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
                                                <input type="text" className="form-control" {...register("companyName", { required: true })} name="companyName" id="companyName" placeholder="Company Name" />
                                                <span className="text-danger">{errors.companyName && "Company Name is required"}</span>
                                            </div>
                                            <div className="form-group">
                                                <textarea className="form-control" rows="4" {...register("description", { required: true })} name="description" id="description" placeholder="Description"></textarea>
                                                <span className="text-danger">{errors.description && "Description is required"}</span>
                                            </div>

                                            <div className="form-group">
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

export default Review;