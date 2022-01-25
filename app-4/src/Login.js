import React, { useState } from 'react';
import './App.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () => {
        alert(`Username: ${username} Password: ${password}`);
    }
  
    return (
      <>
        <input type="text" onChange={e => setUsername(e.target.value)} placeholder="Username"></input>
        <input type="text" onChange={e => setPassword(e.target.value)} placeholder="Password"></input>
        <button onClick={handleClick}>Login</button>
      </>
    )
}

export default Login