import {User} from '../data/data';

function isLogin() {
  return !(User.userId === '');
}

function getUserName() {
  return User.userName;
}

export {isLogin, getUserName};
