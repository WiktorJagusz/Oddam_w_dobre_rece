import React, { Component } from "react";
import Decoration from "../../../assets/Decoration.svg";
import Signature from "../../../assets/Signature.svg";

class AboutUs extends Component{
    render(){
        return(
            <div className='aboutUs' id='aboutUs'>
                <div className='square description'>
                    <h1>O nas</h1>
                    <img src={ Decoration } alt='motyw dekoracyjny'/>
                    <p>
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                    </p>
                    <img src={ Signature } alt='signature' className='sig'></img>
                </div>
                <div className='square photo'>
                    
                </div>
            </div>
        )
    }
}

export default AboutUs;