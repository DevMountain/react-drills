<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

This project is geared towards helping you improve your React skills. We will provided minimal guidance compared to most afternoon projects that offer detailed instructions. Therefore, this project can be used as a good check if you are truly understanding and implementing React on your own. When you first go through these set of problems, you may need to look at solutions for help. The goal, however, should be to get to the point where you can complete all sets of problems without any help from solutions and/or mentors.

The solutions provided in this project are just one way you can accomplish the project. If you are curious if your solution is "correct", you can ask a mentor to compare your answer to the ones we are providing.

## Challenge

Once you get to the point where you no longer have to look at the solutions and/or ask mentors for help, time yourself to see how long it takes you to complete all of these sets. After your first time, try to beat that time at least twice. The project is called React Drills for a reason! Repetition will help solidify these React concepts.

Good Luck!

## Setup

To help speed up the process of moving from question to question we have provided a bunch of `app-#/` folders that have been created using the `create-react-app` CLI. Therefore, if you are currently on question 1, you will put your work inside of `app-1`. If you are currently on question 4, you will put your work inside of `app-4`.

- Run `npm install` in each `app-#/` folder before starting the questions.
  - You can either run `npm install` for each `app-#/` before starting question one or just remember to run `npm install` as you move from question to question.

You can then test your work for each question, as you develope a solution, by running `npm run start`.

## Set 1 - State, Class Methods, Capturing User Input, Mapping, Axios

### Question #1

Create a basic react app where you type in a text box and it shows up as text on the DOM.

### Solution

<details>

<summary> <code> app-1/src/App.js </code> </summary>

```js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange(value) {
    this.setState({ message: value });
  }

  render() {
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        <p>{this.state.message}</p>
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
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    };
  }

  render() {
    let foodsToDisplay = this.state.foods.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

    return <div className="App">{foodsToDisplay}</div>;
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
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterString: "",
      foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    };
  }

  handleChange(filter) {
    this.setState({ filterString: filter });
  }

  render() {
    let foodsToDisplay = this.state.foods
      .filter((element, index) => {
        return element.includes(this.state.filterString);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {foodsToDisplay}
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
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Login from "./Login";

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
import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleUsernameChange(name) {
    this.setState({ username: name });
  }

  handlePasswordChange(pass) {
    this.setState({ password: pass });
  }

  handleLogin() {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.handleUsernameChange(e.target.value)}
          type="text"
        />
        <input
          onChange={e => this.handlePasswordChange(e.target.value)}
          type="text"
        />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
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

<summary><code> app-5/src/App.js </code></summary>

```js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"https://http.cat/409"} />
      </div>
    );
  }
}

export default App;
```

</details>

<details>

<summary><code> app-5/src/Image.js </code></summary>

```js
import React, {Component} from 'react'

export default class Image extends Component {
  render() {
    return (
      <div>
        <img src={this.props.url} />
        <caption>Error 599</caption>
      </div>
    )
  }
}
```

</details>

<br />

<img src="https://github.com/DevMountain/react-drills/blob/assets/5.png" />

### Question #6

Create an app that displays a to-do list. You will need two components, the `App` component and a `Todo` component. The `App` component should be responsible for getting new tasks and storing the list of tasks. The `Todo` component should be responsible for displaying the individual tasks from the `App` component. The `App` component should create a list of 'Todo' components passing down a `task` into the `Todo` component as a prop and display the list.

### Solution

<details>

<summary><code> app-6/src/App.js </code></summary>

```js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      input: ""
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleInputChange(value) {
    this.setState({ input: value });
  }

  handleAddTask() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });
  }

  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />;
    });

    return (
      <div className="App">
        <h1>My to-do list:</h1>

        <div>
          <input
            value={this.state.input}
            placeholder="Enter new task"
            onChange={e => this.handleInputChange(e.target.value)}
          />

          <button onClick={this.handleAddTask}>Add</button>
        </div>

        <br />

        {list}
      </div>
    );
  }
}

export default App;
```

</details>

<details>

<summary><code> app-6/src/Todo.js </code></summary>

```js
import React, {Component} from 'react';

export default class ToDo extends Component {
  render() {
    return <p>{props.task}</p>;
  }
}
```

</details>

<br />

<img src="https://github.com/DevMountain/react-drills/blob/assets/6-7g.gif" />

### Question #7

Create an app similiar to question #6, except this time add a new third component called `NewTask`. `NewTask` should be responsible for adding a new task to a `task array` on the `App` component. Also add a new fourth component called `List`. `List` should be responsible for display the tasks inside of a `task array` on the `App` component in a list-like fashion.

<details>

<summary> <code> app-7/src/App.js </code> </summary>

```js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewTask from "./NewTask";
import List from "./List";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: []
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task) {
    this.setState({ list: [...this.state.list, task] });
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;
```

</details>

<details>

<summary> <code> app-7/src/NewTask.js </code> </summary>

```js
import React, { Component } from "react";

class NewTask extends Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleInputChange(value) {
    this.setState({ input: value });
  }

  handleAdd() {
    this.props.add(this.state.input);
    this.setState({ input: "" });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          placeholder="Enter new task"
          onChange={e => this.handleInputChange(e.target.value)}
        />

        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default NewTask;
```

</details>

<details>

<summary> <code> app-7/src/List.js </code> </summary>

```js
import React, {Component} from 'react';
import Todo from "./Todo";

export default class List extends Comonent {
  render() {
    let list = this.props.tasks.map((element, index) => {
      return <Todo key={index} task={element} />;
    });
    
    return <div>{list}</div>;
  }
}
```

</details>

<details>

<summary> <code> app-7/src/Todo.js </code> </summary>

```js
import React, {Component} from 'react';

export default class Todo extends Component {
  render() {
    return <p>{this.props.task}</p>;
  }
}
```

</details>

<br />

<img src="https://github.com/DevMountain/react-drills/blob/assets/6-7g.gif" />

## Set 3 - Axios ( hitting an API ), React Lifecycle Methods

### Question #8

Create an app hitting an API of your choice (swapi.co, birdapi.com, pokeapi, smurfs, marvel api, etc). The API should be hit as soon as the component is finished rendering. The app should set value(s) on state based on results from the API and then show the propertie(s) on state in the DOM.

The `axios` package should be used to hit an API.

### Solution

<details>

<summary> <code> app-8/src/App.js </code> </summary>

```js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      lukeSkywalker: ""
    };
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people/1").then(response => {
      this.setState({
        lukeSkywalker: response.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Name: {this.state.lukeSkywalker.name}</h1>
        <h1>Birth Year: {this.state.lukeSkywalker.birth_year}</h1>
        <h1>Height: {this.state.lukeSkywalker.height}</h1>
        <h1>Eye Color: {this.state.lukeSkywalker.eye_color}</h1>
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

## Set 4 - react-router-dom ( Routing ), Axios ( hitting an API )

### Question #9

Create an app that has three routes (using `react-router-dom`):

- Component name: `Home`, Component route: `'/'`
- Component name: `Signup`, Component route: `'/signup'`
- Component name: `details`, Component route: `'/details'`

Each of these components only need a very basic template:

```js
<div>
  <h1>This is the Home/Signup/Details page.</h1>
</div>
```

The `App` component should render a `<nav>` element that provides links to all three routes. The `router` should be rendered underneath the `nav` element.

### Solution

<details>

<summary><code> app-9/src/index.js </code></summary>

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);

registerServiceWorker();
```

</details>

<details>

<summary><code> app-9/src/router.js </code></summary>

```javascript
import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Signup from "./Signup";
import Details from "./Details";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={Signup} />
    <Route path="/details" component={Details} />
  </Switch>
);
```

</details>

<details>

<summary><code> app-9/src/App.js </code></summary>

```js
import React, { Component } from "react";
import "./App.css";

import { Link } from "react-router-dom";
import router from "./router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/details">Details</Link>
          </ul>
        </nav>

        <br />

        {router}
      </div>
    );
  }
}

export default App;
```

</details>

<details>

<summary><code> app-9/src/Home.js </code></summary>

```js
import React from "react";

export default function Home() {
  return (
    <div>
      <h1>This is the home page.</h1>
    </div>
  );
}
```

</details>

<details>

<summary><code> app-9/src/Signup.js </code></summary>

```js
import React from "react";

export default function Signup() {
  return (
    <div>
      <h1>This is the signup page.</h1>
    </div>
  );
}
```

</details>

<details>

<summary><code> app-9/src/Details.js </code></summary>

```js
import React from "react";

export default function Signup() {
  return (
    <div>
      <h1>This is the details page.</h1>
    </div>
  );
}
```

</details>

<br />

<img src="https://github.com/DevMountain/react-drills/blob/assets/9g.gif" />

### Question #10

Create an app that has two routes (using `react-router-dom`):

- Component name: `Products`, Component route: `'/'`
- Component name: `Details`, Component route: `'/details/:id'`

The `App` component should render the `router`. The `Products` component should hit an API of your choice that shows a list of products/info/people/cars. When a user clicks on one of the products/info/people/cars it should route to `Details` component with the `id` as a route parameter. The `Details` component should hit an API of your choice to get more data for a single product/info/person/car.

In the solution code to follow, we used the DevMountain Practice API server.

### Solution

<details>

<summary><code> app-10/src/index.js </code></summary>

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);

registerServiceWorker();
```

</details>

<details>

<summary><code> app-10/src/router.js </code></summary>

```js
import React from "react";
import { Switch, Route } from "react-router-dom";

import Products from "./Products";
import Details from "./Details";

export default (
  <Switch>
    <Route exact path="/" component={Products} />
    <Route path="/details/:id" component={Details} />
  </Switch>
);
```

</details>

<details>

<summary><code> app-10/src/App.js </code></summary>

```js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import router from "./router";

class App extends Component {
  render() {
    return <div className="App">{router}</div>;
  }
}

export default App;
```

</details>

<details>

<summary><code> app-10/src/Products.js </code></summary>

```js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Products extends Component {
  constructor() {
    super();

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get("https://practiceapi.devmountain.com/products").then(response => {
      this.setState({ products: response.data });
    });
  }

  render() {
    let products = this.state.products.map((product, index) => {
      if (product.image) {
        return (
          <Link key={index} to={`/details/${product.id}`}>
            <img width="200" src={product.image} />
          </Link>
        );
      }
    });

    return (
      <div>
        <h1>Products</h1>
        {products}
      </div>
    );
  }
}

export default Products;
```

</details>

<details>

<summary><code> app-10/src/Details.js </code></summary>

```js
import React, { Component } from "react";
import axios from "axios";

class Details extends Component {
  constructor() {
    super();

    this.state = {
      item: {}
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://practiceapi.devmountain.com/products/${
          this.props.match.params.id
        }`
      )
      .then(response => {
        this.setState({ item: response.data });
      });
  }

  render() {
    return (
      <div>
        <h2>{this.state.item.title}</h2>
        <img width="200" src={this.state.item.image} />
        <h4>{`Price: $${this.state.item.price}.00`}</h4>
      </div>
    );
  }
}

export default Details;
```

</details>

<br />

<img src="https://github.com/DevMountain/react-drills/blob/assets/10g.gif" />

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>
