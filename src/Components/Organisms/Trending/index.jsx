import React from 'react';
import './trending.scss';
import Card from '../../Molecules/Card';

const TrendingOrganisms = () => {
    return (
        <div className="trending-container-organisms">
            <h1>TRENDING</h1>
            <div className="flex-container">
                <div className="flex-items">
                    <Card/>
                </div>
                <div className="flex-items">
                    <Card/>
                </div>
                <div className="flex-items">
                    <Card/>
                </div>
                <div className="flex-items">
                    <Card/>
                </div>
                <div className="flex-items">
                    <Card/>
                </div>
                <div className="flex-items">
                    <Card/>
                </div><div className="flex-items">
                    <Card/>
                </div>
                <div className="flex-items">
                    <Card/>
                </div>
            </div>
        </div>
    );
};

export default TrendingOrganisms;