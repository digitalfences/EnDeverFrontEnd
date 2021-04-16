import React, { Component, useState, useEffect } from "react";
import axios from "axios";

import "./DevCard.css";

import "../DevCardButton/DevCardButton";

import GitHubMark from "../../img/GitHub-Mark-120px-plus.png";
import projecticon from "../../img/projecticon.png";
import workicon from "../../img/workicon.png";
import PullRequestIcon from "../../img/git-pull-request.png";
import NoIcon from "../../img/X.png";
import DevCardButton from "../DevCardButton/DevCardButton";

const DevCard = (props) => {
  const sampleCallback = (event) => {
    alert(event.target + " clicked me");
  };
  if (!props.user) {
    return <div>Loading...</div>;
  } else {
      console.log(props.user)
    let user = props.user;
    let cardID = user._id;
    let cardGHuser = user.UserName;
    let cardBio = user.Account.Bio;
    let cardPicture = user.Account.Picture;
    let cardRepos = user.Account.Repositories.slice(0, 3);
    return (
      <div className="DevCard">
        <div className="DevCard__Image">
          <img src={cardPicture} />
        </div>
        <div className="DevCard__UserInfo">
          <div className="DevCard__UserInfo__Left">
            <div className="DevCard__UserInfo__Name">{/* {name} */}</div>
            <div className="DevCard__UserInfo__Work">
              <img src={workicon} />
            </div>
            <hr className="divider" />
            <div className="DevCard__UserInfo__Bio">{cardBio}</div>
          </div>
          <div className="DevCard__UserInfo__Right">
            <div className="DevCard__UserInfo__GitHub">
              <img src={GitHubMark} />
              {cardGHuser}
            </div>
            <div className="DevCard__UserInfo__GitHub__Projects">
              <img src={projecticon} />
              {cardRepos[0]}
            </div>
            <div className="DevCard__UserInfo__GitHub__Projects">
              <img src={projecticon} />
              {cardRepos[1]}
            </div>
            <div className="DevCard__UserInfo__GitHub__Projects">
              <img src={projecticon} />
              {cardRepos[2]}
            </div>
          </div>
        </div>
        <hr className="BottomDivider" />

        <div className="DevCardButton__Container">
          <div>
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
      </div>
    );
  }
};
export default DevCard;
