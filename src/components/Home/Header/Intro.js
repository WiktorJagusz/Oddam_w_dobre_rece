import React, { Component } from "react";
import Decoration from '../../../assets/Decoration.svg'

class Intro extends Component{
    render(){
        return(
            <div className='intro'>
                <div className='introFlexBox'>
                    <h1>Zacznij pomagać! <br></br>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={Decoration} alt="motyw dekoracyjny"/>
                    <div className="headerButtons">
                        <button>ODDAJ RZECZY</button>
                        <button>ZORGANIZUJ ZBIÓRKĘ</button>
                    </div>
                </div>   
            </div>
        )
    }
}

export default Intro;