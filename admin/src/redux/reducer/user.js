import {LOGIN, LOGON, LOGOUT} from '../action/action';

let initUserState = {
  userId: '',
  userName: '',
  userGender: '',
  password: ''
};

function userReducer(state = initUserState, action) {
  switch (action.type) {
    case LOGIN: {
      return action.data;
    }
    case LOGON: {
      return initUserState;
    }
    case LOGOUT: {
      return initUserState;
    }
    default:
      return state;
  }
}

export default userReducer;
