import React from 'react';
import { Input, InputNumber, TimePicker, Cascader, Select, Button } from 'antd';
import moment from 'moment';

const { Option } = Select;

import './add-flight.css';

class AddFlight extends React.Component {
  constructor(x) {
    super(x);
    this.inputStyle = {
      width: 200
    };
    this.cityOptions = [
      {
        value: '湖北',
        label: '湖北',
        children: [
          {
            value: '武汉',
            label: '武汉'
          }
        ]
      },
      {
        value: '北京',
        label: '北京'
      }
    ];

    const {
      flightId,
      flyTime,
      arrTime,
      oriCity,
      tarCity,
      price,
      capacity,
      planeType,
      flightCompany
    } = this.props.defaultValue;

    this.flightItem = {
      flightId,
      flyTime,
      arrTime,
      oriCity: oriCity[oriCity.length - 1],
      tarCity: tarCity[tarCity.length - 1],
      price,
      capacity,
      planeType,
      flightCompany
    };

    this.oldItem = Object.assign({}, this.flightItem);

    this.onFightIdChange = this.onFightIdChange.bind(this);
    this.onFlyTimeChange = this.onFlyTimeChange.bind(this);
    this.onArrTimeChange = this.onArrTimeChange.bind(this);
    this.onOriCityChange = this.onOriCityChange.bind(this);
    this.onTarCityChange = this.onTarCityChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onCapacityChange = this.onCapacityChange.bind(this);
    this.onPlaneTypeChange = this.onPlaneTypeChange.bind(this);
    this.onCompanyChange = this.onCompanyChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onFightIdChange(e) {
    let v = e.target.value;
    this.flightItem.flightId = v;
  }

  onFlyTimeChange(e) {
    let v = e.format('HH:mm:ss');
    this.flightItem.flyTime = v;
  }

  onArrTimeChange(e) {
    let v = e.format('HH:mm:ss');
    this.flightItem.arrTime = v;
  }

  onOriCityChange(e) {
    let v = e[e.length - 1];
    this.flightItem.oriCity = v;
  }

  onTarCityChange(e) {
    let v = e[e.length - 1];
    this.flightItem.tarCity = v;
  }

  onPriceChange(e) {
    let v = e;
    this.flightItem.price = v;
  }

  onCapacityChange(e) {
    let v = e;
    this.flightItem.capacity = v;
  }

  onPlaneTypeChange(e) {
    let v = e;
    this.flightItem.planeType = v;
  }

  onCompanyChange(e) {
    let v = e;
    this.flightItem.flightCompany = v;
  }

  submit() {
    if (this.props.submit) {
      this.props.submit(this.flightItem, this.oldItem);
    }
  }

  render() {
    const {
      flightId,
      flyTime,
      arrTime,
      oriCity,
      tarCity,
      price,
      capacity,
      planeType,
      flightCompany
    } = this.props.defaultValue;
    return (
      <div className={'add-flight'}>
        <div className={'input-row'}>
          <div className={'input-item'}>
            <div className={'input-item-title'}>航班号：</div>
            <div className={'input-item-content'}>
              <Input
                style={this.inputStyle}
                onChange={this.onFightIdChange}
                defaultValue={flightId}
              />
            </div>
          </div>
          <div className={'input-item'}>
            <div className={'input-item-title'}>起飞时间：</div>
            <div className={'input-item-content'}>
              <TimePicker
                style={this.inputStyle}
                onChange={this.onFlyTimeChange}
                defaultValue={moment(flyTime, 'HH:mm:ss')}
              />
            </div>
          </div>
          <div className={'input-item'}>
            <div className={'input-item-title'}>降落时间：</div>
            <div className={'input-item-content'}>
              <TimePicker
                style={this.inputStyle}
                onChange={this.onArrTimeChange}
                defaultValue={moment(arrTime, 'HH:mm:ss')}
              />
            </div>
          </div>
        </div>

        <div className={'input-row'}>
          <div className={'input-item'}>
            <div className={'input-item-title'}>出发城市：</div>
            <div className={'input-item-content'}>
              <Cascader
                style={this.inputStyle}
                onChange={this.onOriCityChange}
                options={this.cityOptions}
                defaultValue={oriCity}
              />
            </div>
          </div>
          <div className={'input-item'}>
            <div className={'input-item-title'}>目的城市：</div>
            <div className={'input-item-content'}>
              <Cascader
                style={this.inputStyle}
                onChange={this.onTarCityChange}
                options={this.cityOptions}
                defaultValue={tarCity}
              />
            </div>
          </div>
          <div className={'input-item'}>
            <div className={'input-item-title'}>价格：</div>
            <div className={'input-item-content'}>
              <InputNumber
                style={this.inputStyle}
                onChange={this.onPriceChange}
                defaultValue={price}
              />
            </div>
          </div>
        </div>

        <div className={'input-row'}>
          <div className={'input-item'}>
            <div className={'input-item-title'}>容量：</div>
            <div className={'input-item-content'}>
              <InputNumber
                style={this.inputStyle}
                onChange={this.onCapacityChange}
                defaultValue={capacity}
              />
            </div>
          </div>
          <div className={'input-item'}>
            <div className={'input-item-title'}>飞机类型：</div>
            <div className={'input-item-content'}>
              <Select
                style={this.inputStyle}
                onChange={this.onPlaneTypeChange}
                defaultValue={planeType}
              >
                <Option value={'大型'}>大型</Option>
                <Option value={'中型'}>中型</Option>
                <Option value={'小型'}>小型</Option>
              </Select>
            </div>
          </div>
          <div className={'input-item'}>
            <div className={'input-item-title'}>航空公司：</div>
            <div className={'input-item-content'}>
              <Select
                style={this.inputStyle}
                onChange={this.onCompanyChange}
                defaultValue={flightCompany}
              >
                <Option value={'中国航空'}>中国航空</Option>
                <Option value={'海南航空'}>海南航空</Option>
                <Option value={'深圳航空'}>深圳航空</Option>
              </Select>
            </div>
          </div>
        </div>

        <div className={'input-row'}>
          <Button type={'primary'} onClick={this.submit}>
            {this.props.confirmText}
          </Button>
        </div>
      </div>
    );
  }
}

AddFlight.defaultProps = {
  submit: null,
  defaultValue: {
    flightId: '',
    flyTime: moment().format('HH:mm:ss'),
    arrTime: moment().format('HH:mm:ss'),
    oriCity: ['湖北', '武汉'],
    tarCity: ['北京'],
    price: 500,
    capacity: 300,
    planeType: '大型',
    flightCompany: '中国航空'
  },
  confirmText: '添加'
};

export default AddFlight;
