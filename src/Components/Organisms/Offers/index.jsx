import React from 'react';
import './offers.scss'
import Offers from '../../Molecules/Offers';
import Card from '../../Molecules/Card';
const OffersOrganisms = () => {
    return (
        <div className="offers-organisms">
            <div className="title">
                <Offers/>
            </div>
            <div className="offers-flex">
                <div className="offers-items">
                    <Card/>
                </div>
                <div className="offers-items">
                    <Card/>
                </div>
                <div className="offers-items">
                    <Card/>
                </div>
                <div className="offers-items">
                    <Card/>
                </div>
                <div className="offers-items">
                    <Card/>
                </div>
                <div className="offers-items">
                    <Card/>
                </div>
            </div>

        </div>
    );
};

export default OffersOrganisms;