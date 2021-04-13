import React, { Component } from 'react';
import he from 'he';
import axios from 'axios';


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
            active: true,
            hideButtons: false
        };

    }

    componentDidMount() {
        this.props.sessionCheck();
        
        if(this.props.callback) this.props.callback();
        if(this.props.hideButtons === 'true') this.setState({ hideButtons: true});

        this.getUserFromDatabase();
        
    }

    getUserFromDatabase = () => {
        let baseURL = "http://localhost:4000";
        // let baseURL = "http://tigerkingbackend.herokuapp.com/";
        let params = '/account/id/';
        let test = this.props._id;
        console.log(this.props)
        let totalURL = baseURL+params+test;

        axios.get(totalURL, {
            withCredentials: true
        }).then(res => {
            console.log(res);
            let cardID = res.data[0]._id;
            let cardGHuser = res.data[0].UserName;
            let cardBio = res.data[0].Account.Bio;
            let cardPicture = res.data[0].Account.Picture;
            let cardRepos = res.data[0].Account.Repositories.slice(0,3);
            
            // console.log(cardRepos);

            this.setState({
                card: {
                    cardID: cardID,
                    cardGHuser: cardGHuser,
                    cardBio: cardBio,
                    cardPicture: cardPicture,
                    cardRepos: cardRepos
                }
            })
        })
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
        }
     
            // let name = "Test Testerer"
            // let work = "Google, Inc."
            // let bio = "Not all who wander are lost, but I definitely am."
            // let githubname = "BestPullRequest"
            // let projects = ['Gmail', 'VS Code', 'Bootstrap'];
            // console.log("no props");     
        
        
        if("card" in this.state) {   
            
            let {cardID, cardGHuser, cardBio, cardPicture, cardRepos} = this.state.card;
        return (
            // <div className="DevCard">
            //     <div className="DevCard__Image"><img src={url} /></div>
            //     <div className="DevCard__UserInfo">
            //     <div className="DevCard__UserInfo__Left">
            //         <div className="DevCard__UserInfo__Name">
            //             {name}
            //         </div>
            //         <div className="DevCard__UserInfo__Work"><img src={workicon} />{work}</div>
            //         <hr className="divider" />
            //         <div className="DevCard__UserInfo__Bio">{bio}</div>
            //     </div>
            //     <div className="DevCard__UserInfo__Right">
            //         <div className="DevCard__UserInfo__GitHub"><img src={GitHubMark} />{githubname}</div>
            //         <div className="DevCard__UserInfo__GitHub__Projects"><img src={projecticon} />{projects[0]}</div>
            //         <div className="DevCard__UserInfo__GitHub__Projects"><img src={projecticon} />{projects[1]}</div>
            //         <div className="DevCard__UserInfo__GitHub__Projects"><img src={projecticon} />{projects[2]}</div>
            //     </div>
               
            //     </div>
            //     <hr className="BottomDivider" />

            //     <div className="DevCardButton__Container">
            //         <div>
   
            //            <DevCardButton orientation="left" icon={NoIcon} callback={this.sampleCallback} />
            //             <DevCardButton orientation="right" icon={PullRequestIcon} callback={this.sampleCallback} />        

                 
            //     </div>
            //     </div>
            // </div>
            <div className="DevCard">
            <div className="DevCard__Image"><img src={cardPicture} /></div>
            <div className="DevCard__UserInfo">
            <div className="DevCard__UserInfo__Left">
                <div className="DevCard__UserInfo__Name">
                    {/* {name} */}
                </div>
                <div className="DevCard__UserInfo__Work"><img src={workicon} /></div>
                <hr className="divider" />
                <div className="DevCard__UserInfo__Bio">{cardBio}</div>
            </div>
            <div className="DevCard__UserInfo__Right">
                <div className="DevCard__UserInfo__GitHub"><img src={GitHubMark} />{cardGHuser}</div>
                <div className="DevCard__UserInfo__GitHub__Projects"><img src={projecticon} />{cardRepos[0]}</div>
                <div className="DevCard__UserInfo__GitHub__Projects"><img src={projecticon} />{cardRepos[1]}</div>
                <div className="DevCard__UserInfo__GitHub__Projects"><img src={projecticon} />{cardRepos[2]}</div>
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
        else {
            return(
                <div>Loading...</div>

            );
        }
    }
}



export default DevCard;