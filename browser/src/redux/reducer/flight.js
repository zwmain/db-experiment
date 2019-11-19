import {QUERY_FLIGHTS} from '../action/action';

let initFlightState = [];

function flightReducer(state = initFlightState, action) {
    switch (action.type) {
        case QUERY_FLIGHTS: {
            return initFlightState;
        }
        default: {
            return initFlightState;
        }
    }
}

export default flightReducer;