import {QUERY_FLIGHTS} from './action';
import {queryFlights} from '../../api/flight/flight';
import {message} from 'antd';

function queryFlightsAction(condition) {
    return function (dispatch) {
        queryFlights(condition).then(value => {
            let res = value.data;
            if (res.status === 0) {
                dispatch({
                    type: QUERY_FLIGHTS,
                    data: res.data
                });
                message.success('查询成功');
            } else {
                dispatch({
                    type: QUERY_FLIGHTS,
                    data: []
                });
                message.warn('未查询到结果');
            }

        }).catch(e => {
            if (e) {
                dispatch({
                    type: QUERY_FLIGHTS,
                    data: []
                });
                message.error('查询失败：' + e.toString());
            }
        })
    }
}

export {queryFlightsAction};