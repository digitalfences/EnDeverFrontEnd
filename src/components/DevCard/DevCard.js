import React, { Component, useState, useEffect } from "react";
import axios from "axios";

import "./DevCard.css";

import "../DevCardButton/DevCardButton";
import '../Navbar/NavbarMobile';
import GitHubMark from "../../img/GitHub-Mark-120px-plus.png";
import projecticon from "../../img/projecticon.png";
import workicon from "../../img/workicon.png";
import PullRequestIcon from "../../img/git-pull-request.png";
import NoIcon from "../../img/X.png";
import DevCardButton from "../DevCardButton/DevCardButton";
import NavBarMobile from "../Navbar/NavbarMobile";

const DevCard = (props) => {
    const [showInfo, setShowInfo] = useState(false);
  const sampleCallback = (event) => {
    alert(event.target + " clicked me");
  };
  if (!props.user) {
    return <div>Loading...</div>;
  } else {
    console.log(props.user);
    let user = props.user;
    let cardID = user._id;
    let cardWork = "Programmer";
    if (user.WorkPlace) {
      cardWork = user.WorkPlace;
    }

    let cardGHuser = user.UserName;
    let cardBio = user.Account.Bio;
    let cardPicture = user.Account.Picture;
    let cardRepos = user.Account.Repositories.slice(0, 3);
    if (!showInfo) {
        return (
            <div className="DevCard">
        <NavBarMobile></NavBarMobile>
        <div className="DevCard__UserInfo">
          <div className="DevCard__UserInfo__IntroPic">
            <img className="DevCard__ProPic" src={cardPicture} />
            <div className="DevCard__UserInfo__Name">
              <div>
                <img className="DevCard__Icon" src={GitHubMark} />
                <span className="text__username">{cardGHuser}</span>
                <div>
              </div>
              <button className='more-info' onClick={() => {setShowInfo(!showInfo)}}>More</button>
            </div>
                </div>
          </div>
        </div>

        <div className="DevCardButton__Container">
          <DevCardButton
            orientation="left"
            icon={NoIcon}
            callback={sampleCallback}
          />
          <DevCardButton
            orientation="right"
            icon={PullRequestIcon}
            callback={sampleCallback}
          />
        </div>
      </div>
        )
    } else {
        return (
            <div className="DevCard">
        <NavBarMobile></NavBarMobile>
        <div className="DevCard__UserInfo">
          <div className="DevCard__UserInfo__IntroPic">
            <img className="DevCard__ProPic" src={cardPicture} />
            <div className="DevCard__UserInfo__Name">
              <div>
                <img className="DevCard__Icon" src={GitHubMark} />
                <span className="text__username">{cardGHuser}</span>
                <div>
                <img className="DevCard__Icon" src={workicon} />
                <span className="text__job">{cardWork}</span>
              </div>
              <p>{cardBio}</p>
              <button className='more-info' onClick={() => {setShowInfo(!showInfo)}}>Less</button>
            </div>
                <img className='stats' src="https://github-readme-stats.vercel.app/api/top-langs/?username=digitalfences" />
                <img className='stats' src="https://github-readme-stats.vercel.app/api?username=digitalfences"></img>
              </div>
          </div>
        </div>

        <div className="DevCardButton__Container">
          <DevCardButton
            orientation="left"
            icon={NoIcon}
            callback={sampleCallback}
          />
          <DevCardButton
            orientation="right"
            icon={PullRequestIcon}
            callback={sampleCallback}
          />
        </div>
      </div>
        )
    }
    ;
  }
};
export default DevCard;
