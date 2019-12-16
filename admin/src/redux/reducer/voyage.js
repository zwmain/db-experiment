import { GET_ALL_VOYAGES } from '../action/action';

let initState = [];

function voyageReducer(state = initState, action) {
  switch (action.type) {
    case GET_ALL_VOYAGES: {
      return action.data;
    }
    default: {
      return state;
    }
  }
}

export default voyageReducer;