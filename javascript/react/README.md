# React

## template
use tempate from webpack

## Dependencies
React
`npm install react react-dom --save`

JSX - allows us to define HTML directly in our JavaScript file
enable Babel to understand JSX
`npm install --save-dev babel-preset-react-es2015`

Set properties of our class easier
`npm install --save-dev babel-plugin-transform-class-properties`

.babelrc
```
{
  "presets": ["react-es2015"],
  "plugins": ["transform-class-properties"]
}
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
  <App />,
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

### React events
* onclick => onClick
* mousenter => onMouseEnter
* mouseleave => onMouseLeave
* input => onInput


