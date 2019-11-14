import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import './assets/index.css';

if (module.hot) {
  module.hot.accept(()=>{
    ReactDOM.render(<App/>, document.getElementById('root'));
  });
}
ReactDOM.render(<App/>, document.getElementById('root'));
