import React from 'react';
import "./Login.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }
    logIn = () => {
        this.setState({
            isLoggedIn: true  
        });
    }
    logOut = () => {
        this.setState({
            isLoggedIn: false  
        });
    }
    render() {
        return(
            <div>
                <h2>Hello, you!</h2>
                {this.state.isLoggedIn &&
                    <div>
                        <h3>You are currently logged in.</h3>
                        <button className="btn btn-warning" onClick={this.logOut}>Log Out</button>
                    </div>
                }
                {!this.state.isLoggedIn &&
                    <div>
                        <h3>You are currently logged out.</h3>
                        <button className="btn btn-success" onClick={this.logIn}>Log In</button>
                    </div>
                }
            </div>
        )
    }
}
export default Login;
