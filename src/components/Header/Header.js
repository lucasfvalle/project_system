import React from "react";
import './Header.css';
import { Link } from "react-router-dom";
import {useAuthValue} from '../../context/AuthContext';
import {useAuthentication} from '../../hooks/useAuthentication';

function Header(){
    const {user} = useAuthValue();
    const {logout} = useAuthentication();

    return(
        <header>
            <div className="header-container">
                <div className="logo">
                    Project System
                </div>
                <nav>
                    <Link to="/">Home</Link>
                    {!user &&(
                        <Link to="/register"> Cadastro</Link>
                    )}
                    {user && (
                        <Link to="/dashboard"> Dashboard</Link>
                    )}
                    {user &&(
                        <button onClick={logout}>Sair</button>
                    )}
                    {!user && (
                        <Link to="/login"> Login </Link>
                    )}
                    <Link to="/about">About</Link>
                    
                </nav>
            </div>
        </header>
    )
}
export default Header