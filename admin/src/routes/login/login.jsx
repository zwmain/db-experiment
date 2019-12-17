import React from 'react';
import LoginForm from '../../components/login-form/login-form.jsx';
import { withRouter } from 'react-router-dom';
import { Form, message } from 'antd';
import { login } from '../../api/staff/staff';
import { connect } from 'react-redux';
import { actionLogin } from '../../redux/action/staff';

const MyLoginForm = Form.create({ name: 'staff_login' })(LoginForm);

import './login.css';

class Login extends React.Component {
  constructor(x) {
    super(x);

    this.submit = this.submit.bind(this);
  }

  submit(value) {
    const user = {
      staffName: value.username,
      staffPwd: value.password
    };
    login(user)
      .then(v => {
        let res = v.data;
        if (res.status === 0) {
          message.success('登录成功');
          this.props.saveUser(user);
          this.props.history.replace('/');
        } else {
          message.error(res.message);
        }
      })
      .catch(e => {
        message.error('登录失败' + e.toString());
      });
  }

  render() {
    return (
      <div className={'login'}>
        <MyLoginForm submit={this.submit} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveUser: data => {
      dispatch(actionLogin(data));
    }
  };
}

export default withRouter(connect(null, mapDispatchToProps)(Login));
