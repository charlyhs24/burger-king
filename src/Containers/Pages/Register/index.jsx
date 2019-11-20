import React, { Component } from 'react'
import './register.scss';
import RegisterOrganisms from '../../../Components/Organisms/Register/index'
export default class Register extends Component {
    render() {
        return (
            <div className="register-container-pages">
                <RegisterOrganisms/>
            </div>
        )
    }
}
