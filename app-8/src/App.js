import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [verse, setVerse] = useState({});

  axios.get('https://bible-api.com/genesis 9:25?translation=kjv').then(res => {
    setVerse(res.data);
  })

  return (
    <div className="App">
      <p>{verse.reference}</p>
      <p>{verse.text}</p>
    </div>
  );

}

export default App;
