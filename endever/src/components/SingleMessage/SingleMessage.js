import React, { Component } from 'react';
import he from 'he';

import './SingleMessage.css';

class SingleMessage extends Component {
    constructor(){
        super();

        this.state = {
            
        }
    }

    componentDidMount(){
        if(this.props.loadCallback) this.props.loadCallback();
    }
    render() {
        if(this.props.side === 'left') {

            return (
                <div className="SingleMessage">
                    <div className="Left">
                        <div className="Left__TextContent">{he.decode(this.props.message)}</div>
                    </div>
                    
                </div>
            );
        }
        else {
            return (
                <div className="SingleMessage">
                    <div className="Right">
                        <div className="Right__TextContent">{he.decode(this.props.message)}</div>
                    </div>
                </div>
            );
        }
    }
}

export default SingleMessage;