import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div className="nav-bar">
                <ul id="myNav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/params">Params</Link>
                    </li>
                    <li>
                        <Link to="/nested">Nested</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Header;