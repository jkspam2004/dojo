import React, { Component } from 'react';
import Axios from 'axios';
import PostItem from './PostItem';
import PostInput from './PostInput';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.cancelToken = Axios.CancelToken.source();

        this.state = {
            downloaded: false,
            posts: [],
            message: "Loading..."
        }
    }
    componentDidMount() {
        console.log("component did mount");
        Axios.get("http://54.245.42.196/posts/" + this.props.uid, {
            cancelToken: this.cancelToken.token,
            headers: {
                Authorization: localStorage.getItem("jw-token")
            }
        }).then((result) => {
            console.log("result:", result);
            this.setState({
                posts: result.data.posts,
                downloaded: true
            })
        }).catch((err) => {
            if (Axios.isCancel(err)) {
                console.log("Request cancelled by ", err.message);
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
            let posts = this.state.posts.map((post, index) => {
                return <PostItem key={index} post={post} />
            });
            return (
                <div>
                    <PostInput uid={this.props.uid}/>
                    {posts}
                </div>
            )
        } else {
            return <h3>{this.state.message}</h3>;
        }
    }
}
export default Posts;