import React from 'react';
import { Table, Button, Modal, message } from 'antd';
import AddVoyage from '../add-voyage/add-voyage.jsx';
import moment from 'moment';
import { changeVoyage, rmVoyage as apiRmVoyage } from '../../api/voyage/voyage';

import './manage-voyage.css';

class ManageVoyage extends React.Component {
  constructor(x) {
    super(x);

    this.state = {
      visible: false,
      record: {
        flightDate: moment().format('YYYY-MM-DD'),
        flightId: '',
        price: 300,
        remain: 300
      }
    };

    this.columns = [
      {
        title: '日期',
        key: 'flyDate',
        dataIndex: 'flyDate',
        align: 'center'
      },
      {
        title: '航班号',
        key: 'flightId',
        dataIndex: 'flightId',
        align: 'center'
      },
      {
        title: '价格',
        key: 'price',
        dataIndex: 'price',
        align: 'center'
      },
      {
        title: '余量',
        key: 'remain',
        dataIndex: 'remain',
        align: 'center'
      },
      {
        title: '操作',
        key: 'operation',
        align: 'center',
        render: (text, record) => {
          return (
            <span>
              <Button
                onClick={() => {
                  this.rmVoyage(record);
                }}
                size="small"
              >
                删除
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  this.edit(record);
                }}
                size="small"
              >
                修改
              </Button>
            </span>
          );
        }
      }
    ];

    this.rmVoyage = this.rmVoyage.bind(this);
    this.edit = this.edit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  rmVoyage(record) {
    apiRmVoyage(record)
      .then(v => {
        let res = v.data;
        if (res.status === 0) {
          message.success('删除成功');
          this.props.getAllVoyages();
        } else {
          message.error('删除失败：' + res.message);
        }
      })
      .catch(e => {
        message.error('删除失败：' + e.toString());
      });
  }

  edit(record) {
    this.setState({ record });
    this.setState({ visible: true });
  }

  onCancel() {
    this.setState({ visible: false });
  }

  onSave(voyageItem, oldItem) {
    changeVoyage({ voyageItem, oldItem })
      .then(v => {
        let res = v.data;
        if (res.status === 0) {
          message.success('修改成功');
        } else {
          message.error('修改失败');
        }
      })
      .catch(e => {
        message.error('修改失败：' + e.toString());
      })
      .finally(() => {
        this.setState({ visible: false });
      });
  }

  render() {
    const { voyages } = this.props;
    return (
      <div className="manage-voyage">
        <Table
          columns={this.columns}
          rowKey={record => {
            return record.flightId + record.flyDate;
          }}
          dataSource={voyages}
        />
        <Modal
          title="修改航次"
          visible={this.state.visible}
          onCancel={this.onCancel}
          width="80%"
          footer={null}
        >
          <AddVoyage confirmText="确定" submit={this.onSave} defaultValue={this.state.record} />
        </Modal>
      </div>
    );
  }
}

export default ManageVoyage;
