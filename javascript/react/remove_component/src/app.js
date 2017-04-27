import React from 'react';
import Life from "./Components/Life/Life.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showCountDown: true }; // decide whether to show Life component
    }
    removeCountDown = () => { // callback function passed to Life Component. will update state of App and not Life
        this.setState({ showCountDown: false });
    }
    render() {
        if (this.state.showCountDown) {
            return (
                <div>
                    <Life destroyMethod={this.removeCountDown} />
                </div>
            )
        } else {
            return (
                <h1>Crisis Averted</h1>
            )
        }
    }
}
export default App;
