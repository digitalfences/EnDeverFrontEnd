import React, { Component } from 'react';
import './DevCard.css';
import GitHubMark from '../../img/GitHub-Mark-120px-plus.png';
import projecticon from '../../img/projecticon.png';

class DevCard extends Component {
    constructor(){
        super();
        this.state = {

        };


    }
    render() {
        let url = 'https://picsum.photos/380/380';
        return (
            <div className="DevCard">
                <div className="DevCard__Image"><img src={url} /></div>
                <div className="DevCard__UserInfo">
                <div className="DevCard__UserInfo__Left">
                    <div className="DevCard__UserInfo__Name">
                        Daniel Edminster
                    </div>
                </div>
                <div className="DevCard__UserInfo__Right">
                    <div className="DevCard__UserInfo__GitHub"><img src={GitHubMark} />Daniel-Edminster</div>
                    <div className="DevCard__UserInfo__GitHub__Projects"><img src={projecticon} />Pokedex UI</div>
                    <div className="DevCard__UserInfo__GitHub__Projects"><img src={projecticon} />Gameofbands.com</div>
                    <div className="DevCard__UserInfo__GitHub__Projects"><img src={projecticon} />EnDever</div>
                </div>
                
                </div>
                
            </div>
        );
    }
}



export default DevCard;