import React, { Component } from "react";

class ThreeColumns extends Component{
    render(){
        return(
            <div className='threeColumns'>
                <div>
                    <h1>
                        10
                    </h1>
                    <h3>
                        ODDANYCH WORKÓW
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                    </p>
                </div>
                <div>
                    <h1>
                        5
                    </h1>
                    <h3>
                        WSZYSTKICH ORGANIZACJI
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                    </p>
                </div>
                <div>
                    <h1>
                        7
                    </h1>
                    <h3>
                        ZORGANIZOWANYCH ZBIÓREK
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                    </p>
                </div>
            </div>
        )
    }
}

export default ThreeColumns;