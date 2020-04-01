import React, { Component } from 'react';

import Header from './Home/Header/Header';
import ThreeColumns from './Home/ThreeColumns/ThreeColumns'

class Home extends Component{
    render(){
        return(
            <>
                <Header />
                <ThreeColumns />
            </>
        )
    }
}

export default Home;