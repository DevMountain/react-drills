import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      text: ''
    }
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
      <input type='text' onChange={this.handleChange.bind(this)}/>
        <p>
          {this.state.text}
        </p>
      </header>
    </div>
  );
}
}

export default App;
