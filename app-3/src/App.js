import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      listArr: ['joe', 'seven', 'eighty-two', 'hello', 'goodbye'],
      filter: '',
      copyArr: ['joe', 'seven', 'eighty-two', 'hello', 'goodbye']
    }
  }

  handleChange(e) {
    let newArr = [];
    let filterStr = e.target.value.toLowerCase();
    for (let i = 0; i < this.state.listArr.length; i++) {
      let currentWord = this.state.listArr[i].toLowerCase();
      if (currentWord.includes(filterStr)) {
        newArr.push(currentWord);
      }
    }
    if (e.target.value.length === 0) {
      this.setState({listArr: this.state.copyArr});
    } else {
      this.setState({listArr: newArr});
    }
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
      <input type='text' onChange={this.handleChange.bind(this)}/>
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
