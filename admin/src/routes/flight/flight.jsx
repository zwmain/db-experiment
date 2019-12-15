import React from 'react';
import { message } from 'antd';
import ManageFlight from '../../components/manage-flight/manage-flight.jsx';
import { addFlight as apiAddFlight } from '../../api/flight/flight';
import AddFlight from '../../components/add-flight/add-flight.jsx';

import './flight.css';

class Flight extends React.Component {
  constructor(x) {
    super(x);
    this.getAllFlights = null;

    this.addFlight = this.addFlight.bind(this);
    this.getChildFunc = this.getChildFunc.bind(this);
  }

  addFlight(flightItem) {
    if (flightItem.flightId === '') {
      message.warn('航班号不能为空！');
      return null;
    }
    apiAddFlight(flightItem)
      .then(res => {
        let value = res.data;
        if (value.status === 0) {
          message.success('添加成功');
          this.getAllFlights();
        } else {
          message.error('添加失败' + value.message);
        }
      })
      .catch(e => {
        message.error('添加失败' + e.toString());
      });
  }

  getChildFunc(fn) {
    this.getAllFlights = fn;
  }

  render() {
    return (
      <div className={'flight'}>
        <AddFlight submit={this.addFlight} />
        <ManageFlight deliverFunc={this.getChildFunc} />
      </div>
    );
  }
}

export default Flight;
