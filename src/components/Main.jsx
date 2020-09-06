import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import LandingPage from './LandingPage';

function Main({
  projects,
  name,
  profession,
  bio,
  certificates,
  experience,
  skills,
}) {
  return (
    <Switch>
      <Route exact path='/about'>
        <About
          certificates={certificates}
          experience={experience}
          skills={skills}
        />
      </Route>
      <Route exact path='/'>
        <LandingPage
          projects={projects}
          name={name}
          profession={profession}
          bio={bio}
        />
      </Route>
    </Switch>
  );
}

Main.propTypes = {
  projects: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  certificates: PropTypes.array.isRequired,
  experience: PropTypes.array.isRequired,
  skills: PropTypes.array.isRequired,
};

export default Main;
