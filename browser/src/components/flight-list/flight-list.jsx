import React from 'react';
import {Table, Button} from 'antd';

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
      },
      {
        title: '订购',
        key: 'order',
        dataIndex: 'order',
        render: (text, record, index) => {
          return <Button
            onClick={() => {
              this.onOrder(text, record, index)
            }}>
            订购
          </Button>;
        }
      }
    ];
    this.dataSource = [];

    this.onOrder = this.onOrder.bind(this);
  }

  onOrder(text, record, index) {
    console.log(index);
  }

  render() {
    return <div className={'flight-list'}>
      <Table dataSource={this.dataSource} columns={this.columns}/>
    </div>;
  }
}

export default FlightList;
