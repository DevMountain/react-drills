import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsername(e) {
    this.setState({username: e.target.value});
  }

  handlePassword(e) {
    this.setState({password: e.target.value});
  }

  handleSubmit() {
    alert('You typed "' + this.state.username + '" for a username and "' + this.state.password + '" for a password!')
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
      <label>Username: </label>
      <input type='text' onChange={this.handleUsername.bind(this)}/>
      <label>Password: </label>
      <input type='text' onChange={this.handlePassword.bind(this)}/>
      <button onClick={this.handleSubmit.bind(this)}>SUBMIT</button>
      </header>
    </div>
  );
}
}

export default App;
