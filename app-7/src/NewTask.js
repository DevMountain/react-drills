import React from 'react';

// create the NewTask component with the destructured input and submit function
function NewTask({input, submit}) {


    return (
      <div>
        {/* put text in front of the input */}
        <label>Insert item: </label>
        {/* create an input box that calls the input function onChange*/}
        <input type='text' onChange={input}/>
        {/* create a button that calls the submit function when it is clicked */}
        <button onClick={submit}>add to list</button>
      </div>
    );
}

export default NewTask;