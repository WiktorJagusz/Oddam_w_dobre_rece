import React, { Component } from 'react';
import Decoration from '../../../assets/Decoration.svg';




class WhoWeHelp extends Component {
    constructor(props){
        super(props);
        this.state = {
            page: 1,
            elementsPerPage: 3,
            whoWeHelpData: false,
            whoWeHelpId: "Fundacjom",
        }
    }

    componentDidMount() {
        console.log("fetch załadowany")
        this.fetchComponent = fetch(`http://localhost:3000/whoWeHelp`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'cors': 'no-cors'
              },
        })
        .then(response => response.json())
        .then(response => this.setState({whoWeHelpData: response}))
        .catch( err => {console.log('Błąd!', err);});
        
    }
    componentWillUnmount(){
        this.fetchComponent = false
    }
    
    handleClick = (e) => { 
        this.setState({
            whoWeHelpId: e.target.name,
            page: 1
        })
    };

    handlePageClick = (e) => {
        this.setState({page: e.target.id})
    };

    render(){
        if (this.state.whoWeHelpData === false) {
            return null;
        } else {
            const { whoWeHelpData, page, elementsPerPage } = this.state;
            // Logic for displaying current page items
            const indexOfLastElement = page * elementsPerPage;
            const indexOfFirstElement = indexOfLastElement - elementsPerPage;
            const currentWhoWeHelpData = whoWeHelpData.find(e=>e.type === this.state.whoWeHelpId).nameGoalStuff.slice(indexOfFirstElement, indexOfLastElement);
            const showUpList = currentWhoWeHelpData.map((element, index)=> <li key={ index }>
                <span className='leftSpan'>
                    <h3>{ element.name }</h3>
                    <p>{ element.goal }</p>
                </span>
                <span className='rightSpan'>
                <p>{ element.stuff }</p>
                </span>
            </li> )
            //   Logic for displaying page numbers
            const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(whoWeHelpData.find(e=>e.type === this.state.whoWeHelpId).nameGoalStuff.length / elementsPerPage); i++) {
                pageNumbers.push(i);
            }
            const renderPageNumbers = pageNumbers.map(number => {
                return (
                    <li
                    key={number}
                    id={number}
                    onClick={this.handlePageClick}
                    >
                    {number}
                    </li>
                );
            });
            return(
                <div className='whoWeHelpWrapper' id='whoWeHelp'>
                    <div className='decoration'>
                        <h1>Komu pomagamy?</h1>
                        <img src={ Decoration } alt="motyw dekoracyjny"/>
                    </div>
                    <div className='buttonsContainer'>
                        {whoWeHelpData.map((e, index)=>(
                            <button key={e.id} index={index} name={e.type} onClick={this.handleClick}> {e.type} </button>
                        ))}
                    </div>
                    <h3>{whoWeHelpData.find(e=>e.type === this.state.whoWeHelpId).description}</h3>
                    
                    <div className='listAndPagination'>
                        <ul>
                            { showUpList }
                            
                        </ul>
                        <div className='pagination'>
                            { pageNumbers.length > 1 && renderPageNumbers }
                        </div>
                    </div>
                </div>
            ) 
        }
        
    }
}

export default WhoWeHelp;