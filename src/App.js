import './App.css';
import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import MovieCaharacters from './MovieCharacter';
import MoneyHeist from './MoneyHeist';
import BreakingBad from './BreakingBad';
import history from './history'
function App() {
  return (<>
  <div className="App">
      <header className="App-header">
  <Router history={history}>
    <Switch>
      <Route exact path='/'><MovieCaharacters/></Route>
      <Route path='/money-heist'><MoneyHeist/></Route>
      <Route path='/breaking-bad'><BreakingBad/></Route>
    </Switch>
  </Router>
  </header>
  </div>
  </>
  );
}

export default App;
