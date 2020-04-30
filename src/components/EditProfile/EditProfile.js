import React, { Component } from 'react';
import './EditProfile.css';

class EditProfile extends Component {
    constructor(){
        super();
        this.state = {
            expanded: false,
            class: 'EditMyProfile'
        }
    }

    expandEditor = () => {
        
        if(this.state.expanded === false) {
            this.setState({ 
                expanded: true, 
                class: 'EditMyProfile big'
            })
        } 
        else {
            this.setState({ 
                expanded: false,
                class: 'EditMyProfile'
            })
        }

    }


    render() {
        return (
            <div className="EditMyProfile__Container">
                <div className={this.state.class}>
                    <div className="EditButton">Edit My Profile</div>
                </div>
                
            </div>
        );
    }
}

export default EditProfile;