/* SurveyResults */

import React from "react";

class SurveyResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.results;
    }

    componentWillReceiveProps(props) {
        this.setState({
            name: props.results.name,
            course: props.results.course,
            rating: props.results.rating,
            comment: props.results.comment
        });
    }

    render() {
        return (
            <div>
                <p>Name: {this.state.name}</p>
                <p>Course: {this.state.course}</p>
                <p>Rating: {this.state.rating}</p>
                <p>Comment: {this.state.comment}</p>
            </div>
        );
    }
}
export default SurveyResults;
