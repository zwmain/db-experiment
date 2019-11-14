import React from 'react';
import {isLogin, getUserName} from '../../api/user/user';
import {Link} from 'react-router-dom';

import './nav.css';

class Nav extends React.Component {
  constructor(x) {
    super(x);
  }

  render() {
    return <header className={'nav'}>
      {
        isLogin() ?
          <span className={'inline-block nav-user'}>
         <a href="#" className={'nav-login'}>你好</a>
         <a href="#" className={'nav-sign'}>{getUserName()}</a>
       </span>
          :
          <span className={'inline-block nav-user'}>
         <Link to={'/login'} className={'nav-login'}>登录</Link>
         <Link to={'/logon'} className={'nav-sign'}>注册</Link>
       </span>
      }
    </header>;
  }
}

export default Nav;
