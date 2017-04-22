import React from 'react';

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.name = "Donald Duck";
    }
    handleClick() {
        alert("Hello");
    }
    handleClick2() {
        alert("Hello, " + this.name);
    }
    // use arrow function so we can access "this" from Event class
    // otherwise, "this" will refer to onClick object
    // definition with arrow function possible because we added
    // "transform-class-properties" plugin to our .babelrc file
    handleClick3 = (e) => { 
        alert("Hello, " + this.name);
    }

    render() {
        return(
            <div>
                {/* <h1>Hello, this is the Event Component</h1>  */}
                <button onClick={this.handleClick}>Click Me</button>
                <button onClick={() => this.handleClick2()}>Click Me Arrow Function onClick</button>
                <button onClick={this.handleClick3}>Click Me Arrow Function in Method</button>
            </div>
        )
    }
}
export default Event;
