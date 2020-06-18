import React from 'react';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom'
import './App.css';

import Novidades from "./pages/novidades/novidades"
import Letra from "./pages/letra/letra"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/novidades" className="nav-link">Novidades</NavLink>
        <NavLink to="/letra" className="nav-link">Letra</NavLink>
        <Switch>
          <Route exact path="/" component={Novidades} />
          <Route path="/novidades" component={Novidades} />
          <Route path="/letra" component={Letra} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
