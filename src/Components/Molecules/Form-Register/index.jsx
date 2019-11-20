import React from 'react';
import './formregister.scss';
const FormRegister = () => {
    return (
        <div className="form-register-container">
            <div className="form-input">
                <input type="email" placeholder="Email Address *" className="input"/>
            </div>
            <div className="form-input">
                <input type="text" placeholder="Name *" className="input"/>
            </div>
            <div className="form-input">
                <input type="tel" placeholder="Phone Number *" className="input"/>
            </div>
            <div className="form-input">
                <p>We'll only use this for security and questions about your delivery orders.</p>
            </div>
            <div className="form-input-radio">
                <span><input type="radio"/></span>
                <p>Yes! I want to receive emails about special offers and other information about Burger King.</p>
            </div>
            <div className="form-input-radio">
                <span>
                    <input type="radio"/>
                </span>
                <p>I agree to the Burger King Privacy Policy andTerms Of Service.</p>
            </div>
            <div className="form-input">
                <button>CREATE ACCOUNT</button>
            </div>
            <p>Already have an account?</p>
            <div className="form-input">
                <span>Go to Sign In</span>
            </div>
        </div>
    );
};

export default FormRegister;