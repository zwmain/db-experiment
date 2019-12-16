import { combineReducers } from 'redux';
import flightReducer from './flight';
import voyageReducer from './voyage';
import staffReducer from './staff';

let reducer = combineReducers({
  flights: flightReducer,
  voyages: voyageReducer,
  staffs: staffReducer
});

export default reducer;
