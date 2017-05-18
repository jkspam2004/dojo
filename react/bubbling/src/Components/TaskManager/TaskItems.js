/* TaskItems */

import React from "react";
import "./Task.css";

class TaskItems extends React.Component {
    render() {
        return (
            <table className="table table-striped table-bordered myTable">
                <thead>
                    <tr><th>Task</th><th>Priority</th><th>Action</th></tr>
                </thead>
                <tbody>
                {
                    this.props.tasks.map((task, index) => {
                        const regEx = new RegExp(this.props.searchTerm, 'gi'); // create regex based on search term to filter
                        console.log("regex", regEx);
                        return regEx.test(task.task_item) && ( 
                            <tr key={index}>
                                <td className={`${task.priority}`}>
                                    {task.task_item}
                                </td>
                                <td>
                                    <select name="priority" 
                                        value={task.priority} 
                                        onChange={(e) => this.props.changePriority(index, e.target.value)} 
                                        className="form-control">
                                        <option value="regular">Regular</option> 
                                        <option value="important">Important</option>
                                        <option value="critical">Critical</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="submit" name="delete" value="Delete" onClick={() => this.props.deleteTask(index)} className="btn btn-danger"/>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        );
    }
}
export default TaskItems;
