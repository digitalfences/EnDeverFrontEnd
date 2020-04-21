import React, { Component  } from 'react';
import '../../fonts/fonts.css';
import './Sidebar.css';

import MatchMini from '../MatchMini/MatchMini';

class Sidebar extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    componentDidMount() {
        if(this.props.callback) this.props.callback();
    }

    populateUserMatches = () => {

        //foreach match in database
        //return <MatchMini name={name} photoURL={photoURL} />
        //start message view on click

    }

    render() {
       
        let url = 'https://picsum.photos/98/98';
        return (
            <div className="Sidebar">
                <div className="Sidebar__Profile">
                    <div>O</div>
                    <div>My Profile</div>
                </div>

                <div className="Sidebar__Views">
                    <div>Matches</div>
                    <div>Messages</div>
                </div>

                <div className="Sidebar__Matches__Container">
                <div className="Sidebar__Matches__Container__Mini">
                    <MatchMini name="Daniel" photoURL={url} /> 
                    <MatchMini name="Galen" photoURL={url} /> 
                    <MatchMini name="Shimin" photoURL={url} /> 
                    <MatchMini name="Roger" photoURL={url} /> 
                    <MatchMini name="Noah" photoURL={url} /> 
                    </div>

                </div>
            </div>

        );
    }
}



export default Sidebar;