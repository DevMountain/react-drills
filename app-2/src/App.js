import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      listArr: ['joe', 'seven', 'eighty-two', 'hello', 'goodbye']
    }
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
      {this.state.listArr.map(item => {
  return (
    <h2>
      {item}
    </h2>
  )
})}
      </header>
    </div>
  );
}
}

export default App;
