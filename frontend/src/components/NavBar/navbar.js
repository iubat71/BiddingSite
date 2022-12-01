import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

const NotFound = () => {
    return (
        <ul className="sidenav">
            <Link to="/">Home</Link>
            <Link to="/register" >Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/newAuction">NewAuction</Link>
        </ul>
    )
}

export default NotFound
