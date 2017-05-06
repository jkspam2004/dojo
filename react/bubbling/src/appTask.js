import React from "react";
import TaskList from "./Components/TaskManager/TaskList.js";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <TaskList />
            </div>
        );
    }
}
export default App;
