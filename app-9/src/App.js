import React, { Component } from 'react';
import './App.css';

import { Link } from 'react-router-dom';
import router from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <Link to='/'>Home</Link>
            <Link to='/signup'>Signup</Link>
            <Link to='/details'>Details</Link>
          </ul>
        </nav>

        <br />

        {router}

      </div>
    );
  }
}

export default App;