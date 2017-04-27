import React from 'react';
import Prop from "./Components/Prop/Prop.js";
import Life from "./Components/Life/Life.js";

class App extends React.Component {
    render() {
        return (
            // render the component
            <div>
                <Prop first_name="me" last_name="too"/>
                <Life />
            </div>
        )
    }
}
export default App;
