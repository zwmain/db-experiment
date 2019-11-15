import React from 'react';
import Nav from "./components/nav/nav.jsx";
import Main from "./components/main/main.jsx";
import {BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component {
  constructor(x) {
    super(x);
  }

  render() {
    return <Router>
      <div id={'app'}>
        <Nav/>
        <Main/>
      </div>
    </Router>;
  }
}

export default App;
