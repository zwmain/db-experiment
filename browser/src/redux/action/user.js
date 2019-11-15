import {LOGIN, LOGON, LOGOUT} from './action';

function loginAction(userId = '', password = '') {
  return {
    type: LOGIN,
    data: {
      userId,
      password
    }
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
