import React from 'react';
import Clock from "./Components/Clock/Clock.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showClock: true
        }
    }
    toggleClock = () => {
        this.setState({
            showClock: !this.state.showClock
        })
    } 
    render() {
        if (this.state.showClock) {
            return(
                <Clock toggleClock={this.toggleClock} />
            )
        } else {
            return(
                <div className="container">
                    <h2>Snoozing...</h2>
                    <button className="btn btn-primary" onClick={this.toggleClock}>Add Clock</button>
                </div>
            )
        }
    }
}
export default App;
