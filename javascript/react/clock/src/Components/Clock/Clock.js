import React from "react";
import "./Clock.css";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            time: new Date().toLocaleTimeString() 
        };
    }
    getTime() {
        return new Date().toLocaleTimeString();
    }
    componentDidMount() {
        this.startClock = setInterval(() => {
            console.log("interval still running");
            this.setState({ 
                //time: this.getTime() 
                time: new Date().toLocaleTimeString()
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.startClock);
    } 
    render() {
        return(
            <div className="container">
                <h2>{this.state.time}</h2>
                <button className="btn btn-danger" onClick={this.props.toggleClock}>Remove Clock</button>
            </div>
        )
    }
}
export default Clock;
