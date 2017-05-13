# React

## template
use tempate from webpack

## Dependencies

### React
`npm install react react-dom --save`

### JSX - allows us to define HTML directly in our JavaScript file
enable Babel to understand JSX
`npm install --save-dev babel-preset-react-es2015`

### Set properties of our class easier
`npm install --save-dev babel-plugin-transform-class-properties`

### .babelrc
```
{
  "presets": ["react-es2015"],
  "plugins": ["transform-class-properties"]
}

### Routing
npm install react-router react-router-dom --save

```

## File Structure
```
-- package.json
-- .babelrc
-- webpack.config.js
-- build/
   -- index.html
-- src/
   -- index.js
   -- index.css
   -- app.js
   -- Components/
-- node modules/

```

### src/index.js
in charge of rendering our component

React - used to build our component
ReactDOM - used to render the components we build with React to the DOM

ReactDOM takes two parameter: the thing to render and where to attach the item for rendering 
```
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('main')
);
```

Now let's import app
<App />: Whenever we create a class that extends React.Component, React converts that class into an HTML
element that we can render on to the page.
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app.js";
import "./index.css";
ReactDOM.render(
  <App />, // append App component to "main" div
  document.getElementById('main')
);

```

### src/app.js
brings our components together and creates base of our page. exports the component we created
```
import React from 'react';
class App extends React.Component{
    render(){
        return(
            <h1>Hello World</h1>
        )
    }
}
export default App;
```

## Components
index.js renders app.js.  app.js renders Prop.js

```
-- Prop/
   -- Prop.js
   -- Prop.css
-- Event/
   -- Event.js
   -- Event.css
-- State/
   -- State.js
   -- State.css
```

### passing a property from App to Prop 
app.js
we import Prop into App
here we're passing first_name to the Prop class
```
import React from 'react';
import Prop from "./Components/Prop/Prop.js";
class App extends React.Component{
    render(){
        return(
            {/* instantiating our Prop component, pass in data as attributes of component */}
            <Prop first_name="Steph"/>
        )
    }
}
export default App;
```

### accessing property that was passed
props is a keyword
Prop.js
```
import React from "react"
class Prop extends React.Component{
    render(){
        return (
            <h1>Hello, {this.props.first_name}</h1>
        )
    }
}
export default Prop;
```

### constructor and super
constructor(props): When we add attributes to <App /> it's like we're passing 
values into a function, we will name that parameter props. 

super(props): The constructor of React.Component accepts these values and sets 
them to this.props. So if we update the constructor we have to make sure to pass 
props to that constructor by using super(props).

These two will be necessary every time we update the constructor of a component. 
If you do not pass props to super, then this.props will be undefined.

### State
Every React component has two main ways of storing data, props and state

State of component depends on:
* How long the page has been open
* How far down the page the user scrolls
* If the user clicks the component
* If the user hovers over the component

1. Define what you want to keep track of
this.state = { count: 0 }

2. Change the state with setState() and not the key directly. 
this.setState({ count: this.state.count + 1 })

Issues with setState()
1. setState is asynchronous
2. setState will always trigger a re-render
3. setState is not sufficient to capture all component state

## Life Cycle methods
* constructor() 
optional. always add super(props) if constructor added otherwise 
this.props will be undefined. should only be used to set state properties or to 
manipulate prop values

* render()
required. render runs every time that component state changes
should just be returning HTML for component

* setState({})
- setState enqueues changes to the component state and tells React that this 
component and its children need to be re-rendered with the updated state
- is a request rather than an immediate command to update the component
-  does not always immediately update the component. It may batch or defer 
the update until later

* componentWillMount()
invoked immediately before mounting occurs.
called before render()

* componentDidMount() 
- runs immediately after render runs (for interacting with the DOM)
- takes care of events that should happen afer HTML has been added to the DOM
- do data fetch from server here
- can setState here

* componentWillUpdate(nextProps, nextState) {}
- runs right before html is re-rendered
- is invoked immediately before new props or state are being received (before state changes)
- not called for initial render
- use this to perform preparation before an update occurs
- cannot call this.setState() here
- get a sneak peek at nextState
- this.state is behind nextState

If we update a state using this.setState(), React will run this method and then re-render HTML
nextProps: values of props after the change will take place. this.props not updated yet
nextState: values of state after change will take place

```
    componentWillUpdate(nextProps, nextState) {
        console.log("Will - current state:", this.state.count, ", next state:", nextState.cou
        if (nextState.count >= 2 && this.state.count < 2) {
            console.log("componentWillUpdate - This should only run once.");
            document.getElementById("counter").className = "btn btn-danger";
        }
    }
```

* componentDidUpdate(prevProps, prevState) {}
- runs every time your component is updated
- runs after html is re-rendered and after state changes
- is invoked immediately after updating occurs
- use this as to operate on the DOM when the component has been updated
- use this to do network requests as long as you compare the current props to previous props
- this.state is ahead of prevState

React will re-render your component using the new values of state and then run componentDidUpdate()
prevProps: values of props before change takes place. this.props has alreadby been updated
prevState: values of state before change takes place. this.state has already been updated

You have access to what the state is going to be changed too.  You can then decide on
what should happen depending on the state of a component

```
    componentDidUpdate(prevProps, prevState) {
        console.log("Did - current state:", this.state.count, ", previous state:", prevState.
        if (this.state.count >= 5 && prevState.count < 5) {
            console.log("componentDidUpdate - This should only run once.");
            document.getElementById("counter").className = "btn btn-success";
        }
    }
```

Be careful with componentWillUpdate and componentDidUpdate(). React will run
these internally sometimes if you didn't change the state of values.  Always
check current state and next or previous state.

* componentWillUnmount() {}
- invoked immediately before a component is unmounted and destroyed.
- clean up should be done in this method. ie. stopping interval, canceling get requests,
removing eventListeners attached to window object.
- logic to remove a component should be done by the component that added it to the DOM
- removing a component from its parent is considered good practice. 
you should never have a component directly remove itself from the DOM.

* componentWillReceiveProps() {}
-  is triggered if the values passed into the component are different from what they were before

### Life Cycle Order
1. constructor
2. render
3. componentDidMount
4. componentWillUpdate
5. state/prop change
6. re-render
7. componentDidUpdate

## Notes
We can only return one element per render function

### Arrow function
"transform-class-properties" plugin to our .babelrc file allows us to use arrow function
in function definition
we are able to access this.name from the class
this method can only be used as an arrow function
handleClick = (e) => {
    alert("Hello, ", + this.name);
}

## import/export

`import React, {Component} from 'react';`
Here React is a default that was exported by react.
Component in the curly braces is one class that was exported by react.

```
export default EventDay;
export {EventDashboard, EventDay};
```
You can only export one default class, but you can export multiple classes.

### React events
* onclick => onClick
* mousenter => onMouseEnter
* mouseleave => onMouseLeave
* input => onInput
* onKeyDown 
* onKeyPress 
* onKeyUp
* onFocus
* onBlur
* onSubmit

### tag attributes
* class => className ie. <div className="main"></div>

## References
* http://stackoverflow.com/questions/41233458/react-child-component-not-updating-after-parent-state-change
* http://stackoverflow.com/questions/43230622/reactjs-how-to-delete-item-from-list
* https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter

## More Packages
npm install material-ui --save
npm install react-tap-event-plugin --save // for material-ui
npm install prop-types --save // runtime type checking for React props and similar objects

