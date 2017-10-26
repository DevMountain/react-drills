<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

This project is geared towards helping you improve your React skills. We will provided minimal guidance compared to most afternoon projects that offer detailed instructions. Therefore, this project can be used as a good check if you are truly understanding and implementing React on your own. When you first go through these set of problems, you may need to look at solutions for help. The goal, however, should be to get to the point where you can complete all sets of problems without any help from solutions and/or mentors.

## Challenge

Once you get to the point where you no longer have to look at the solutions and/or ask mentors for help, time yourself to see how long it takes you to complete all of these sets. After your first time, try to beat that time at least twice. The project is called React Drills for a reason! Repetition will help solidify these React concepts.

Good Luck!

## Setup

To help speed up the process of moving from question to question we have provided a bunch of `app-#/` folders that have been created using the `create-react-app` CLI. Therefore, if you are currently on question 1, you will put your work inside of `app-1`. If you are currently on question 4, you will put your work inside of `app-4`.

* Run `npm install` in each `app-#/` folder before starting the questions.
  * You can either run `npm install` for each `app-#/` before starting question one or just remember to run `npm install` as you move from question to question.

You can then test your work for each question, as you develope a solution, by running `npm run start`.

## Set 1 - State, Class Methods, Capturing User Input, Mapping, Axios

### Question #1

Create a basic react app where you type in a text box and it shows up as text on the DOM.

### Solution

<details>

<summary> <code> app-1/src/App.js </code> </summary>

```js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    }
  }

  handleChange( value ) {
    this.setState({ message: value })
  }

  render() {
    return (
      <div className="App">
        <input onChange={ (e) => this.handleChange( e.target.value ) } type="text" />
        <p>{ this.state.message }</p>
      </div>
    );
  }
}

export default App;
```

</details>

<br />

<img src="https://github.com/DevMountain/react-drills/blob/assets/1g.gif" />

### Question #2

Create an app where there is an array of data on state that is then shown on the DOM as a list. The array of data can be as simple as an array of strings. The list can be as simple as a list of `<h2>` elements.

### Solution

<details>

<summary> <code> app-2/src/App.js </code> </summary>

```js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      foods: [
        "spaghetti",
        "ice cream",
        "sushi",
        "bologna",
        "cheese"
      ]
    }
  }

  render() {
    let foodsToDisplay = this.state.foods.map( (element, index) => {
      return (
        <h2 key={ index }>{ element }</h2>
      )
    })

    return (
      <div className="App">
        { foodsToDisplay }
      </div>
    );
  }
}

export default App;
```

</details>

<br />

<img src="https://github.com/DevMountain/react-drills/blob/assets/2.png" />

### Question #3

Create an app where there is an array of data on state that is then shown on the DOM as a list. There should also be a way for the user to filter what's shown in the list. The array of data can be as simple as an array of strings. The list can be as simple as a list of `<h2>` elements. 

### Solution

<details>

<summary> <code> app-3/src/App.js </code> </summary>

```js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterString: "",
      foods: [
        "spaghetti",
        "ice cream",
        "sushi",
        "bologna",
        "cheese"
      ]
    }
  }

  handleChange( filter ) {
    this.setState({ filterString: filter })
  }

  render() {
    let foodsToDisplay = this.state.foods.filter( (element, index) => {
      return element.includes( this.state.filterString );
    }).map( (element, index) => {
      return <h2 key={ index }>{ element }</h2>
    })

    return (
      <div className="App">
        <input onChange={ (e) => this.handleChange( e.target.value ) } type="text" />
        { foodsToDisplay }
      </div>
    );
  }
}

export default App;
```

</details>

<br />

<img src="https://github.com/DevMountain/react-drills/blob/assets/3g.gif" />

## Set 2 - State, Class Methods, Capturing User Input, Props, Multiple Components

### Question #4

Create a `Login` component that has two text inputs, one for a `username` and one for a `password`, and a button to login the user. When the login button is clicked, an alert should be showed to the user that displays what the user typed in for the `username` and `password`.

### Solution

<details>

<summary><code> app-4/src/App.js </code></summary>

```js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
```

</details>

<details>

<summary><code> app-4/src/Login.js </code></summary>

```js
import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };

    this.handleLogin = this.handleLogin.bind( this );
  }

  handleUsernameChange( name ) {
    this.setState({ username: name });
  }

  handlePasswordChange( pass ) {
    this.setState({ password: pass });
  }

  handleLogin() {
    alert(`Username: ${ this.state.username } Password: ${ this.state.password }`);
  }

  render() {
    return (
      <div>
        <input onChange={ (e) => this.handleUsernameChange( e.target.value ) } type="text"/>
        <input onChange={ (e) => this.handlePasswordChange( e.target.value ) } type="text"/>
        <button onClick={ this.handleLogin }>Login</button>
      </div>
    )
  }
}

export default Login;
```

</details>

<br />

<img src="https://github.com/DevMountain/react-drills/blob/assets/4g.gif" />

### Question #5

Create an `Image` component that renders an `<img />` element. The `src` for the `<img />` should be passed down as a prop from the parent component. You can use whatever image URL you would like to or you can get a placeholder from <a href="https://placeholder.com/">Click Me!</a>

### Solution
<details>
<summary><code> App.js </code></summary>

```javascript
import React, { Component } from 'react';
import './App.css';
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Below is my image:</h1>
        <Image myImage={"https://http.cat/200"}/>
      </div>
    );
  }
}

export default App;

```

</details>

<details>
<summary><code> Image.js </code></summary>

```javascript
import React from 'react';

export default function Image(props) {
    return (
        <div>
            <img src={props.myImage} alt=""/>
        </div>
    )
}
```

</details>
</br>

### Question #6

Create an app that displays your to-do list. You will need two components, your App component and a Todo component. Pass individual to-do items as props to the Todo component.
    - To-do list on App component state.
    - Todo component renders 1 to-do item.

### Solution
<details>
<summary><code> App.js </code></summary>

```javascript
import React, { Component } from 'react';
import TodoList from './TodoList'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      input: ''
    }
  }

  handleInputChange(value) {
    this.setState({
      input: value
    })
  }
  handleAddChore(value) {
    this.setState({
      list: [...this.state.list, value],
      input: ''
    })
  }
  render() {
    let list = this.state.list.map((e,i) => {
      return (
        <TodoList key={i} chore={e} />
      )
    })
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <div>
          <input value={this.state.input} placeholder="Enter new chore" onChange={(e) => this.handleInputChange(e.target.value)}/>
          <button onClick={() => this.handleAddChore(this.state.input)}>Add</button>
        </div>
        <hr/>
        {list}
      </div>
    );
  }
}

export default App;

```

</details>

<details>
<summary><code> TodoList.js </code></summary>

```javascript
import React from 'react';

export default function TodoList (props) {
    return (
        <div>
            {props.chore}
        </div>
    )
}
```

</details>
</br>

### Question #7

Create an app similiar to question 6........

## Set 3 - Axios ( hitting an API ), React Lifecycle Methods

### Question #8

Create an app hitting an API of your choice (swapi.co, birdapi.com, pokeapi, smurfs, marvel api, etc). The API should be hit as soon as the component is finished rendering. The app should set value(s) on state based on results from the API and then show the propertie(s) on state in the DOM.

The `axios` package should be used to hit an API.

### Solution

<details>

<summary> <code> app-8/src/App.js </code> </summary>

```js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      lukeSkywalker: ""
    }
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people/1").then( response => {
      this.setState({
        lukeSkywalker: response.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Name: { this.state.lukeSkywalker.name }</h1>
        <h1>Birth Year: { this.state.lukeSkywalker.birth_year }</h1>
        <h1>Height: { this.state.lukeSkywalker.height }</h1>
        <h1>Eye Color: { this.state.lukeSkywalker.eye_color }</h1>
      </div>
    );
  }
}

export default App;
```

</details>

<br />

<img src="https://github.com/DevMountain/react-drills/blob/assets/8.png" />

### Extra Practice

Complete the HTTP mini located at: <a href="https://github.com/DevMountain/http-mini">Click Me!</a>

## Set 4 - react-router-dom ( Routing )

### Question #9

Create an app that has three routes (using `react-router-dom`):
   * home `'/'`
   * sign up `'/signup'`
   * details `'/details'`

- Create a simple menu for each view that allows you to navigate between all three routes.

- Use any of the APIs listed in app #4 above and display the data in the details route.
### Solution
<details>
<summary><code> index.js </code></summary>

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {HashRouter} from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
, document.getElementById('root'));
registerServiceWorker();

```

</details>

<details>
<summary><code> router.js </code></summary>

```javascript
import React from 'react';

import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Details from './components/Details';

export default (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/details' component={Details}/>
        </Switch>
)
```

</details>

<details>
<summary><code> App.js </code></summary>

```javascript
import React, { Component } from 'react';
import './App.css';

import {Link} from 'react-router-dom';
import router from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <Link to='/'>Home</Link>
            <Link to='/signup'>Signup</Link>
            <Link to='/details'>Details</Link>
          </ul>
        </nav>
        <hr/>
        {router}
      </div>
    );
  }
}

export default App;

```

</details>

<details>
<summary><code> Home.js </code></summary>

```javascript
import React from 'react';

export default function Home() {
    return (
        <div>
            <h1>This is the home page.</h1>
        </div>
    )
}
```

</details>

<details>
<summary><code> Signup.js </code></summary>

```javascript
import React from 'react';

export default function Signup() {
    return (
        <div>
            <h1>This is the signup page.</h1>
        </div>
    )
}
```

</details>

<details>
<summary><code> Details.js </code></summary>

```javascript
import React from 'react';

export default function Details() {
    return (
        <div>
            <h1>This is the details page.</h1>
        </div>
    )
}
```

</details>
</br>

### Question #10

Create an app that has two routes (using `react-router-dom`):
      * products `'/'`
      * details `'/details/:id'`
  - Hitting an api, show all products/info/people (depends on the api you hit) on the `products` route.
  - When you click on a specific product, show the details in the `details` route. 

### Solution
<details>
<summary><code> index.js </code></summary>

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {HashRouter} from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
    , document.getElementById('root'));
registerServiceWorker();

```

</details>

<details>
<summary><code> router.js </code></summary>

```javascript
import React from 'react';

import {Switch, Route} from 'react-router-dom';
import Products from './components/Products';
import Details from './components/Details';

export default (
    <Switch>
        <Route exact path='/' component={Products}/>
        <Route path='/details/:id' component={Details}/>
    </Switch>
)
```

</details>

<details>
<summary><code> App.js </code></summary>

```javascript
import React, { Component } from 'react';
import './App.css';

import router from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        {router}
      </div>
    );
  }
}

export default App;

```

</details>

<details>
<summary><code> Products.js </code></summary>

```javascript
import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import axios from 'axios';

class Products extends Component {
    constructor() {
        super();

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('https://practiceapi.devmountain.com/products')
        .then((response) => {
            console.log(response.data);
            this.setState({
                products: response.data
            })
        })
    }

    render() {
        let products = this.state.products.map((e,i) => {
            if(e.image) {
                return(
                    <Link to={`/details/${e.id}`} key={i}>
                        <img className="product-image" src={e.image}/>
                    </Link>
                )
            }
            
        })
        return (
            <div>
                <h1>Products</h1>
                {products}
            </div>
        )
    }
}

export default Products;
```

</details>

<details>
<summary><code> Details.js </code></summary>

```javascript
import React, {Component} from 'react';

import axios from 'axios';

class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: {}
        }
    }

    componentDidMount() {
        axios.get(`https://practiceapi.devmountain.com/products/${this.props.match.params.id}`)
        .then((response) => {
            this.setState({
                item: response.data
            })
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.item.title}</h2>
                <img className="product-image" src={this.state.item.image}/>
                <h4>{`Price: $${this.state.item.price}.00`}</h4>
            </div>
        )
    }
}

export default Details;
```

</details>

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>
