import React from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Icon, Button } from 'antd';
import Flight from './routes/flight/flight.jsx';
import Voyage from './routes/voyage/voyage.jsx';
import Staff from './routes/staff/staff.jsx';
import Login from './routes/login/login.jsx';
import { connect } from 'react-redux';
import { actionLogin } from './redux/action/staff';

const { Header, Sider, Content } = Layout;

class App extends React.Component {
  constructor(x) {
    super(x);

    const { user, history } = this.props;
    if (user.staffName === '' || user.staffPwd === '') {
      history.replace('/login');
    }

    this.state = {
      collapsed: false
    };

    this.toggle = this.toggle.bind(this);
    this.logout = this.logout.bind(this);
  }

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  logout() {
    const { rmUser, history } = this.props;
    rmUser();
    history.replace('/login');
  }

  render() {
    return (
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Layout style={{ height: '100%' }}>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed} className={'slider'}>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Icon type="setting" />
                  <span>
                    <Link to={'/'} className={'slider-nav'}>
                      航班管理
                    </Link>
                  </span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="tool" />
                  <span>
                    <Link to={'/voyage'} className={'slider-nav'}>
                      航次管理
                    </Link>
                  </span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="user" />
                  <span>
                    <Link to={'/staff'} className={'slider-nav'}>
                      人员管理
                    </Link>
                  </span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                  style={{
                    position: 'relative',
                    marginLeft: '1em'
                  }}
                />
                <Button
                  type="link"
                  onClick={this.logout}
                  style={{
                    position: 'relative',
                    float: 'right',
                    top: '16px'
                  }}
                >
                  退出
                </Button>
              </Header>
              <Content className={'content'}>
                <Switch>
                  <Route path={'/voyage'}>
                    <Voyage />
                  </Route>
                  <Route path={'/staff'}>
                    <Staff />
                  </Route>
                  <Route path={'/'}>
                    <Flight />
                  </Route>
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Route>
      </Switch>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  const data = {
    staffName: '',
    staffPwd: ''
  };
  return {
    rmUser: () => {
      dispatch(actionLogin(data));
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
