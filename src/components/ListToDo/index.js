import React, { Component } from 'react';
import ItemToDo from '../ItemTodo';
import { Card, Input, List, Row, Col, Button } from 'antd';
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
class ListToDo extends Component {
  renderHeader = (name) => {
    return (
      <Card
        title={name}
        style={{ width: 300 }}
      >
        <Row>
          <Col span={18}><Input placeholder="Add todo" /></Col>
          <Col span={6}><Button>Add</Button></Col>
        </Row>
      </Card>
    )
  }
  render() {
    return (
      <List
        size="small"
        header={this.renderHeader(this.props.name)}
        footer={<div>{this.props.note}</div>}
        bordered
        dataSource={this.props.items}
        renderItem={item => (<List.Item> <ItemToDo name={item.name} status={item.status}/></List.Item>)}
      />
    );
  }
}

export default ListToDo;
