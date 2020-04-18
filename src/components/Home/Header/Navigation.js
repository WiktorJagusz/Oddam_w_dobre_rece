import React, { Component } from "react";

import { Link } from 'react-scroll'

class Navigation extends Component{
    render(){
        return(
            <div className="navigation">
                    <ul>
                        <li>Start</li>
                        <li><Link to='fourSteps'>O co chodzi?</Link></li>
                        <li><Link to='aboutUs'>O nas</Link></li>
                        <li><Link to='whoWeHelp'>Fundacja i organizacje</Link></li>
                        <li><Link to='contact'>Kontakt</Link></li>
                    </ul> 
                </div>
        )
    }
}

export default Navigation;


//                         <li>Start</li>
//                         <li><Link to='fourSteps'>O co chodzi?</Link></li>
//                         <li><link to='aboutUs'>O nas</link></li>
//                         <li><Link to='whomWeHelp'>Fundacja i organizacje</Link></li>
//                         <li><Link to='contact'>Kontakt</Link></li>