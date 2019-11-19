import React from 'react';
import {Cascader, Icon, DatePicker, Button} from 'antd';
import moment from 'moment';

import './search-bar.css';

class SearchBar extends React.Component {
  constructor(x) {
    super(x);
    this.cityOptions = [
      {
        value: 'hubei',
        label: '湖北',
        children: [
          {
            value: 'wuhan',
            label: '武汉'
          }
        ]
      },
      {
        value: 'beijing',
        label: '北京'
      }
    ];

    this.defaultOriCity = ['hubei', 'wuhan'];
    this.defaultTarCity = ['beijing'];
    this.defaultDate = moment(new Date(), 'YYYY-MM-DD');

    this.state = {
      oriCity: this.defaultOriCity[this.defaultOriCity.length - 1],
      tarCity: this.defaultTarCity[this.defaultTarCity.length - 1],
      flyDate: this.defaultDate.format('YYYY-MM-DD')
    }

    this.onOriAreaChange = this.onOriAreaChange.bind(this);
    this.onTarAreaChange = this.onTarAreaChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
  }

  onOriAreaChange(v) {
    console.log(v);
    this.setState({
      oriCity: v[v.length - 1]
    });
  }

  onTarAreaChange(v) {
    console.log(v);
    this.setState({
      tarCity: v[v.length - 1]
    });
  }

  onDateChange(v) {
    console.log(v.format('YYYY-MM-DD'));
    this.setState({
      flyDate: v.format('YYYY-MM-DD')
    });
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
      <Button type="primary" icon="search">
        查询
      </Button>
    </div>;
  }
}

export default SearchBar;
