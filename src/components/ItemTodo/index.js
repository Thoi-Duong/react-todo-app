import React, { Component } from 'react';
import Button from 'antd/lib/button';
import { Checkbox } from 'antd';

class ItemToDo extends Component {
  onChange = (val) => {
    console.log(val);
  }
  render() {
    return (
      <Checkbox onChange={this.onChange}>{this.props.name}</Checkbox>
    );
  }
}

export default ItemToDo;
