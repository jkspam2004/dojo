import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import EventsHeader from './EventsHeader.js';
import {EventDashboard, EventDay} from './EventComponents.js';

class Assignments extends Component {
    render() {
        return (
            <div id="assignments" className="col-lg-9 col-sm-9 col-xs-8 main-content">
                <h3>Assignments</h3>
                <h5>This is a list of all of the assignment that have to be completed by tomorrow.</h5>
            </div>
        )
    }
}
class Lectures extends React.Component {
    render() {
        return (
            <div id="lectures" className="col-lg-9 col-sm-9 col-xs-8 main-content">
                <h3>Lectures</h3>
                <h5>This is a list of all of the lecture material that has to be completed by tomorrow.</h5>
            </div>
        )
    }
}
class Events extends React.Component {
    render() {
        return (
            <div id="events" className="col-lg-9 col-sm-9 col-xs-8 main-content">
                
                <EventsHeader url={this.props.match.url} />
                <Route exact path={`${this.props.match.url}`} component={EventDashboard} />
                <Route path={`${this.props.match.url}/:day`} component={EventDay} />
            </div>
        )
    }
}
export {Assignments, Lectures, Events};