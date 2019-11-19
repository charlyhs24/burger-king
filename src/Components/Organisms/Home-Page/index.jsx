import React from 'react';
import './homepage.scss'
import Jumbotron from '../../Molecules/Jumbotron';
import Offers from '../../Molecules/Offers';
const HomePageOrganisms = () => {
    return (
        <React.Fragment>
            <Jumbotron/>
            <Offers/>
        </React.Fragment>
    );
};

export default HomePageOrganisms;