import React, { Component } from "react";

import Decoration from '../../../assets/Decoration.svg';
import FacebookIcon from '../../../assets/Facebook.svg';
import InstagramIcon from '../../../assets/Instagram.svg';

class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: "teaxt area value"
        }
    }
    render(){
        return(
            <footer className='contact' id='contact'>
                <div className='background'></div>
                <div className='rightSideContentBox'>
                    <div className='decoration'>
                        <h1>Komu pomagamy?</h1>
                        <img src={ Decoration } alt="motyw dekoracyjny"/>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Wpisz swoje imię
                            <input type='text'/>
                        </label>
                        <label>
                            Wpisz swój email
                            <input typ='text'/>
                        </label>
                        <textarea />
                        <input type="submit" value="Wyślij" />
                    </form>
                    <div className='icons'>
                        <img src={ FacebookIcon } alt="Facebook Icon"/>
                        <img src={ InstagramIcon } alt="Instagram Icon"/>
                    </div>
                    
                </div>
                <div className='copyrights'><h3>Copyright by Coders Lab</h3></div>
            </footer>
        )
    }
}

export default Contact;