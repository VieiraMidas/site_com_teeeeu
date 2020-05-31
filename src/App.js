import React from 'react';
import './App.css';
import Top from "./components/TopHome"
import CardSerie from "./components/card/card"

function App() {
  return (
    <div className="App">
      <Top />
      <div className="content">
      	<CardSerie />
      	<CardSerie />
      	<CardSerie />
      	<CardSerie />
      </div>
    </div>
  );
}


export default App;
