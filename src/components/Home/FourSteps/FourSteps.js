import React, { Component } from "react";

import Decoration from '../../../assets/Decoration.svg';
import TshirtIcon from '../../../assets/Icon-1.svg';
import BagIcon from '../../../assets/Icon-2.svg';
import MagnifierIcon from '../../../assets/Icon-3.svg';
import RecycleIcon from '../../../assets/Icon-4.svg';

import { Link } from 'react-router-dom'


class FourSteps extends Component{
    render(){
        return(
            <div className='fourStepsContainer' id='fourSteps'>
                <div className='decoration'>
                    <h1>Wystarczą 4 proste kroki</h1>
                    <img src={ Decoration } alt="motyw dekoracyjny"/>
                </div>
                
                <div className='simpleSteps'>
                    <div className='iconBox'>
                        <img src={ TshirtIcon } alt='t-shirt icon'/>
                        <h3>Wybierz rzeczy</h3>
                        <hr></hr>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className='iconBox'>
                        <img src={ BagIcon } alt='bag icon'/>
                        <h3>Spakuj je</h3>
                        <hr></hr>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className='iconBox'>
                        <img src={ MagnifierIcon } alt='magnifier icon'/>
                        <h3>Zdecyduj komu chcesz pomóc</h3>
                        <hr></hr>
                        <p>Wybierz zaufane miejsce</p>
                    </div>
                    <div className='iconBox'>
                        <img src={ RecycleIcon } alt='recycle icon'/>
                        <h3>Zamów kuriera</h3>
                        <hr></hr>
                        <p>Kurier przyjedzie w dogodnym terminie</p>
                    </div>
                    
                </div>
                <div className='giveAwayFlexBox'>
                    <button><Link to='/login'>ODDAJ RZECZY</Link></button>
                </div>
                    
            </div>
        )
    }
}

export default FourSteps;