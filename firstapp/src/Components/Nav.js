import React, { useState } from "react";
import logo1 from './Images/logo1.jpg';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return(
         <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href="/" className="logo1">
                <img src={logo1} alt="logo1" width={200}/>
            </a>
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
             <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/login">Login</a></li>

            </ul>
        </nav>
    )
}

export default Nav;