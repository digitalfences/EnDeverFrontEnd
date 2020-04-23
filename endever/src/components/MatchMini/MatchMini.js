import React, { Component } from 'react';
// import Sidebar from '../Sidebar/Sidebar';
import './MatchMini.css';

class MatchMini extends Component {
    constructor(){
        super();

        //this.props.thumb
        //this.props.name

    }

    componentDidMount(){
        if(this.props.loadCallback) this.props.loadCallback();
    }

    noCallback = () => {

    }

    render() {

        return (
            <div className="MatchMini">
                <div className="MatchMini__Grid" onClick={ (this.props.clickCallback) ? this.props.clickCallback : this.noCallback }>
                    <div className="MatchMini__Grid__Name">{this.props.name}</div>
                    <div className="MatchMini__Grid__Photo"><img src={this.props.photoURL} /></div>
                </div>
                
                
            </div>
        );
    }
}


export default MatchMini;