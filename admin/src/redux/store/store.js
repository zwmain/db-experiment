import {createStore, applyMiddleware} from 'redux';
import reducer from "../reducer/reducer";
import thunk from 'redux-thunk';

let store = createStore(reducer, applyMiddleware(thunk));

export default store;
