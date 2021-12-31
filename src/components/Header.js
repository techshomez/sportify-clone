import React, { Component } from "react";

import logo from '../images/jobshive.png';
import {FaBars} from 'react-icons/fa';
import '../styles/Header.css';


export default class Header extends Component {

    jQuery_code = () => {
        let menu = document.querySelector('#menu-btn');
        let navbar = document.querySelector('.navbar');
        
        menu.onclick = () =>{
            menu.classList.toggle('x');
            navbar.classList.toggle('active');
        }
        
        window.onscroll = () =>{
            menu.classList.remove('x');
            navbar.classList.remove('active');
        }
    }

componentDidMount(){
this.jQuery_code()
}

render(){
    return (
        <div className="header">
            <a href="#logo" className="logo">
                <img src={ logo } height={40} width={90} alt="" />
            </a>
            <nav className="navbar">
                <a href="#home" className="active">Home</a>
                <a href="#home">Find Jobs</a>
                <a href="#home">Job Alerts</a>
                <a href="#home">Find Candidate</a>
                <a href="#home">Career Advice</a>
                <div className="res_btn">
                    <a href="#l" className="l_res">Login</a>
                    <a href="#l" className="r_res">Register</a>
                </div>
            </nav>
            <a href="login" className="login">Login</a>
            <a href="register" className="reg">Register Now</a>
            <div id="menu-btn"><FaBars /></div>
        </div>
    );
}

}
