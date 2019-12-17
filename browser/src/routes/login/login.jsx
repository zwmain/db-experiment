import React from 'react';
import LoginForm from "../../components/login-form/login-form.jsx";
import { withRouter } from 'react-router-dom';

import './login.css';

class Login extends React.Component {
    constructor(x) {
        super(x);
    }

    render() {
        return <div className={'login'}>
            <LoginForm/>
        </div>;
    }
}

export default withRouter(Login);
