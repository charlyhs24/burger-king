import React from 'react';
import './card.scss'
const Card = () => {
    return (
        <div className="card-container">
            <img src="/Assets/product.webp" alt="card-img"/>
            <div className="body">
                <h1>$6 Small Bacon King Combo Meal</h1>
                <p>1 Bacon King, 1 Small French Fries, 1 Small Soft Drink</p>
            </div>
        </div>
    );
};

export default Card;