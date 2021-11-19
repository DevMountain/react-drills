import React, { Component } from 'react';
import './App.css';


class List extends Component {
  render() {
    return (
      <li>{this.props.item}</li>
    )
}
}

export default List;