import React from 'react';
import SearchBar from "../../components/search-bar/search-bar.jsx";
import FlightList from "../../components/flight-list/flight-list.jsx";
import {queryFlightsAction} from '../../redux/action/flight';
import {connect} from 'react-redux';
import {message} from 'antd';
import {orderFlight} from '../../api/order/order';
import { withRouter } from 'react-router-dom'

import './flight.css';

class Flight extends React.Component {
    constructor(x) {
        super(x);
        this.searchOptions = null;//查询条件

        this.searchFlight = this.searchFlight.bind(this);
        this.orderFlight = this.orderFlight.bind(this);
    }

    searchFlight(v) {
        this.searchOptions = v;
        this.props.queryFlight(this.searchOptions);
    }

    orderFlight(v) {
        //是否登录
        if (!this.isLogin()) {
            message.warn('请登录！');
            return;
        }
        //提交订票信息
        let orderData = this.initFlightOrder(v);
        const pro = orderFlight(orderData);
        pro.then(value => {
            let res = value.data;
            if (res.status === 0) {
                message.success(res.message);
            } else {
                message.warn(res.message);
            }
        }).catch(e => {
            message.error(e.toString());
        });
    }

    isLogin() {
        const {user} = this.props;
        if (user.userId === '' || user.userName === '')
            return false;
        return true;
    }

    initFlightOrder(index) {
        const {user, flightList} = this.props;
        let flight = flightList[index];
        return {
            userId: user.userId,
            flyDate: flight.flyDate,
            flightId: flight.flightId,
            flyTime: flight.flyTime,
            arrTime: flight.arrTime,
            oriCity: flight.oriCity,
            tarCity: flight.tarCity,
            price: flight.price
        };
    }

    render() {
        const {flightList} = this.props;
        return <div className={'flight'}>
            <SearchBar submit={this.searchFlight}/>
            <FlightList dataSource={flightList} onOrder={this.orderFlight}/>
        </div>;
    }
}

function mapStateToProps(state) {
    return {
        flightList: state.flights,
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        queryFlight: (v) => {
            dispatch(queryFlightsAction(v));
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Flight));
