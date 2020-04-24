import React, { Component } from 'react';
import '../../fonts/fonts.css';
import './Navbar.css';
import endevercircle from '../../img/endevercircle.png';


class Navbar extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div className="Navbar">
                <div className="Navbar__LogoFlexbox">
                <img src={endevercircle} className="ProductLogo" /> EnDever
                   
                    </div>
                
            </div>
        );
    }
}

export default Navbar;