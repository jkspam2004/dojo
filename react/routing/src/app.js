import React from 'react';
import 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import PropTypes from 'prop-types';

import Prop from "../../first_component/src/Components/Prop/Prop.js";
import Event from "../../first_component/src/Components/Event/Event.js";
import State from "../../first_component/src/Components/State/State.js";
import Life from "../../first_component/src/Components/Life/Life.js";
import Counter from "../../first_component/src/Components/Counter/Counter.js";
import Task from "../../bubbling/src/appTask.js";
import Nav from "./Components/Navbar/Nav.js";

injectTapEventPlugin();
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        }
    }
    handleChange = (event, index, value) => this.setState({value});
    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    {/*<Nav />*/}
                    {/* Navigation Menu */}
                    <Toolbar>
                        <ToolbarGroup firstChild={true}>
                            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                                <MenuItem value={1} primaryText={<Link to="/">State</Link>} />
                                <MenuItem value={2} primaryText={<Link to="/prop">Prop</Link>} />
                                <MenuItem value={3} primaryText={<Link to="/props">Event</Link>} />
                                <MenuItem value={4} primaryText={<Link to="/life">Life</Link>} />
                                <MenuItem value={5} primaryText={<Link to="/counter">Counter</Link>} />
                                <MenuItem value={6} primaryText={<Link to="/task">Task Manager</Link>} />
                            </DropDownMenu>
                        </ToolbarGroup>
                    </Toolbar>

                    <ul> 
                        <li><Link to="/">State</Link></li>
                        <li><Link to="/prop">Prop</Link></li>
                    </ul>

                    {/* Routing */}
                    <Route exact path="/" component={State} />
                    <Route path="/prop" component={Prop} />
                    <Route path="/props" component={Event} />
                    <Route path="/life" component={Life} />
                    <Route path="/counter" component={Counter} />
                    <Route path="/task" component={Task} />
                </div>
            </BrowserRouter>
        );
    }
}
export default App;

App.childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
};
