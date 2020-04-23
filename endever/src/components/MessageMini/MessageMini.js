import React, { Component } from 'react';
import he from 'he';
import './MessageMini.css';

class MessageMini extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    componentDidMount(){
        if(this.props.loadCallback) this.props.loadCallback();

        console.log("messagemini props", this.props);
    }

    initMessageView() {
        if(this.props.setMainViewState) this.props.setMainViewState();
    }
    render() {
        let photoURL = 'https://picsum.photos/98/98';
        let lastMessage = "There isn't a message here yet.";
        let name = 'Tester';
        if(this.props.photoURL) photoURL = this.props.photoURL;
        if(this.props.lastMessage) lastMessage = this.props.lastMessage;
        if(this.props.name) name = this.props.name;


        return (
            // onClick={this.props.clickCallback ? this.props.clickCallback: "" }
            <div className="MessageMini" onClick={this.initMessageView} >
                <div className="MessageMini__Image"><img src={photoURL} alt="Profile image." /></div>
                <div className="MessageMini__FlexRight">
                <div className="MessageMini__ProfileName">{he.decode(name)}</div>
                <div className="MessageMini__LastMessage">{he.decode(lastMessage)}</div>
                </div>            
            </div>
        );
    }
}

export default MessageMini;