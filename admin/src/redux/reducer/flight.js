import {GET_ALL_FLIGHTS} from '../action/action';

let initFlightState = [];

function flightReducer(state = initFlightState, action) {
    switch (action.type) {
        case GET_ALL_FLIGHTS: {
            return action.data;
        }
        default: {
            return state;
        }
    }
}

export default flightReducer;