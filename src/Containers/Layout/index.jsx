import React from 'react';
import './layout.scss';
import Navbar from '../Navbar/index'
import Footer from '../Footer';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Navbar/>
            {props.children}
            <Footer/>
        </React.Fragment>
    );
};

export default Layout;