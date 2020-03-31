import React, { Component } from "react";

import TopMenu from './TopMenu';
import Intro from './Intro';

class Header extends Component{
    render(){
        return(
            <header>
                <div className="headerFlexContainer">
                    <TopMenu />
                    <Intro />
                </div>
                
            </header>
        )
    }
}

export default Header;