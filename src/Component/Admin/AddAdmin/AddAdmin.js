import React from 'react';
import { useForm } from 'react-hook-form';
import SideBar from '../SideBar/SideBar';
import './AddAdmin.css';

const AddAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <SideBar></SideBar>
                    <div className="col-md-10" style={{ background:'#F4F7FC' }}>
                        <div style={{ padding:'20px 0' }} className="d-flex">
                            <h4>Make Admin</h4>
                            <h4 style={{ position:'absolute',top:'20px', right:'20px' }}>Sufi Ahmed</h4>
                        </div>
                        <div className="row justify-content-center my-4">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-body" id="add_service_form">
                                        <form onSubmit={handleSubmit(onSubmit)} >
                                            <div className="form-inline">
                                                <label className="sr-only" htmlFor="email">Email</label>
                                                <input type="text" style={{ width:'50%' }} className="form-control mb-2 mr-sm-2" name="email" autoFocus id="email" {...register("email", { required: true })} placeholder="Enter Email" />
                                                <button type="submit" className="btn btn-button mb-2">Submit</button>
                                            </div>
                                            <p className="text-danger d-block">{errors.email && "Email is required"}</p>
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

export default AddAdmin;