import React, { Component } from 'react';
import './Post.css';
import Axios from 'axios';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errors: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    register = (e) => {
        console.log("register state", this.state);
        e.preventDefault();
        Axios({
            method: "post",
            url: "http://54.245.42.196/users/create",
            data: {
               username: this.state.username, 
               password: this.state.password 
            }
        }).then((result) => {
            console.log("result:", result);
            this.setState({
                errors: "",
                username: "",
                password: ""
            })
        }).catch((err) => {
            console.log("error:", err);
            this.setState({
                errors: err.response.data.errors
            })
        })
    }
    render() {
        return (
            <div className="post-lecture">
                <div className="container">
                    <h1>Post Register User</h1>
                    <form onSubmit={this.register}>
                        <label>Username</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="username" 
                            onChange={this.handleChange}
                            value={this.state.username}
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                        />
                        <input type="submit" className="btn btn-primary" />
                    </form>
                </div>
                {this.state.errors &&
                    <div>
                        <h4>Errors:</h4>
                        {this.state.errors.username &&
                            <p style={{color:"red"}}>{this.state.errors.username.message}</p>
                        }
                        {this.state.errors.password &&
                            <p style={{color:"red"}}>{this.state.errors.password.message}</p>
                        }
                    </div>
                }
            </div>
        );
    }
}
export default Post;
