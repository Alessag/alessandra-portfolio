import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import LandingPage from './LandingPage';
import Footer from './Footer';

function Main(props) {
  const { projects, certificates, skills } = props;
  return (
    <Switch>
      <Route exact path='/about'>
        <About certificates={certificates} skills={skills} />
      </Route>
      <Route exact path='/contact' component={Footer} />
      <Route exact path='/'>
        <LandingPage projects={projects} />
      </Route>
    </Switch>
  );
}

Main.propTypes = {
  projects: PropTypes.array.isRequired,
  certificates: PropTypes.array.isRequired,
  skills: PropTypes.array.isRequired,
};

export default Main;
