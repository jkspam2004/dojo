/* SurveyInput.js */

import React from "react";
import "./Survey.css";

class SurveyInput extends React.Component {
    constructor(props) {
        super(props);
    }
    handleUpdate = (e) => {
        console.log(`name: ${e.target.name}, value: ${e.target.value}`);
        console.log(`which: ${e.which}, keyCode: ${e.keyCode}`);
        this.props.updateResults(e.target.name, e.target.value);
        e.target.value = "";
    }
    render() {
        return (
            <div>
                <p>Name: <input type="text" name="name" onBlur={this.handleUpdate} /></p>
                <p>Course: 
                    <select className="form-control" name="course" onChange={this.handleUpdate} > 
                        <option>React</option>
                        <option>Angular</option>
                        <option>Backbone</option>
                        <option>Python</option>
                    </select>
                </p>
                <p>Rating:
                    <select className="form-control" name="rating" onChange={this.handleUpdate} >
                        <option>5</option>
                        <option>4</option>
                        <option>3</option>
                        <option>2</option>
                        <option>1</option>
                    </select>
                </p>
                <p>Comment:</p>
                    <textarea name="comment" rows="3" cols="20" onBlur={this.handleUpdate}></textarea> 
            </div>
        );
    }

}
export default SurveyInput;
