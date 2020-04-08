import React, { Component } from 'react';
import Decoration from '../../../assets/Decoration.svg';


const foundationDesc = "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują."
const organizationDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
const localDesc = "Doggo ipsum woofer porgo shooberino heckin angery woofer, the neighborhood pupper heckin. H*ck corgo heck very good spot heck, blop stop it fren bork. fren doing me a frighten."

const foundations = [
    {
        id: 1,
        name: `Fundacja "Dbam o zdrowie"`,
        goal: `Cel i misja: pomoc osobom znajdującym się w trudnej sytuacji życiowej`,
        stuff: `ubrania, jedzenie, sprzęt AGD, meble, zabawki`,
    },
    {
        id: 2,
        name: `Fundacja "Dla dzieci"`,
        goal: `Cel i misja: pomoc dzieciom z ubogich rodzin`,
        stuff: `ubrania, meble, zabawki`,
    },
    {
        id: 3,
        name: `Fundacja "Bez domu"`,
        goal: `Cel i misja: pomoc dla osób nie posiadających miejsca zamieszkania`,
        stuff: `ubrania, jedzenie, ciepłe koce`
    },
    {
        id: 4,
        name: `Fundacja "Dbam o zdrowie 2"`,
        goal: `Cel i misja: pomoc osobom znajdującym się w trudnej sytuacji życiowej 2`,
        stuff: `ubrania, jedzenie, sprzęt AGD, meble, zabawki 2`,
    },
    {
        id: 5,
        name: `Fundacja "Dla dzieci 2"`,
        goal: `Cel i misja: pomoc dzieciom z ubogich rodzin 2`,
        stuff: `ubrania, meble, zabawki 2`,
    },
    {
        id: 6,
        name: `Fundacja "Bez domu 2"`,
        goal: `Cel i misja: pomoc dla osób nie posiadających miejsca zamieszkania 2`,
        stuff: `ubrania, jedzenie, ciepłe koce 2`
    },
    {
        id: 7,
        name: `Fundacja "Dbam o zdrowie 3"`,
        goal: `Cel i misja: pomoc osobom znajdującym się w trudnej sytuacji życiowej 3`,
        stuff: `ubrania, jedzenie, sprzęt AGD, meble, zabawki 3`,
    },
    {
        id: 8,
        name: `Fundacja "Dla dzieci 3"`,
        goal: `Cel i misja: pomoc dzieciom z ubogich rodzin 3`,
        stuff: `ubrania, meble, zabawki 3`,
    },
    {
        id: 9,
        name: `Fundacja "Bez domu 3"`,
        goal: `Cel i misja: pomoc dla osób nie posiadających miejsca zamieszkania 3`,
        stuff: `ubrania, jedzenie, ciepłe koce 3`,
    },
];

const organizations = [
    {
        id: 1,
        name: `Organizacja "Lorem ipsum 1"`,
        goal: ` Nulla ligula magna, fringilla et eleifend in, rhoncus sed libero.`,
        stuff: `super, extra, sprzęt`,
    },
    {
        id: 2,
        name: `Organizacja "Lorem ipsum 2"`,
        goal: ` Nulla ligula magna, fringilla et eleifend in, rhoncus sed libero.`,
        stuff: `super, meble, zabawki`,
    },
    {
        id: 3,
        name: `Organizacja "Lorem ipsum 3"`,
        goal: ` Nulla ligula magna, fringilla et eleifend in, rhoncus sed libero.`,
        stuff: `super, extra, ciepłe koce`
    },
    {
        id: 4,
        name: `Organizacja "Lorem ipsum 4"`,
        goal: ` Nulla ligula magna, fringilla et eleifend in, rhoncus sed libero.`,
        stuff: `super, extra, sprzęt, zabawki`,
    },
    {
        id: 5,
        name: `Organizacja "Lorem ipsum 5"`,
        goal: ` Nulla ligula magna, fringilla et eleifend in, rhoncus sed libero.`,
        stuff: `super, meble, zabawki`,
    },
    {
        id: 6,
        name: `Organizacja "Lorem ipsum 6"`,
        goal: ` Nulla ligula magna, fringilla et eleifend in, rhoncus sed libero.`,
        stuff: `super, extra, ciepłe koce`,
    },
];

const locals = [
    {
        id: 1,
        name: `Zbiórka "Lorem ipsum 11"`,
        goal: ` Nulla ligula magna, fringilla et eleifend in, rhoncus sed libero.`,
        stuff: `super, extra, sprzęt, zabawki`,
    },
    {
        id: 2,
        name: `Zbiórka "Lorem ipsum 22"`,
        goal: ` Nulla ligula magna, fringilla et eleifend in, rhoncus sed libero.`,
        stuff: `super, meble, zabawki`,
    },
    {
        id: 3,
        name: `Zbiórka "Lorem ipsum 33"`,
        goal: ` Nulla ligula magna, fringilla et eleifend in, rhoncus sed libero.`,
        stuff: `super, extra, ciepłe koce`,
    },
];

// const elementsPerPage = 3;

class WhoWeHelp extends Component {
    constructor(props){
        super(props);
        this.state = {
            description: foundationDesc,
            pageItems: foundations,
            page: 3,
            elementsPerPage: 3
        }
    }
    // componentDidMount(){
    //     if (this.state.description === foundationDesc) {
    //         this.setState({pageItems: foundations})
    //     }
    // }
    // componentDidUpdate(){
    //     if (this.state.description === foundationDesc) {
    //         this.setState({pageItems: foundations})
    //     } else if (this.state.description === organizationDesc) {
    //         this.setState({pageItems: organizations})
    //     } else if (this.state.description === localDesc) {
    //         this.setState({pageItems: locals})
    //     }
    // }
    handleClick = (e,i) => { 
        this.setState({
            description: e.target.desc,
            pageItems: e.target.page_list,
            page: Number(e.target.id)
        })
    };

    render(){
        const { pageItems, page, elementsPerPage } = this.state;

        // Logic for displaying current page items
        const indexOfLastTodo = page * elementsPerPage;
        const indexOfFirstTodo = indexOfLastTodo - elementsPerPage;
        const currentPageItems = pageItems.slice(indexOfFirstTodo, indexOfLastTodo);
        console.log(pageItems)
        const renderPageItems = currentPageItems.map((element, index) => {
            return (
                     <li key={ index }>
                         <span className='leftSpan'>
                             <h3>{ element.name }</h3>
                             <p>{ element.goal }</p>
                         </span>
                         <span className='rightSpan'>
                             <p>{ element.stuff }</p>
                         </span>
                     </li>
                 );
          });

         // Logic for displaying page numbers
         const pageNumbers = [];
         for (let i = 1; i <= Math.ceil(pageItems.length / elementsPerPage); i++) {
           pageNumbers.push(i);
         }
 
         const renderPageNumbers = pageNumbers.map(number => {
           return (
             <li
               key={number}
               id={number}
               onClick={e=>this.handleClick(e,number)}
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
                    <button desc={ foundationDesc } page_list={ foundations } onClick={(e,id)=>this.handleClick(e, id)}>Fundacjom</button>
                    <button desc={ organizationDesc } page_list={ organizations } onClick={(e,id)=>this.handleClick(e, id)}>Organizacjom pozarządowym</button>
                    <button desc={ localDesc } page_list={ locals } onClick={(e,id)=>this.handleClick(e, id)}>Lokalnym zbiórkom</button>
                </div>
                <h3>
                    { this.state.description }
                </h3>
                <div className='listAndPagination'>
                    <ul>
                    {renderPageItems}
                        {/* <li>
                            <span className='leftSpan'>
                                <h3>Zbiórka “Lorem Ipsum 1”</h3>
                                <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                            </span>
                            <span className='rightSpan'>
                                <p>Egestas, sed, tempus</p>
                            </span>
                        </li>
                        <li>
                            <span className='leftSpan'>
                                <h3>Zbiórka “Lorem Ipsum 2”</h3>
                                <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                            </span>
                            <span className='rightSpan'>
                                <p>Ut, aliquam, purus, sit, amet</p>
                            </span>
                        </li>
                        <li>
                            <span className='leftSpan'>
                                <h3>Zbiórka “Lorem Ipsum 3”</h3>
                                <p>Scelerisque in dictum non consectetur a erat nam.</p>
                            </span>
                            <span className='rightSpan'>
                                <p>Mi, quis, hendrerit, dolor</p>
                            </span>
                        </li> */}
                    </ul>
                    <div className='pagination'>
                        { renderPageNumbers }
                    </div>
                </div>
            </div>
        )
    }
}

export default WhoWeHelp;