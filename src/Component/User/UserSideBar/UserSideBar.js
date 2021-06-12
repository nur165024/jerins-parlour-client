import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../image/logo.png';
import OldMenuLink from '../../Admin/OldMenuLink/OldMenuLink';
import { FaBorderAll, FaEnvelopeOpenText, FaBookmark } from "react-icons/fa";
import './UserSideBar.css';

const UserSideBar = () => {
    return (
        <div className="col-md-2" id="sideBar">
            <ul className="nav flex-column">
                <Link className="nav-link" to="/">
                    <img width="150" className="my-4" src={logo} alt="logo" />
                </Link>
                <li className="nav-item">
                    <OldMenuLink label="Book" to="/user/book" activeOnlyWhenExact={true} icon={<FaBookmark />} />
                </li>
                <li className="nav-item">
                    <OldMenuLink label="Book List" to="/user/book-list" activeOnlyWhenExact={true} icon={<FaBorderAll />} />
                </li>
                <li className="nav-item">
                    <OldMenuLink label="User Review" to="/user/review" activeOnlyWhenExact={true} icon={<FaEnvelopeOpenText />} />
                </li>
            </ul>
        </div>
    );
};

export default UserSideBar;