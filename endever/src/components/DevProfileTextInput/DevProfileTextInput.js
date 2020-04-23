import React, { Component } from 'react';
import './DevProfileTextInput.css';

class DevProfileTextInput extends Component {
    constructor(){
        super();

        this.state = {

        }
    }
    componentDidMount() {
        if(this.props.callback) this.props.callback();
    }
    render() {
        return (
            <div className="DevProfileTextInput">
                <label className="DevProfileTextInput__Label">{this.props.label}</label>
                <input type="text" className="DevProfile__Controls__TextInput" defaultValue={this.props.dbvalue} name={this.props.schemaName} />
                
            </div>
        );
    }
}

export default DevProfileTextInput;