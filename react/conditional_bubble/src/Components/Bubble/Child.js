import React from "react";
import GrandChild from "./GrandChild.js";

// Bubbling down. Child renders GrandChild
class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.user;
    }
    updateUser = (e) => {
        console.log("Updating user as Child");
        // e.target == the input we're currently updating
        // e.target.name == the name attribute that we set for the input
        // e.target.value == the new value of the input
        /*
        this.setState({
            [e.target.name]: e.target.value 
        });
        */
        this.props.updateUser(e.target.name, e.target.value);
    }
    componentWillReceiveProps(props) {
        this.setState({
            first_name: props.user.first_name,
            last_name: props.user.last_name
        });
    } 
    render() {
        return (
            <div className='row child'>
                <h4>This is the First Child</h4>
                <h5> First Name: {this.state.first_name} | Last Name: {this.state.last_name}</h5>
                <div className='col-sm-12'>
                    <p>First Name: <input name='first_name' type="text" value={this.state.first_name} onChange={this.updateUser} /></p>
                    <p>Last Name:  <input name='last_name' type="text" value={this.state.last_name} onChange={this.updateUser} /></p>
                </div>
                <div className="col-sm-6 col-xs-12">
                    <GrandChild user={this.state} updateUser={this.props.updateUser} />
                </div>
                <div className="col-sm-6 col-xs-12">
                    <GrandChild user={this.state} updateUser={this.props.updateUser} />
                </div>
            </div>            
            );
    } 
}
export default Child;
