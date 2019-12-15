import React from 'react';
import { Table, message, Button } from 'antd';
import { connect } from 'react-redux';
import { actionGetAllFlights } from '../../redux/action/flight';
import {
  getAllFlights as apiGetAllFlights,
  rmFlight as apiRmFlight
} from '../../api/flight/flight';

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
        key: 'capacity',
        dataIndex: 'capacity',
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
        render: (text, record) => {
          return (
            <Button
              onClick={() => {
                this.rmFlight(record);
              }}
            >
              删除
            </Button>
          );
        }
      }
    ];

    this.getAllFlights = this.getAllFlights.bind(this);
    this.rmFlight = this.rmFlight.bind(this);

    this.getAllFlights();
    this.props.deliverFunc(this.getAllFlights);
  }

  getAllFlights() {
    apiGetAllFlights()
      .then(value => {
        let res = value.data;
        if (res.status === 0) {
          this.props.getAllFlightsDispatch(res.data);
        } else {
          console.log('获取失败');
        }
      })
      .catch(e => {
        console.log(e.toString());
      });
  }

  rmFlight(data) {
    const { flightId, flyTime } = data;
    apiRmFlight({
      flightId,
      flyTime
    })
      .then(value => {
        let res = value.data;
        if (res.status === 0) {
          message.success('删除成功');
          this.getAllFlights();
        }
      })
      .catch(e => {
        message.error('删除失败：' + e.toString());
      });
  }

  render() {
    const { flights } = this.props;
    return (
      <div className={'manage-flight'}>
        <Table
          columns={this.columns}
          rowKey={record => {
            return record.flightId + record.flyTime;
          }}
          dataSource={flights}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flights: state.flights
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllFlightsDispatch: data => {
      dispatch(actionGetAllFlights(data));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageFlight);
