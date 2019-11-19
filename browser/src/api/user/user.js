import ajax from "../ajax";
import {baseURL} from '../config';

function login(user = null) {
    const pro = ajax(baseURL + 'login', user);
    return pro;
}

function logon(user = null) {
    const pro = ajax(baseURL + 'logon', user);
    return pro;
}

export {login, logon};