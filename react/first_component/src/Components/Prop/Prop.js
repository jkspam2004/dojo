import React from "react";
import Counter from "../Counter/Counter.js";
import "./Prop.css";

class Prop extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Counter name="World" />
        )
    }
}
export default Prop;
