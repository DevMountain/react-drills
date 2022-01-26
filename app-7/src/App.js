import React, { useState } from 'react';
import './App.css';
import List from './List.js';
import NewTask from './NewTask.js';

function App() {
  const [toDo, setToDo] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    const newList = [...toDo, ...[input]];
    setToDo(newList);
  }

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className="App">
      <NewTask submit={handleSubmit} input={handleInput} />
      <ul>
        {toDo.map((item, index) => {
        return (
          <List key={index} item={item}/>
        )
        })}
      </ul>
    </div>
  );

}

export default App;
