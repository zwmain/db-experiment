import {combineReducers} from 'redux';
import flightReducer from "./flight";

let reducer = combineReducers({
    flights: flightReducer
});

export default reducer;
