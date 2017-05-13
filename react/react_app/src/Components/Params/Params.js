import React from 'react';
import {Link} from 'react-router-dom';
import './Params.css';

class Params extends React.Component {
    render() {
        return (
            <div>
                <h1>This is the params component</h1>
                <Link to="/params/donald" className="link">Donald</Link>
                <Link to="/params/daisy" className="link">Daisy</Link>
                <Link to="/params/minnie" className="link">Minnie</Link>
                <Link to="/params/mickey" className="link">Mickey</Link>
                {/* catch the name from /params/:name route */}
                <h3>name param: {this.props.match.params.name}</h3>
            </div>
        );
    }
}
export default Params;