/* List.js */

import React from "react";
import ListInput from "./ListInput";
import ListItem from "./ListItem";
import "./List.css";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: props.users
        }
    }
    updateUsers = (newUser) => {
        let newUserArr = this.state.users.slice(); // shallow copy of this.state.users into newUserArr
        newUserArr.push(newUser);
        this.setState({
            users: newUserArr
        });
    }
    render() {
        // add key attribute to list items to keep them unique
        /*
        let userList = this.props.users.map((user, index) => {
            if (user == this.props.loggedIn) {
                return <li key={index} className="logged-in">{user}</li>
            } else {
                return <li key={index}>{user}</li>
            }
        }
        */
        let userList = this.state.users.map((user, index) => {
            return <ListItem key={index} user={user} />
        })

        return (
            <div>
                <h3>User List</h3>
                <ul>
                    {userList}
                </ul>
                <ListInput updateUsers={this.updateUsers} />
            </div>
        )
    }
}
export default List;
