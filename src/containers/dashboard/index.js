import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon, Card } from 'antd';
import { connect } from 'react-redux'

import Home from '../home';
import About from '../about';

const { Header, Content, Footer, Sider } = Layout;
const DashBoard = (props) => (
  <Router>
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => { console.log(broken); }}
        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
      >
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">
            <Icon type="home" />
            <span className="nav-text">Home</span>
            <Link to="/"/>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="user" />
            <span className="nav-text">About</span>
            <Link to="/about"/>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} >
          <h1>Todo App</h1>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <Route exact path="/about" component={About} />
            <Route exact path="/" component={Home} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ToDo App ©2018 Created by Thoi
        </Footer>
      </Layout>
    </Layout>
  </Router>
);

function mapStateToProps(state) { return {}; }

export default connect(mapStateToProps)(DashBoard)
