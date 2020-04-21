import React from 'react';
import logo from './logo.svg';
import endevercircle from './img/endevercircle.png';
import GitHubLogo from './img/GitHub_Logo_White.png';
import './App.css';
import './fonts/fonts.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="landing">
          <img src={endevercircle} className="ProductLogo" /><div>EnDever App</div>
          </div>
          <div className="GitHubIntegration">Sign in with <img src={GitHubLogo} className="GitHubLogo" /></div>
      </header>
    </div>
  );
}

export default App;
