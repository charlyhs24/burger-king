import React, { Component } from 'react';
import './offers.scss';
import OffersOrganisms from '../../../Components/Organisms/Offers/index';
export default class Offers extends Component {
    render() {
        return (
            <div className="offers-page">
                <OffersOrganisms/>
            </div>
        )
    }
}
