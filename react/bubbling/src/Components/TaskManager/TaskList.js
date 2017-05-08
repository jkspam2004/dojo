/* TaskList */

import React from "react";
import TaskItems from "./TaskItems.js";
import TaskInput from "./TaskInput.js";
import TaskSearch from "./TaskSearch.js";
import "./Task.css";

let tasks = [
    { task_item: "Learn React", priority: "regular", deleted: false },
    { task_item: "Sleep 8 hours", priority: "regular", deleted: false }
]
class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: tasks,
            searchTerm: "" 
        }
        this.search = this.search.bind(this); // instead of arrow function
        this.changePriority = this.changePriority.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
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
    deleteTask(taskId) {
        let taskArr = this.state.tasks.slice();
        taskArr.splice(taskId, 1);

        this.setState({
            tasks: taskArr
        });

        /* if we had an id, can remove the item with filter()
        taskArr = taskArr.filter( task => {
            return task.id != taskId;
        });
        */
    }
    changePriority(id, priority) {
        let tasks = this.state.tasks;
        tasks[id].priority = priority;
        this.setState({
            tasks: tasks
        });
    }
    render() {
        console.log("render: ", this.state.tasks);
        return (
            <div className="taskList">
                <h1>Task Manager</h1>
                {/* search box */}
                <TaskSearch searchTerm={this.state.searchTerm} clearSearch={this.clearSearch} search={this.search} />
                {/* task items in table format */}
                <TaskItems tasks={this.state.tasks} deleteTask={this.deleteTask} changePriority={this.changePriority} searchTerm={this.state.searchTerm} />
                {/* add new task form */}
                <TaskInput addTask={this.addTask} />
            </div>
        );
    }
}
export default TaskList;

