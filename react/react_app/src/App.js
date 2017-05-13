import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header/Header.js';
import Home from './Components/Home/Home.js';
import Nested from './Components/Nested/Nested.js';
import Params from './Components/Params/Params.js';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Header />
					<Route exact path="/" component={Home} />
					<Route path="/nested" component={Nested} />
					<Route exact path="/params" component={Params} />
					<Route path="/params/:name" component={Params} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
