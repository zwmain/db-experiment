import React from 'react';
import { connect } from 'react-redux';
import { Select, DatePicker, InputNumber, Button } from 'antd';
import moment from 'moment';

const { Option } = Select;

import './add-voyage.css';

class AddVoyage extends React.Component {
  constructor(x) {
    super(x);
    this.inputStyle = {
      width: 200
    };
    let defaultValue = this.props.defaultValue;
    let flightId = defaultValue.flightId;
    this.voyageItem = Object.assign({}, defaultValue);
    this.voyageItem.flightId = flightId === '' ? this.props.arrFlightId[0] : flightId;
    this.oldValue = Object.assign({}, this.voyageItem);

    this.onFlightId = this.onFlightId.bind(this);
    this.onflyDate = this.onflyDate.bind(this);
    this.onPrice = this.onPrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onRemain = this.onRemain.bind(this);
  }

  onFlightId(v) {
    this.voyageItem.flightId = v;
  }

  onflyDate(v) {
    v = v.format('YYYY-MM-DD');
    this.voyageItem.flyDate = v;
  }

  onPrice(v) {
    this.voyageItem.price = v;
  }

  onSubmit() {
    const { submit } = this.props;
    if (submit) {
      let defaultValue = this.props.defaultValue;
      let flightId = defaultValue.flightId;
      if (flightId === '') {
        this.onRemain(this.voyageItem.flightId);
      }
      submit(this.voyageItem, this.oldValue);
    }
  }

  onRemain(flightId) {
    const { flights } = this.props;
    for (const i of flights) {
      if (flightId === i.flightId) {
        this.voyageItem.remain = i.capacity;
      }
    }
  }

  render() {
    const { arrFlightId } = this.props;
    const { flightId, flyDate, price } = this.props.defaultValue;
    return (
      <div className="add-voayge">
        <div className={'input-row'}>
          <div className={'input-item'}>
            <div className={'input-item-title'}>航班号：</div>
            <div className={'input-item-content'}>
              <Select
                style={this.inputStyle}
                defaultValue={flightId === '' ? arrFlightId[0] : flightId}
                onChange={this.onFlightId}
              >
                {arrFlightId.map(v => {
                  return (
                    <Option value={v} key={v}>
                      {v}
                    </Option>
                  );
                })}
              </Select>
            </div>
          </div>
          <div className={'input-item'}>
            <div className={'input-item-title'}>飞行日期：</div>
            <div className={'input-item-content'}>
              <DatePicker
                style={this.inputStyle}
                defaultValue={moment(flyDate, 'YYYY-MM-DD')}
                onChange={this.onflyDate}
              />
            </div>
          </div>
          <div className={'input-item'}>
            <div className={'input-item-title'}>价格：</div>
            <div className={'input-item-content'}>
              <InputNumber style={this.inputStyle} defaultValue={price} onChange={this.onPrice} />
            </div>
          </div>
        </div>
        <div className="input-row">
          <Button type="primary" onClick={this.onSubmit}>
            {this.props.confirmText}
          </Button>
        </div>
      </div>
    );
  }
}

AddVoyage.defaultProps = {
  defaultValue: {
    flyDate: moment().format('YYYY-MM-DD'),
    flightId: '',
    price: 300,
    remain: 300
  },
  confirmText: '添加',
  submit: null
};

function mapStateToProps(state) {
  let arrFlightId = [];
  for (let i of state.flights) {
    arrFlightId.push(i.flightId);
  }
  return {
    arrFlightId,
    flights: state.flights
  };
}

export default connect(mapStateToProps)(AddVoyage);
