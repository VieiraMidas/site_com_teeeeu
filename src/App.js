import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';

import Novidades from "./pages/novidades/novidades"
import Letra from "./pages/letra/letra"
import Busca from "./pages/busca/busca"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Novidades} />
          <Route path="/novidades" component={Novidades} />
          <Route path="/busca" component={Busca} />
          <Route path="/letra" component={Letra} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
