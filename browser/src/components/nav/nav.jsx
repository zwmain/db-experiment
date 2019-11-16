import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { Icon } from 'antd';

import './nav.css';

class Nav extends React.Component {
  constructor(x) {
    super(x);
  }

  isLogin() {
    let {user} = this.props;
    return !(user.userId === '');
  }

  render() {
    let {user} = this.props;
    return <header className={'nav'}>
      <span className={'inline-block nav-home'}>
        <Link to={'/'} className={'nav-sign'}><Icon type={'home'}/></Link>
      </span>
      {
        this.isLogin() ?
          <span className={'inline-block nav-user'}>
         <a href="#" className={'nav-login'}>你好</a>
         <a href="#" className={'nav-sign'}>{user.userName}</a>
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

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Nav);
