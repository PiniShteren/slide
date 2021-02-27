import React from 'react';
import "./footer.css";
import { NavLink } from 'react-router-dom';
import Face from "../images/facebook.svg";
import Whats from "../images/whatsapp.svg";
import ReactWhatsapp from 'react-whatsapp';


export default function Footer() {
    return (
        <div className="footer">
            <div className="options-footer">
                <div className="nav-footer">
                    <ul>
                        <li>
                            <NavLink exact to="/" id="link-footer" onClick={() => { window.scroll(0, 0) }}>דף הבית</NavLink>
                        </li>
                        <li>
                            <NavLink to="/content" id="link-footer">יצירת קשר</NavLink>
                        </li>
                        <li>
                            <NavLink to="about" id="link-footer">אודות</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="icons-footer">
                    <div className="facebook">
                        <a href="https://www.facebook.com/pini859">
                            <img src={Face} width="25vh" />
                        </a>
                    </div>
                    <div className="whatsapp">
                        <ReactWhatsapp id="react-whatsapp" number="+972544936366">
                            <img src={Whats} width="25vh" />
                        </ReactWhatsapp>
                    </div>
                </div>
            </div>
            <div className="design">
                <p className="footer-p"> design by Pini Shteren &copy;</p>
            </div>
        </div>
    )
}
