import React from 'react';
import SideBar from '../SideBar/SideBar';

const OrderList = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <SideBar></SideBar>
                    <div className="col-md-10" style={{ background:'#F4F7FC' }}>
                        <div style={{ padding:'20px 0' }} className="d-flex">
                            <h4>Order List</h4>
                            <h4 style={{ position:'absolute',top:'20px', right:'20px' }}>Sufi Ahmed</h4>
                        </div>
                        <table class="table table-borderless">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email Id</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Pay with</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nure Alam</td>
                                    <td>nur@gmail.com</td>
                                    <td>Skin Care Treatment</td>
                                    <td>Creadit Card</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <td>Nure Alam</td>
                                    <td>nur@gmail.com</td>
                                    <td>Skin Care Treatment</td>
                                    <td>Creadit Card</td>
                                    <td>Done</td>
                                </tr>
                                <tr>
                                    <td>Nure Alam</td>
                                    <td>nur@gmail.com</td>
                                    <td>Skin Care Treatment</td>
                                    <td>Creadit Card</td>
                                    <td>On Going</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderList;