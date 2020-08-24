import React from 'react';
import './List.css';
import Card from './Card';
import ReactDOM from 'react-dom';


function List(props){
    //This is the header and content for the card
    //console.log(props);

    const cardContent = props.allCardsId.map(Letter => {
        //console.log('HERE',props);
    const CurrCard = props.cards[Letter];
    console.log('THISSS', CurrCard);
    return <Card key={CurrCard.id} 
    title={CurrCard.title} 
    content={CurrCard.content}/>
    });

    return(
        <div className='List'>
            <header>{props.header}</header>
            <div className='List-cards'>
                {cardContent}
            </div>
        </div>
    )
}

//ReactDOM.render(<List></List>, document.querySelector(".App-list"))

export default List;