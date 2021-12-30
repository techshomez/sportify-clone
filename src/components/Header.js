import React from "react";
import logo from '../images/jobshive.png';


const Header = () => {
    return (
        <div className="header">
            <a href="#logo" className="logo">
                <img src={ logo } alt="" />
            </a>
        </div>
    )
}

export { Header }
