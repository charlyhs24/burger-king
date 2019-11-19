import React, { useState, useEffect } from 'react';
import './navbar.scss';
import CheckoutNotification from '../../Components/Molecules/Checkout-Notification';
const Navbar = () => {
    const [Scale, setScale] = useState("translateY(45px) scale(0.95)")
    const [Notification, setNotification] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll",()=> {
            const scroll = window.scrollY
            if(scroll > 0){
                setScale("translateY(0px) scale(1)")
            }else{
                setScale("translateY(45px) scale(0.95)")
            }
        })  
    })
    const checkoutHandler = () => {
        setNotification(!Notification)
    }
    return (
        <React.Fragment>
            <nav style={{transform : `${Scale}`}}>
                <ul className="menu">
                    <li className="items">ORDER</li>
                    <li className="items">RESTAURANTS</li>
                    <li className="items">OFFERS</li>
                </ul>
                <div className="logo">
                    <img src="/Assets/logo.png" alt="logo-img"/>
                </div>
                <ul className="menu-btn">
                    <li className="btn-items">SIGN UP</li>
                    <li onClick={checkoutHandler} className="btn-items secondary">
                        $0.00 
                        <i className="fas fa-shopping-cart"> </i>
                    </li>
                </ul>
                <CheckoutNotification status={Notification} />
            </nav>
        </React.Fragment>
    );
};

export default Navbar;