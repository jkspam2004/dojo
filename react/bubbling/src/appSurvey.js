/* appSurvey.js */

import React from "react";
import Survey from "./Components/Survey/Survey.js";
import "./app.css";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Survey />
            </div>
        )
    }
}
export default App;
