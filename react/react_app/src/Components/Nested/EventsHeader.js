import React from 'react';
import './Nested.css';
import {Link} from 'react-router-dom';

class EventsHeader extends React.Component {
    render() {
        return (
            <div className="sub-nav-bar">
                <ul id="subNav">
                    <li><Link to={`${this.props.url}`} >Dashboard</Link></li>
                    <li><Link to={`${this.props.url}/Tuesday`} >Tuesday</Link></li>
                    <li><Link to={`${this.props.url}/Thursday`} >Thursday</Link></li>
                    <li><Link to={`${this.props.url}/Saturday`} >Saturday</Link></li>
                </ul>
            </div>
        )
    }
}
export default EventsHeader;