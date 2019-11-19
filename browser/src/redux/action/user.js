import {LOGIN, LOGON, LOGOUT} from './action';

function loginAction(userData) {
  return {
    type: LOGIN,
    data: userData
  };
}

function logonAction(userId = '', userName = '', password = '', userGender = false) {
  return {
    type: LOGON,
    data: {
      userId,
      userName,
      userGender,
      password

    }
  };
}

function logoutAction() {
  return {
    type: LOGOUT
  };
}

export {
  loginAction,
  logonAction,
  logoutAction
};
