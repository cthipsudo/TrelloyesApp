import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { renderIntoDocument } from 'react-dom/test-utils';
import List from './List';


function App(props) {
  //console.log(props);
  const cardLists = props.storeLists.map(list => {
    return <List cards={props.storeCards} 
    key={list.id} 
    allCardsId={list.cardIds} 
    header={list.header}></List>
  });

  return (
    //Code here
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {cardLists}
      </div>
    </main>
  );
}

//ReactDOM.render(<App store={STORE} />,document.getElementById('root'))

export default App;
