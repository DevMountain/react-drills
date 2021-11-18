import React, { Component } from 'react';
import './App.css';


class Image extends Component {
  render() {
    return (
    <img src={this.props.url}></img>
  );
}
}

export default Image;