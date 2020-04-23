import React from 'react';
import './MainUIButton.css';

const MainUIButton = (props) => {
    let label = "Default";
    let callback = noCallback;
    let type = 'default';
    if(props.label) label = props.label;
    if(props.type) type = props.type;
    if(props.propfunction) callback = props.propfunction;

    if(!props.icon) {
        return (
            <button className="MainUIButton" onClick={callback}>
                {label}
            </button>
        );

    }
    else {
        return (
            <button className="MainUIButton" onClick={callback}>
                <div className="MainUIButton__Content">
                    <div className="MainUIButton__Content__Icon"><img src={props.icon} /></div>
                    <div className="MainUIButton__Content__Label">{label}</div>
                </div>
            </button>
        );
    }
};

const noCallback = () => {
    alert("This button has no callback");
}

export default MainUIButton;