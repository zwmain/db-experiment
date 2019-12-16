import { baseURL } from '../config';
import ajax from '../ajax';

export function addStaff(data) {
  return ajax(baseURL + 'addStaff', data);
}

export function getAllStaffs() {
  return ajax(baseURL + 'getAllStaffs', null);
}

export function rmStaff(data) {
  return ajax(baseURL + 'rmStaff', data);
}
