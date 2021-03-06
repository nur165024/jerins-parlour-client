import React from 'react';
import './Login.css';
import logoImage from '../../image/logo.png';
import googleLogo from '../../image/google.png';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
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
                            <div class="card-body">
                                <h3 class="card-title">Login With</h3>
                                <form onSubmit={handleSubmit}>
                                    <Link to="#" class="btn btn-block btn__button">
                                        <img src={googleLogo} alt="google logo" />
                                        Contiune with Google
                                    </Link>
                                </form>
                                <p class="card-text">Don't have an account? <Link className="redirect__link" to='/signup'>Create an account</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;