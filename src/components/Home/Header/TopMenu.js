import React, { Component } from "react";

class TopMenu extends Component{
    render(){
        return(
            <div className="topMenu">
                <div className="loginRegister">
                    <ul>
                        <li className='login'>Zaloguj</li>
                        <li className='register'>Załóż konto</li>
                    </ul>
                    
                </div>
                <div className="navigation">
                    <ul>
                        <li>Start</li>
                        <li>O co chodzi?</li>
                        <li>O nas</li>
                        <li>Fundacja i organizacje</li>
                        <li>Kontakt</li>
                    </ul>
                    
                </div>
            </div>
        )
    }
}

export default TopMenu;