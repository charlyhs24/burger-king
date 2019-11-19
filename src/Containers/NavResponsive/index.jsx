import React, { useState } from 'react';
import './navresponsive.scss'
const NavResponsive = () => {
    const [Active, setActive] = useState(false)
    const [Toggle, setToggle] = useState(false)
    const clickHandler = () => {
        setActive(!Active)
        setToggle(!Toggle)
    }
    return (
        <nav>
            <ul className="menu">
                <li className="logo">Invisible App</li>
                <li className={`item ${Active?'active':''}`}>Home</li>
                <li className={`item ${Active?'active':''}`}>About</li>
                <li className={`item ${Active?'active':''}`}>Services</li>
                <li className={`item ${Active?'active':''}`}>Features</li>
                <li className={`item ${Active?'active':''}`}>Blog</li>
                <li className={`item ${Active?'active':''}`}>Contact</li>
                <li className={`item button ${Active?'active':''}`}>Signin</li>
                <li className={`item button secondary ${Active?'active':''}`}>SignUp</li>
                <li className="toggle" onClick={clickHandler}>
                    <i className={`fas ${Toggle?'fa-times':'fa-bars'}`}></i>
                </li>
            </ul>
        </nav>
    );
};

export default NavResponsive;