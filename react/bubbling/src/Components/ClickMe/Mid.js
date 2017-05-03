/* Mid.js */

import React from "react";
import Low from "./Low.js";
import "../../app.css";

class Mid extends React.Component {
    constructor(props) {
        super(props);
    }
    updateCount = (e) => {
        this.props.clickEvent();
    }
    render() {
        return (
            <div className="boxMid">
                <p>Mid</p>
                <button className="btn btn-primary" onClick={this.updateCount}>Mid Click</button>
                <Low clickEvent={this.props.clickEvent} />
            </div>
        )
    }

}
export default Mid;
