import React, { Component } from 'react'
import HomePageOrganisms from '../../../Components/Organisms/Home-Page'
import ProductRecomendation from '../../../Components/Organisms/Product-Recomendation'
import Promotions from '../../../Components/Organisms/Promotions'

export default class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <HomePageOrganisms/>
                <ProductRecomendation/>
                <Promotions/>
            </React.Fragment>
        )
    }
}
