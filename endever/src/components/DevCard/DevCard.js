import React, { Component } from 'react';
import he from 'he';

import './DevCard.css';

import '../DevCardButton/DevCardButton';

import GitHubMark from '../../img/GitHub-Mark-120px-plus.png';
import projecticon from '../../img/projecticon.png';
import workicon from "../../img/workicon.png";
import PullRequestIcon from '../../img/git-pull-request.png';
import NoIcon from '../../img/X.png';
import DevCardButton from '../DevCardButton/DevCardButton';


class DevCard extends Component {
    constructor(){
        super();
        this.state = {
            active: true
        };



    }

    componentDidMount() {

        if(this.props.callback) this.props.callback();
    
    }

    sampleCallback = (event) => {
        alert(event.target + " clicked me");
    }
    render() {
        // let  lipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.";
        let url = 'https://picsum.photos/380/380';
        
        if(this.props) {
            // let name = he.encode(this.props.name);
            // let work = he.encode(this.props.work);
            // let bio = he.encode(this.props.bio);
            // let githubname = this.props.githubname;
            // let { projects } = this.props.projects;   
            // let url = this.props.url;
            console.log("props", this.props); 
        }
     
            let name = "Test Testerer"
            let work = "Google, Inc."
            let bio = "Not all who wander are lost, but I definitely am."
            let githubname = "BestPullRequest"
            let projects = ['Gmail', 'VS Code', 'Bootstrap'];
            // console.log("no props");     
        
        
        
        
        
        return (
            <div className="DevCard">
                <div className="DevCard__Image"><img src={url} /></div>
                <div className="DevCard__UserInfo">
                <div className="DevCard__UserInfo__Left">
                    <div className="DevCard__UserInfo__Name">
                        {name}
                    </div>
                    <div className="DevCard__UserInfo__Work"><img src={workicon} />{work}</div>
                    <hr className="divider" />
                    <div className="DevCard__UserInfo__Bio">{bio}</div>
                </div>
                <div className="DevCard__UserInfo__Right">
                    <div className="DevCard__UserInfo__GitHub"><img src={GitHubMark} />{githubname}</div>
                    <div className="DevCard__UserInfo__GitHub__Projects"><img src={projecticon} />{projects[0]}</div>
                    <div className="DevCard__UserInfo__GitHub__Projects"><img src={projecticon} />{projects[1]}</div>
                    <div className="DevCard__UserInfo__GitHub__Projects"><img src={projecticon} />{projects[2]}</div>
                </div>
               
                </div>
                <hr className="BottomDivider" />

                <div className="DevCardButton__Container">
                    <div>
                <DevCardButton orientation="left" icon={NoIcon} callback={this.sampleCallback} />
                <DevCardButton orientation="right" icon={PullRequestIcon} callback={this.sampleCallback} />        
                </div>
                </div>
            </div>
        );
    }
}



export default DevCard;