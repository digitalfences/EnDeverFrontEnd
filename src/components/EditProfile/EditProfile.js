import React, { Component } from 'react';
import './EditProfile.css';

class EditProfile extends Component {
    constructor(){
        super();
        this.state = {
            expanded: false,
            class: 'EditMyProfile',
            containerclass: ''
        }
    }

    expandEditor = () => {
        
        if(this.state.expanded === false) {
            this.setState({ 
                expanded: true, 
                class: 'EditMyProfile larger',
                containerclass: ' EditExpanded'
            })
        } 
        else {
            this.setState({ 
                expanded: false,
                class: 'EditMyProfile',
                containerclass: ''
            })
        }

    }


    render() {
        return (
            <div className="EditMyProfile__Container">
                <div className={this.state.class+this.state.containerclass} >
                    <div className="EditButton" onClick={this.expandEditor}>Edit My Profile</div>
                </div>
                
            </div>
        );
    }
}

export default EditProfile;