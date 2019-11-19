import ajax from "../ajax";
import {baseURL} from "../config";

function queryFlights(condition) {
    const pro = ajax(baseURL + 'flights', condition);
    return pro;
}

export {queryFlights};