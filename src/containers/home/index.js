import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListToDo from '../../components/ListToDo';
import { Modal, Button, Input, List, Layout } from 'antd';
const { Content } = Layout;

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
  'Los Angeles battles huge wildfires.',
  'Los Angeles battles huge wildfires.',
];

class Home extends Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  onChange = (val) => {
    console.log(val);
  }

  renderHeader = () => {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Add List
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Put your list name here...</p>
          <Input placeholder="Basic usage" />
        </Modal>
      </div>
    );
  }

  render() {
    return (
      <Layout>
        <Content className="container-fluid">
          <List
            grid={{ gutter: 16, column: 3 }}
            header={this.renderHeader()}
            bordered
            dataSource={data}
            renderItem={item => (<List.Item><ListToDo/></List.Item>)}
          />
        </Content>
      </Layout>
    );
  }
}

function mapStateToProps(state) { return {}; }

export default connect(mapStateToProps)(Home)
