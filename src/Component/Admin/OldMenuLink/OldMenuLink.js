import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const OldMenuLink = ({ label, to, activeOnlyWhenExact, icon }) => {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
      });
    return (
        <Link className={match ? "nav-link link_active" : "nav-link"} to={to}>{icon} {label}</Link>
    );
};

export default OldMenuLink;