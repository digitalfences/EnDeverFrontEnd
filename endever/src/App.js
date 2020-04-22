import React, { Component } from 'react';
import logo from './logo.svg';
import endevercircle from './img/endevercircle.png';
import GitHubLogo from './img/GitHub_Logo_White.png';
import './App.css';
import './fonts/fonts.css';

//For testing
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import DevCard from './components/DevCard/DevCard';
import Messenger from './components/Messenger/Messenger';

class  App extends Component {
  constructor(){
    super();

    //temporary...
     let authURL = "https://github.com/login/oauth/authorize?client_id=fda597fe607c7161f2a0&&redirect_uri=http://localhost:4000/oauth/callback";

    this.state = {
        auth: false,
        primaryDisplay: 'messenger',
        authURL: authURL
    }
  }

  testStateChange = () => {
    this.setState( { auth: true } );
      // window.location = this.state.authURL;
  }


  sessionCheck = () => {
    //pseudocode
    /* fetch GET credentials:include
    url api/sessioncheck
    checks for session key in express session/redis store
    if yes, great ... do nothing
    if not, window.location / 
    */
  }


  render() {

   

    if(this.state.auth === true) {
      return (
          <div className="App">
            <Navbar />
            <div className="FlexViews">
            <Sidebar sessionCheck={this.sessionCheck} />

            {this.state.primaryDisplay === 'cards' ?
             
              <DevCard sessionCheck={this.sessionCheck} />
             
            : 
            
              <Messenger sessionCheck={this.sessionCheck} />
            
            }
            
             </div>
          </div>
      );
    }
    else {
      return (
          <header className="App-header">
          <div className="landing">
          <img src={endevercircle} className="ProductLogo" /><div>EnDever App</div>
          </div>
          <div className="GitHubIntegration" onClick={this.testStateChange}>Sign in with <img src={GitHubLogo} className="GitHubLogo" /></div>
          </header>
      );
    }
  }
}

export default App;
