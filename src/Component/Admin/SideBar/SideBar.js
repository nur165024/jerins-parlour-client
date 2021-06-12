import React from 'react';
import { Link, Route } from 'react-router-dom';
import logo from '../../../image/logo.png';
import './SideBar.css';
import { FaBorderAll, FaRegPlusSquare, FaUserPlus, FaRegListAlt } from "react-icons/fa";
import OldMenuLink from '../OldMenuLink/OldMenuLink';

const SideBar = () => {
    
    return (
        <div className="col-md-2" id="sideBar">
            <ul className="nav flex-column">
                <Link className="nav-link" to="/">
                    <img width="150" className="my-4" src={logo} alt="logo" />
                </Link>
                <li className="nav-item">
                    <OldMenuLink label="Order List" to="/admin/order" activeOnlyWhenExact={true} icon={<FaBorderAll />} />
                </li>
                <li className="nav-item">
                    <OldMenuLink label="Add Service" to="/admin/add/service" activeOnlyWhenExact={true} icon={<FaRegPlusSquare />} />
                </li>
                <li className="nav-item">
                    <OldMenuLink label="Make Admin" to="/add/admin" activeOnlyWhenExact={true} icon={<FaUserPlus />} />
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#"><FaRegListAlt /> Manage Service</Link>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;