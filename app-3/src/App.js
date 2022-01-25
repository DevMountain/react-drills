import React, { useState } from 'react';
import './App.css';

// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       listArr: ['joe', 'seven', 'eighty-two', 'hello', 'goodbye'],
//       filter: '',
//       copyArr: ['joe', 'seven', 'eighty-two', 'hello', 'goodbye']
//     }
//   }

//   handleChange(e) {
//     let newArr = [];
//     let filterStr = e.target.value.toLowerCase();
//     for (let i = 0; i < this.state.listArr.length; i++) {
//       let currentWord = this.state.listArr[i].toLowerCase();
//       if (currentWord.includes(filterStr)) {
//         newArr.push(currentWord);
//       }
//     }
//     if (e.target.value.length === 0) {
//       this.setState({listArr: this.state.copyArr});
//     } else {
//       this.setState({listArr: newArr});
//     }
//   }

//   render() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <input type='text' onChange={this.handleChange.bind(this)}/>
//       {this.state.listArr.map(item => {
//   return (
//     <h2>
//       {item}
//     </h2>
//   )
//   })}
//       </header>
//     </div>
//   );
// }
// }

const App = () => {
  // const [filter, setFilter] = useState('');
  const [list] = useState(['joe', 'jared', 'james', 'john', 'jack', 'jeremy']);
  const [filteredList, setList] = useState([]);

  // const handleClick = () => {
  //   setList(list.filter(item => item.includes(filter)));
  // }
  
  const handleChange = (e) => {
    setList(list.filter(item => item.includes(e.target.value)));
  }

  return (
    <>
      <input type="text" onChange={handleChange}></input>
      {/* <button onClick={handleClick}>Filter</button> */}
      {filteredList.map((item, index) => {
      return (
        <h2 key={index}>
          {item}
        </h2>
      )})}
    </>
  )
}


export default App;