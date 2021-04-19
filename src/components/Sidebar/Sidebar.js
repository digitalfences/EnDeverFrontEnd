import React, { Component ,useReducer,useState} from 'react';
import {Link, Route} from 'react-router-dom';
import '../../fonts/fonts.css';
import './Sidebar.css';

import MatchMini from '../MatchMini/MatchMini';
import MessageMini from '../MessageMini/MessageMini';
import DevProfile from '../DevProfile/DevProfile';

const Sidebar = (props) => {
    const [display, setDisplay] = useState('matches')
    const [edit, setEdit] = useState('false');
    let url = 'https://picsum.photos/98/98';

    const populateUserMatches = () => {

        //foreach match in database
        //return <MatchMini name={name} photoURL={photoURL} />
        //start message view on click

    }
    if (!props.user) {
        return <div>Loading...</div>;
    }
        return (
            <div className="Sidebar">
                <div className="Sidebar__Views">

                { display === 'matches' ?
                    <>
                        <div className="MatchesViewLink active" ><Link to="/" onClick={() => setDisplay('matches')}>Matches</Link></div>
                        <div className="MessagesViewLink"><Link to="/messages" onClick={() => setDisplay('messages')}>Messages</Link></div>
                    </>
                :
                <>
                    <div className="MatchesViewLink" ><Link to="/" onClick={() => setDisplay('matches')}>Matches</Link></div>
                    <div className="MessagesViewLink active"><Link to="/messages" onClick={() => setDisplay('messages')}>Messages</Link></div>
                </>
                }
                
                </div>


            {display === 'matches' ? 

                    <div className="Sidebar__Matches__Container">
                    
                      {props.user.Account.MatchedUsers.length > 0 ? 
                        <div className="Sidebar__Matches__Container__Mini">
                          {props.user.Account.MatchedUsers.map((user) => {
                          return(<MatchMini name={user.UserName} photoURL={user.Account.Picture}key={user._id}></MatchMini>)})}
                      
                        </div>
                        :
                        <></>
                          }
                    </div>

            : 
                
                <div className="Sidebar__Message__Container">
                    {/* <h1>Messages View</h1> */}
                    {props.user.Account.MatchedUsers.length > 0 ? 
                        <div className="Sidebar__Matches__Container__Mini">
                          {props.user.Account.MatchedUsers.map((user) => {
                          return(<MessageMini name={user.UserName} photoURL={user.Account.Picture}key={user._id}></MessageMini>)})}
                      
                        </div>
                        :
                        <></>
                          }


                </div>    
            
            }

            {edit === 'true' ? 
            <div className="Zindex">
                <DevProfile />

            </div>
            
             : ''}


            </div>

        );
    }



export default Sidebar;