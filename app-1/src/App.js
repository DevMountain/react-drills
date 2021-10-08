import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [msg, setMessage] = useState('')
  return (
    <div className="app">
      <input type="text" onChange ={(event) => setMessage(event.target.value)}></input>
      <h2>{msg}</h2>
    </div>
  );
}

export default App;
