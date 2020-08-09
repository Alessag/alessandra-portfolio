import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import LandingPage from './LandingPage';
import Footer from './Footer';

function Main() {
  return (
    <Switch>
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Footer} />
      <Route exact path='/' component={LandingPage} />
    </Switch>
  );
}

export default Main;
