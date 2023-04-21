import "../styles/navbar.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { configuration } from "../configuration";

const Navbar = () => {

    const { logo } = configuration.navbar;
    const { home, view_one, view_two, contact } = configuration.navigation

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar-container d-flex justify-content-center">
            <div className="Navbar container-lg d-flex align-items-center justify-content-between">
                <a href={home.link} className="nav-logo-wrapper">
                    <img
                        className="w-100 h-100"
                        src={logo}
                        alt="logo"
                    />
                </a>
                <div className={`nav-items ${isOpen && "open"}`}>
                    <Link to={home.link} onClick={() => setIsOpen(!isOpen)}>{home.name}</Link>
                    <Link to={view_one.link} onClick={() => setIsOpen(!isOpen)}>{view_one.name}</Link>
                    <Link to={view_two.link} onClick={() => setIsOpen(!isOpen)}>{view_two.name}</Link>
                    <Link to={contact.link} onClick={() => setIsOpen(!isOpen)}>{contact.name}</Link>
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