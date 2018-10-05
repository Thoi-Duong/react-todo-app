import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListToDo from '../../components/ListToDo';
import { Button, List, Layout, Form } from 'antd';
import TodoForm from './TodoForm'
import {
  addNewList
} from './action';
import { map } from 'rsvp';

const { Content } = Layout;


class Home extends Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log('Received values of form: ', values);
      form.resetFields();
      this.props.addNewList(values)
      this.setState({ visible: false });
    });
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

  renderHeader = () => {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>New Todo List</Button>
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
            dataSource={this.props.todos}
            renderItem={item => (<List.Item><ListToDo name={item.name} note={item.note} items={item.list} /></List.Item>)}
          />
          <TodoForm
            wrappedComponentRef={this.saveFormRef}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
          />
        </Content>
      </Layout>
    );
  }
}

function mapStateToProps(state) { 
  return {
    todos: state.home.todos
  }
}
const mapDispatchToProps = { addNewList };
// function mapDispatchToProps() {
//   return {
//     addNewList
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Home)
