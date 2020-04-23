import React, { Component } from 'react';
import './DevCardButton.css';

const DevCardButton = (props) => {

    return (
        <button onClick={props.callback} className={`DevCardButton ${props.orientation}`}><img src={props.icon} /></button>
    );
    
}


export default DevCardButton;