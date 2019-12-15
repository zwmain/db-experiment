import {GET_ORDER_LIST} from './action';

function getOrderListAction(data) {
    return {
        type: GET_ORDER_LIST,
        data
    };
}

export {
    getOrderListAction
};