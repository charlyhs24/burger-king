import React from 'react';
import './footer.scss';
const Footer = () => {
    return (
        <footer>
            <div className="footer-items-1">
                <div className="items">
                    <ul>
                        <li className="title">BKC INFO</li>
                        <li>About BK</li>
                        <li>Food Quality</li>
                        <li>Prepared to Order</li>
                        <li>News & Press</li>
                        <li>Investor Relations</li>
                        <li>International</li>
                        <li>Menu</li>
                        <li>Trademarks</li>
                    </ul>
                </div>
                <div className="items">
                    <ul>
                        <li className="title">MY BK</li>
                        <li>BK App</li>
                        <li>BK Delivers</li>
                        <li>Gift Cards / Crown Card</li>
                        <li>Reload Card</li>
                        <li>Check Card Balance</li>
                    </ul>
                </div>
                <div className="items">
                    <ul>
                        <li className="title">CAREERS</li>
                        <li>Bring it @ BKC</li>
                        <li>Opportunities</li>
                        <li>Locations</li>
                        <li>What's New</li>
                        <li>Apply</li>
                    </ul>
                </div>
                <div className="items">
                    <ul>
                        <li className="title">BK CARES</li>
                        <li>Download Nutrition Info</li>
                        <li>Download Allergens</li>
                        <li>Allergens View in Browser</li>
                        <li>Privacy</li>
                        <li>Responsibility</li>
                        <li>BK McLAMORE Foundation</li>
                        <li>Diversity</li>
                    </ul>
                </div>
            </div>
            <div className="footer-items-2">
                <div className="head-information">
                    <div className="items">BURGER KING</div>
                    <div className="items">
                        <span><i className="fab fa-instagram"></i></span>
                        <span><i className="fab fa-facebook-f"></i></span>
                        <span><i className="fab fa-youtube"></i></span>
                        <span><i className="fab fa-twitter"></i></span>
                    </div>
                </div>
                <span>Policies | Term of Use | Accessibility | Contact Us | Sitemap</span>
                <p>TM & Copyright 2019 Burger King Corporation.‌‌ All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;