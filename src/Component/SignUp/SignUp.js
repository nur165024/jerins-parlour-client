import React from 'react';
import logoImage from '../../image/logo.png';
import googleLogo from '../../image/google.png';
import facebookLogo from '../../image/facebook.png';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section id="login__part">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 text-center">
                        <div className="logo__loginPage">
                            <Link to="/">
                                <img src={logoImage} alt="logo" />
                            </Link>
                        </div>
                        <div class="card">
                            <div class="card-body signup__form">
                                <h3 class="card-title mb-3">Create an account</h3>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div class="form-group">
                                            <input type="text" {...register("first__name", { required: true })} class="form-control" autoFocus name="first__name" placeholder="First Name" />
                                            <p className="text-danger text-left">{errors.first__name && "First name is required"}</p>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" {...register("last__name", { required: true })} class="form-control" name="last__name" placeholder="Last Name" />
                                            <p className="text-danger text-left">{errors.last__name && "Last name is required"}</p>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" {...register("email", { required: true })} class="form-control" name="email" placeholder="Enter Your Email" />
                                            <p className="text-danger text-left">{errors.email && "Email is required"}</p>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" {...register("password", { required: true })} class="form-control" name="password" placeholder="Password" />
                                            <p className="text-danger text-left">{errors.password && "Password is required"}</p>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" {...register("confirm_password", { required: true })} class="form-control" name="confirm_password" placeholder="Confirm Password" />
                                            <p className="text-danger text-left">{errors.confirm_password && "Confirm Password is required"}</p>
                                        </div>
                                        <button type="submit" class="btn btn-block btn-button mb-3">SignUp</button>
                                    </form>
                                <p class="card-text">Already have an account? <Link className="redirect__link" to='/login'>Login</Link></p>
                            </div>
                        </div>
                        <div className="login__other">
                            <h5 className="mt-3">Or</h5>
                            <Link to="#" class="btn btn-block btn__button">
                                <img src={googleLogo} alt="google logo" />
                                Contiune with Google
                            </Link>
                            <Link to="#" class="btn btn-block btn__button">
                                <img src={facebookLogo} alt="google logo" />
                                Contiune with Google
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;