import React from 'react';
import './register.scss'
import FormRegister from '../../Molecules/Form-Register';
const Register = () => {
    return (
        <div className="register-organisms">
            <div className="title">
                <h1>Create an Account to Get Started</h1>
            </div>
            <FormRegister/>
        </div>
    );
};
export default Register;