import ajax from "../ajax";
import {baseURL} from '../config';

function orderFlight(data) {
    return ajax(baseURL + 'orderFlight', data);
}

export {
    orderFlight
};