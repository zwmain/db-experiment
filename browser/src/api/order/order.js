import ajax from "../ajax";
import {baseURL} from '../config';

function orderFlight(data) {
    return ajax(baseURL + 'orderFlight', data);
}

function getOrderList(data) {
    return ajax(baseURL + 'orderList', data);
}

export {
    orderFlight,
    getOrderList
};