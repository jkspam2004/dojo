import React, { Component } from 'react';
import FilmList from './FilmList.js';

class GetFilms extends Component {
    render() {
        return(
            <div>
                <h1>Get Star Wars</h1>
                <FilmList />
            </div>
        )
    }
}
export default GetFilms;