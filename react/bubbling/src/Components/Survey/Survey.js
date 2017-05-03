/* Survey.js */

import React from "react";
import SurveyInput from "./SurveyInput.js";
import SurveyResults from "./SurveyResults.js";
import "./Survey.css";

class Survey extends React.Component {
    constructor(props) {
        super(props);

        let results = {
            name: "",
            course: "React",
            rating: "5",
            comment: ""
        };
        this.state = results;
/*
        this.state = {
            results: results
        }
*/
    }
    updateResults = (key, value) => {
        this.setState({
            [key]: value
        });
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-6 survey">
                    <h2>Survey</h2>
                    <SurveyInput updateResults={this.updateResults} />
                </div>
                <div className="col-md-6 results">
                    <h2>Results</h2>
                    <SurveyResults results={this.state} />
                </div>
            </div>
        );
    }
}
export default Survey;
