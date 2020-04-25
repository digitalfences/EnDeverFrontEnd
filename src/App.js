import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import logo from "./logo.svg";
import endevercircle from "./img/endevercircle.png";
import GitHubLogo from "./img/GitHub_Logo_White.png";
import "./App.css";
import "./fonts/fonts.css";
import queryString from "query-string";

//For testing
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import DevCard from "./components/DevCard/DevCard";
import Messenger from "./components/Messenger/Messenger";

class App extends Component {
  constructor() {
    super();
    //temporary...
    // let authURL = "https://github.com/login/oauth/authorize?client_id=0be8114f0f94de54ce72&&redirect_uri=http://localhost:4000/auth/github/callback";
    // let authURL = "https://github.com/login/oauth/authorize?client_id=fda597fe607c7161f2a0&&redirect_uri=https://tigerkingbackend.herokuapp.com/auth/github/callback"
      //"https://github.com/login/oauth/authorize?client_id=0be8114f0f94de54ce72&&redirect_uri=http://localhost:4000/auth/github/callback";
    // let authURL = 'http://localhost:4000/auth/github';
    let authURL = 'https://tigerkingbackend.herokuapp.com/login';
    this.state = {
      auth: false,
      primaryDisplay: "messenger",
      authURL: authURL,
      messengerHistory: "",
      Username: "",
    };
  }
  componentWillMount() {
    /*
    console.log(this.props)
    var query = queryString.parse(window.location.search);
    if (query.user) {
      window.localStorage.setItem("user", query.user);
      console.log(window.localStorage);
      this.props.history.push("/");
   }*/
  }
  componentDidMount() {
    this.sessionCheck();
    this.setMainViewState();
  }

  testStateChange = () => {
    // this.setState({ auth: true });
    window.location = this.state.authURL;
  };

  setMainViewState = (force = "") => {
    console.log("the state ");
    console.log(this.state);
    if (this.state.auth === true) {
      if (force !== null) {
        this.setState({
          primaryDisplay: force,
        });
      } else {
        if (this.state.primaryDisplay === "cards") {
          this.setState({
            primaryDisplay: "messenger",
          });
        } else {
          this.setState({
            primaryDisplay: "cards",
          });
        }
      }
    } else {
      console.log("auth: false");
    }
  };

  setMessengerID = (id) => {
    axios
      .get(`https://tigerkingbackend.herokuapp.com/message/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        this.setState({
          messengerHistory: res,
        });
      });
  };
  logState = () => {
    console.log(this.state);
  };
  sessionCheck = () => {
    // console.log(document.cookie);
    axios.get("https://tigerkingbackend.herokuapp.com/sessioncheck", {
       
    //.get("http://localhost:4000/sessioncheck", {
        withCredentials: true,
        headers: {
         
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("check the data");
        console.log(res);
        if (res.data === undefined || res.data === null) {
          console.log("the res data is null");
        } else {
          if (res.data._id !== undefined) {
            this.setState(
              {
                auth: true,
                _id: res.data._id,
                Username: res.data.UserName,
                Account: res.data.Account,
                Login: res.data.Login,
              },
              this.logState
            );
          } else {
            console.log("res.data._id is null");
          }
        }
        // if ("Account" in res.data) {
        //   this.setState(
        //     {
        //       auth: true,
        //       _id: res.data._id,
        //       Username: res.data.UserName,
        //       Account: res.data.Account,
        //       Login: res.data.Login,
        //     },
        //     this.logState
        //   );
        // } else {
        // }
      });

    //console.log("checked");
    //pseudocode
    /* fetch GET credentials:include
    url api/sessioncheck
    checks for session key in express session/redis store
    if yes, great ... do nothing
    if not, window.location / 
    */
    // let URL = "http://localhost:4000/sessioncheck";

    // axios.get(URL)
    // .then(res => {
    //   console.log(res);
    // })
  };

  render() {
    console.log(" begin render");
    console.log(this.state.auth);
    if (this.state.auth === true) {
      return (
        <Router>
          <div className="App">
            <header>
              <Navbar></Navbar>
            </header>
            <main className="FlexViews">
              <Switch>
     
                <Route
                  path="/messages"
                  render={(routerProps) => {
                    return (
                      <Sidebar
                        sessionCheck={this.sessionCheck}
                        {...routerProps}
                        {...this.state}
                        messages
                        setMainViewState={this.setMainViewState}
                      ></Sidebar>
                    );
                  }}
                />

                <Route
                  path="/matches"
                  render={(routerProps) => {
                    return (
                      <Sidebar
                        sessionCheck={this.sessionCheck}
                        {...routerProps}
                        {...this.state}
                        setMainViewState={this.setMainViewState}
                        matches
                      ></Sidebar>
                    );
                  }}
                />

                <Route
                  path="/messages/:id"
                  render={(routerProps) => {
                    //this.setMainViewState();
                    //this.setMessengerID();
                    return (
                      <Sidebar
                        sessionCheck={this.sessionCheck}
                        {...routerProps}
                        {...this.state}
                        matches
                      >
                        {/* {this.setMainViewState()} */}
                      </Sidebar>
                    );
                  }}
                />
                <Route
                  path="/"
                  render={(routerProps) => {
                    // this.setMainViewState("cards");
                    return (
                        <>
                        <Sidebar
                            sessionCheck={this.sessionCheck}
                            {...routerProps}
                            {...this.state}
                            matches
                            setMainViewState={this.setMainViewState}
                        >
                        </Sidebar>
                      <DevCard
                        sessionCheck={this.sessionCheck}
                        {...routerProps}
                        {...this.state}
                        matches
                      ></DevCard>
                      </>
                    );
                  }}
                />
              </Switch>
            </main>
          </div>
        </Router>
      );
    } else {
      return (
        <header className="App-header">
          <div className="landing">
            <img src={endevercircle} className="ProductLogo" />
            <div>EnDever App</div>
          </div>
          <div className="GitHubIntegration" onClick={this.testStateChange}>
            Sign in with <img src={GitHubLogo} className="GitHubLogo" />
          </div>
        </header>
      );
    }
  }
}

export default App;