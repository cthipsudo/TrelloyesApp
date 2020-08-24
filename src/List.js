import React from 'react';
import Card from './Card';
import ReactDOM from 'react-dom';
//const cards = 

function List(props){
    //This is the header and content for the card
    console.log(props);
    return(
        <div className='List'>
            <header>{props.header}</header>
            <div className='List-cards'>
                {/* {<Card 
                key='card.id' 
                title='card.title'
                content='card.content'>
                </Card>} */}

                
            </div>
        </div>
    )
}

//ReactDOM.render(<List></List>, document.querySelector(".App-list"))

export default List;