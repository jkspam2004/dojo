/* ListInput */ 

import React from "react";

class ListInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: ""
        }
    }
    handleUpdate = (e) => {
        this.setState({
            newUser: e.target.value
        })
    }
    addUser = (e) => {
        this.props.updateUsers(this.state.newUser); // callback from List.js
        this.setState({
            newUser: "" // set to empty string after submit to empty out input box
        })
    }
    render() {
        return (
            <div>
                <p>Name: <input type="text" onChange={this.handleUpdate} value={this.state.newUser} /></p>
                <button onClick={this.addUser} className="btn btn-primary">Add User</button>
            </div>
        )
    }
}
export default ListInput;
