import React, { Component } from "react";
import Navigation from './Navigation'

import { Link } from 'react-router-dom';


class TopMenu extends Component{
    render(){
        return(
            <div className="topMenu">
                <div className="loginRegister">
                    <ul>
                        <li className='login'><Link to='/login'>Zaloguj</Link></li>
                        <li className='register'><Link to='/register'>Załóż konto</Link></li>
                    </ul>  
                </div>
                <Navigation/>
            </div>
        )
    }
}

export default TopMenu;