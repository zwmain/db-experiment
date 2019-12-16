import React from 'react';
import { Table, Button } from 'antd';
import { rmStaff as apiRmStaff } from '../../api/staff/staff';
import { message } from 'antd';

import './manage-staff.css';

class ManageStaff extends React.Component {
  constructor(x) {
    super(x);

    this.columns = [
      {
        title: '用户名',
        dataIndex: 'staffName',
        align: 'center'
      },
      {
        title: '操作',
        render: (text, record) => {
          return (
            <Button
              onClick={() => {
                this.rmStaff(record);
              }}
            >
              删除
            </Button>
          );
        },
        align: 'center'
      }
    ];

    this.rmStaff = this.rmStaff.bind(this);
  }

  rmStaff(record) {
    apiRmStaff(record)
      .then(v => {
        let res = v.data;
        if (res.status === 0) {
          message.success('删除成功');
          this.props.getStaffs();
        } else {
          message.error('删除失败：' + res.message);
        }
      })
      .catch(e => {
        message.error('删除失败：' + e.toString());
      });
  }

  render() {
    return (
      <div className="manage-staff">
        <Table
          columns={this.columns}
          dataSource={this.props.staffs}
          rowKey={record => {
            return record.staffName;
          }}
        />
      </div>
    );
  }
}

export default ManageStaff;
