import React from 'react';
import {Table} from 'antd';

import './flight-list.css'

class FlightList extends React.Component {
  constructor(x) {
    super(x);
    this.columns = [
      {
        title: '航班号',
        key: 'flightId',
        dataIndex: 'flightId'
      },
      {
        title: '起飞时间',
        key: 'flyTime',
        dataIndex: 'flyTime'
      },
      {
        title: '降落时间',
        key: 'arrTime',
        dataIndex: 'arrTime'
      },
      {
        title: '出发城市',
        key: 'oriCity',
        dataIndex: 'oriCity'
      },
      {
        title: '目的城市',
        key: 'tarCity',
        dataIndex: 'tarCity'
      },
      {
        title: '价格',
        key: 'price',
        dataIndex: 'price'
      },
      {
        title: '容量',
        key: 'availability',
        dataIndex: 'availability'
      }
    ];
    this.dataSource = [];
  }

  render() {
    return <div className={'flight-list'}>
      <Table dataSource={this.dataSource} columns={this.columns}/>
    </div>;
  }
}

export default FlightList;
