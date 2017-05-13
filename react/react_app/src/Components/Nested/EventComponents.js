import React from 'react';

class EventDashboard extends React.Component {
    render() {
        console.log("eventdashboard");
        return (
            <div id="eventdashboard">
                <h3>Events Dashboard ("Event Dashboard" Component)</h3>
                <h5>This is the event dashboard, this is where we would see upcoming events</h5>
            </div>
        )
    }
}
class EventDay extends React.Component {
    render() {
        console.log("eventday");
        return (
            <div id="eventday">
                <h3>Events Happening {this.props.match.params.day} ("EventDay" Component)</h3>
                <h5>This is a list of all the events that will be happening on {this.props.match.params.day}</h5>
            </div>
        )
    }
}
export default EventDay;
export {EventDashboard, EventDay};