import React from 'react';
import './App.css';
import Top from "./components/TopHome"
import CardSerie from "./components/card/card"
import Carrossel from "./components/carrossel/carrossel"
import Test from "./components/carrossel/test"

function App() {
  return (
    <div className="App">
      <Top />
      <h1 id="h1">+ Acessados</h1>
      <div className="content">
      	<CardSerie />
      	<CardSerie />
      	<CardSerie />
      	<CardSerie />
      </div>
      <h1 id="h1">+ Notícias</h1>
      <Carrossel />
      <p>more</p>
    </div>
  );
}


export default App;
