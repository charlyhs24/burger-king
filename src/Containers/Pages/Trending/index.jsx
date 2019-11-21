import React, { Component } from 'react'
import './trending.scss'
import TrendingOrganisms from '../../../Components/Organisms/Trending'
export default class Trending extends Component {
    render() {
        return (
            <div className="trending-container-pages">
                <TrendingOrganisms/>
            </div>
        )
    }
}
