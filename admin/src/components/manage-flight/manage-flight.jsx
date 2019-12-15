import React from 'react';
import { Table, message, Button, Modal } from 'antd';
import { connect } from 'react-redux';
import { actionGetAllFlights } from '../../redux/action/flight';
import {
  getAllFlights as apiGetAllFlights,
  rmFlight as apiRmFlight,
  changeFlight
} from '../../api/flight/flight';
import AddFlight from '../add-flight/add-flight.jsx';
import moment from 'moment';

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
        title: '操作',
        key: 'operation',
        align: 'center',
        render: (text, record) => {
          return (
            <span>
              <Button
                onClick={() => {
                  this.rmFlight(record);
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

    this.city = {
      武汉: ['湖北', '武汉'],
      北京: ['北京']
    };

    this.state = {
      visible: false,
      record: {
        flightId: '',
        flyTime: moment().format('HH:mm:ss'),
        arrTime: moment().format('HH:mm:ss'),
        oriCity: ['湖北', '武汉'],
        tarCity: ['北京'],
        price: 500,
        capacity: 300,
        planeType: '大型',
        flightCompany: '中国航空'
      }
    };

    this.getAllFlights = this.getAllFlights.bind(this);
    this.rmFlight = this.rmFlight.bind(this);
    this.edit = this.edit.bind(this);
    this.saveChange = this.saveChange.bind(this);
    this.cancelChange = this.cancelChange.bind(this);

    this.getAllFlights();
    this.props.deliverFunc(this.getAllFlights);
  }

  getAllFlights() {
    apiGetAllFlights()
      .then(value => {
        let res = value.data;
        if (res.status === 0) {
          this.props.getAllFlightsDispatch(res.data);
          let editable = new Array(res.data.length);
          editable.fill(false);
          this.setState({ editable: editable });
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

  edit(record) {
    let {
      flightId,
      flyTime,
      arrTime,
      oriCity,
      tarCity,
      price,
      capacity,
      planeType,
      flightCompany
    } = record;
    oriCity = this.city[oriCity];
    tarCity = this.city[tarCity];
    this.setState({
      record: {
        flightId,
        flyTime,
        arrTime,
        oriCity,
        tarCity,
        price,
        capacity,
        planeType,
        flightCompany
      }
    });
    this.setState({ visible: true });
  }

  saveChange(flightItem, oldItem) {
    this.setState({ visible: false });
    changeFlight({ flightItem, oldItem })
      .then(v => {
        let res = v.data;
        if (res.status === 0) {
          message.success('修改成功');
          this.getAllFlights();
        } else {
          message.error('修改失败：', res.message);
        }
      })
      .catch(e => {
        message.error('修改失败：' + e.toString());
      });
  }

  cancelChange() {
    this.setState({ visible: false });
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
        <Modal
          title="修改航班"
          cancelText="取消"
          visible={this.state.visible}
          onCancel={this.cancelChange}
          width="80%"
          footer={null}
        >
          <AddFlight confirmText="确定" submit={this.saveChange} defaultValue={this.state.record} />
        </Modal>
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
