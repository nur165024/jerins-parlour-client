import React from 'react';
import UserSideBar from '../UserSideBar/UserSideBar';
import './BookList.css';
import Anti from '../../../image/anti.png';
import Hair from '../../../image/hair.png';
import Skin from '../../../image/skin.png';

const BookList = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <UserSideBar></UserSideBar>
                    <div className="col-md-10" style={{ background:'#F4F7FC' }}>
                        <div style={{ padding:'20px 0' }} className="d-flex">
                            <h4>Book List</h4>
                            <h4 style={{ position:'absolute',top:'20px', right:'20px' }}>Hello</h4>
                        </div>
                        <div className="row my-4">
                            <div className="col-md-3">
                                <div class="card">
                                    <img class="card-img-top m-3" style={{ width:'100px' }} src={Anti} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-button-1">Panding</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="card">
                                    <img class="card-img-top m-3" style={{ width:'100px' }} src={Hair} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-button-2">Panding</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="card">
                                    <img class="card-img-top m-3" style={{ width:'100px' }} src={Skin} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-button-1">Done</a>
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

export default BookList;