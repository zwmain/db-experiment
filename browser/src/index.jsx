import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {Provider} from 'react-redux';
import store from "./redux/store/store";

import './assets/index.css';

if (module.hot) {
  module.hot.accept(() => {
    ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.getElementById('root')
    );
  });
}

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
