/* TaskInput */

import React from "react";
import "./Task.css";

class TaskInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTask: "",
            newPriority: "",
            error: ""
        }
    }
    handleUpdate = (e) => {
        this.error = "";
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = () => {
        console.log("submitting", this.state.newPriority);
        if (this.state.newTask == "" || this.state.newPriority == "") {
            this.setState({
                error: "Enter task and priority"
            });
        } else {
            this.props.addTask(this.state.newTask, this.state.newPriority);
            this.setState({
                newTask: "",
                newPriority: "",
                error: ""
            })
        }
    }
    render() {
        return (
            <div className="taskInput">
                <div className="form-group row">
                    <div className="col-sm-offset-2 col-sm-4">
                        <label className="control-label">Task: </label>
                        <input type="text" name="newTask" onChange={this.handleUpdate} value={this.state.newTask} className="form-control" /> 
                    </div>
                    <div className="col-sm-4">
                        <label className="control-label">Priority: </label>
                        <select name="newPriority" value={this.state.newPriority} onChange={this.handleUpdate} className="form-control">
                            <option value="" disabled>Select Priority</option>    
                            <option value="regular">Regular</option>    
                            <option value="important">Important</option>    
                            <option value="critical">Critical</option>    
                        </select>
                    </div>
                </div>
                <div className="text-danger">{this.state.error}</div>
                <button className="btn btn-primary" onClick={this.handleSubmit}>Add Task</button>
            </div>
        );
    }
}
export default TaskInput;
