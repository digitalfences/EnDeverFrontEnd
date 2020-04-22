import React, { Component } from 'react';
import MatchedProfile from '../MatchedProfile/MatchedProfile';
import SingleMessage from '../SingleMessage/SingleMessage';

import { animateScroll } from "react-scroll";

import './Messenger.css';

class Messenger extends Component {
    constructor(){
        super();


        let cid ='ergtjksreltghksejrng';
        let name = 'Roger';
        let photoURL = 'https://picsum.photos/98/98';
        

        this.state = {
            conversationID: cid,
            name: name,
            photoURL: photoURL,

        };

    }


    componentDidMount(){
        if(this.props.callback) this.props.callback();
        this.scrollToBottom();
    }

    scrollToBottom() {
        animateScroll.scrollToBottom({
          containerId: "msgid"
        });
    }

    render() {
        

        if(this.props.conversationID &&  this.props.name && this.props.photoURL) {
            let cid = this.props.conversationID;
            let name = this.props.name;
            let photoURL = this.props.photoURL;
        }

        return (
            <>
            <div className="Messenger">
                <div className="Messenger__Messages" id="msgid">
                    <SingleMessage side="left" message="Heyyy" />
                    <SingleMessage side="Right" message="Yo" />
                    <SingleMessage side="left" message="Heyyy" />
                    <SingleMessage side="Right" message="Yo" />
                    <SingleMessage side="left" message="Heyyy" />
                    <SingleMessage side="Right" message="Yo" />
                    <SingleMessage side="left" message="Heyyy" />
                    <SingleMessage side="Right" message="Yo" />
                    <SingleMessage side="left" message="Heyyy" />
                    <SingleMessage side="Right" message="Yo" />
                    <SingleMessage side="left" message="Heyyy" />
                    <SingleMessage side="Right" message="Yo" />
                    <SingleMessage side="left" message="Heyyy" />
                    <SingleMessage side="Right" message="Yo" />
                    <SingleMessage side="left" message="Heyyy" />
                    <SingleMessage side="Right" message="Yo" />
                    <SingleMessage side="left" message="Heyyy" />
                    <SingleMessage side="left" message="This is a much longer message.This is a much longer message.This is a much longer message.This is a much longer message.This is a much longer message.This is a much longer message. This is a much longer message. This is a much longer message." />
                    <SingleMessage side="right" message="This is a much longer message.This is a much longer message.This is a much longer message.This is a much longer message.This is a much longer message.This is a much longer message. This is a much longer message. This is a much longer message." />
                    <SingleMessage side="left" message="Ayy" />
                    <SingleMessage side="right" message="ohhh" />
                    <SingleMessage side="Right" message="r u up?" />

                </div>
                <div className="Messenger__Controls">

                <input className="Messenger__Controls__TextInput" type="text" placeholder="Type a message"/>
                <button className="Messenger__Controls__Submit">Send</button>

                </div>
                
                
            </div>

            <MatchedProfile />

    
            </>
        );
    }
}

export default Messenger;