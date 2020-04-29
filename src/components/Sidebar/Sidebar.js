import React, { Component  } from 'react';
import {Link, Route} from 'react-router-dom';
import '../../fonts/fonts.css';
import './Sidebar.css';

import MatchMini from '../MatchMini/MatchMini';
import MessageMini from '../MessageMini/MessageMini';
import DevProfile from '../DevProfile/DevProfile';

class Sidebar extends Component {
    constructor() {
        super()
        this.state = {
            sidebarDisplay: 'matches',
            sidebarEdit: false
        }
    }
    componentDidMount() {
        if(this.props.callback) this.props.callback();
        // console.log(this.props);
        this.props.sessionCheck();
    }

    populateUserMatches = () => {

        //foreach match in database
        //return <MatchMini name={name} photoURL={photoURL} />
        //start message view on click

    }


    setMatchesView = () => {
        this.setState( { sidebarDisplay: 'matches' } );

    }

    setMessagesView = () => {
        this.setState( { sidebarDisplay: 'messages' } );
    }

    setCardView = () => {
        this.props.setMainViewState("cards");
    }
    
    toggleSidebarProfileEdit = () => {
        this.setState({ sidebarEdit: !this.state.sidebarEdit }, this.logState);

    }

    logState = () => console.log(this.state);

    render() {
       
        let url = 'https://picsum.photos/98/98';

        let username = this.props.username;
        let picture = this.props.picture;

     

        return (
            <div className="Sidebar">
                <div className="Sidebar__Profile" onClick={this.toggleSidebarProfileEdit}>
                    <img className="Sidebar__Profile__Picture" src={picture} />
                    <div>{username}</div>
                </div>

                <div className="Sidebar__Views">

                { this.state.sidebarDisplay === 'matches' ?
                    <>
                        <div className="MatchesViewLink active" ><Link to="/" onClick={this.setMatchesView}>Matches</Link></div>
                        <div className="MessagesViewLink"><Link to="/messages" onClick={this.setMessagesView}>Messages</Link></div>
                    </>
                :
                <>
                    <div className="MatchesViewLink" ><Link to="/" onClick={this.setMatchesView}>Matches</Link></div>
                    <div className="MessagesViewLink active"><Link to="/messages" onClick={this.setMessagesView}>Messages</Link></div>
                </>
                }
                
                </div>


            {this.state.sidebarDisplay === 'matches' ? 

                    <div className="Sidebar__Matches__Container">
                    <div className="Sidebar__Matches__Container__Mini">
                        <MatchMini name="Daniel" photoURL={url} /> 
                        <MatchMini name="Galen" photoURL={url} /> 
                        <MatchMini name="Shimin" photoURL={url} /> 
                        <MatchMini name="Roger" photoURL={url} /> 
                        <MatchMini name="Noah" photoURL={url} /> 
                        </div>
                    </div>

            : 
                
                <div className="Sidebar__Message__Container">
                    {/* <h1>Messages View</h1> */}
                        <MessageMini name="Daniel" photoURL={url} setMainViewState={this.props.setMainViewState} /> 
                        <MessageMini name="Galen" photoURL={url} setMainViewState={this.props.setMainViewState}/> 
                        <MessageMini name="Shimin" photoURL={url} setMainViewState={this.props.setMainViewState} /> 
                        <MessageMini name="Roger" photoURL={url} setMainViewState={this.props.setMainViewState}/> 
                        <MessageMini name="Noah" photoURL={url}  setMainViewState={this.props.setMainViewState}/> 



                </div>    
            
            }

            {this.state.sidebarEdit === 'true' ? 
            <div className="Zindex">
                            {/* <DevProfile /> */}
                    Edit My Profile
            </div>
                
             : ''}


            </div>

        );
    }
}



export default Sidebar;