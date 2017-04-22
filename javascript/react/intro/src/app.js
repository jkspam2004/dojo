import React from 'react';
import Prop from "./Components/Prop/Prop.js";
import Event from "./Components/Event/Event.js";

let user = {first_name: "Mickey", last_name: "Mouse", age: 30}
class App extends React.Component {
    render() {
        return (
            //<Prop first_name="Steph" /> // pass first_name to Prop component
            // render the component
            <div>
                {/* test comment */}
                <Prop user={user}/>
                <Event />
            </div>
        )
    }
}
export default App;
