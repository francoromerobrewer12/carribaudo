import "../styles/navbar.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { configuration } from "../configuration";

const Navbar = () => {

    // const { home, view_one, view_two, contact } = configuration.navigation

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar-container d-flex justify-content-center">
            <div className="Navbar container-lg d-flex align-items-center justify-content-end justify-content-md-center">
                <div className={`nav-items ${isOpen && "open"}`}>
                    <Link to='/' onClick={() => setIsOpen(!isOpen)}>Home</Link>
                    <Link to='/experience' onClick={() => setIsOpen(!isOpen)}>Experience</Link>
                    <Link to='/gallery' onClick={() => setIsOpen(!isOpen)}>Gallery</Link>
                    <Link to='/contact' onClick={() => setIsOpen(!isOpen)}>Contact</Link>
                </div>
                <div
                    className={`nav-toggle ${isOpen && "open"}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="bar"></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;