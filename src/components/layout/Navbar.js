import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">React User</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" exact aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="users/login">Login</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="users/registration">Registration</Link>
                    </li>
                </ul>
                </div>
                <Link className="btn btn-outline-light" to="/users/addusers">Add</Link>
                <Link className="btn btn-outline-light" to="/users/login">Login</Link>
            </div>
        </nav>
    )
};

export default Navbar;