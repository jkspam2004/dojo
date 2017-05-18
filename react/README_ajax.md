# AJAX

## GET request flow
* Set state in constructor
* Render the HTML in render
* Make the HTTP request in componentDidMount
* Once the request is finished, update state with data from server

## POST request flow
* Set state in constructor for the new data
* Render the form in render
* Make the request when user submits the form
* Once the request is finished, check for and render errors if any and reset input fields

## Authentication flow
* Set state in constructor for the user credentials
* Render the login form in render
* Make the request when user submits the form
* Once the request is finished
    * If there was an error, render "Invalid Credentials"
    * If successful, store token in local storage and redirect the user to dashboard

## HTTP

### Promises vs Callbacks

```
$.get("http://pokeapi.co/api/v1/pokemon/1/", function(res) {
    console.log(res);
}, "json");
```

Promises gives us a linear way of writing asynchronous code. Once the get
request is finished *then* run this function, but if you *catch* an error
retrieving the data, run this other function instead.
```
import Axios from 'axios';

Axios.get("http://pokeapi.co/api/v1/pokemon/1/").then((result) => {
    console.log(res)
}).catch((err) => {
    console.log("error retrieving data", err)
})
```

## Axios: promise based HTTP client for the browser

`npm install axios react-router react-router-dom --save`

### Canceling a request with a cancel token

* Create an Axios token
* Send token along with request
* Cancel request when component is removed from the DOM (ComponentWillUnmount)
* Catch the cancel in error handling

```
    constructor(props) {
        super(props);
        this.cancelToken = Axios.CancelToken.source(); // create token

        this.state = {
            downloaded: false,
            userList: [],
            message: "Loading..."
        }
    }
    componentDidMount() {
        Axios.get("http://54.245.42.196/users", {
            cancelToken: this.cancelToken.token // send token along with request
        }).then((result) => {
            console.log(result);
            this.setState({
                downloaded: true,
                userList: result.data
            })
        }).catch((err) => {
            if (Axios.isCancel(err)) { // catch the cancellation
                console.log("Request cancelled by ", err.message);
            } else {
                this.setState({
                    message: "Get error."
                })
            }
        })
    }
    componentWillUnmount() { // cancel request when component removed from DOM
        this.cancelToken.cancel("Operation cancelled by the user.");
    }
```

## JSON Web Token (JWT)
A JSON web token is a an encoded JSON object that will be used to store User information.

* Once user logs in and is authenticated, server sends JWT to client
* JWT stored on the client side
* JWT sent with every subsequent HTTP request
* Server checks JWT to determine access permissions

[more on JWT](https://jwt.io/)

## Client side storage
```
localStorage: stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser Cache / Locally Stored Data

sessionStorage: similar to localStorage but expires when the browser is closed (not the tab).

Cookie: stores data that has to be sent back to the server with subsequent requests. Its expiration varies based on the type and the expiration duration can be set from either server-side or client-side (normally from server-side).

Cookies are primarily for server-side reading (can also be read on client-side), localStorage and sessionStorage can only be read on client-side.
```
[Quora article](https://www.quora.com/What-is-the-difference-between-sessionstorage-localstorage-and-Cookies)

### localStorage
* set: localStorage.setItem(key, value)
`localStorage.setItem("jw-token", "super awesome JSON Web Token");`

* get: localStorage.getItem(key)
`localStorage.getItem("jw-token");`

### Adding JWT to the HTTP header
Credentials should be stored in the authorization field of the header

* Get request
```
    getPosts = () => {
        Axios.get("protected get route", { headers: {
            Authorization: localStorage.getItem("jw-token")}
        }).then((result) => {
            console.log("successful")
        }).catch((err)=> {
            console.log("unsuccessful");
        })
    }
```

* Post request
```
    handleSubmit = (e) => {
        e.preventDefault()        
        Axios({
            method: "post",
            url: "protected post route",
            data: {username: "cool name", password: "great password" },
            headers: {Authorization: localStorage.getItem("jw-token")}
        }).then((result) => {
            console.log("successful")
        }).catch((err) => {
            console.log("unsuccessful");
        })
    }
```

### Redirecting to another page
Redirect the URL
`this.props.history.push("/dashboard");`
