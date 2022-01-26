import React, { useState } from 'react';
import './App.css';
import ToDo from './ToDo.js';

// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       input: '',
//       todo: []
//     }
//   }

//   handleInput(e) {
//     this.setState({input: e.target.value});
//   }

//   handleSubmit() {
//     let newArr = this.state.todo;
//     newArr.push(this.state.input);
//     this.setState({todo: newArr});
//   }

//   render() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <label>Insert item: </label>
//       <input type='text' onChange={this.handleInput.bind(this)}/>
//       <button onClick={this.handleSubmit.bind(this)}>add to list</button>
//       {this.state.todo.map(item => {
//       return (
//         <ToDo item={item}/>
//       )
//       })}
//       </header>
//     </div>
//   );
// }
// }

// function App() {
//   let [input, setValue] = useState('');
//   const [list, updateList] = useState([]);

//   const addToList = () => {
//     const newList = [...list, ...[input]]
//     updateList(newList);
//   }

//   return (
//     <div className="App">
//       <label>Insert item: </label>
//       <input type='text' onChange={e => setValue(e.target.value)}/>
//       <button onClick={addToList}>add to list</button>
//       {list.map((item, index) => {
//       return (
//         <ToDo key={index} item={item}/>
//       )
//       })}
//     </div>
//   )
// }






function App() {
  const [inputText, setText] = useState('');
  const [list, setList] = useState([]);

  const handleClick = () => {
    const newList = [...list, ...[inputText]];
    setList(newList);
  }

  return (
    <>
      <input type="text" onChange={e => setText(e.target.value)}></input>
      <button onClick={handleClick}>add to list</button>
      {list.map((item, index) => {
        return (
          <ToDo key={index} item={item} />
        )
      })
      }
    </>
  )
}






export default App;