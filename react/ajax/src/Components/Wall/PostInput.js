import React, { Component } from 'react';
import Axios from 'axios';

class PostInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: "",
            error: ""
        }
    }
    handleChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    }
    postMessage = (e) => {
        e.preventDefault();
        Axios({
            method: "post",
            url: "http://54.245.42.196/posts/create",
            data: {
                post: this.state.post,
                user_id: this.props.uid
            },
            headers: {
                Authorization: localStorage.getItem('jw-token')
            }
        }).then((result) => {
            console.log(result);
            // update post list, bubble up
        }).catch((err) => {
            console.log("Errors", err.response.data);
            console.log("Errors2", err);
            this.setState({
                error: "Error while submitting"
            })
        })
    }
    render() {
        return(
            <div className="post-wall">
                <form onSubmit={this.postMessage}>
                    <label>New Post</label>
                    <textarea
                        type="text"
                        className="form-control"
                        name="post"
                        onChange={this.handleChange}
                        value={this.state.post}
                    ></textarea>
                    <input type="submit" className="btn btn-primary" />
                </form>
                <h3>{this.state.error}</h3>
            </div>
        );
    }
}
export default PostInput;