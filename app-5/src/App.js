import React, { useState } from 'react';
import './App.css';
import Image from './Image.js';

// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       url: 'https://upload.wikimedia.org/wikipedia/en/8/84/Ogden_Kraut2.jpg'
//     }
//   }

//   render() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <Image url={this.state.url} alt="" />
//       </header>
//     </div>
//   );
// }
// }

function App() {
  return (
    <>
      <Image url='https://upload.wikimedia.org/wikipedia/en/8/84/Ogden_Kraut2.jpg' />
    </>
  );
}


export default App;