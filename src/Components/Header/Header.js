import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                {!user.email ? <Link to="/login">Log In</Link>
                    :
            <button className="btn-primary" onClick={logOut}>Log Out</button>        
            }
                {/* <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Log In</a> */}
            </nav>
        </div>
    );
};

export default Header;