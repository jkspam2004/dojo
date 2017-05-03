/* app2.js: for clickMe assignment */

import React from "react";
import Mid from "./Components/ClickMe/Mid.js";
import "./app.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }; 
    }
    clicked = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    render() {
        return (
            <div className="box container">
                <p>App</p>
                <h1>Clicked {this.state.count} times</h1>
                <Mid clickEvent={this.clicked} />
            </div>
        )
    }

}
export default App;


