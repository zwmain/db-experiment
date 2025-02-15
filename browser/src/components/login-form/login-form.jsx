import React from 'react';
import {Form, Icon, Input, Button, message} from 'antd';
import {login} from '../../api/user/user';
import {loginAction} from '../../redux/action/user';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(x) {
        super(x);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const res = login(values);
                res.then(v => {
                    let res = v.data;
                    if (res.status === 0) {
                        this.props.saveUser(res.data);
                        this.props.history.replace('/');
                        message.success(res.message);
                    } else {
                        message.warn(res.message);
                    }
                }).catch(e => {
                    message.error(e.toString());
                });
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{required: true, message: '请输入用户名'}],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="用户名"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: '请输入密码'}],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            placeholder="密码"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveUser: userData => {
            dispatch(loginAction(userData));
        }
    };
}

export default connect(null, mapDispatchToProps)(withRouter(Form.create({name: 'normal_login'})(LoginForm)));