import React, { Component, useState, useEffect } from "react";
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

const App = () => {
  const [auth, setAuth] = useState(false);
  const [display, setDisplay] = useState("messenger");
  const [authURL, setAuthURL] = useState(
    "https://github.com/login/oauth/authorize?client_id=0be8114f0f94de54ce72&&redirect_uri=http://localhost:4000/auth/github/callback"
  );
  const [history, setHistory] = useState("");
  const [name, setName] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function sessionCheck(){
      axios
      //.get("http://localhost:4000/sessioncheck", {
         .get("https://tigerkingbackend.herokuapp.com/sessioncheck", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data === undefined || res.data === null) {
          console.log("the res data is null");
        } else {
          console.log("i am try to check");
          console.log(res.data);
          if (res.data._id !== undefined) {
            setAuth(true);
            setUser(res.data);
          } else {
            console.log("res.data._id is null");
          }
        }
      })
    }
    sessionCheck()
  },['']);

  const testStateChange = () => {
    // this.setState({ auth: true });
    window.location = authURL;
  };

  const LandingPage = (props) => {
    return (
      <header className="App-header">
        <div className="landing">
          <img src={endevercircle} className="ProductLogo" />
          <div>EnDever App</div>
        </div>
        <div className="GitHubIntegration" onClick={props.testStateChange}>
          Sign in with <img src={GitHubLogo} className="GitHubLogo" />
        </div>
      </header>
    );
  };

  const setMessengerID = (id) => {
    axios
      .get(`https://tigerkingbackend.herokuapp.com/message/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setHistory(res);
      });
  };

  
  if (auth === true) {
    return (
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <main className="FlexViews">
            <Switch>
              <Route
                path="/messages"
                render={(routerProps) => {
                  return (<>
                    <Sidebar
                      {...routerProps}
                      {...auth}
                      user={user}
                      messages
            
                    ></Sidebar>
                    <div className="DevCard__Container">
                        <DevCard
                          {...routerProps}
                          auth={auth}
                          user={user}
                          matches
                        ></DevCard>
                      </div>
                    </>
                  );
                }}
              />

              <Route
                path="/messages/:id"
                render={(routerProps) => {
                  //this.setMainViewState();
                  //this.setMessengerID();
                  return (<>
                    <Sidebar
                      {...routerProps}
                      {...auth}
                      {...user}
                      matches
                    >
                      {/* {this.setMainViewState()} */}
                    </Sidebar>
                    <div className='Messenger__Container'>
                      <Messenger></Messenger>
                    </div>
                    <div className="DevCard__Container">
                    <DevCard
                      {...routerProps}
                      auth={auth}
                      user={user}
                      matches
                    ></DevCard>
                  </div>
                  </>);
                }}
              />
              <Route
                path="/"
                render={(routerProps) => {
                  // this.setMainViewState("cards");
                  return (
                    <>
                      <Sidebar
                        {...routerProps}
                        {...auth}
                        user={user}
                        matches
                      ></Sidebar>
                      <div className="DevCard__Container">
                        <DevCard
                          {...routerProps}
                          auth={auth}
                          user={user}
                          matches
                        ></DevCard>
                      </div>
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
    return <LandingPage testStateChange={testStateChange}></LandingPage>;
  }
};

export default App;
