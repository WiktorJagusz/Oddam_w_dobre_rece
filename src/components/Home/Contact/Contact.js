import React, { Component } from "react";

import Decoration from '../../../assets/Decoration.svg';

class Contact extends Component {
    render(){
        return(
            <div className='contact'>
                <div className='rightSideContentBox'>
                    <div className='decoration'>
                        <h1>Komu pomagamy?</h1>
                        <img src={ Decoration } alt="motyw dekoracyjny"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;