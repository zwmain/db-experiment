import React from 'react'
import {Form, Input, Button, Radio} from 'antd';

class LogonForm extends React.Component {
    constructor(x) {
        super(x);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.confirmPassword = this.confirmPassword.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('表单值：', values);
            }
        });
    }

    confirmPassword(rule, value, callback) {
        const {form} = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('密码不一致！');
        } else {
            callback();
        }
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return <Form labelCol={{span: 2}} wrapperCol={{span: 6}} onSubmit={this.handleSubmit}>
            <Form.Item label={'身份证号'}>
                {getFieldDecorator('userId', {
                    rules: [
                        {
                            pattern: /\d{18}/,
                            message: '身份证号不合法',
                        },
                        {
                            required: true,
                            message: '请输入身份证号',
                        },
                    ],
                    validateTrigger: 'onSubmit'
                })(<Input/>)
                }
            </Form.Item>
            <Form.Item label={'姓名'}>
                {getFieldDecorator('userName', {
                    rules: [
                        {
                            required: true,
                            message: '请输入姓名',
                            whitespace: true
                        }
                    ],
                    validateTrigger: 'onSubmit'
                })(<Input/>)}
            </Form.Item>
            <Form.Item label="密码" hasFeedback>
                {getFieldDecorator('password', {
                    rules: [
                        {
                            required: true,
                            message: '请输入密码！',
                        }
                    ],
                    validateTrigger: 'onSubmit'
                })(<Input.Password/>)}
            </Form.Item>
            <Form.Item label="确认密码" hasFeedback>
                {getFieldDecorator('confirm', {
                    rules: [
                        {
                            required: true,
                            message: '请确认密码！',
                        },
                        {
                            validator: this.confirmPassword,
                        },
                    ],
                })(<Input.Password/>)}
            </Form.Item>
            <Form.Item wrapperCol={{offset: 2}}>
                <Button type="primary" htmlType="submit">
                    注册
                </Button>
            </Form.Item>
        </Form>;
    }
}

export default Form.create({name: 'logon-form'})(LogonForm);