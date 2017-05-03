import React from 'react';
import Login from "./Components/Login/Login.js";
import Parent from "./Components/Bubble/Parent.js";
import "./app.css";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Login />
                <Parent />
            </div>
        )
    }
}
export default App;
