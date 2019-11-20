import {QUERY_FLIGHTS} from './action';
import {queryFlights} from '../../api/flight/flight';

function queryFlightsAction(condition) {
    return function (dispatch) {
        queryFlights(condition).then(value => {
            let res = value.data;
            if (res.status === 0) {
                dispatch({
                    type: QUERY_FLIGHTS,
                    data: res.data
                });
            } else {
                dispatch({
                    type: QUERY_FLIGHTS,
                    data: []
                });
            }

        }).catch(e => {
            if (e) {
                dispatch({
                    type: QUERY_FLIGHTS,
                    data: []
                });
            }
        })
    }
}

export {queryFlightsAction};