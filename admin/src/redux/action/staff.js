import { GET_ALL_STAFFS, LOGIN } from './action';

export function actionGetAllStaffs(data) {
  return {
    type: GET_ALL_STAFFS,
    data
  };
}

export function actionLogin(data) {
  return {
    type: LOGIN,
    data
  };
}
