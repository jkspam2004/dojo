import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header/Header.js';
import Get from './Components/Get/Get.js';
import Films from './Components/GetFilm/GetFilms.js';
import Reg from './Components/Post/Post.js';
import Users from './Components/GetUserList/GetUsers.js';
import Login from './Components/Login/Login.js';
import Wall from './Components/Wall/Wall.js';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Route exact path="/" component={Get} />
                <Route path="/films" component={Films} />
                <Route path="/post" component={Reg} />
                <Route path="/users" component={Users} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard/:uid" component={Wall} />
            </div>
        </BrowserRouter>
    );
  }
}
export default App;
