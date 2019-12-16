import { combineReducers } from 'redux';
import flightReducer from './flight';
import voyageReducer from './voyage';

let reducer = combineReducers({
  flights: flightReducer,
  voyages: voyageReducer
});

export default reducer;
