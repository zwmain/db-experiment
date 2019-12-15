import {combineReducers} from 'redux';
import userReducer from "./user";
import flightReducer from "./flight";
import orderReducer from "./order";

let reducer = combineReducers({
    user: userReducer,
    flights: flightReducer,
    orderList: orderReducer
});

export default reducer;
