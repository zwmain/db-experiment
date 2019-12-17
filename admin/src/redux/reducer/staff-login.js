import { LOGIN } from '../action/action';

let initState = {
  staffName: '',
  staffPwd: ''
};

function loginReducer(state = initState, action) {
  switch (action.type) {
    case LOGIN: {
      return action.data;
    }
    default:
      return state;
  }
}

export default loginReducer;
