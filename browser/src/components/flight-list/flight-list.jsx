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
                dataIndex: 'flightId',
                align: 'center',
            },
            {
                title: '起飞时间',
                key: 'flyTime',
                dataIndex: 'flyTime',
                align: 'center',
            },
            {
                title: '降落时间',
                key: 'arrTime',
                dataIndex: 'arrTime',
                align: 'center',
            },
            {
                title: '出发城市',
                key: 'oriCity',
                dataIndex: 'oriCity',
                align: 'center',
            },
            {
                title: '目的城市',
                key: 'tarCity',
                dataIndex: 'tarCity',
                align: 'center',
            },
            {
                title: '价格',
                key: 'price',
                dataIndex: 'price',
                align: 'center',
            },
            {
                title: '容量',
                key: 'remain',
                dataIndex: 'remain',
                align: 'center',
            },
            {
                title: '订购',
                key: 'order',
                dataIndex: 'order',
                align: 'center',
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

        this.onOrder = this.onOrder.bind(this);
    }

    onOrder(text, record, index) {
        this.props.onOrder(index);
    }

    render() {
        const {dataSource} = this.props;
        return <div className={'flight-list'}>
            <Table dataSource={dataSource} columns={this.columns}
                   rowKey={(record => {
                       return record.flightId + record.flyTime;
                   })}
            />
        </div>;
    }
}

export default FlightList;
