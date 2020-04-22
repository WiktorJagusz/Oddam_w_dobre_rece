import React, { Component } from "react";

import Decoration from '../../../assets/Decoration.svg';
import FacebookIcon from '../../../assets/Facebook.svg';
import InstagramIcon from '../../../assets/Instagram.svg';
import SendValidForm from './SendValidForm'


const textareaPlaceholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat vel felis eu malesuada. Vivamus malesuada rutrum lacus sed convallis. Quisque eleifend viverra ex, id tincidunt erat convallis a. Nullam placerat at metus eu dapibus.'

class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: "",
            message: "",
            valid: false,
            errors: {
                name:'',
                email:'',
                message:'',
            }
        }
    }

    handleChange = e => {

        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = e => {
        e.preventDefault();
        const {name, email, message, errors} = this.state;

        message.length < 120 ? errors.message = 'Wiadomość musi mieć co najmniej 120 znaków' : errors.message = '';
        /\s/g.test(name) || name.length < 1 ? errors.name = 'Podane imię jest nieprawidłowe!' : errors.name = '';
       
        const validateEmail = email => {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        !validateEmail(email) ? errors.email = 'Podany email jest nieprawidłowy!' : errors.email = '';

        this.setState({
            valid: errors.message.length + errors.name.length + errors.email.length,
            name: '',
            email: '',
            message: ''
        })
    }
    render(){
        const { name, email, message, valid, errors } = this.state
        console.log(this.state.name)
        console.log(this.state.email)
        console.log(this.state.message)
        console.log(this.state.errors.name)
        console.log(this.state.errors.email)
        console.log(this.state.errors.message)
        console.log(valid)
        return(
            <footer className='contact' id='contact'>
                <div className='background'></div>
                <div className='rightSideContentBox'>
                    <div className='decoration'>
                        <h1>Komu pomagamy?</h1>
                        <img src={ Decoration } alt="motyw dekoracyjny"/>
                    </div>
                    {valid.lenght === 0 && <SendValidForm name={name} email={email} message={message}/>}
                    <form onSubmit={this.handleSubmit}>
                        <div className="name">
                            <label>
                            Wpisz swoje imię
                            <input type='text' name='name' value={this.state.name} placeholder='Krzysztof' onChange={this.handleChange}/>
                            {errors.name.length > 0 && <span>{ errors.name }</span>}
                        </label>
                        </div>
                        <div className='email'>
                            <label>
                            Wpisz swój email
                            <input typ='text' name='email' value={this.state.email} placeholder='abc@xyz.pl' onChange={this.handleChange}/>
                            {errors.email.length > 0 && <span>{ errors.email }</span>}
                        </label>
                        </div>
                        <div className='text'>
                            <label>
                            Wpisz swoją wiadomość
                            <textarea name='message' value={this.state.message} placeholder={ textareaPlaceholder } onChange={this.handleChange}/>
                            {errors.message.lenght > 0 && <span>{ errors.message }</span>}
                        </label>
                        
                        </div>
                        <div className='submit'>
                            <input type="submit" value="Wyślij" />
                        </div>
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