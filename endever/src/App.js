import React, { Component } from "react";
import { Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import User from "./User/User";

class App extends Component {
  render() {
    const client_id = "fda597fe607c7161f2a0";
    const authorize_uri = "https://github.com/login/oauth/authorize";
    const redirect_uri = "http://localhost:4000/oauth/callback";
    return (
      <div className="App">
        {/* <header className="App-header"> */}
        {/* <button onClick={this.loginHandle}>Login</button> */}
        <a href="http://localhost:4000/login">Login with GitHub</a>
        <br />
        {/* <a
          href={`${authorize_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}`}
        >
          Login with GitHub
        </a> */}
        {/* </header> */}
        <Route
          path="/user/:userName"
          exact
          render={(routerProps) => <User {...routerProps} />}
        />
      </div>
    );
  }
}

export default App;
