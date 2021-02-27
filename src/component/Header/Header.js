import React from 'react';
import "./header.css";
import { NavLink } from "react-router-dom";
import Face from "../images/facebook.svg"

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <p id="logo-1">פיני</p>
                <p id="logo-2">דלתות & מנעולים</p>
            </div>
            <div className="nav-header">
                <NavLink exact to="/" id="link-header" onClick={() => { window.scroll(0, 0) }}>דף הבית</NavLink>
                <NavLink to="/content" id="link-header">צור קשר</NavLink>
                <NavLink to="/about" id="link-header">אודות</NavLink> <div className="contect-icon-header">
                    <a href="https://www.facebook.com/pini859">
                        <img src={Face} width="25vh" />
                    </a>
                </div>
            </div>

        </div>
    )
}
