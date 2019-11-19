import React from 'react';
import LogonForm from '../../components/logon-form/logon-form.jsx';
import {logon} from '../../api/user/user';
import {message} from 'antd';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginAction} from '../../redux/action/user';

class Logon extends React.Component {
    constructor(x) {
        super(x);

        this.submitLogon = this.submitLogon.bind(this);
        this.login = this.login.bind(this);
    }

    submitLogon(v) {
        let userId = v.userId;
        if (parseInt(userId[userId.length - 2]) % 2 === 0) {
            v.userGender = '女';
        } else {
            v.userGender = '男';
        }
        delete v.confirm;
        logon(v).then(data => {
            let res = data.data;
            if (res.status === 0) {
                this.login(res.data);
                message.success(res.message);
            } else {
                message.warn(res.message);
            }
        }).catch(e => {
            message.error(e.toString());
        });
    }

    login(user) {
        this.props.login(user);
        this.props.history.replace('/');
    }

    render() {
        return <div className={'logon'}>
            <LogonForm submit={this.submitLogon}/>
        </div>;
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (v) => {
            dispatch(loginAction(v))
        }
    };
}

export default withRouter(connect(null, mapDispatchToProps)(Logon));
