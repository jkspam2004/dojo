# React Router

## Installation

`npm install react-router react-router-dom --save`

## Setup

src/app.js

```
import "react-router";
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
```

### BrowserRouter

wrap all of the routes defined later

### Route

Defines which component should be rendered depending on the URL.

```
<Route path="/prop" component={Prop} />
```

### Link

Replacement for HTML <a> tags. Let React handle all of the routing.

```
<Link to="/prop">Prop</Link>
```

### Params

```
Route:
<Route path="/person/:name" component={People} />
Link to named parameter:
<Link to="/person/mickey">Mickey</Link>
Retrieving the name:
{this.props.match.params.name}
```

