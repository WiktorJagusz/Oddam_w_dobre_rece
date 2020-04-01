import React, { Component } from "react";
import Decoration from '../../../assets/Decoration.svg'

class Intro extends Component{
    render(){
        return(
            <div className='intro'>
                <div className='introFlexBox'>
                    <h1>Zacznij pomagać!</h1>
                    <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={Decoration} alt="motyw dekoracyjny"/>
                    <div className="headerButtons">
                        <div><p>ODDAJ RZECZY</p></div>
                        <div><p>ZORGANIZUJ ZBIÓRKĘ</p></div>
                    </div>
                </div>   
            </div>
        )
    }
}

export default Intro;