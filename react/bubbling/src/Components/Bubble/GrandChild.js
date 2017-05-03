import React from "react";

class GrandChild extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.user;
    }
    updateUser = (e) => {
        console.log("Updating user as GrandChild");
        /*
        this.setState({
            first_name: "Grand",
            last_name: "Child"
        });
        */
        this.props.updateUser("first_name", "Grand");
        this.props.updateUser("last_name", "Child");
    }
    componentWillReceiveProps(props) {
        this.setState({
            first_name: props.user.first_name,
            last_name: props.user.last_name
        });
    }
    render() {
        return (
            <div className="row grand-child">
                <div className="col-sm-12 user-info">
                    <h4>GrandChild</h4>
                    <h5>User Values</h5>
                    <p>First Name: {this.state.first_name}</p>
                    <p>Last Name: {this.state.last_name}</p>
                    <button className="btn btn-danger btn-sm" onClick={this.updateUser}>Update User</button>
                </div>          
            </div>
        );
    }
     
}
export default GrandChild;
