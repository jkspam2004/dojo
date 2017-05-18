import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.user.username}</td>
                <td>{this.props.user.createdAt}</td>
            </tr>
        )
    }
}
export default User;