import React from 'react';
import Flight from "../../routes/flight/flight.jsx";
import Login from "../../routes/login/login.jsx";
import Logon from "../../routes/logon/logon.jsx";
import Order from '../../routes/order/order.jsx';
import {
  Switch,
  Route
} from "react-router-dom";

import './main.css';

class Main extends React.Component {
  constructor(x) {
    super(x);
  }

  render() {
    return <main className={'main'}>
      <Switch>
        <Route path={'/login'}>
          <Login/>
        </Route>
        <Route path={'/logon'}>
          <Logon/>
        </Route>
        <Route path={'/order'}>
          <Order/>
        </Route>
        <Route path={'/'}>
          <Flight/>
        </Route>
      </Switch>
    </main>;
  }
}

export default Main;
