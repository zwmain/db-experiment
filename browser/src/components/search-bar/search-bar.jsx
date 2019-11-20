import React from 'react';
import {Cascader, Icon, DatePicker, Button} from 'antd';
import moment from 'moment';

import './search-bar.css';

class SearchBar extends React.Component {
  constructor(x) {
    super(x);
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

    this.defaultOriCity = ['湖北', '武汉'];
    this.defaultTarCity = ['北京'];
    this.defaultDate = moment(new Date(), 'YYYY-MM-DD');

    this.state = {
      oriCity: this.defaultOriCity[this.defaultOriCity.length - 1],
      tarCity: this.defaultTarCity[this.defaultTarCity.length - 1],
      flyDate: this.defaultDate.format('YYYY-MM-DD')
    };

    this.onOriAreaChange = this.onOriAreaChange.bind(this);
    this.onTarAreaChange = this.onTarAreaChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onOriAreaChange(v) {
    this.setState({
      oriCity: v[v.length - 1]
    });
  }

  onTarAreaChange(v) {
    this.setState({
      tarCity: v[v.length - 1]
    });
  }

  onDateChange(v) {
    this.setState({
      flyDate: v.format('YYYY-MM-DD')
    });
  }

  submit() {
    let data = {
      oriCity: this.state.oriCity,
      tarCity: this.state.tarCity,
      flyDate: this.state.flyDate
    };
    this.props.submit(data);
  }

  render() {
    return <div className={'search-bar'}>
      <Cascader
        defaultValue={this.defaultOriCity}
        options={this.cityOptions}
        className={'search-area'}
        onChange={this.onOriAreaChange}
      />
      <Icon type="arrow-right" className={'search-area'}/>
      <Cascader
        defaultValue={this.defaultTarCity}
        options={this.cityOptions}
        className={'search-area'}
        onChange={this.onTarAreaChange}
      />
      <DatePicker
        defaultValue={this.defaultDate}
        className={'search-date'}
        onChange={this.onDateChange}
      />
      <Button type="primary" icon="search" onClick={this.submit}>
        查询
      </Button>
    </div>;
  }
}

export default SearchBar;
