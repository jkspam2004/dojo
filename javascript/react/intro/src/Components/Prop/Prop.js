import React from "react";
import "./Prop.css";

class Prop extends React.Component {
    constructor(props) {
        super(props)
        this.name = `${this.props.user.first_name} ${this.props.user.last_name}`
    }
    render() {
        return (
            //<h1>Hello, {this.props.first_name}</h1> // accepts argument passed from App
            /* we can only return one element per render function, wrap in div below */
            <div>
                {/* <h1>Hello, {this.props.user.first_name} {this.props.user.last_name}</h1> */}
                <h3>Hello, {this.name}</h3>
                <h3>{this.props.user.age} years old</h3>
            </div>
        )
    }
}
export default Prop;
