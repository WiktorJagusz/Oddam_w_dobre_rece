import React, { Component } from 'react';

import Header from './Home/Header/Header';
import ThreeColumns from './Home/ThreeColumns/ThreeColumns'
import FourSteps from './Home/FourSteps/FourSteps'
import AboutUs from './Home/AboutUs/AboutUs';
import WhoWeHelp from './Home/WhoWeHelp/WhoWeHelp';

class Home extends Component{
    render(){
        return(
            <>
                <Header />
                <ThreeColumns />
                <FourSteps />
                <AboutUs />
                <WhoWeHelp />
            </>
        )
    }
}

export default Home;