import React, { Component } from 'react';
import './App.css';
import List from './List.js';
import NewTask from './NewTask.js';

class App extends Component{
  constructor(){
    super();
    this.state = {
      todo: [],
      input: ''
    }
  }

  handleSubmit() {
    let newArr = this.state.todo;
    newArr.push(this.state.input);
    this.setState({todo: newArr});
  }

  handleInput(e) {
    this.setState({input: e.target.value});
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
      <NewTask submit={this.handleSubmit.bind(this)} input={this.handleInput.bind(this)} />
      {this.state.todo.map(item => {
      return (
        <List item={item}/>
      )
      })}
      </header>
    </div>
  );
}
}
// what
export default App;
