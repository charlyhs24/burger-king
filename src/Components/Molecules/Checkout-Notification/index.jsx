import React from 'react';
import './checkoutNotification.scss'
const CheckoutNotification = ({status}) => {
    
    return (
        <div style={{display:status?'block':'none'}} className="checkout-container">
            <div className="body">
                <p>You don't have anything in your cart yet!</p>
                <p className="text-bold">Total 
                    <span style={{float:"right"}}>$0.00</span>
                </p>
            </div>
            <div className="checkout-footer">
                <button>CHECKOUT</button>
            </div>
        </div>
    );
};

export default CheckoutNotification;