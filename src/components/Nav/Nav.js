import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';



const Nav = () => {
    const navLinkStyle = {
        color:'white'
    }
    return (
        <nav>
            <ul className="nav-links">
                <Link style={navLinkStyle} to='/'><li>Dashboard</li></Link>
                <Link style={navLinkStyle} to='/sales'><li>Sales</li></Link>
                <Link style={navLinkStyle} to='/purchase'><li>Purchase</li></Link>
                <Link style={navLinkStyle} to='/add-employee'><li>Add Employee</li></Link>
                <Link style={navLinkStyle} to='/products'><li>Products</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;