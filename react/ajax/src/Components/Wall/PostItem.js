import React, { Component } from 'react';

class PostItem extends Component {
    render() {
        return(
            <div>
                <h4>Author: {this.props.post._author.username} | Created: {this.props.post.createdAt}</h4>
                <p>{this.props.post.post}</p>
            </div>
        );
    }
}
export default PostItem;