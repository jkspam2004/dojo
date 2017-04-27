import React from "react";

class Life extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 10 };
        this.renderOrder = 2;
        console.log("1. This is the constructor method. Always first");
        // state definition always in the constructor
    }
    /* takes care of events that should happen after HTML has been added to the DOM */
    componentDidMount() { 
        console.log("3. componentDidMount method. Invoked immediately after the first render runs.");
        this.countDown = setInterval(() => {
            this.setState({ count: this.state.count - 1 })
        }, 1000)
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("4. This runs right before the html is re-rendered, in this case right before state changes");
        if (this.renderOrder == 2) {
           this.renderOrder = 5; 
        }
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("6. This runs right after the html is re-rendered, in this case right after state changes");
        if (this.state.count <= 0 && prevState.count > 0) {
            clearInterval(this.countDown);
            console.log("7. Countdown finished and state interval has been stopped");
            // Let's make a mess to be cleaned up by componentWillUnmount
            this.h1 = document.createElement('h1');
            this.h1.innerText = "Making a Mess";
            document.body.appendChild(this.h1);
            // Runs this.props.destroyMethod after 3 seconds
            setTimeout(() => {
                console.log("Invoking this.props.destroyMethod()");
                this.props.destroyMethod(); // destroyMethod was passed by App. access with props
            }, 3000)
        }
    }
    componentWillUnmount() {
        console.log("7. This runs right before the component is removed from the DOM");
        document.body.removeChild(this.h1);
    }
    render() {
        console.log(`${this.renderOrder}. This is the render method. Invoked after constructor and after state changes.`);
        return(
            <h1>COUNT: {this.state.count}</h1>
        )
    }
}
export default Life;
