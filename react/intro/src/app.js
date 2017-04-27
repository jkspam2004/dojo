import React from 'react';
import Prop from "./Components/Prop/Prop.js";
import Event from "./Components/Event/Event.js";
import State from "./Components/State/State.js";

let user = {first_name: "Mickey", last_name: "Mouse", age: 30}
class App extends React.Component {
    render() {
        return (
            //<Prop first_name="Steph" /> // pass first_name to Prop component
            // render the component
            <div>
                {/* test comment */}
                <h2>Prop Component</h2>
                <Prop user={user}/>
                <hr />
                <h2>Event Component</h2>
                <Event />
                <hr />
                <h2>State Component</h2>
                <State />
            </div>
        )
    }
}
export default App;
