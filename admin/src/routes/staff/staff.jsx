import React from 'react';
import AddStaff from '../../components/add-staff/add-staff.jsx';
import ManageStaff from '../../components/manage-staff/manage-staff.jsx';
import { message } from 'antd';
import { addStaff as apiAddStaff } from '../../api/staff/staff';
import { connect } from 'react-redux';
import { getAllStaffs } from '../../api/staff/staff';
import { actionGetAllStaffs } from '../../redux/action/staff';

import './staff.css';

class Staff extends React.Component {
  constructor(x) {
    super(x);

    this.addStaff = this.addStaff.bind(this);
    this.getStaffs = this.getStaffs.bind(this);

    this.getStaffs();
  }

  addStaff(item) {
    const { staffName, staffPwd } = item;
    if (staffName === '' || staffPwd === '') {
      message.error('用户名或密码不能为空');
      return;
    }
    apiAddStaff(item)
      .then(v => {
        let res = v.data;
        if (res.status === 0) {
          this.getStaffs();
          message.success('添加成功');
        } else {
          message.error(res.message);
        }
      })
      .catch(e => {
        message.error('添加失败' + e.toString());
      });
  }

  getStaffs() {
    getAllStaffs()
      .then(v => {
        let res = v.data;
        if (res.status === 0) {
          this.props.dispatchStaffs(res.data);
        }
      })
      .catch(e => {
        message.error('员工列表获取失败：' + e.toString());
      });
  }

  render() {
    return (
      <div className={'staff'}>
        <AddStaff submit={this.addStaff} />
        <ManageStaff staffs={this.props.staffs} getStaffs={this.getStaffs} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    staffs: state.staffs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchStaffs: data => {
      dispatch(actionGetAllStaffs(data));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Staff);
