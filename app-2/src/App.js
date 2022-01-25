import React, { useState } from 'react';
import './App.css';

// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       listArr: ['joe', 'seven', 'eighty-two', 'hello', 'goodbye']
//     }
//   }

//   render() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       {this.state.listArr.map(item => {
//   return (
//     <h2>
//       {item}
//     </h2>
//   )
// })}
//       </header>
//     </div>
//   );
// }
// }

function App() {
  const [list] = useState(['joe', 'seven', 'eighty-two', 'hello', 'goodbye']);

  return (
    <div className="App">
      {list.map((item, key) => {
      return (
        <h2 key={key}>
          {item}
        </h2>
      )})}
    </div>
  )
}

export default App;