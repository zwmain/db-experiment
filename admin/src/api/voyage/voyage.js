import { baseURL } from '../config';
import ajax from '../ajax';

export function addVoyage(data) {
  return ajax(baseURL + 'addVoyage', data);
}

export function getAllVoyages() {
  return ajax(baseURL + 'getAllVoyages', null);
}

export function rmVoyage(data) {
  return ajax(baseURL + 'rmVoyage', data);
}

export function changeVoyage(data) {
  return ajax(baseURL + 'changeVoyage', data);
}
