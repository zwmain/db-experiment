import React from 'react';
import Nav from "./components/nav/nav.jsx";
import Main from "./components/main/main.jsx";
import {BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component {
  constructor(x) {
    super(x);
  }

  render() {
    return <div id={'app'}>
      <Router>
        <Nav/>
        <Main/>
      </Router>
    </div>;
  }
}

export default App;
