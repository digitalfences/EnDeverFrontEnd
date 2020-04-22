import React, { Component } from 'react';
import './DevProfile.css';

import GitHubMark from '../../img/GitHub-Mark-120px-plus.png';
import projecticon from '../../img/projecticon.png';
import workicon from "../../img/workicon.png";
import PullRequestIcon from '../../img/git-pull-request.png';
import NoIcon from '../../img/X.png';

import DevProfileTextInput from '../DevProfileTextInput/DevProfileTextInput';
// import DevCardButton from '../DevCardButton/DevCardButton';

import MainUIButton from '../MainUIButton/MainUIButton';

class DevProfile extends Component {
    constructor(){
        super();

        this.state = {
            mine: true
        }   
    }

    handleProfileUpdate = (event) => {
        event.preventDefault();
    }
    
    render() {   
        let url = 'https://picsum.photos/380/380';
        let name = "Test Testerer"
        let work = "Google, Inc."
        let bio = "Not all who wander are lost, but I definitely am."
        let githubname = "BestPullRequest"
        let projects = ['Gmail', 'VS Code', 'Bootstrap'];

        return (
            <div className="DevProfile">
                <div className="DevProfile__Image"><img src={url} /></div>
                <div className="DevProfile__UserInfo">
                <div className="DevProfile__UserInfo__Left">
                    <div className="DevProfile__UserInfo__Name">
                        {name}
                    </div>
                    <div className="DevProfile__UserInfo__Work"><img src={workicon} />{work}</div>
                    <hr className="divider" />
                    <div className="DevProfile__UserInfo__Bio">{bio}</div>
                </div>
                <div className="DevProfile__UserInfo__Right">
                    <div className="DevProfile__UserInfo__GitHub"><img src={GitHubMark} />{githubname}</div>
                    <div className="DevProfile__UserInfo__GitHub__Projects"><img src={projecticon} />{projects[0]}</div>
                    <div className="DevProfile__UserInfo__GitHub__Projects"><img src={projecticon} />{projects[1]}</div>
                    <div className="DevProfile__UserInfo__GitHub__Projects"><img src={projecticon} />{projects[2]}</div>
                </div>
            </div>

            { this.state.mine === false ?
            
                <div className="DevProfile__Unmatch">
                <MainUIButton label="Unmatch" icon={NoIcon}  /> 
                </div>
            :
                <div className="DevProfile__Controls">
                    <h3 className="DevProfile__Controls__Title">Edit Profile</h3>
                    <form method="PATCH" className="DevProfile__Controls__Form" >
     
                       <DevProfileTextInput name="name" label="Name:" dbvalue="Daniel" />
                       <DevProfileTextInput name="work" label="Work:" dbvalue="" />
                       <DevProfileTextInput name="bio" label="Bio:" dbvalue="" />

                       <button className="DevProfile__Controls__Submit">Submit</button>

                    </form>

                </div>
            }
            </div>
        );
    }

}

export default DevProfile;