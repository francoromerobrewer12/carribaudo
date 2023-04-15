import "../styles/navbar.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar-container d-flex justify-content-center">
            <div className="Navbar container-lg d-flex align-items-center justify-content-between">
                <img
                    className="nav-logo"
                    src="https://www.linkusa.us/wp-content/uploads/go-x/u/9dd06bdd-d9a3-4824-b04b-59dd0b77e25e/image-342x216.png"
                    alt="logo"
                />
                <div className={`nav-items ${isOpen && "open"}`}>
                    <Link to="/home" onClick={() => setIsOpen(!isOpen)}>LINK USA</Link>
                    <Link to="/franchise" onClick={() => setIsOpen(!isOpen)}>FRANCHISE WITH US</Link>
                    <Link to="/team" onClick={() => setIsOpen(!isOpen)}>TEAM</Link>
                    <Link to="/contact" onClick={() => setIsOpen(!isOpen)}>CONTACT</Link>
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