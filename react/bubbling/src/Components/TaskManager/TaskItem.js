/* TaskItem */

import React from "react";
import "./Task.css";

class TaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task_item: props.task.task_item,
            priority: props.task.priority,
            name: props.name,
            task_id: props.task_id
        }
    }
    handleSelect = (e) => {
        this.setState({
            priority: e.target.value
        });
    }
    handleDelete = () => {
        this.props.deleteTask(this.state.task_id);
    }
    render() {
        return (
            <tr>
                <td className={`${this.state.priority}`}>
                    {this.state.task_item}
                </td>
                <td>
                    <select name={this.state.name} value={this.state.priority} onChange={this.handleSelect} className="form-control">
                        <option value="regular">Regular</option>    
                        <option value="important">Important</option>    
                        <option value="critical">Critical</option>    
                    </select>
                </td>
                <td>
                    <input type="submit" name="delete" value="Delete" onClick={this.handleDelete} className="btn btn-danger"/>
                </td>
            </tr>
        );
    }
}
export default TaskItem;
