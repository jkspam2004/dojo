/* TaskList */

import React from "react";
import TaskItem from "./TaskItem.js";
import TaskInput from "./TaskInput.js";
import TaskSearch from "./TaskSearch.js";
import "./Task.css";

let tasks = [
    { task_item: "Learn React", priority: "regular" },
    { task_item: "Sleep 8 hours", priority: "regular" }
]
class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: tasks,
            searchTerm: "" 
        }
        this.search = this.search.bind(this); // instead of arrow function
    }
    search(e) {
        this.setState({
            searchTerm: e.target.value
        });
    }
    clearSearch = () => {
        this.setState({
            searchTerm: ""
        });
    }
    addTask = (newTask, newPriority) => {
        let newTaskArr = this.state.tasks.slice();
        newTaskArr.push({ task_item: newTask, priority: newPriority });
        this.setState({
            tasks: newTaskArr
        }); 
    }
    deleteTask = (taskId) => {
        let currTaskArr = this.state.tasks.slice();
        currTaskArr.splice(taskId, 1);
        this.setState({
            tasks: currTaskArr
        });
    }
    render() {
        let taskList = this.state.tasks.map((task, index) => {
            let task_id = "task_" + index
            if (!this.state.searchTerm) return <TaskItem key={index} task_id={index} task={task} name="priority" deleteTask={this.deleteTask} />
            const regEx = new RegExp(this.state.searchTerm, 'gi'); // create regex based on search term to filter
            return regEx.test(task.task_item) && <TaskItem key={index} task_id={index} task={task} name="priority" deleteTask={this.deleteTask} />
        });
        return (
            <div className="taskList">
                <h1>Task Manager</h1>
                {/*
                <div className="row">
                    <div className="col-sm-offset-3 col-sm-1">
                        <label>Filter:</label>
                    </div>
                    <div className="col-sm-3">
                        <input className="form-control" type="text" onChange={this.search} placeholder="search" value={this.state.searchTerm} />
                    </div>
                    <div className="col-sm-1">
                        <input type="submit" className="btn btn-primary" value="Clear" onClick={this.clearSearch} />
                    </div>
                </div>
                */}
                <TaskSearch searchTerm={this.state.searchTerm} clearSearch={this.clearSearch} search={this.search} />

                <table className="table table-striped table-bordered myTable">
                    <thead>
                        <tr><th>Task</th><th>Priority</th><th>Action</th></tr>
                    </thead>
                    <tbody>
                        {taskList}
                    </tbody>
                </table>
                <TaskInput addTask={this.addTask} />
            </div>
        );
    }
}
export default TaskList;

// http://stackoverflow.com/questions/40223854/angular-js-ng-repeat-filter-alternative-in-react-js
