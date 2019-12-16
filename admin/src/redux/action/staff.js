import { GET_ALL_STAFFS } from './action';

export function actionGetAllStaffs(data) {
  return {
    type: GET_ALL_STAFFS,
    data
  };
}
