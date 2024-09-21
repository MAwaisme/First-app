import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-wrapper">
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/products">Products</Link>
                <Link to="/NewProducts">NewProducts</Link>
            </ul>
        </div>
    )
}

export default Header;