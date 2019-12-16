import { GET_ALL_VOYAGES } from './action';

export function actionGetAllVoyages(data) {
  return {
    type: GET_ALL_VOYAGES,
    data
  };
}
