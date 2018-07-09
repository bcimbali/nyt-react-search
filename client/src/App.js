import React, { Component } from 'react';
import NoMatch from './Pages/NoMatch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';

const App = () => (
  <Router className="container">
    <div className="d-flex justify-content-center row">
      <Header></Header>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
