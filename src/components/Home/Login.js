import React, { Component } from 'react';

import Decoration from '../../assets/Decoration.svg'
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div className='login'>
                <div className="loginSection">
                    <div className='headerFlexContainer'>
                        <div className="topMenu">
                            <div className="loginRegister">
                                <ul>
                                    <li className='login'><Link to='/login'><p>Zaloguj</p></Link></li>
                                    <li className='register'><Link to='/register'><p>Załóż konto</p></Link></li>
                                </ul>
                            </div>
                            <div className="navigation">
                                <ul>
                                    <li><Link to='/'>Start</Link></li>
                                    <li>O co chodzi?</li>
                                    <li>O nas</li>
                                    <li>Fundacja i organizacje</li>
                                    <li>Kontakt</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='formSection'>
                    <div className='decorationLogin'>
                        <h1>Zaloguj się</h1>
                        <img src={Decoration} alt="motyw dekoracyjny" />
                    </div>
                    <form>
                        <label htmlFor='email'>
                            Email
                            <input type='email' name='email' />
                        </label>
                        <label htmlFor='password'>
                            Password
                            <input type='password' name='password' />
                        </label>
                        <div className='loginFormButtons'>
                            <Link to='/register'>Załóż konto</Link>
                            <input type="submit" value="Zaloguj" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;