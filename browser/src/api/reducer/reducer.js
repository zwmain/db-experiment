import {combineReducers} from 'redux';
import userReducer from "./user";

let reducer = combineReducers({
  user: userReducer
});

export default reducer;
