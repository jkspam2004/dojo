import React from "react";

class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-inverse mynav" role="navigation" aria-live="polite">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">React</a>
                    </div>

                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <button className="btn btn-default navbar-btn dropdown-toggle" data-toggle="dropdown"> 
                                    Welcome <b className="caret"></b>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a href="">Leaderboard</a></li>
                                    <li><a href="">Settings</a></li>
                                    <li><a href="">Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Navbar;
