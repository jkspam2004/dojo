import React from 'react';
import "./State.css"; 

class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lights: "on" };
    }
    turnOn = () => {
        this.setState({ lights: "on" });
    }
    turnOff = () => {
        this.setState({ lights: "off" });
    }

    render() {
        return(
            <div id="box" className={this.state.lights}>
                <button className="btn btn-primary" onClick={this.turnOn}>Turn On</button>
                <button className="btn btn-danger" onClick={this.turnOff}>Turn Off</button>
            </div>
        )
    }
}
export default State;
