import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component{
  constructor(){
    super();
    this.state = {
      verse: '',
      
    }
  }
  componentDidMount() {
    axios.get('https://bible-api.com/john 3:16?translation=kjv').then(res => {
      this.setState({verse: res.data});
    })
  }
  render() {
  return (
    <div className="App">
      <p>{this.state.verse.reference}</p>
      <p>{this.state.verse.text}</p>
    </div>
  );
}
}

export default App;
