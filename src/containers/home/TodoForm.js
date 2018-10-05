import { Modal, Input, Form, Radio } from 'antd';
import React, { Component } from 'react';
const FormItem = Form.Item;

const TodoForm = Form.create()(
  class extends Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a new collection"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="name">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input the name of todo list!' }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="note">
              {getFieldDecorator('note')(<Input type="Please input the note of todo list" />)}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

export default TodoForm;
