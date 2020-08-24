import React from 'react';
import Card from './Card';


function List(props){
    return(
        <div className='List'>
            <header>{props.header}</header>
            <div className='List-cards'>{props.cards}</div>
        </div>
    )
}

ReactDOM.render('<Card></Card>', document.getElementById())
