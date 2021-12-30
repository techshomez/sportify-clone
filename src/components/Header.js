import React from "react";
import logo from '../images/jobshive.png';
import {FaBars} from 'react-icons/fa';
import '../styles/Header.css';


const Header = () => {
    return (
        <div className="header">
            <a href="#logo" className="logo">
                <img src={ logo } height={40} width={90} alt="" />
            </a>
            <nav className="navbar">
                <a href="#home">Home</a>
                <a href="#home">Home</a>
                <a href="#home">Home</a>
                <a href="#home">Home</a>
                <a href="#home">Home</a>
                <a href="#home">Home</a>
                <a href="#home">Home</a>
            </nav>
            <a href="#home" className="login">Login</a>
            <a href="#home" className="reg">Register</a>
            <div id="menu-btn"><FaBars /></div>
        </div>
    )
}

export { Header }
