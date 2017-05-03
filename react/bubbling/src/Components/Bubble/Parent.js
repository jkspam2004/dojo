import React from 'react';
import Child from "./Child.js";
import "./Bubble.css";

// Bubbling down. Parent renders Child
let user = { first_name: "Bruce", last_name: "Lee" };
class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = user; 
    }
    updateUser = (key, value) => {
        console.log("Updating user as Parent");
        this.setState({
            // key needs to be in brackets because it is a variable. bracket interpolates.
            // otherwise, we would be updating this.state.key instead of this.state.first_name
            [key]: value 
        });
    }
    render() {
        return (
            <div className="row parent">
                <h1>This is the Parent</h1>
                <h3>First Name: {this.state.first_name} | Last Name: {this.state.last_name}</h3>
                <div className="col-sm-6 col-xs-6">
                    <Child user={this.state} updateUser={this.updateUser} />
                </div>
                <div className="col-sm-6 col-xs-6">
                    <Child user={this.state} updateUser={this.updateUser} />
                </div>
            </div>
        )
    }

}
export default Parent;

