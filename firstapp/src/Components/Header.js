import React from "react";
import logo from './Images/logo.jpg';

function Header() {
    return(
        <header>
            <img src={logo} alt="Little Lemon Logo" height={200} width={700}  />
        </header>
    )
}

export default Header;