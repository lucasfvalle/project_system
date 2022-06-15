import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <div className="header-container">
                <div className="logo">
                    Project System
                </div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/register"> Cadastro</Link>
                    <Link to="/dashboard"> Dashboard</Link>
                    <Link to="/about">About</Link>
                    
                </nav>
            </div>
        </header>
    )
}
export default Header