import React from 'react';
import { Link, Route } from 'react-router-dom';
import logo from '../../../image/logo.png';
import './SideBar.css';
import { FaBorderAll, FaRegPlusSquare, FaUserPlus, FaRegListAlt } from "react-icons/fa";
import OldMenuLink from '../OldMenuLink/OldMenuLink';

const SideBar = () => {
    
    return (
        <div className="col-md-2" id="sideBar">
            <ul class="nav flex-column">
                <Link class="nav-link" to="/">
                    <img width="150" className="my-4" src={logo} alt="logo" />
                </Link>
                <li class="nav-item">
                    <OldMenuLink label="Order List" to="/admin/order" activeOnlyWhenExact={true} icon={<FaBorderAll />} />
                </li>
                <li class="nav-item">
                    <OldMenuLink label="Add Service" to="/admin/add/service" activeOnlyWhenExact={true} icon={<FaRegPlusSquare />} />
                    {/* <Link class="nav-link"><FaRegPlusSquare /> </Link> */}
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="#"><FaUserPlus /> Make Admin</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="#"><FaRegListAlt /> Manage Service</Link>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;