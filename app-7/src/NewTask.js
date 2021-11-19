import React, { Component } from 'react';
import './App.css';


class NewTask extends Component {
  render() {
    return (
      <div>
      <label>Insert item: </label>
      <input type='text' onChange={this.props.input.bind(this)}/>
      <button onClick={this.props.submit}>add to list</button>
      </div>
    );
}
}

export default NewTask;