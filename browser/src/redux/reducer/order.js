import {GET_ORDER_LIST} from '../action/action';

function orderReducer(state = [], action) {
    switch (action.type) {
        case GET_ORDER_LIST: {
            return action.data;
        }
        default: {
            return state;
        }
    }
}

export default orderReducer;