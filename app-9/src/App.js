import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import router from './router';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/details">Details</Link>
      </nav>
      <br />
      {router}
    </div>
  );
}

export default App;
