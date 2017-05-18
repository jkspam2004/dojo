import React, { Component } from 'react';
import Posts from './Posts.js';

class Wall extends Component {
    render() {
        console.log("uid", this.props.match.params.uid);
        return(
            <div className="wall">
                <h1>The Wall</h1>
                <Posts uid={this.props.match.params.uid} />
            </div>
        )
    }
}
export default Wall;