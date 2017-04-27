import React from "react";
import "./Counter.css";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 } 
        this.color = "blue"
    }
    handleClick = (e) => {
        this.setState({ 
            count: this.state.count + 1 
        });
    }
    // update button to red when we reach 2
    componentWillUpdate(nextProps, nextState) {
        console.log("Will - current state:", this.state.count, ", next state:", nextState.count);
        if (nextState.count >= 2 && this.state.count < 2) {
            console.log("componentWillUpdate - This should only run once.", this.state.count);
            document.getElementById("counter").className = "btn btn-danger";    
        }
    }
    // update button to green when we reach 5
    componentDidUpdate(prevProps, prevState) {
        console.log("Did - current state:", this.state.count, ", previous state:", prevState.count);
        if (this.state.count >= 5 && prevState.count < 5) {
            console.log("componentDidUpdate - This should only run once.");
            document.getElementById("counter").className = "btn btn-success";
        }
    }


    render() {
        return(
            <div>
                <h2>Hello, {this.props.name}</h2>
                <p>You clicked me {this.state.count} times</p>
                {/*<button className={this.color} onClick={this.handleClick}>Click Me</button> */}
                <button id="counter" className="btn btn-primary" onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}
export default Counter;
