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

    }
    render() {

        return (
            <div className="MatchMini">
                <div className="MatchMini__Grid">
                    <div className="MatchMini__Grid__Name">{this.props.name}</div>
                    <div className="MatchMini__Grid__Photo"><img src={this.props.photoURL} /></div>
                </div>
                
                
            </div>
        );
    }
}


export default MatchMini;