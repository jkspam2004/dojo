/* Low.js */

import React from "react";
import "../../app.css";

class Low extends React.Component {
    constructor(props) {
        super(props);
    }
    updateCount = (e) => {
        this.props.clickEvent();
    }
    render() {
        return (
            <div className="boxLow">
                <p>Low</p>
                <button className="btn btn-success" onClick={this.updateCount}>Low Click</button>
            </div>
        )
    }

}
export default Low;
