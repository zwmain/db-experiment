import { GET_ALL_STAFFS } from '../action/action';

let initState = [];

function staffReducer(state = initState, action) {
  switch (action.type) {
    case GET_ALL_STAFFS: {
      return action.data;
    }
    default: {
      return state;
    }
  }
}

export default staffReducer;
