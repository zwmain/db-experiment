import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import Flight from "./routes/flight/flight.jsx";
import Voyage from "./routes/voyage/voyage.jsx";
import Staff from "./routes/staff/staff.jsx";

const { Header, Sider, Content } = Layout;

class App extends React.Component {
  constructor(x) {
    super(x);
    this.state = {
      collapsed: false,
    };

    this.toggle=this.toggle.bind(this);
  }

  toggle () {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return <Router>
      <Layout style={{height:'100%'}}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} className={'slider'}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="setting" />
              <span><Link to={'/'} className={'slider-nav'}>航班管理</Link></span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="tool" />
              <span><Link to={'/voyage'} className={'slider-nav'}>航次管理</Link></span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="user" />
              <span><Link to={'/staff'} className={'slider-nav'}>人员管理</Link></span>
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
                  marginLeft:'1em'
                }}
            />
          </Header>
          <Content className={'content'}>
            <Switch>
              <Route path={'/voyage'}>
                <Voyage/>
              </Route>
              <Route path={'/staff'}>
                <Staff/>
              </Route>
              <Route path={'/'}>
                <Flight/>
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>;
  }
}

export default App;
