/* appList.js */

import React from 'react';
import List from "./Components/List/List.js";
import "./app.css";

class App extends React.Component {
    render() {
        let users=["eddy", "brendan", "goose", "eli", "marcos"];
        return (
            <div className="container">
                <List users={users} loggedIn="goose" />
            </div>
        )
    }
}
export default App;
