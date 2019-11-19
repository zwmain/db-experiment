import {QUERY_FLIGHTS} from './action';

function queryFlightsAction(condition) {
    return {
        type: QUERY_FLIGHTS,
        data: condition
    };
}

export {queryFlightsAction};