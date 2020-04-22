import React, { Component } from 'react';
import DevProfile from '../DevProfile/DevProfile';
import './MatchedProfile.css';

class MatchedProfile extends Component {
    constructor(){
        super();

        this.state = {
            hello: 'hi'
        }
    }

    componentDidMount() {
        this.props.sessionCheck();
        
        if(this.props.callback) this.props.callback();
    }

    render() {
        let name = 'Roger';
        let photoURL = 'https://picsum.photos/98/98';
        let work = 'Google, Inc';
        let bio = 'sudo apt-get rekt';
        let projects = ['Git SCM', 'GMail', 'Google Wave'];
        let githubname = 'AptGetRektNerd';

        if(this.props.photoURL) photoURL = this.props.photoURL;
        if(this.props.name) name = this.props.name;
        if(this.props.work) work = this.props.work;
        if(this.props.bio) bio = this.props.bio;
        // if(this.props.projects) { projects } this.props.projects;
        if(this.props.githubname) githubname = this.props.githubname;


        return (
            <div className="MatchedProfile">
                {/* <DevCard hideButtons="true" /> */}

                <DevProfile />
                
            </div>
        );
    }
}

export default MatchedProfile;