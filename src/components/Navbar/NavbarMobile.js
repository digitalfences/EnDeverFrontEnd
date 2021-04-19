import React, { Component } from 'react';
import '../../fonts/fonts.css';
import './NavBarMobile.css';
import endevercircle from '../../img/endevercircle.png';
import messages from '../../img/imessage.png';

const NavBarMobile = () => {
        return (
            <div className="NavBarMobile">
                <img className='feed' src={endevercircle}></img>
                <img className='messages' src={messages}></img>
            </div>
        );
    }

export default NavBarMobile;