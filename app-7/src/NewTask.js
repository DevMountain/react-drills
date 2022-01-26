import React, { Component } from 'react';
import './App.css';


function NewTask({input, submit}) {
    return (
      <div>
      <label>Insert item: </label>
      <input type='text' onChange={input}/>
      <button onClick={submit}>add to list</button>
      </div>
    );
}

export default NewTask;