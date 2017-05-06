/* TaskSearch */

import React from "react";
import "./Task.css";

class TaskSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-offset-3 col-sm-1">
                        <label>Filter:</label>
                    </div>
                    <div className="col-sm-3">
                        <input className="form-control" type="text" onChange={this.props.search} placeholder="search" value={this.props.searchTerm} />
                    </div>
                    <div className="col-sm-1">
                        <input type="submit" className="btn btn-primary" value="Clear" onClick={this.props.clearSearch} />
                    </div>
                </div>
            </div>
        );
    }
}
export default TaskSearch;
