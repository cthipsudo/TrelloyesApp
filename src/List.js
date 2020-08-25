import React from 'react';
import './List.css';
import Card from './Card';
import ReactDOM from 'react-dom';


function List(props) {
    //This is the header and content for the card
    //console.log(props);

    const cardContent = props.allCardsId.map(Letter => {
        //console.log('HERE',props);
        const CurrCard = props.cards[Letter];
        //console.log('THISSS', CurrCard);
        return <Card key={CurrCard.id}
            title={CurrCard.title}
            content={CurrCard.content} />
    });

    return (
        <section className='List'>
            <header className="List-header"><h2>{props.header}</h2></header>
            <div className='List-cards'>
                {cardContent}
                <button type="button" class="List-add-button">
                    + Add Random Card
                </button>
            </div>
        </section>
    )
}

//ReactDOM.render(<List></List>, document.querySelector(".App-list"))

export default List;