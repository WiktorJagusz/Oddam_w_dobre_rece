import React, { Component } from 'react';

import Header from './Home/Header/Header';
import ThreeColumns from './Home/ThreeColumns/ThreeColumns'
import FourSteps from './Home/FourSteps/FourSteps'

class Home extends Component{
    render(){
        return(
            <>
                <Header />
                <ThreeColumns />
                <FourSteps />
            </>
        )
    }
}

export default Home;