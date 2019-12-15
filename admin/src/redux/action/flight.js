import { GET_ALL_FLIGHTS } from './action';

export function actionGetAllFlights(data) {
  return {
    type: GET_ALL_FLIGHTS,
    data
  };
}
