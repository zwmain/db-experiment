import React from 'react';
import SearchBar from "../../components/search-bar/search-bar.jsx";
import FlightList from "../../components/flight-list/flight-list.jsx";
import {queryFlightsAction} from '../../redux/action/flight';
import {connect} from 'react-redux';
import {message} from 'antd';

import './flight.css';

class Flight extends React.Component {
    constructor(x) {
        super(x);

        this.searchFlight = this.searchFlight.bind(this);
    }

    searchFlight(v) {
        this.props.queryFlight(v);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        let {flightList} = nextProps;
        if (flightList.length > 0) {
            message.success('查询成功');
        } else {
            message.warn('未查询到结果');
        }
    }

    render() {
        const {flightList} = this.props;
        console.log(flightList);
        return <div className={'flight'}>
            <SearchBar submit={this.searchFlight}/>
            <FlightList dataSource={flightList}/>
        </div>;
    }
}

function mapStateToProps(state) {
    return {
        flightList: state.flights
    };
}

function mapDispatchToProps(dispatch) {
    return {
        queryFlight: (v) => {
            dispatch(queryFlightsAction(v));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Flight);
