import React from 'react';
import {Table} from 'antd';

class OrderList extends React.Component {
    constructor(x) {
        super(x);
        this.columns = [
            {
                title: '出发时间',
                dataIndex: 'flyDate',
                align: 'center'
            },
            {
                title: '航班号',
                dataIndex: 'flightId',
                align: 'center'
            },
            {
                title: '起飞时间',
                dataIndex: 'flyTime',
                align: 'center'
            },
            {
                title: '降落时间',
                dataIndex: 'arrTime',
                align: 'center'
            },
            {
                title: '出发城市',
                dataIndex: 'oriCity',
                align: 'center'
            },
            {
                title: '目的城市',
                dataIndex: 'tarCity',
                align: 'center'
            },
            {
                title: '价格',
                dataIndex: 'price',
                align: 'center'
            }
        ];
    }

    render() {
        const {dataSource} = this.props;
        return <Table
            columns={this.columns}
            dataSource={dataSource}
            rowKey={(record => {
                return record.userId + record.flyDate + record.flightId;
            })}
        />
    }
}

export default OrderList;