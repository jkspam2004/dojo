import React, { Component } from 'react';
import Axios from 'axios';
import FilmItem from './FilmItem.js';

//let filmList;
class FilmList extends Component {
    constructor(props) {
        super(props);
        this.cancelToken = Axios.CancelToken.source();

        this.state = {
            downloaded: false,
            filmList: [],
            message: "Loading..."
        }
    }
    componentDidMount() {
        Axios.get("http://swapi.co/api/films", {
            cancelToken: this.cancelToken.token
        }).then((result) => {
            console.log(result);
            this.setState({
                filmList: result.data.results,
                downloaded: true
            })
        }).catch((err) => {
            if (Axios.isCancel(err)) {
                console.log("Request cancelled by.", err.message);
            } else {
                this.setState({
                    message: "Get error."
                })
            }
        })
    }
    componentWillUnmount() {
        this.cancelToken.cancel("Operation cancelled by the user.")
    }
    render() {
        if (this.state.downloaded) {
            let filmList = this.state.filmList.map((film, index) => {
                return <FilmItem key={index} film={film} />
            });
            return (
                <div>{filmList}</div>
            );
        } else { 
            return <h3>{this.state.message}</h3>;
        }
    }
}
export default FilmList;