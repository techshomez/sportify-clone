import React from "react";
import '../Styles/LeftMenu.css';

import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import {BiSearchAlt} from "react-icons/bi";

const LeftMenu = () => {
    return (
        <div className="leftMenu">
            <div className="logoContainer">
                <i>
                   <FaSpotify/>
                </i>
                <h2>Spotify</h2>
                <i>
                  <FaEllipsisH/>
                </i>
            </div>
            <div className="searchBox">
                <input type="text" placeholder="Search..." />
                <i className="searchIcon">
                    <BiSearchAlt/>
                </i>
            </div>
        </div>
    )
}

export  { LeftMenu };
