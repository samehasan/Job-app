import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <nav>
            <h1>Jobs World</h1>
            <Link to={"/"}>Home</Link>
            <Link to={"/statistics"}>Statistics</Link>
            <Link to={"/applied-jobs"}>Applied Jobs</Link>
            <Link to={"/blog"}>Blog</Link>
            <button>Start Applying</button>
        </nav>
    );
};

export default Header;