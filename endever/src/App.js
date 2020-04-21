import React from 'react';
import logo from './logo.svg';
import endevercircle from './img/endevercircle.png';
import GitHubLogo from './img/GitHub_Logo_White.png';
import './App.css';
import './fonts/fonts.css';

//For testing
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import DevCard from './components/DevCard/DevCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="FlexViews">
      <Sidebar />
      <DevCard />

      </div>
      {/* <header className="App-header"> */}
        
        {/* <Sidebar /> */}
        {/* <div className="landing">
          <img src={endevercircle} className="ProductLogo" /><div>EnDever App</div>
          </div>
          <div className="GitHubIntegration">Sign in with <img src={GitHubLogo} className="GitHubLogo" /></div>
      </header> */}
    </div>
  );
}

export default App;
