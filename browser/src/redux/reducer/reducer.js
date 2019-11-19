import {combineReducers} from 'redux';
import userReducer from "./user";
import flightReducer from "./flight";

let reducer = combineReducers({
    user: userReducer,
    flights: flightReducer
});

export default reducer;
