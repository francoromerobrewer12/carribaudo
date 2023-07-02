import "../styles/navbar.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { configuration } from "../configuration";

const Navbar = () => {

    const { home, experience, gallery, contact } = configuration.navigation

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar-container d-flex justify-content-center">
            <div className="Navbar container-lg d-flex align-items-center justify-content-end justify-content-md-center">
                <div className={`nav-items ${isOpen && "open"}`}>
                    <Link to={home.link} onClick={() => setIsOpen(!isOpen)}>{home.name}</Link>
                    <Link to={experience.link} onClick={() => setIsOpen(!isOpen)}>{experience.name}</Link>
                    <Link to={gallery.link} onClick={() => setIsOpen(!isOpen)}>{gallery.name}</Link>
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