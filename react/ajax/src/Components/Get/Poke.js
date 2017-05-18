import React, { Component } from 'react';
import Axios from 'axios';
import './Poke.css';

class Poke extends Component {
    constructor(props) {
        super(props);
        this.cancelToken = Axios.CancelToken.source(); // create cancel token

        /* response data will be stored here */
        this.state = {
            pokemon: false,
            message: "Loading..."
        }
    }
    render() {
        return (
            <div>
                {this.state.pokemon &&
                    <div className="col-lg-2">
                        <h3>{this.state.pokemon.name}</h3>
                        <img src={this.state.pokemon.sprites.front_shiny} alt="poke"/>
                    </div>
                }
                {!this.state.pokemon &&
                    <div className="col-lg-3">
                        <h3>{this.state.message}</h3>
                    </div>
                }
            </div>
        );
    }
    componentDidMount() {
        Axios.get("http://pokeapi.co/api/v2/pokemon/" + this.props.id, {
            cancelToken: this.cancelToken.token // pass along token with request
        }).then((result) => {
                this.setState({
                    pokemon: result.data
                })
        }).catch((err) => {
            if (Axios.isCancel(err)) {
                console.log("Request cancelled.", err.message);
            } else {
                this.setState({
                    message: `Pokemon with ID '${this.props.id}' not found.`
                })
            }
        })
    }
    componentWillUnmount() {
        this.cancelToken.cancel("Operation canceled by the user");
    }
}
export default Poke;