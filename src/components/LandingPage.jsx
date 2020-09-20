import React from 'react';
import PropTypes from 'prop-types';
import Info from './Info';
import Projects from './Projects';
import '../assets/styles/components/LandingPage.scss';
import Contact from './Contact';

function LandingPage({ projects, name, profession, bio }) {
  return (
    <div className='home-page'>
      <Info name={name} profession={profession} bio={bio} />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}

LandingPage.propTypes = {
  projects: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default LandingPage;
