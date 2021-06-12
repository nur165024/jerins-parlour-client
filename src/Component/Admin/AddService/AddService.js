import React from 'react';
import { useForm } from 'react-hook-form';
import SideBar from '../SideBar/SideBar';
import './AddService.css';


const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <SideBar></SideBar>
                    <div className="col-md-10" style={{ background:'#F4F7FC' }}>
                        <div style={{ padding:'20px 0' }} className="d-flex">
                            <h4>Add Service</h4>
                            <h4 style={{ position:'absolute',top:'20px', right:'20px' }}>Sufi Ahmed</h4>
                        </div>
                        <div className="row justify-content-center my-4">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-body" id="add_service_form">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="form-group">
                                                <label for="title">Service Title</label>
                                                <input type="text" className="form-control" autoFocus {...register("title", { required: true })} name="title" id="title" placeholder="Enter Title" />
                                                <span className="text-danger">{errors.title && "Title is required"}</span>
                                            </div>
                                            <div className="form-group">
                                                <label for="Description">Another label</label>
                                                <textarea type="text" className="form-control" {...register("description", { required: true })} name="description" id="description" placeholder="Enter Description"></textarea>
                                                <span className="text-danger">{errors.description && "Description is required"}</span>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="image">Image</label>
                                                <input type="file" className="form-control" {...register("image", { required: true })} name="image" id="image" />
                                                <span className="text-danger">{errors.image && "Image is required"}</span>
                                            </div>
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

export default AddService;