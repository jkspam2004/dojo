import React, { Component } from 'react';
import UserList from './UserList.js';

class GetUsers extends Component {
    render() {
        return (
            <div>
                <h1>Get User List</h1>
                <UserList />
            </div>
        );
    }
}
export default GetUsers;