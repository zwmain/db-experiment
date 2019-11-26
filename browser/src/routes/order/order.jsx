import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getOrderList} from '../../api/order/order';
import {message} from 'antd';
import {getOrderListAction} from '../../redux/action/order';
import OrderList from "../../components/order-list/order-list.jsx";

import './order.css';

class Order extends React.Component {
    constructor(x) {
        super(x);
        this.getOrderList();
    }

    getOrderList() {
        const {user, saveOrderList} = this.props;
        getOrderList(user).then(value => {
            const res = value.data;
            console.log(res);
            if (res.status === 0) {
                saveOrderList(res.data);
            } else {
                saveOrderList([]);
            }
        }).catch(e => {
            message.error('Order：' + e.toString());
        })
    }

    render() {
        const {orderList} = this.props;
        return <div className={'order'}>
            <OrderList dataSource={orderList}/>
        </div>;
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        orderList: state.orderList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        saveOrderList: (data) => {
            dispatch(getOrderListAction(data))
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Order));