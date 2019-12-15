import ajax from '../ajax';
import { baseURL } from '../config';

export function addFlight(data) {
  return ajax(baseURL + 'addFlight', data);
}

export function getAllFlights() {
  return ajax(baseURL + 'getAllFlights', null);
}

export function rmFlight(data) {
  return ajax(baseURL + 'rmFlight', data);
}
