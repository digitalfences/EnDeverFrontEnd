import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NoProfiles.css';

class NoProfiles extends Component {
    render() {
        return (
            <div className="NoProfiles">
                <div>
                You ran out of profiles to swipe through. Consider &nbsp;<Link to="/profile/edit">updating yours</Link> to get more matches.
                </div>
            </div>
        );
    }
}



export default NoProfiles;