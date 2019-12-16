import React from 'react';
import { Input, Button } from 'antd';

const { Password } = Input;

import './add-staff.css';

class AddStaff extends React.Component {
  constructor(x) {
    super(x);

    this.staff = Object.assign({}, this.props.defaultValue);

    this.onSubmit = this.onSubmit.bind(this);
    this.onName = this.onName.bind(this);
    this.onPwd = this.onPwd.bind(this);
  }

  onSubmit() {
    const { submit } = this.props;
    if (submit) {
      submit(this.staff);
    }
  }

  onName(v) {
    v = v.target.value;
    this.staff.staffName = v;
  }

  onPwd(v) {
    v = v.target.value;
    this.staff.staffPwd = v;
  }

  render() {
    const { staffName, staffPwd } = this.props.defaultValue;
    return (
      <div className="add-staff">
        <div className={'input-row'}>
          <div className={'input-item'}>
            <div className={'input-item-title'}>用户名：</div>
            <div className={'input-item-content'}>
              <Input defaultValue={staffName} onChange={this.onName} />
            </div>
          </div>
          <div className={'input-item'}>
            <div className={'input-item-title'}>密码：</div>
            <div className={'input-item-content'}>
              <Password defaultValue={staffPwd} onChange={this.onPwd} />
            </div>
          </div>
        </div>
        <div className="input-row">
          <Button type="primary" onClick={this.onSubmit}>
            {this.props.confirmText}
          </Button>
        </div>
      </div>
    );
  }
}

AddStaff.defaultProps = {
  defaultValue: {
    staffName: '',
    staffPwd: ''
  },
  confirmText: '添加',
  submit: null
};

export default AddStaff;
