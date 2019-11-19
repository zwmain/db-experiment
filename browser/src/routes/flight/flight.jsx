import React from 'react';
import SearchBar from "../../components/search-bar/search-bar.jsx";
import FlightList from "../../components/flight-list/flight-list.jsx";

import './flight.css';

class Flight extends React.Component {
  constructor(x) {
    super(x);
  }

  render() {
    return <div className={'flight'}>
      <SearchBar/>
      <FlightList/>
    </div>;
  }
}

export default Flight;
