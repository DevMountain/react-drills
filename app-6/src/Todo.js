import React, { Component } from 'react';
import './App.css';


class Todo extends Component {
  render() {
    return (
      <li>{this.props.item}</li>
    )
}
}

export default Todo;