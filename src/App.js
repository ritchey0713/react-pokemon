import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './containers/LandingPage'
import AllHeroes from './containers/AllHeroes'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={LandingPage} />
          <Route exact path = '/heroes' component={AllHeroes} />
        </div>
      </Router>
    );
  }
}

export default App;
