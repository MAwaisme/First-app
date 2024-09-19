import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-wrapper">
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </ul>
        </div>
    )
}

export default Header;