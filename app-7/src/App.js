import React, { useState } from 'react';
import './App.css';
import List from './List.js';
import NewTask from './NewTask.js';

// declare App
function App() {
  // set the toDo state
  const [toDo, setToDo] = useState([]);
  // set the input state
  const [input, setInput] = useState('');

  // this function handles the button click
  const handleSubmit = () => {
    // when the button is clicked, combine the two arrays
    const newList = [...toDo, ...[input]];
    // then put that new array onto the state
    setToDo(newList);
  }

  const handleChange = (e) => {setInput(e.target.value)}

  // return the actual jsx
  return (
    // container div
    <div className="App">
      {/* NewTask contains the input box and the button */}
      <NewTask submit={handleSubmit} input={handleChange}/>
      {/* this ul contains all the li items that List generates */}
      <ul>
        {/* map over all the toDo array */}
        {toDo.map((item, index) => {
        // return
        return (
          // a new list List element with a key set to the index and 
          // the item set to the current iteration of map
          <List key={index} item={item}/>
        )
        })}
      </ul>
    </div>
  );

}

export default App;
