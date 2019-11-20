import React from 'react';
import './jumbotron.scss';
const Jumbotron = () => {
    return (
        <div className="home-page">
            <div className="background-page">
                <div className="content">
                    <div className="content-flex">
                        <h2>ORDER IT</h2>
                        <h1>YOUR WAY</h1>
                        <div className="btn-menu">
                            <button className="btn-show-menu">VIEW MENU</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;