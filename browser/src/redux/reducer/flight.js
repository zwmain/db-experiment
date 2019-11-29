import {QUERY_FLIGHTS} from '../action/action';

let initFlightState = [];

function flightReducer(state = initFlightState, action) {
    switch (action.type) {
        case QUERY_FLIGHTS: {
            return action.data;
        }
        default: {
            return state;
        }
    }
}

export default flightReducer;