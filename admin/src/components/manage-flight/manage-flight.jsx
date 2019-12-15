import React from 'react';
import { Table } from 'antd';

import './manage-flight.css';

class ManageFlight extends React.Component {
  constructor(x) {
    super(x);
    this.columns = [
      {
        title: '航班号',
        key: 'flightId',
        dataIndex: 'flightId',
        align: 'center'
      },
      {
        title: '起飞时间',
        key: 'flyTime',
        dataIndex: 'flyTime',
        align: 'center'
      },
      {
        title: '降落时间',
        key: 'arrTime',
        dataIndex: 'arrTime',
        align: 'center'
      },
      {
        title: '出发城市',
        key: 'oriCity',
        dataIndex: 'oriCity',
        align: 'center'
      },
      {
        title: '目的城市',
        key: 'tarCity',
        dataIndex: 'tarCity',
        align: 'center'
      },
      {
        title: '价格',
        key: 'price',
        dataIndex: 'price',
        align: 'center'
      },
      {
        title: '容量',
        key: 'remain',
        dataIndex: 'remain',
        align: 'center'
      },
      {
        title: '飞机类型',
        key: 'planeType',
        dataIndex: 'planeType',
        align: 'center'
      },
      {
        title: '航空公司',
        key: 'flightCompany',
        dataIndex: 'flightCompany',
        align: 'center'
      },
      {
        title: '删除',
        key: 'order',
        dataIndex: 'order',
        align: 'center',
        render: (text, record, index) => {
          return (
            <Button
              onClick={() => {
                // this.onOrder(text, record, index);
              }}
            >
              删除
            </Button>
          );
        }
      }
    ];
  }
  render() {
    return (
      <div className={'manage-flight'}>
        <Table
          columns={this.columns}
          key={record => {
            return record.flightId + record.flyTime;
          }}
        />
      </div>
    );
  }
}

export default ManageFlight;
