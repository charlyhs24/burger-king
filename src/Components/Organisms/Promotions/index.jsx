import React from 'react';
import './promotions.scss'
const Promotions = () => {
    return (
        <div className="promotions-container">
            <div className="body-promotions">
                <div className="phone-img">
                    <img src="/Assets/pHone.png" alt="phone-img"/>
                </div>
                <div className="descriptions">
                    <h2>SAVE $$$</h2>
                    <h1>WITH OFFERS ON DEMAND</h1>
                    <div className="btn">
                        <span><i className="fab fa-apple"></i> Apps Store </span>
                        <span><i className="fab fa-google-play"></i>GET IT ON Google Play</span>
                    </div>
                    <p>
                        Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default Promotions;