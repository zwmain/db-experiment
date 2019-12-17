import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Icon, Button } from 'antd';

import { logoutAction } from '../../redux/action/user';

import './nav.css';

class Nav extends React.Component {
  constructor(x) {
    super(x);

    this.isLogin = this.isLogin.bind(this);
    this.logout = this.logout.bind(this);
  }

  isLogin() {
    let { user } = this.props;
    return !(user.userId === '');
  }

  logout() {
    this.props.logout();
    const { history } = this.props;
    history.replace('/');
  }

  render() {
    let { user } = this.props;
    return (
      <header className={'nav'}>
        <span className={'inline-block nav-home'}>
          <Link to={'/'} className={'nav-sign'}>
            <Icon type={'home'} />
          </Link>
        </span>
        {this.isLogin() ? (
          <span className={'inline-block nav-user'}>
            <a href="#" className={'nav-login'}>
              你好
            </a>
            <Link to={'/order'} className={'nav-sign'}>
              {user.userName}
            </Link>
            <Button type={'link'} className={'nav-logout'} onClick={this.logout}>
              注销
            </Button>
          </span>
        ) : (
          <span className={'inline-block nav-user'}>
            <Link to={'/login'} className={'nav-login'}>
              登录
            </Link>
            <Link to={'/logon'} className={'nav-sign'}>
              注册
            </Link>
          </span>
        )}
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(logoutAction());
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
