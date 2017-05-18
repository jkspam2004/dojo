import React, { Component } from 'react';
import Axios from 'axios';
import User from './User.js';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.cancelToken = Axios.CancelToken.source();

        this.state = {
            downloaded: false,
            userList: [],
            message: "Loading..."
        }
    }
    componentDidMount() {
        Axios.get("http://54.245.42.196/users", {
            cancelToken: this.cancelToken.token
        }).then((result) => {
            console.log(result);
            this.setState({
                downloaded: true,
                userList: result.data
            })
        }).catch((err) => {
            if (Axios.isCancel(err)) {
                console.log("Request cancelled by ", err.message);
            } else {
                this.setState({
                    message: "Get error."
                })
            }
        })
    }
    componentWillUnmount() {
        this.cancelToken.cancel("Operation cancelled by the user.");
    }
    render() {
        return (
            <div>
                <h2>User Table</h2>
                {this.state.downloaded &&
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                this.state.userList.map((user,index) => {
                                    return <User key={index} user={user} />
                                })
                            }
                        </tbody>
                    </table>
                }
                {!this.state.downloaded &&
                    <h3>{this.state.message}</h3>
                }
            </div>
        );
    }

}
export default UserList;