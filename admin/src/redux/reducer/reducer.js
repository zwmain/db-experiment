import { combineReducers } from 'redux';
import flightReducer from './flight';
import voyageReducer from './voyage';
import staffReducer from './staff';
import loginReducer from './staff-login';

let reducer = combineReducers({
  flights: flightReducer,
  voyages: voyageReducer,
  staffs: staffReducer,
  user: loginReducer
});

export default reducer;
