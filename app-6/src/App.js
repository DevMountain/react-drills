import React, { Component } from 'react';
import './App.css';
import Todo from './Todo.js';

class App extends Component{
  constructor(){
    super();
    this.state = {
      input: '',
      todo: []
    }
  }

  handleInput(e) {
    this.setState({input: e.target.value});
  }

  handleSubmit() {
    let newArr = this.state.todo;
    newArr.push(this.state.input);
    this.setState({todo: newArr});
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
      <label>Insert item: </label>
      <input type='text' onChange={this.handleInput.bind(this)}/>
      <button onClick={this.handleSubmit.bind(this)}>add to list</button>
      {this.state.todo.map(item => {
      return (
        <Todo item={item}/>
      )
      })}
      </header>
    </div>
  );
}
}

export default App;
